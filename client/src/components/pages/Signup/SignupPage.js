import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'
import UserContext from "../../../context/UserContext"

const authService = new AuthService()

const SignupPage = (props) => {
  const [signupInfo, setSignupInfo] = useState({
    username: '',
    email: '',
    pwd: '',
    role: '',
  })
  const {storeUser} = useContext(UserContext)

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
        storeUser(response.data)
        props.closeModal()
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
  )
}

export default SignupPage
