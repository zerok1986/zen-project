const router = require('express').Router()
const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const bcryptSalt = 10

router.post('/signup', (req, res) => {
  const { username, email, pwd, role } = req.body

  User.findOne({ username }).then((user) => {
    if (user) {
      res.status(400).json({ code: 400, message: 'Usuario ya existente' })
      return
    }

    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(pwd, salt)

    User.create({ username, email, password: hashPass, role })
      .then((user) => {
        req.session.currentUser = user
        res.status(200).json(user)
      })
      .catch((err) =>
        res.status(500).json({
          code: 500,
          message: 'Error en la BBDD al crear usuario',
          err: err.message,
        })
      )
  })
})

router.post('/login', (req, res) => {
  const { username, pwd } = req.body

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        res.status(401).json({ code: 401, message: 'Usuario no registrado' })
        return
      }

      if (bcrypt.compareSync(pwd, user.password) === false) {
        res.status(401).json({ code: 401, message: 'Contraseña incorrecta' })
        return
      }

      req.session.currentUser = user
      res.status(200).json(req.session.currentUser)
    })
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: 'Error al buscar usuario en la BBDD', err })
    )
})

router.get('/logout', (req, res) => {
  req.session.destroy(() =>
    res.status(200).json({ code: 200, message: 'Sesión cerrada correctamente' })
  )
})

router.get('/isloggedin', (req, res) => {
  req.session.currentUser
    ? res.status(200).json(req.session.currentUser)
    : res.status(401).json({ code: 401, message: 'Necesitas iniciar sesión' })
})

module.exports = router
