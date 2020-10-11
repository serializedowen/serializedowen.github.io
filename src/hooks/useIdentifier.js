import { useMemo } from 'react'
import md5 from 'blueimp-md5'
import { useLocation } from '@reach/router'

export default function useIdentifier() {
  const { pathname } = useLocation()
  return useMemo(() => md5(pathname), [pathname])
}
