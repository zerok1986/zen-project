require('dotenv/config')
require('./db')

const express = require('express')
const app = express()
const path = require('path')

require('./config')(app)
require('./config/session.config')(app)
app.use(express.static(path.join(__dirname, 'public')))

require('./routes')(app)
app.use((req, res) => res.sendFile(__dirname + '/public/index.html'))

module.exports = app
