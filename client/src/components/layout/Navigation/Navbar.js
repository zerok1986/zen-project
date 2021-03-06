import React, { useState, useContext } from 'react'
import { Navbar, Nav, Container, Modal } from 'react-bootstrap'
import UserContext from '../../../context/UserContext'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'
import SignupPage from '../../pages/Signup/SignupPage'
import LoginPage from '../../pages/Login/LoginPage'
import './Navbar.css'

const authService = new AuthService()

const Navigation = (props) => {
  const { loggedUser, storeUser, setDetailsClick, showText } =
    useContext(UserContext)

  const [showModal, setModal] = useState(false)
  const [modalType, setType] = useState('')

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
    setType('')
  }

  const logout = () => {
    authService
      .logout()
      .then((res) => {
        storeUser(null)
        showText(res.data.message)
      })
      .catch((err) => console.error(err))
  }

  return (
    <Navbar className="navbar-main" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/home">moksha</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggle-icon"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Inicio</Nav.Link>
            {loggedUser ? (
              <>
                <Nav.Link
                  as={Link}
                  onClick={setDetailsClick}
                  to={`/users/user/${loggedUser._id}`}
                >
                  Mi perfil
                </Nav.Link>
                <Nav.Link as={'span'} onClick={logout}>
                  Cerrar sesión
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  onClick={() => {
                    setType('Registro')
                    openModal()
                  }}
                >
                  Registro
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    setType('Inicio de sesión')
                    openModal()
                  }}
                >
                  Iniciar Sesión
                </Nav.Link>
                {/* MODAL */}
                <Modal
                  className="modal-home"
                  show={showModal}
                  backdrop="static"
                  onHide={closeModal}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>{modalType}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {modalType === 'Registro' ? (
                      <SignupPage closeModal={closeModal} />
                    ) : (
                      <LoginPage closeModal={closeModal} />
                    )}
                  </Modal.Body>
                </Modal>
                {/* MODAL */}
              </>
            )}

            {loggedUser?.role === 'GOD' && (
              <Nav.Link as={Link} to="/admin/panel">
                Panel de Admin
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
