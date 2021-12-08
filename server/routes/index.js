module.exports = (app) => {
  app.use('/api', require('./auth.routes'))
  app.use('/activities', require('./activities.routes'))
  app.use('/users', require('./user.routes'))
}
