const mongoose = require('mongoose')
const DB_REMOTE = process.env.DB_REMOTE

mongoose
  .connect(DB_REMOTE)
  .then((x) => {
    console.info(`💻 connected to MongoDB named: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB: ', err)
  })
