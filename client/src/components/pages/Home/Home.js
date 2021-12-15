import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Col, Modal } from 'react-bootstrap'
import './Home.css'
import SignupPage from '../Signup/SignupPage'
import LoginPage from '../Login/LoginPage'
import image from './Mockup.png'
import imageMap from './Captura.PNG'

const Home = () => {
  const [showModal, setModal] = useState(false)
  const [modalType, setType] = useState('')

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
    setType('')
  }

  useEffect(() => {
    return () => {
      setModal(false)
      setType('')
    }
  }, [])

  return (
    <Container fluid className="flex-home">
      <Container className="container-home">
        <Row className="row-home home-buttons ">
          <Col className="col-home-auth">
            <Button
              className="btn-home"
              onClick={() => {
                setType('Registro')
                openModal()
              }}
            >
              Regístrate
            </Button>
          </Col>
          <Col className="col-home-auth">
            <Button
              className="btn-home"
              onClick={() => {
                setType('Inicio de sesión')
                openModal()
              }}
            >
              Inicia Sesión
            </Button>
          </Col>
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
        </Row>

        <Row className="row-home  ">
          <Col md={4} className="col-home-about ">
            <div className="image-home home-yoga">
              <h2>YOGA</h2>
            </div>
          </Col>
          <Col md={4} className="col-home-about ">
            <div className="image-home home-taichi">
              <h2>TAICHÍ</h2>
            </div>
          </Col>
          <Col md={4} className="col-home-about">
            <div className="image-home home-med">
              <h2>MEDITACIÓN</h2>
            </div>
          </Col>
        </Row>
        <Row className="row-home-about ">
          <Col md={12} style={{ overflow: 'hidden' }}>
            <h4>¿Qué ofrecemos?</h4>
          </Col>
        </Row>
        <Row className="row-home description ">
          <Col md={12} style={{ overflow: 'hidden' }}>
            <ul>
              <li>
                Encuentra las clases más cercanas a tu localización,busca por
                fechas para encontrar las clases que más se adapten a ti, agenda
                y reserva tus clases con un solo click.
              </li>
              <img src={imageMap} alt="mobile" className="imageMap"></img>
              <li>
                Haz saber a los demás como ha sido tu experiencia, dejando
                reseñas de los profesores de tus clases
              </li>
              <img src={image} alt="mobile" className="imageMobile"></img>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Home
