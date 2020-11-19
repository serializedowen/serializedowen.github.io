import axios from 'axios'
import { get } from 'lodash'

const isProd = process.env.NODE_ENV === 'production'

const http = axios.create({
  baseURL: isProd ? 'https://serializedowen.com/api/gateway' : '/api/gateway'
})

http.interceptors.response.use(
  response => response,
  error => {
    if (get(error, 'response.status') === 401) {
      window.__401auth()
    }
    return error
  }
)

export default http
