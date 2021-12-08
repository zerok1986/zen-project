module.exports = (app) => {
  app.use('/api', require('./auth.routes'))
  app.use('/api/activities', require('./activities.routes'))
  app.use('/api/users', require('./user.routes'))
}
