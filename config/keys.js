import dotenv from 'dotenv'

// Cargando las variables de entorno
dotenv.config()

export default {
  port: process.env.PORT
}
