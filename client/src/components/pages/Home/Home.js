import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Col, Modal } from 'react-bootstrap'
import './Home.css'
import SignupPage from '../Signup/SignupPage'
import LoginPage from '../Login/LoginPage'

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
        <Row className="row-home ">
          <Col className="col-home-auth">
            <Button
              className="btn-home"
              onClick={() => {
                setType("Sign up");
                openModal();
              }}
            >
              Regístrate
            </Button>
          </Col>
          <Col className="col-home-auth">
            <Button
              className="btn-home"
              onClick={() => {
                setType("Log in");
                openModal();
              }}
            >
              Inicia Sesión
            </Button>
          </Col>
          {/* MODAL */}
          <Modal className="modal-home" show={showModal} backdrop="static" onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>{modalType}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {modalType === "Sign up" ? <SignupPage closeModal={closeModal} /> : <LoginPage closeModal={closeModal} />}
            </Modal.Body>
          </Modal>
          {/* MODAL */}
        </Row>
        <Row className="row-home description ">
          <Col md={12} style={{ overflow: "hidden" }}>
            <h5>Encuentra las clases más cercanas a tu localización, agenda y reserva tus clases con un solo click.</h5>
          </Col>
        </Row>
        <Row className="row-home ">
          <Col md={4} className="col-home-about ">
            <div className="image-home home-yoga">
              <img src="https://yogalamp.files.wordpress.com/2014/07/triangle-sunset.jpg" alt="Yoga" />
            </div>
            <h3>Yoga</h3>
          </Col>
          <Col md={4} className="col-home-about ">
            <div className="image-home home-taichi">
              <img
                src="https://cdn.bioguia.com/embed/5d5827a0fc08a9b7572085ff2e1524425431/Razones_por_las_que_deberias_practicar_Tai-Chi?imagick=1&size=500"
                alt="Taichí"
              />
            </div>
            <h3>Taichí</h3>
          </Col>
          <Col md={4} className="col-home-about">
            <div className="image-home home-med">
              <img
                className="image-home"
                src="https://cdn.castleconnolly.com/d2/12/93e5babc4ee89ffbe1c1b56abd5f/eh-personal-story-what-i-learned-about-stress-after-meditating-02-1200x675.jpg"
                alt="Meditación"
              />
            </div>
            <h3>Meditación</h3>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home
