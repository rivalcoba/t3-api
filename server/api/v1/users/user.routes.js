// Importando el objeto enrutador
import { Router } from 'express'
// Importando el controlador User
import * as userController from './user.controller'

// Instanciando el router
const router = new Router()

// Agregando Rutas
// GET /api/v1/user
router.get('/', (req, res) => {
  res.status(200).json({ message: '👋 Hi from user route' })
})
// GET /api/v1/user/signup
router.get('/signup', userController.signUp)

export default router
