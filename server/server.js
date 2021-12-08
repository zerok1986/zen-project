const app = require('./app')
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.info(`Server listening on port http://localhost:${PORT}`)
})
