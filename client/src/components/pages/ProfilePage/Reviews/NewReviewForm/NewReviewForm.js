import React, { useState, useContext } from 'react'
import UserContext from '../../../../../context/UserContext'
import { Form, Button, FloatingLabel } from 'react-bootstrap'
import ReviewsService from '../../../../../services/reviews.service'

const reviewsService = new ReviewsService()

const NewReviewForm = (props) => {
  const { loggedUser } = useContext(UserContext)
  const refTeacher = props.teacherId
  const today = new Date()

  const [formData, setFormData] = useState({
    creator: loggedUser._id,
    ref: refTeacher,
    comment: '',
    date: today,
    rating: '',
  })

  //   const refreshReviews = () => {
  //     reviewsService
  //       .getAllReviews()
  //       .then((res) => {
  //         const reviews = res.data
  //         props.setList(reviews)
  //       })
  //       .catch((err) => console.error(err))
  //   }

  const handleChange = (e) => {
    let { name, value } = e.currentTarget

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    reviewsService
      .createReview(formData)
      .then((res) => {
        // refreshReviews()
        props.closeForm()
      })
      .catch((err) => console.error(err))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="comment" label="Comentarios">
        <Form.Control
          as="textarea"
          placeholder="Deja un comentario sobre el profesor..."
          style={{ height: '100px' }}
          name="comment"
          type="text"
          onChange={handleChange}
          value={formData.comment}
        />
      </FloatingLabel>

      <Form.Group className="mb-3" controlId="rating">
        <Form.Label>Puntuación</Form.Label>
        <Form.Select
          name="rating"
          type="number"
          onChange={handleChange}
          value={formData.rating}
        >
          <option>Selecciona una puntuación</option>
          <option value="1">★</option>
          <option value="2">★★</option>
          <option value="3">★★★</option>
          <option value="4">★★★★</option>
          <option value="5">★★★★★</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Añadir
      </Button>
    </Form>
  )
}

export default NewReviewForm
