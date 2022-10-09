import User from './user.model'

// Exportando Action Method de registro o signUp
export async function signUp (req, res) {
  try {
    const user = await User.create(req.body)
    return res.status(201).json(user)
  } catch (e) {
    return res.status(500).json(e)
  }
}

// Action Method para el login
export function login (req, res, next) {
  res.status(200).json(req.user)
  // res.status(200).json({ test: 'test' })
  // return next()
}

export async function getUser (req, res) {
  const user = await User.findOne({ email: 'ivan.rivalcoba@gmail.com' })
  res.status(200).json(user)
}
