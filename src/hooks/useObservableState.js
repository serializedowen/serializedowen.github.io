import { useState, useRef } from 'react'
import { Subject } from 'rxjs'

function useObservableState(defaultValue) {
  const { current } = useRef(new Subject())
  const [state, setState] = useState(defaultValue)

  const setStateWithObservable = val => {
    current.next(val)
    setState(val)
  }

  return [state, setStateWithObservable, current]
}
export default useObservableState
