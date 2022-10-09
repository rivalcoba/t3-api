import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import User from '../api/v1/users/user.model'
import debug from '../services/logger'

// Objeto de opciones para la estrategia
const options = {
  usernameField: 'email'
}
// creando estrategia
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

// Registrando la estrategia
passport.use(localStrategy)

// Exportando middleware de autenticacion sin mantener las sesiones
export const authLocal = passport.authenticate('local', { session: false })
