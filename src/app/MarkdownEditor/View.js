import React, { useCallback } from 'react'
import MarkdownIt from 'markdown-it'
import { useParams } from '@reach/router'
import http from 'src/utils/http'
import { useQuery } from 'react-query'
import { IconButton } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import { navigate } from 'gatsby'
import { highlight, languages } from 'prismjs'
import 'src/themes/juejin.markdown.css'

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

export default function View() {
  const { id } = useParams()
  const { data, isLoading, error } = useQuery(`MD_${id}`, () =>
    http.get(`/markdown/${id}`)
  )

  const navigateToEdit = useCallback(
    () => navigate(`/app/markdown/${id}/edit`),
    [id]
  )

  return (
    <>
      {
        <IconButton color="default" onClick={navigateToEdit}>
          <Edit color="action"></Edit>
        </IconButton>
      }
      {!isLoading && !error && (
        <article
          id="markdown"
          dangerouslySetInnerHTML={{
            __html: mdParser.render(data.data.content)
          }}
        ></article>
      )}
    </>
  )
}
