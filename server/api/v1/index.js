import userRoute from './users/user.routes'

export default (app) => {
  // Mounting Routes
  app.use('/user', userRoute)
  return app
}
