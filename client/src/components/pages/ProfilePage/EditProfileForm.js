import React, { useState, useContext } from 'react'
import { Form, Button, Spinner } from 'react-bootstrap'
import UserService from '../../../services/user.service'
import UserContext from '../../../context/UserContext'
import UploadService from '../../../services/upload.services'
const userService = new UserService()

const EditProfileForm = (props) => {
  const [userInfo, setUserInfo] = useState({
    username: props.username,
    email: props.email,
    name: props.name,
    pwd: '',
    image: props.image,
  })
  const { storeUser } = useContext(UserContext)
  const { loggedUser } = useContext(UserContext)
  const uploadService = new UploadService()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    userService
      .editUser(loggedUser._id, userInfo)
      .then((response) => {
        storeUser(response.data)
        props.closeModal()
        props.refreshUser()
      })
      .catch((err) => console.error(err))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget

    setUserInfo({
      ...userInfo,
      [name]: value,
    })
  }

  const handleUploadChange = (e) => {
    setLoading(true)
    const uploadData = new FormData()
    uploadData.append('imageData', e.target.files[0])

    uploadService
      .uploadImage(uploadData)
      .then((response) => {
        console.log(response)
        setUserInfo({ ...userInfo, image: response.data.cloudinary_url })
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          value={setUserInfo.username}
          name="username"
          type="text"
          placeholder="Elige un nombre de usuario"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          value={setUserInfo.nameUser}
          name="name"
          type="text"
          placeholder="Elige tu nombre"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          value={setUserInfo.email}
          name="email"
          type="email"
          placeholder="email@email.com"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          value={setUserInfo.pwd}
          name="pwd"
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="imageData">
        <Form.Label>Image</Form.Label>
        <Form.Control
          onChange={handleUploadChange}
          value={setUserInfo.image}
          name="image"
          type="file"
          placeholder="Elige tu nombre"
        />
      </Form.Group>
      <Button
        disabled={loading}
        className="modal-button"
        variant="primary"
        type="submit"
      >
        Editar
      </Button>
      {loading && <Spinner animation="border" variant="info" />}
    </Form>
  )
}

export default EditProfileForm
