import User from './user.model'

// Exportando función de registro o signUp
export async function signUp (req, res) {
  try {
    const user = await User.create(req.body)
    return res.status(201).json(user)
  } catch (e) {
    return res.status(500).json(e)
  }
}
