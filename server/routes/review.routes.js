const router = require('express').Router()
const Review = require('../models/Review.model')
const { checkIfGOD } = require('../middlewares')

router.get('/allReviews', (req, res) => {
  Review.find()
    .sort({ createdAt: -1 })
    .populate('creator ref')
    .then((allReviews) => res.status(200).json(allReviews))
    .catch((err) =>
      res.status(500).json({ err, message: '❌ Problema buscando reseña' })
    )
})

router.get('/review/:id', (req, res) => {
  const { id } = req.params

  Review.findById(id)
    .populate('creator ref')
    .then((theReview) => res.status(200).json(theReview))
    .catch((err) =>
      res.status(500).json({ err, message: '❌ Problema buscando una reseña' })
    )
})

router.post('/newReview', (req, res) => {
  const { creator, ref, comment, date, rating } = req.body

  Review.create({ creator, ref, comment, date, rating })
    .then((newReview) => res.status(201).json(newReview))
    .catch((err) =>
      res.status(405).json({ err, message: '❌ Problema creando reseña' })
    )
})

router.delete('/delete/:id', checkIfGOD, (req, res) => {
  const { id } = req.params

  Review.findByIdAndDelete(id)
    .then((deletedReview) => res.status(200).json({ deletedReview }))
    .catch((err) =>
      res.status(405).json({ err, message: '❌ Problema borrando actividad' })
    )
})

module.exports = router
