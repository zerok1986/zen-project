const session = require('express-session')
const MongoStore = require('connect-mongo')

module.exports = (app) => {
  app.use(
    session({
      secret: process.env.SESS_SECRET,
      resave: true,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
      },
      store: MongoStore.create({
        mongoUrl: process.env.DB_REMOTE,
      }),
    })
  )
}
