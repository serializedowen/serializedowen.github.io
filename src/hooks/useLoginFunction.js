import { useLocation, navigate } from '@reach/router'
import getLoginUrl from 'src/utils/getLoginUrl'
import { get } from 'lodash'

const useLoginFunction = provider => {
  const { state, href } = useLocation()

  return params => {
    window.location = getLoginUrl(provider, {
      redirect: get(state, 'href') || href,
      ...params
    })
  }
}
export default useLoginFunction
