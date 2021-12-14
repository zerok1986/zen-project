module.exports = (app) => {
  app.use((req, res, next) => {
    res.status(404).json({ errorMessage: 'This route does not exist' })
  })

  app.use((err, req, res, next) => {
    console.error('ERROR', req.method, req.path, err)

    if (!res.headersSent) {
      console.log(res, 'estoy entrando aquí')
      res.status(500).json({
        errorMessage: 'Internal server error. Check the server console',
      })
    }
  })
}
