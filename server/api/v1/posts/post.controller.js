import HttpStatus from 'http-status'
import Post from './post.model'

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
  try {
    const posts = await Post.find().populate('user')
    return res.status(HttpStatus.OK).json(posts)
  } catch (error) {
    return res.status(HttpStatus.BAD_REQUEST).json(error)
  }
}
