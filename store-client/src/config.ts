const isDev = process.env.NODE_ENV || process.env.NODE_ENV === 'development'

const config = {
  isDev,
  remoteRepositoryUrlPrefix: isDev ? 'http://localhost:8000/api/category' : '/api'
}

export default config