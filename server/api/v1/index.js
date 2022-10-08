import userRoute from './users/user.routes'

export default (app) => {
  // Mounting Routes
  app.use('/api/v1/user', userRoute)
  return app
}
