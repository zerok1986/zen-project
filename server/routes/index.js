module.exports = (app) => {
  app.use('/api', require('./auth.routes'))
}
