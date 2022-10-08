import Joi from 'joi'
// Reglas del password en Regex
export const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
// Exportando reglas de validacion
export default {
  signup: {
    email: Joi.string().email().required(),
    password: Joi.string().regex(passwordReg).required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    userName: Joi.string().required()
  }
}
