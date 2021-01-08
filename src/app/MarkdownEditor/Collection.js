import { Link } from '@reach/router'
import React from 'react'
import { FormattedDate } from 'react-intl'
import { useQuery } from 'react-query'
import http from 'src/utils/http'

export default function Collection() {
  const { data, isFetched, isError } = useQuery('my_markdown', () =>
    http.get('/markdown')
  )

  return (
    <>
      {isFetched && !isError && (
        <ul>
          {data.data.map(i => (
            <li>
              <Link to={`/app/markdown/${i.id}`}>{i.id}</Link>
              <FormattedDate value={i.createdAt}></FormattedDate>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
