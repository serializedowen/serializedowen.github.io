import React, { useRef, useState, useEffect } from 'react'
import { debounce } from 'lodash'
import CircularProgress from '@material-ui/core/CircularProgress'

function isElementInViewport(ref) {
  if (!ref.current) return false

  const el = ref.current
  var rect = el.getBoundingClientRect()

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  )
}

export default function LoadMore({ hasMore, loader }) {
  const ref = useRef(null)
  const [loading, setloading] = useState(false)

  useEffect(() => {
    const handler = debounce(() => {
      if (hasMore) {
        if (isElementInViewport(ref)) {
          setloading(true)

          setTimeout(() => {
            setloading(false)
            loader()
          }, 1000)
        }
      }
    }, 200)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [hasMore])

  return (
    <div style={{ textAlign: 'center' }} ref={ref}>
      {loading && <CircularProgress></CircularProgress>}
    </div>
  )
}
