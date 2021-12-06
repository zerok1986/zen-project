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
  .then(allUsers => res.json(allUsers))
  .catch(err => res.json({ err, errMessage: "Problema buscando users" }))
})

router.get('/user/:id', (req, res) => {
  const { id } = req.params

//   if (!checkMongoID(id)) {
//     res.json({ err, errMessage: "Problema buscando activities" })
//   }

  User.findById(id)
    .then((user) => {
      res.json(user)
    })
    .catch(err => res.json({ err, errMessage: "Problema buscando un user" }))
})

router.delete(
  '/delete/:id',
//   isLoggedIn,
//   checkRoles('ADMIN'),
  (req, res) => {
    const { id } = req.params

    User.findByIdAndRemove(id)
      .then((user) => res.json(user))
      .catch(err => res.json({ err, errMessage: "Problema eliminando user" }))
  }
)

// router.get(
//   '/:id/edit',
//   isLoggedIn,
//   checkRoles('USER', 'ADMIN'),
//   checkIfCurrUserOrAdmin,
//   (req, res, next) => {
//     const { id } = req.params

//     User.findById(id)
//       .select({ password: 0 })
//       .then((user) =>
//         res.render('users/edit-user', {
//           user,
//           id,
//           isAdmin: isAdmin(req.session.currentUser),
//         })
//       )
//       .catch((err) => console.log(err))
//   }
// )

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
        username, email, pwd, role, name, image
      },
      { new: true }
    )
      .then((user) => res.json(user))
      .catch(err => res.json({ err, errMessage: "Problema editando user" }))
  }
)

module.exports = router