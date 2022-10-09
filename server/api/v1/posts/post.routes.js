// Importando el objeto enrutador
import { Router } from 'express'
// Importando el controlador User
import * as postController from './post.controller'
// Importando middleware de validacion
import { authJwt } from '../../../services/auth.services'

const router = new Router()

// GET /api/v1/post
router.post('/', authJwt, postController.createPost)

export default router
