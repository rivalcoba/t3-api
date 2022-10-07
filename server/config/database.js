// 1 Importando el ODM
import mongoose from 'mongoose'
// 2 Importando llaves
import configKeys from './keys'

// Intentando la conexion
(async () => {
  // Agregar el sistema de promesas de ES6
  mongoose.Promise = global.Promise
  try {
    const connection = await mongoose.connect(configKeys.mongoUrl)
    if (connection) console.log('> 🎉 🛢 Conexion exitosa')
  } catch (error) {
    console.log(`🥀 No se pudo realizar la conexion debido a: ${error.message}`)
  }
  mongoose.connection.once('open', () => console.log('MongoDB Running')).on('error', e => {
    throw e
  })
})()
