import React, { useState, useContext } from 'react'
import UserContext from '../../../../../context/UserContext'
import { Form, Button } from 'react-bootstrap'
import ActivitiesService from '../../../../../services/activities.service'

const activitiesService = new ActivitiesService()

const NewActivityForm = (props) => {
  const { loggedUser } = useContext(UserContext)
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    maxAssistants: '',
    date: '',
    lat: '',
    lng: '',
    price: 0,
    duration: 0,
    teacher: loggedUser,
  })

  const handleChange = (e) => {
    let { name, value } = e.currentTarget

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    activitiesService
      .createActivity(formData)
      .then((res) => {
        props.closeModal()
        props.refreshActivities()
      })
      .catch((err) => console.log(err))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={formData.name}
          name="name"
          type="text"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="type">
        <Form.Label>Tipo de Actividad</Form.Label>
        <Form.Select
          name="type"
          type="text"
          onChange={handleChange}
          value={formData.type}
        >
          <option>Selecciona el tipo de actividad</option>
          <option value="YOGA">Yoga</option>
          <option value="TAICHI">Taichí</option>
          <option value="MEDITATION">Meditación</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="maxAssistants">
        <Form.Label>Nº máximo de asistentes</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={formData.maxAssistants}
          name="maxAssistants"
          type="number"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Fecha</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={formData.date}
          name="date"
          type="datetime-local"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lat">
        <Form.Label>Latitud</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={formData.lat}
          name="lat"
          type="number"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lng">
        <Form.Label>Longitud</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={formData.lng}
          name="lng"
          type="number"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={formData.price}
          name="price"
          type="number"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="duration">
        <Form.Label>Duración</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={formData.duration}
          name="duration"
          type="number"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default NewActivityForm