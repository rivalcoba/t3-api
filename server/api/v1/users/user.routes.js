// Importando el objeto enrutador
import { Router } from 'express'
// Importando el controlador User
import * as userController from './user.controller'
// Importando validaciones de usuarios
import userValidation from './user.validations'
// Importando validate para validación
import { validate } from 'express-validation'
// Importando configuracion de validacion
import { authLocal } from '../../../services/auth.services'

// Instanciando el router
const router = new Router()

// Agregando Rutas
// GET /api/v1/user
router.get('/', (req, res) => {
  res.status(200).json({ message: '👋 Hi from user route' })
})
// POST /api/v1/user/signup
router.post('/signup', validate(userValidation.signup, {}, {}), userController.signUp)

// POST /api/v1/user/login
router.post('/login', authLocal, userController.login)

// GET /api/v1/user/getuser
router.get('/getuser', userController.getUser)

export default router
