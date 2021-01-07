import { Link } from '@reach/router'
import React from 'react'
import { useQuery } from 'react-query'
import http from 'src/utils/http'

export default function Collection() {
  const { data, isFetched } = useQuery('my_markdown', () =>
    http.get('/markdown')
  )

  return (
    <>
      {isFetched && (
        <ul>
          {data.data.map(i => (
            <>
              <Link to={`/app/markdown/${i.id}`}>To</Link>
              <li>{i.createdAt}</li>
            </>
          ))}
        </ul>
      )}
    </>
  )
}
