import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'
import UserContext from '../../../context/UserContext'

const authService = new AuthService()

const LoginPage = (props) => {
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    pwd: '',
  })
  const { storeUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    authService
      .login(loginInfo.username, loginInfo.pwd)
      .then((response) => {
        storeUser(response.data)
        props.closeModal()
      })
      .catch((err) => console.error(err))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget

    setLoginInfo({
      ...loginInfo,
      [name]: value,
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Nombre de usuario</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          value={loginInfo.username}
          name="username"
          type="text"
          placeholder="Elige un nombre de usuario"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          value={loginInfo.pwd}
          name="pwd"
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Button className="modal-button" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default LoginPage
