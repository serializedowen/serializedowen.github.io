import axios from 'axios'

const isProd = process.env.NODE_ENV === 'production'

export default axios.create({
  baseURL: isProd ? '/api/gateway' : '/api/gateway'
})
