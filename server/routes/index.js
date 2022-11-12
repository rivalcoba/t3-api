import userRoute from '../api/v1/users/user.routes'
import postRoute from '../api/v1/posts/post.routes'
import configKeys from '../config/keys'
const root = `/api/${configKeys.apiVersion}`

export default (app) => {
  // Mounting Routes
  app.use(`${root}/user`, userRoute)
  app.use(`${root}/post`, postRoute)
  // Returning app
  return app
}
