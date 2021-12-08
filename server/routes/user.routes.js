const router = require('express').Router()
// const { checkMongoID, isAdmin, isCurrUser } = require('../utils')
const User = require('../models/User.model')
// const {
//   isLoggedIn,
//   checkRoles,
//   checkIfCurrUserOrAdmin,
// } = require('../middlewares')

router.get('/allUsers', (req, res) => {
  User.find()
    .then((allUsers) => res.json(allUsers))
    .catch((err) => res.json({ err, errMessage: 'Problema buscando users' }))
})

router.get('/user/:id', (req, res) => {
  const { id } = req.params

  User.findById(id)
    .then((user) => {
      res.json(user)
    })
    .catch((err) => res.json({ err, errMessage: 'Problema buscando un user' }))
})

router.delete(
  '/delete/:id',
  //   isLoggedIn,
  //   checkRoles('ADMIN'),
  (req, res) => {
    const { id } = req.params

    User.findByIdAndRemove(id)
      .then((user) => res.json(user))
      .catch((err) => res.json({ err, errMessage: 'Problema eliminando user' }))
  }
)

router.put(
  '/edit/:id',
  //   isLoggedIn,
  //   checkRoles('USER', 'ADMIN'),
  //   checkIfCurrUserOrAdmin,
  (req, res) => {
    const { id } = req.params
    const { username, email, pwd, role, name, image } = req.body

    User.findByIdAndUpdate(
      id,
      {
        username,
        email,
        pwd,
        role,
        name,
        image,
      },
      { new: true }
    )
      .then((user) => res.json(user))
      .catch((err) => res.json({ err, errMessage: 'Problema editando user' }))
  }
)

module.exports = router
