import React, { useState, useContext } from 'react'
import Geocode from 'react-geocode'
import UserContext from '../../../../../context/UserContext'
import { Form, Button } from 'react-bootstrap'
import ActivitiesService from '../../../../../services/activities.service'
import './NewActivityForm.css'
import { FormControl, InputLabel, Input, Select, MenuItem } from '@mui/material'

const activitiesService = new ActivitiesService()

const NewActivityForm = (props) => {
  const { loggedUser, showText } = useContext(UserContext)
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    maxAssistants: '',
    date: '',
    address: '',
    lat: '',
    lng: '',
    price: '',
    duration: '',
    teacher: loggedUser,
  })
  const [confirmedAdress, setAdress] = useState(false)
  const [classWhite, setClass] = useState('btn-confirm-address')

  const handleChange = (e) => {
    let { name, value } = e.target

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
      .catch((err) => showText(err.response.data.message))
  }

  Geocode.setApiKey('AIzaSyA2EY6nvc3be8-6agfTwW2PNHPH0GX3dg8')
  Geocode.setLanguage('es')
  Geocode.setRegion('es')
  Geocode.setLocationType('ROOFTOP')

  const transformAddress = (address) => {
    Geocode.fromAddress(address).then(
      (res) => {
        const { lat, lng } = res.results[0].geometry.location
        setFormData({ ...formData, lat: lat, lng: lng })
      },
      (error) => {
        console.error(error)
      }
    )
  }

  const changeParticipation = () => {
    setAdress(true)
    setClass('btn-confirmed-address')
  }
  const setStateNew = () => {
    transformAddress(formData.address)
    changeParticipation()
  }
  return (
    <Form onSubmit={handleSubmit} className="form-activity">
      <FormControl>
        <InputLabel id="textType" htmlFor="my-input">
          Tipo
        </InputLabel>

        <Select
          labelId="demo-simple-select-label"
          label="type"
          id="demo-simple-select"
          name="type"
          type="text"
          value={formData.type}
          onChange={handleChange}
        >
          <MenuItem value="YOGA">Yoga</MenuItem>
          <MenuItem value="TAICHI">Taichi</MenuItem>
          <MenuItem value="MEDITACION">Meditaci??n</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Nombre</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={handleChange}
          value={formData.name}
          name="name"
          type="text"
          inputProps={{ maxLength: 30 }}
        />
      </FormControl>
      
      <FormControl>
        <InputLabel htmlFor="my-input">M??ximo de asistentes</InputLabel>
        <Input
          id="maxInput"
          aria-describedby="my-helper-text"
          onChange={handleChange}
          value={formData.maxAssistants}
          name="maxAssistants"
          type="number"
          inputProps={{min: 0}}
        />
      </FormControl>
      
      <FormControl>
        <InputLabel htmlFor="my-input"></InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={handleChange}
          value={formData.date}
          name="date"
          type="datetime-local"
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="my-input">Direcci??n</InputLabel>

        <InputLabel htmlFor="my-input"></InputLabel>
        <Input
          id="address-input"
          aria-describedby="my-helper-text"
          onChange={handleChange}
          value={formData.address}
          name="address"
          type="text"
        />
      </FormControl>

      <Button className={classWhite} onClick={() => setStateNew()}>
        {confirmedAdress ? 'Direcci??n confirmada' : 'Confirmar direccion'}
      </Button>
      <br></br>
      <Form.Group className="mb-3" controlId="lat" style={{ display: 'none' }}>
        <Form.Label>Latitud</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={formData.lat}
          name="lat"
          type="number"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lng" style={{ display: 'none' }}>
        <Form.Label>Longitud</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={formData.lng}
          name="lng"
          type="number"
        />
      </Form.Group>
      <FormControl>
        <InputLabel htmlFor="my-input">Duraci??n</InputLabel>
        <Input
          id="durationInput"
          aria-describedby="my-helper-text"
          onChange={handleChange}
          value={formData.duration}
          name="duration"
          type="number"
          inputProps={{min: 0, max: 90}}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Precio</InputLabel>
        <Input
          id="priceInput"
          aria-describedby="my-helper-text"
          onChange={handleChange}
          value={formData.price}
          name="price"
          type="number"
          inputProps={{min: 0}}
        />
      </FormControl>
      <br></br>

      <Button className="btn-home" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default NewActivityForm
