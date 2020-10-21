import axios from 'axios'
import { get } from 'lodash'
const isProd = process.env.NODE_ENV === 'production'

const instance = axios.create({
  baseURL: isProd ? 'https://serializedowen.com/api/gateway' : '/api/gateway'
})

instance.interceptors.response.use(
  response => response,
  error => {
    if (get(error, 'reponse.data.code') === 401) {
      window.__401auth()
    }
    return error
  }
)

export default instance
