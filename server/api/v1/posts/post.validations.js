import { Joi } from 'express-validation'

export default {
  createPost: {
    body: Joi.object({
      title: Joi.string().min(3).required(),
      text: Joi.string().min(10).required()
    })
  }
}
