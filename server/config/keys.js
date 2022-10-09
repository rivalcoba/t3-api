import dotenv from 'dotenv'

// Cargando las variables de entorno
dotenv.config()

// Constantes
const devConfig = {
  env: 'development',
  mongoUrl: process.env.MONGO_URL_DEV
}
const prodConfig = {
  env: 'production',
  mongoUrl: process.env.MONGO_URL_PROD
}
const defaultConfig = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET
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
