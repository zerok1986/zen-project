import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'

const LoginPage = (props) => {
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    pwd: '',
  })

  const authService = new AuthService()

  const handleSubmit = (e) => {
    e.preventDefault()

    authService
      .login(loginInfo.username, loginInfo.pwd)
      .then((response) => {
        props.storeUser(response.data)

        props.history.push('/portal')
      })
      .catch((err) => console.log(err.response.data.message))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget

    setLoginInfo({
      ...loginInfo,
      [name]: value
    })
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <h2>Login</h2>

          <hr />

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                value={loginInfo.username}
                name="username"
                type="text"
                placeholder="Elige un nombre de usuario"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                value={loginInfo.pwd}
                name="pwd"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage
