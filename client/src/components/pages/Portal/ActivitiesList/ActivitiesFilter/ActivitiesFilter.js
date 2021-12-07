import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import ActivitiesService from '../../../../../services/activities.service'

const ActivitiesFilter = (props) => {
    
    const [filterInfo, setFilterInfo] = useState({
        type: '',
        date: '',
        location: [[]],
    })
    
    const activityService = new ActivitiesService()
    
    const handleSubmit = (e) => {
        e.preventDefault();

        activityService.createActivity(filterInfo)
        .then(response => {
            props.closeModal()
            props.refreshActivities()
        })
        .catch((err) => console.log(err.response.data.message))

    }

    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget

        setFilterInfo({ 
            ...filterInfo, 
            [name]: value 
        })
    }



    return (
        <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="type">
                    <Form.Label>Tipo de clase</Form.Label>
                    <Form.Select
                    name="type"
                    type="text"
                    onChange={handleInputChange}
                    value={filterInfo.type}
                    >
                    <option>Select your role</option>
                    <option value="YOGA">Yoga</option>
                    <option value="TAICHI">Taichí</option>
                    <option value="MEDITATION">Meditación</option>
                    </Form.Select>
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                    onChange={handleInputChange}
                    value={filterInfo.date}
                    name="date"
                    type="date"
                    />
                </Form.Group>
    
                {/* <Form.Group className="mb-3" controlId="location">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    onChange={handleInputChange}
                    value={signupInfo.email}
                    name="email"
                    type="email"
                    placeholder="email@email.com"
                    />
                </Form.Group> */}
  
                <Button variant="primary" type="submit">
                    Encontrar clases cerca de mí
                </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
}

export default ActivitiesFilter