import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'
import './Navbar.css'

const authService = new AuthService()

const Navigation = ({ loggedUser, storeUser }) => {
  const logout = () => {
    authService
      .logout()
      .then((response) => storeUser(null))
      .catch((err) => console.log(err))
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ZEN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/user-panel">
              Lista de actividades
            </Nav.Link>
            {loggedUser ? (
              <Nav.Link as={'span'} onClick={logout}>
                Logout
              </Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} to="/signup">
                  Registro
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
