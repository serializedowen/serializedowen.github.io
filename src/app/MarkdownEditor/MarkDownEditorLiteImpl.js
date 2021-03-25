import React, { useEffect, useState } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import { FormattedMessage } from 'react-intl'
import 'react-markdown-editor-lite/lib/index.css'
import http from 'src/utils/http'
import { retryWithDelay, rxhttp } from 'src/utils/rxjs-utils'
import { navigate } from 'gatsby'
import { combineLatest, from, of, pipe, throwError } from 'rxjs'
import {
  switchMap,
  tap,
  debounceTime,
  catchError,
  retry,
  pluck
} from 'rxjs/operators'
import { useParams } from '@reach/router'
import useObservableState from 'src/hooks/useObservableState'
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
  Typography,
  TextField
} from '@material-ui/core'
import { highlight, languages } from 'prismjs'
import ActionDelete from 'src/components/ActionDelete'

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt({
  highlight(str, lang) {
    try {
      return (
        `<pre class="language-${lang}"><code>` +
        highlight(str, languages.js, lang) +
        '</code></pre>'
      )
    } catch (e) {}
  }
})

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
  const [saveState, setsaveState] = useState(saveStates.saved)

  const [visibility, setVisibility, visibility$] = useObservableState('private')

  const [title, setTitle, title$] = useObservableState('')

  const params = useParams()
  const isDraft = !params.id

  const localStorageToken = 'md-draft' + params.id || ''

  const [mdValue, setMdValue, md$] = useObservableState(
    localStorage.getItem(localStorageToken) || ''
  )

  useEffect(() => {
    const subscription = combineLatest(md$, visibility$, title$)
      .pipe(
        tap(() => setsaveState(saveStates.waiting)),
        debounceTime(500),
        // eslint-disable-next-line no-shadow
        switchMap(([content, visibility, title]) => {
          localStorage.setItem(localStorageToken, content)

          if (isDraft)
            return rxhttp(() =>
              http.post('/markdown/add', { content, visibility, title })
            ).pipe(
              retryWithDelay(200, 2),

              tap(data => {
                navigate(`/app/markdown/${data.data}/edit`, { replace: true })
              })
            )
          return rxhttp(() =>
            http.post(`/markdown/${params.id}`, { content, visibility, title })
          ).pipe(
            retryWithDelay(200, 2),
            catchError(err => {
              return of('errored')
            })
          )
        }),

        tap(() => {
          setsaveState(saveStates.saved)
        })
      )

      .subscribe(
        val => {
          console.log(val)
        },
        console.log,
        () => console.log('complete')
      )

    of(isDraft)
      .pipe(
        switchMap(flag =>
          flag
            ? of({ content: '', visibility: 'private' })
            : rxhttp(() => http.get(`/markdown/${params.id}`)).pipe(
                pluck(['data'])
              )
        ),
        retryWithDelay(200, 2),
        catchError(err => {
          navigate('/app/markdown/draft', { replace: true })
          return of(err)
        })
      )
      .subscribe(
        data => {
          setMdValue(data.content)
          setVisibility(data.visibility)
          setTitle(data.title)
        },
        err => {}
      )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <>
      <FormControl component="fieldset">
        <TextField
          id="outlined-basic"
          label={<FormattedMessage id="title"></FormattedMessage>}
          variant="filled"
          value={title}
          onChange={e => {
            setTitle(e.target.value)
          }}
        />
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          <FormattedMessage id="visibility"></FormattedMessage>
        </FormLabel>

        <RadioGroup
          row
          value={visibility}
          onChange={e => {
            setVisibility(e.target.value)
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

      <FormControl>
        <ActionDelete
          action={() =>
            http
              .delete(`/markdown/${params.id}`)
              .then(() => navigate('/app/markdown', { replace: true }))
          }
          prompt="确认删除这篇笔记吗？"
        ></ActionDelete>
      </FormControl>
      <Typography>
        <FormattedMessage id={saveState}></FormattedMessage>
      </Typography>
      <MdEditor
        value={mdValue}
        style={{ height: '500px' }}
        onImageUpload={imageUploadHandler}
        renderHTML={text => mdParser.render(text)}
        onChange={e => {
          setMdValue(e.text)
        }}
      />
    </>
  )
}
