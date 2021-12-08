import React, { useState } from 'react'
import { Button, Container, Row, Col, Modal} from 'react-bootstrap'
import './Home.css'
import SignupPage from '../Signup/SignupPage'
import LoginPage from '../Login/LoginPage'

function Home() {
    const [showModal, setModal] = useState(false)
    const [modalType, setType] = useState('')

    const openModal = () => {
        setModal(true)
      };
    
    const closeModal = () => {
        setModal(false)
        setType('')
    };

    return (
        <Container>
            <Row className="justify-content-around description">
                <Col md={12} style={{ overflow: "hidden" }}>
                <p>
                    Bienvenido a nuestra comunidad Zen. Encuentra las clases más cercanas a tu localización, tanto en centros especializados como al aire libre. Agenda y reserva tus clases con un solo click.
                </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => {
                        setType('Sign up')
                        openModal()
                    }} >Regístrate</Button>
                </Col>
                <Col>
                    <Button onClick={() => {
                        setType('Log in')
                        openModal()
                    }}>Inicia Sesión</Button>
                </Col>
                {/* MODAL */}
                <Modal show={showModal} backdrop="static" onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{modalType}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {modalType === "Sign up" ? 
                        <SignupPage closeModal={closeModal}/> :
                        <LoginPage closeModal={closeModal}/>
                        }
                    </Modal.Body>
                </Modal>
                {/* MODAL */}
            </Row>
            <Row className="justify-content-around">
                <Col md={4}>
                    <img src="#" alt="Yoga"/>
                    <h1>Yoga</h1>
                    <p>
                        Párrafo bonito sobre yoga
                    </p>
                </Col>
                <Col md={4}>
                    <img src="#" alt="Taichí"/>
                    <h1>Taichí</h1>
                    <p>
                        Párrafo bonito sobre Taichí.
                    </p>
                </Col>
                <Col md={4}>
                    <img src="#" alt="Meditación"/>
                    <h1>Meditación</h1>
                    <p>
                        Párrafo bonito sobre Meditación.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
