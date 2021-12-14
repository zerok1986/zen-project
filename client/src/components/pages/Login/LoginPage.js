import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'
import UserContext from '../../../context/UserContext'
import GLogin from './GLogin'

const authService = new AuthService()

const LoginPage = (props) => {
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    pwd: '',
  })
  const { storeUser, showText } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    authService
      .login(loginInfo.username, loginInfo.pwd)
      .then((res) => {
        storeUser(res.data)
        props.closeModal()
        showText('Sesión iniciada correctamente')
      })
      .catch((err) => showText(err.response.data.message))
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

      <div id="login-btns">
        <Button className="btn-home" variant="primary" type="submit">
          Submit
        </Button>
        <GLogin />
      </div>
    </Form>
  )
}

export default LoginPage
