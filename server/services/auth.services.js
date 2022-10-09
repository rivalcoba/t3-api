import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'
import configKeys from '../config/keys'
import User from '../api/v1/users/user.model'
import debug from '../services/logger'

// Objeto de opciones para la estrategia local
const options = {
  usernameField: 'email'
}
// Creando estrategia Local
const localStrategy = new LocalStrategy(options, async (email, password, done) => {
  // Se usa el modelo de usuario para validar la existencia del usuario
  try {
    debug(`🧙‍♀️ Buscando usuario para autenticación ${email}`)
    const user = await User.findOne({ email })
    if (!user) {
      debug('🧙‍♀️ No encontro usuario')
      return done(null, false, { message: 'Usuario o password incorrecto' })
    }
    if (!user.authenticateUser(password)) {
      debug('🧙‍♀️ Password incorrecto')
      return done(null, false, { message: 'Usuario o password incorrecto' })
    }
    debug('✔ Pasa autenticación')
    // Regresando usuario
    return done(null, user)
  } catch (error) {
    return done(error, false, { message: 'Error en el proceso de autenticación' })
  }
})

// Objetos de opciones para la estrategia de JWT
const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('authorization'),
  secretOrKey: configKeys.jwtSecret
}

// Creamdp estartegia JWT
const jwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
  try {
    // Identificando usuario por su ID
    const user = await User.findById(payload._id)
    // Si no hay usuario
    if (!user) {
      return done(null, false, { message: 'Usuario no encontrado' })
    }
    // Si hay usuario retornalo
    done(null, user)
  } catch (error) {
    return done(error, false)
  }
})

// Registrando las estrategias
passport.use(localStrategy)
passport.use(jwtStrategy)

// Exportando middlewares de autenticacion sin mantener las sesiones
export const authLocal = passport.authenticate('local', { session: false })
export const authJwt = passport.authenticate('jwt', { session: false })
