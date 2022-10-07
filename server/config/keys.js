import dotenv from 'dotenv'

// Cargando las variables de entorno
dotenv.config()

// Constantes
const devConfig = {
  env: 'development'
}
const prodConfig = {
  env: 'production'
}
const defaultConfig = {
  port: process.env.PORT || 3000
}

function envConfig (env) {
  switch (env) {
    case 'development':
      return devConfig
    case 'production':
      return prodConfig
    default:
      return prodConfig
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV)
}
