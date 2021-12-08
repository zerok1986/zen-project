import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

const ActivitiesFilter = (props) => {
    
    const [filterInfo, setFilterInfo] = useState({
        type: '',
        date: '',
        location: [[]],
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.closeModal();
        props.findActivityByFilter(filterInfo);
       console.log(filterInfo)
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
                    <option>Select the type</option>
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