import React from 'react'
import MarkdownIt from 'markdown-it'
import { useParams } from '@reach/router'
import http from 'src/utils/http'
import { useQuery } from 'react-query'

const mdParser = new MarkdownIt(/* Markdown-it options */)

export default function View() {
  const { id } = useParams()
  const { data, isLoading, error } = useQuery(`MD_${id}`, () =>
    http.get(`/markdown/${id}`)
  )

  return (
    !isLoading &&
    !error && (
      <article
        dangerouslySetInnerHTML={{ __html: mdParser.render(data.data.content) }}
      ></article>
    )
  )
}
