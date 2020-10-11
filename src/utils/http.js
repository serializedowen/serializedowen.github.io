import axios from 'axios'

const isProd = process.env.NODE_ENV === 'production'

export default axios.create({
  baseURL: isProd
    ? 'http://gateway.serializedowen.com'
    : 'http://localhost:7001'
})
