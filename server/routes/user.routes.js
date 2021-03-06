const router = require('express').Router()
const User = require('../models/User.model')
const { checkIfGOD } = require('../middlewares')

router.get('/allUsers', (req, res) => {
  User.find()
    .then((allUsers) => res.status(200).json(allUsers))
    .catch((err) => res.status(401).json({ err, message: "❌ Problema buscando usuarios" }));
});

router.get('/user/:id', (req, res) => {
  const { id } = req.params

  User.findById(id)
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((err) => res.status(401).json({ err, message: "❌ Problema buscando un usuario" }));
});

router.delete(
  "/delete/:id",
  checkIfGOD,
  (req, res) => {
    const { id } = req.params;

    User.findByIdAndRemove(id)
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(405).json({ err, message: "❌ Problema eliminando usuario" }));
  }
);

router.put(
  "/edit/:id",
  (req, res) => {
    const { id } = req.params;
    const { username, email, pwd, role, name, image } = req.body;

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
      .then((user) => res.status(202).json(user))
      .catch((err) => res.status(405).json({ err, message: "❌ Problema editando usuario" }));
  }
);

module.exports = router
