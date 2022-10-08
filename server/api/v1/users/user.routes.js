import { Router } from 'express'
const router = new Router()

// Agregando Rutas
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hi users' })
})
export default router
