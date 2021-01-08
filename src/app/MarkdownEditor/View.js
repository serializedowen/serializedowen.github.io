import React, { useCallback } from 'react'
import MarkdownIt from 'markdown-it'
import { useParams } from '@reach/router'
import http from 'src/utils/http'
import { useQuery } from 'react-query'
import { IconButton } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import { navigateTo } from 'gatsby'

const mdParser = new MarkdownIt(/* Markdown-it options */)

export default function View() {
  const { id } = useParams()
  const { data, isLoading, error } = useQuery(`MD_${id}`, () =>
    http.get(`/markdown/${id}`)
  )

  const navigateToEdit = useCallback(
    () => navigateTo(`/app/markdown/${id}/edit`),
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
          dangerouslySetInnerHTML={{
            __html: mdParser.render(data.data.content)
          }}
        ></article>
      )}
    </>
  )
}
