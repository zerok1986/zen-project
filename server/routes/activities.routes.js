const router = require('express').Router()
const Activity = require('../models/Activity.model')

router.get('/allActivities', (req, res) => {
  Activity.find()
    .populate('teacher')
    .then((allActivities) => res.json(allActivities))
    .catch((err) =>
      res.json({ err, errMessage: 'Problema buscando activities' })
    )
})

router.get('/activity/:id', (req, res) => {
  const { id } = req.params

  Activity.findById(id)
    .populate('teacher')
    .then((theActivity) => res.json(theActivity))
    .catch((err) =>
      res.json({ err, errMessage: 'Problema buscando una Activity' })
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
  console.log('object')
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
    .then((newActivity) => {
      console.log('newActivity'), res.json(newActivity)
    })
    .catch((err) => res.json({ err, errMessage: 'Problema creando Activity' }))
})

// router.put("/editCoaster/:id", (req, res) => {
//   const { id } = req.params
//   const { name, type, maxAssistants, date, lat, lng, price, duration, teacher } = req.body

//   Coaster.findByIdAndUpdate(id, { title, description, inversions, length, imageUrl }, { new: true })
//     .then(updatedCoaster => res.json(updatedCoaster))
//     .catch(err => res.json({ err, errMessage: "Problema editando Coaster" }))
// })

router.delete('/delete/:id', (req, res) => {
  const { id } = req.params

  Activity.findByIdAndDelete(id)
    .then((deletedActivity) => res.json({ deletedActivity }))
    .catch((err) => res.json({ err, errMessage: 'Problema borrando Activity' }))
})

module.exports = router
