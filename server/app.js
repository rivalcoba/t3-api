import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import configKeys from './config/keys'
import addApiRoutes from './api/v1'
const { ValidationError } = require('express-validation')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(logger('dev'))
if (configKeys.env === 'production') app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Agregando Rutas de API
addApiRoutes(app)

// Bienevida a la api
app.get('*', (req, res) => {
  res.json({
    message: '🦄🌈✨ Welcomento T3-API ✨🌈🦄'
  })
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // Verificando errores de validacion
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})
export default app
