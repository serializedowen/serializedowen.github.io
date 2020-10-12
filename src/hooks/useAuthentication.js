import { createContext, useContext } from 'react'

const AuthenticationContext = createContext()

export { AuthenticationContext }

export default function useAuthentication() {
  return useContext(AuthenticationContext)
}
