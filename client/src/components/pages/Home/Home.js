import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col } from 'react-bootstrap'
import './Home.css'

function Home() {
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
                    <Link to="/signup">
                        <Button variant="outline-success">Regístrate</Button>
                    </Link>
                </Col>
                <Col>
                    <Link to="/login">
                        <Button variant="outline-secondary">Inicia Sesión</Button>
                    </Link>
                </Col>
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
