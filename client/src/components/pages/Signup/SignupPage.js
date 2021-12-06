import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'

const SignupPage = (props) => {

  const [signupInfo, setSignupInfo] = useState({
    username: '',
    email: '',
    pwd: '',
    role: '',
  })

  const authService = new AuthService()
 
  const handleSubmit = (e) => {
    e.preventDefault()

    authService
      .signup(
        signupInfo.username,
        signupInfo.email,
        signupInfo.pwd,
        signupInfo.role
      )
      .then((response) => {
        props.storeUser(response.data)
      })
      .catch((err) => console.log(err.response.data.message))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget

    setSignupInfo({
      ...signupInfo,
      [name]: value
    })
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <h2>Registro</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                value={signupInfo.username}
                name="username"
                type="text"
                placeholder="Elige un nombre de usuario"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                value={signupInfo.email}
                name="email"
                type="email"
                placeholder="email@email.com"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                value={signupInfo.pwd}
                name="pwd"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Select
                name="role"
                type="text"
                onChange={handleInputChange}
                value={signupInfo.role}
                aria-label="Default select example"
              >
                <option>Select your role</option>
                <option value="USER">User</option>
                <option value="TEACHER">Teacher</option>
              </Form.Select>
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

export default SignupPage
