const router = require('express').Router()
const Activity = require('../models/Activity.model')

router.get('/allActivities', (req, res) => {
  Activity.find()
    .populate('teacher')
    .then((allActivities) => res.status(200).json(allActivities))
    .catch((err) =>
      res.status(500).json({ err, errMessage: 'Problema buscando activities' })
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
        .json({ err, errMessage: 'Problema buscando una Activity' })
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
  } = req.body
  let location = {
    type: 'Point',
    coords: [lat, lng],
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
  })
    .then((newActivity) => res.status(201).json(newActivity))
    .catch((err) =>
      res.status(405).json({ err, errMessage: 'Problema creando Activity' })
    )
})

router.delete('/delete/:id', (req, res) => {
  const { id } = req.params

  Activity.findByIdAndDelete(id)
    .then((deletedActivity) => res.status(200).json({ deletedActivity }))
    .catch((err) =>
      res.status(405).json({ err, errMessage: 'Problema borrando Activity' })
    )
})

module.exports = router
