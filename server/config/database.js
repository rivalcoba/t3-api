// 1 Importando el ODM
import mongoose from 'mongoose'
// 2 Importando llaves
import configKeys from './keys'
// 3 Imporntado logger
import debug from '../services/logger'

// Intentando la conexion
(async () => {
  // Agregar el sistema de promesas de ES6
  mongoose.Promise = global.Promise
  try {
    const connection = await mongoose.connect(configKeys.mongoUrl)
    if (connection) debug('🎉 Conexion exitosa a la BD 🛢')
  } catch (error) {
    debug(`🥀 No se pudo realizar la conexion debido a: ${error.message}`)
  }
})()
