import { useMemo } from 'react'
import md5 from 'blueimp-md5'
import { useLocation } from '@reach/router'

export default function useIdentifier() {
  const { pathname } = useLocation()

  const trimSlash = pathname.endsWith('/')
    ? pathname.substr(0, pathname.length - 1)
    : pathname

  return useMemo(() => md5(trimSlash), [trimSlash])
}
