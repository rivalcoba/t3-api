// Importando el objeto enrutador
import { Router } from 'express'
// Importando el controlador User
import * as postController from './post.controller'
// Importando middleware de validacion
import { authJwt } from '../../../services/auth.services'
// Validador
import postValidation from './post.validations'
// Importando validate para validación
import { validate } from 'express-validation'

const router = new Router()

// POST /api/v1/post
router.post('/', authJwt, validate(postValidation.createPost), postController.createPost)

// GET /api/v1/post/<id>
router.get('/:id', postController.getPostById)
// GET /api/v1/post/<id>
router.get('/', postController.getPostsList)

export default router
