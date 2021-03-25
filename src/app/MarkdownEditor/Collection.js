import { Button } from '@material-ui/core'
import { Link, navigate } from '@reach/router'
import React, { useCallback } from 'react'
import { FormattedDate } from 'react-intl'
import { useQuery } from 'react-query'
import http from 'src/utils/http'

export default function Collection() {
  const { data, isFetched, isError } = useQuery('my_markdown', () =>
    http.get('/markdown')
  )

  const addNew = useCallback(() => {
    navigate('/app/markdown/draft')
  }, [])

  return (
    <>
      <Button variant="outlined" color="primary" onClick={addNew}>
        写一篇~
      </Button>
      {isFetched && !isError && (
        <ul>
          {data.data.map(i => (
            <li>
              <Link to={`/app/markdown/${i.id}`}>{i.title || i.id}</Link>
              <FormattedDate value={i.createdAt}></FormattedDate>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
