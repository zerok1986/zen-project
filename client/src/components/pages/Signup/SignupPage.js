import React, { Component } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'

class SignupPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      pwd: '',
      role: '',
    }

    this.authService = new AuthService()
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.authService
      .signup(
        this.state.username,
        this.state.email,
        this.state.pwd,
        this.state.role
      )
      .then((response) => {
        this.props.storeUser(response.data)
      })
      .catch((err) => console.log(err.response.data.message))
  }

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget

    this.setState({ [name]: value })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <h2>Registro</h2>

            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.username}
                  name="username"
                  type="text"
                  placeholder="Elige un nombre de usuario"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.email}
                  name="email"
                  type="email"
                  placeholder="email@email.com"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.pwd}
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
                  onChange={this.handleInputChange}
                  value={this.state.role}
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
}

export default SignupPage
