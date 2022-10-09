import HttpStatus from 'http-status'
import User from './user.model'

// Exportando Action Method de registro o signUp
export async function signUp (req, res) {
  try {
    const user = await User.create(req.body)
    return res.status(HttpStatus.CREATED).json(user)
  } catch (e) {
    return res.status(HttpStatus.BAD_REQUEST).json(e)
  }
}

// Action Method para el login
export function login (req, res, next) {
  res.status(HttpStatus.OK).json(req.user)
  // return next()
}

export async function getUser (req, res) {
  const user = await User.findOne({ message: 'Private Route', email: 'ivan.rivalcoba@gmail.com' })
  res.status(HttpStatus.OK).json(user)
}
