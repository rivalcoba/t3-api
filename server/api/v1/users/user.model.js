import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcryptjs'
import validator from 'validator'

// Importando Regex del password
import { passwordReg } from './user.validations'
// Crando un squema
const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
    trim: true,
    validate: {
      validator (email) {
        return validator.isEmail(email)
      },
      message: '{VALUE} is not a valid email!'
    }
  },
  firstName: {
    type: String,
    required: [true, 'FirstName is required!'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'LastName is required!'],
    trim: true
  },
  userName: {
    type: String,
    required: [true, 'UserName is required!'],
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    trim: true,
    minlength: [6, 'Password need to be longer!'],
    // Estableciendo validador personalizado
    validate: {
      validator (password) {
        return passwordReg.test(password)
      },
      message: '{VALUE} is not a valid password!'
    }
  }
})

// MONGO DB HOOKS
// Creating a Pre
// ref: https://mongoosejs.com/docs/middleware.html#pre
UserSchema.pre('save', function (next) {
  // Verificando si se ha modificado el password
  if (this.isModified('password')) {
    // Encriptando el password
    this.password = this.hashPassword(this.password)
  }
  return next()
})

// Creando métodos para este esquema
UserSchema.methods = {
  hashPassword (password) {
    return bcrypt.hashSync(password)
  },
  authenticateUser (password) {
    return bcrypt.compareSync(password, this.password)
  }
}

// Compilado el esquema en un modelo y exportandolo por defect
export default mongoose.model('User', UserSchema)
