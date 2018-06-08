import md5 from 'md5'

export const getApiParams = () => {
  const ts = parseInt(Date.now() / 1000, 10)
  const hash = md5(ts + process.env.REACT_APP_API_PRIVATE + process.env.REACT_APP_API_PUBLIC)

  return {
    apikey: process.env.REACT_APP_API_PUBLIC,
    hash,
    ts,
  }
}
