const router = require('express').Router()
const Activity = require('../models/Activity.model')
const { checkIfGOD } = require('../middlewares')

router.get('/allActivities', (req, res) => {
  Activity.find()
    .sort({ createdAt: -1 })
    .populate('teacher')
    .then((allActivities) => res.status(200).json(allActivities))
    .catch((err) =>
      res.status(500).json({ err, message: 'Problema buscando actividades' })
    )
})

router.get('/activity/:id', (req, res) => {
  const { id } = req.params

  Activity.findById(id)
    .populate('teacher')
    .then((theActivity) => res.status(200).json(theActivity))
    .catch((err) =>
      res
        .status(500)
        .json({ err, message: 'Problema buscando una actividad' })
    )
})

router.post('/newActivity', (req, res) => {
  const {
    name,
    type,
    maxAssistants,
    date,
    lat,
    lng,
    price,
    duration,
    teacher,
    assistants,
  } = req.body
  let location = {
    type: 'Point',
    coordinates: [lat, lng],
  }

  Activity.create({
    name,
    type,
    maxAssistants,
    date,
    location,
    price,
    duration,
    teacher,
    assistants,
  })
    .then((newActivity) => res.status(201).json(newActivity))
    .catch((err) => res.status(405).json({ err, message: "Problema creando actividad" }));
})

router.delete('/delete/:id', checkIfGOD, (req, res) => {
  const { id } = req.params

  Activity.findByIdAndDelete(id)
    .then((deletedActivity) => res.status(200).json({ deletedActivity }))
    .catch((err) =>
      res.status(405).json({ err, message: 'Problema borrando actividad' })
    )
})

router.put('/addParticipant/:id', (req, res) => {
  const { id } = req.params
  const loggedUser = req.session.currentUser

  Activity.findByIdAndUpdate(
    id,
    { $push: { assistants: loggedUser } },
    { new: true }
  )
    .then((user) => res.status(202).json(user))
    .catch((err) => res.status(405).json({ err, message: "Problema añadiendo usuario" }));
  }
);

router.put('/deleteParticipant/:id', checkIfGOD, (req, res) => {
  const { id } = req.params
  const loggedUser = req.session.currentUser

  Activity.findByIdAndUpdate(
    id,
    { $pull: { assistants: loggedUser._id } },
    { new: true }
  )
    .then((user) => res.status(202).json(user))
    .catch((err) => res.status(405).json({ err, message: "Problema borrando usuario" }));
});

module.exports = router
