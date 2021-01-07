import React, { useEffect, useState, useRef } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import { FormattedMessage } from 'react-intl'
import 'react-markdown-editor-lite/lib/index.css'
import http from 'src/utils/http'
import { navigateTo } from 'gatsby'
import { from, of, pipe, Subject } from 'rxjs'

import {
  switchMap,
  tap,
  map,
  debounceTime,
  catchError,
  retry
} from 'rxjs/operators'
import { useLocation, useParams } from '@reach/router'
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
  Typography
} from '@material-ui/core'

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */)

const imageUploadHandler = file => {
  const formData = new FormData()
  formData.set('file', file)
  return http.post('/image/upload', formData).then(res => res.data)
}

const saveStates = {
  saving: 'saving',
  saved: 'saved',
  waiting: 'waiting'
}

export default function MarkDownEditorLiteImpl(props) {
  const [subject, setsubject] = useState(new Subject())
  const [saveState, setsaveState] = useState(saveStates.saved)

  const [visibility, setvisibility] = useState('private')

  const params = useParams()
  const isDraft = !params.id

  // const localStorageToken = `md-draft${params.id || ''}`
  const localStorageToken = `md-draft`
  const [draft, setdraft] = useState(
    localStorage.getItem(localStorageToken) || ''
  )

  const ref = useRef(null)
  useEffect(() => {
    const subscription = subject
      .pipe(
        tap(() => setsaveState(saveStates.waiting)),
        debounceTime(500),

        map(() => ref.current && ref.current.getMdValue()),
        switchMap(html => {
          localStorage.setItem(localStorageToken, html)

          // TODO: retry not working as intended
          const processPipe = pipe(
            retry(2),
            catchError(err => {
              console.log(err)
              return of(err)
            })
          )

          if (isDraft)
            return from(
              http.post('/markdown/add', { content: html, visibility })
            ).pipe(
              processPipe,
              tap(data => {
                navigateTo(`/app/markdown/${data.data}/edit`)
              })
            )
          return from(
            http.post(`/markdown/${params.id}`, { content: html, visibility })
          ).pipe(processPipe)
        }),

        tap(() => {
          setsaveState(saveStates.saved)
        })
      )
      .subscribe(() => {})
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          <FormattedMessage id="visibility"></FormattedMessage>
        </FormLabel>

        <RadioGroup
          row
          value={visibility}
          onChange={e => {
            setvisibility(e.target.value)
            subject.next('')
          }}
        >
          <FormControlLabel
            control={<Radio value="public"></Radio>}
            label={<FormattedMessage id="public"></FormattedMessage>}
          ></FormControlLabel>
          <FormControlLabel
            control={<Radio value="private"></Radio>}
            label={<FormattedMessage id="private"></FormattedMessage>}
          ></FormControlLabel>
        </RadioGroup>
      </FormControl>

      <Typography>
        <FormattedMessage id={saveState}></FormattedMessage>
      </Typography>
      <MdEditor
        ref={ref}
        defaultValue={draft}
        style={{ height: '500px' }}
        onImageUpload={imageUploadHandler}
        renderHTML={text => mdParser.render(text)}
        onChange={e => {
          subject.next(e)
        }}
      />
    </>
  )
}
