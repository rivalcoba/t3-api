import HttpStatus from 'http-status'
import Post from './post.model'
import debug from '../../../services/logger'

// [C] Crear un Post
export async function createPost (req, res) {
  try {
    const post = await Post.createPost(req.body, req.user._id)
    return res.status(HttpStatus.CREATED).json(post)
  } catch (error) {
    return res.status(HttpStatus.BAD_REQUEST).json(error)
  }
}

// [R] Obtener un post por su id
export async function getPostById (req, res) {
  try {
    const post = await Post.findById(req.params.id).populate('user')
    return res.status(HttpStatus.OK).json(post)
  } catch (error) {
    return res.status(HttpStatus.BAD_REQUEST).json(error)
  }
}

// [R] Obtener todos los post
export async function getPostsList (req, res) {
  const limit = parseInt(req.query.limit, 0)
  const skip = parseInt(req.query.skip, 0)
  try {
    const posts = await Post.list({ limit, skip })
    return res.status(HttpStatus.OK).json(posts)
  } catch (error) {
    return res.status(HttpStatus.BAD_REQUEST).json(error)
  }
}

// [U] Actualizar un Post
export async function updatePost (req, res) {
  try {
    const post = await Post.findById(req.params.id)
    if (!post.user.equals(req.user._id)) {
      debug('🎆 Sin autorización')
      return res.sendStatus(HttpStatus.UNAUTHORIZED)
    }

    Object.keys(req.body).forEach(key => {
      post[key] = req.body[key]
    })

    return res.status(HttpStatus.OK).json(await post.save())
  } catch (error) {
    return res.status(HttpStatus.BAD_REQUEST).json(error)
  }
}

// [D] Borrar un Post
export async function deletePost (req, res) {
  try {
    const post = await Post.findById(req.params.id)

    if (!post.user.equals(req.user._id)) {
      return res.sendStatus(HttpStatus.UNAUTHORIZED)
    }

    await post.remove()
    return res.sendStatus(HttpStatus.OK)
  } catch (error) {
    return res.status(HttpStatus.BAD_REQUEST).json(error)
  }
}
