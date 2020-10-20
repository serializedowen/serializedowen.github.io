import qs from 'qs'

export default function getLoginUrl(strategy, params) {
  const search = qs.stringify(params)
  return process.env.NODE_ENV === 'production'
    ? `https://gateway.serializedowen.com/auth/${strategy}?${search}`
    : `http://localhost:7001/auth/${strategy}?${search}`
}
