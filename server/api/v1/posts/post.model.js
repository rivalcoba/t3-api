import mongoose, { Schema } from 'mongoose'
import slug from 'slug'
import uniqueValidator from 'mongoose-unique-validator'

const PostSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Title   is required!'],
    minlength: [3, 'Title   need to be longer!'],
    unique: true
  },
  text: {
    type: String,
    trim: true,
    required: [true, 'Text   is required!'],
    minlength: [10, 'Text   need to be longer!']
  },
  slug: {
    type: String,
    trim: true,
    lowercase: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  favoriteCount: {
    type: Number,
    default: 0
  }
}, { timestamps: true })

PostSchema.plugin(uniqueValidator, {
  message: '{VALUE} already taken!'
})

// Antes de la validación se slugifica el titulo
PostSchema.pre('validate', function (next) {
  this.slugify()
  next()
})

// Metodo para slugificar
PostSchema.methods = {
  slugify () {
    this.slug = slug(this.title)
  }
}

// Los estaticos aplican a toda la coleccion
PostSchema.statics = {
  createPost (args, user) {
    return this.create({
      ...args,
      user
    })
  }
}

export default mongoose.model('Post', PostSchema)