import React, { Component } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      pwd: '',
    }

    this.authService = new AuthService()
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.authService
      .login(this.state.username, this.state.pwd)
      .then((response) => {
        this.props.storeUser(response.data)

        this.props.history.push('/coaster-list')
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
            <h2>Login</h2>

            <hr />

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

export default LoginPage
