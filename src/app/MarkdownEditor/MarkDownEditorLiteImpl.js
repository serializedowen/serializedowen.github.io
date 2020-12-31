import React, { useEffect, useState, useRef } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import { FormattedMessage } from 'react-intl'
import 'react-markdown-editor-lite/lib/index.css'
import http from 'src/utils/http'

import { Subject, timer } from 'rxjs'
import { switchMap, throttleTime, tap, map, debounceTime } from 'rxjs/operators'
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
  const [draft, setdraft] = useState(localStorage.getItem('md-draft') || '')

  const ref = useRef(null)
  useEffect(() => {
    const subscription = subject
      .pipe(
        tap(() => setsaveState(saveStates.waiting)),
        debounceTime(500),
        map(() => ref.current && ref.current.getMdValue()),
        switchMap(html => {
          localStorage.setItem('md-draft', html)

          return timer(1000).pipe(tap(() => console.log(html)))
        }),
        tap(() => setsaveState(saveStates.saved))
      )
      .subscribe(() => {})
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <>
      <FormattedMessage id={saveState}></FormattedMessage>

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
