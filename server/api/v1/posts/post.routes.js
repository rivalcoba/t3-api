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

// [C] POST /api/v1/post
router.post('/', authJwt, validate(postValidation.createPost), postController.createPost)

// [R] GET /api/v1/post/<id>
router.get('/:id', postController.getPostById)
// [R] GET /api/v1/post/
router.get('/', postController.getPostsList)

// [U] PATCH /api/v1/post/<id>
router.patch('/:id', authJwt, validate(postValidation.updatePost), postController.updatePost)

// [D] DELETE /api/v1/post/<id>
router.delete('/:id', authJwt, postController.deletePost)

export default router
