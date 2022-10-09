import userRoute from './users/user.routes'
import postRoute from './posts/post.routes'

const root = '/api/v1'

export default (app) => {
  // Mounting Routes
  app.use(`${root}/user`, userRoute)
  app.use(`${root}/post`, postRoute)
  // Returning app
  return app
}
