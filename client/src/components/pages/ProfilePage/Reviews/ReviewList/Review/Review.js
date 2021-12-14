import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { formatDateFull } from '../../../../../../utils'
import './Review.css'

const Review = (props) => {
  const renderSwitch = (rating) => {
    switch (rating) {
      case 1:
        return '★'
      case 2:
        return '★★'
      case 3:
        return '★★★'
      case 4:
        return '★★★★'
      case 5:
        return '★★★★★'
      default:
        return 'Puntuación no encontrada'
    }
  }

  return (
    <>
      <Container className="review-card">
        <Row>
          <Col xs={6} className="review-col">
            <img src={props.info.creator.image} alt="reviewer" />
          </Col>
          <Col xs={6} >
            <p>
              <b>{props.info.creator.name}: </b>
            </p>
            <p>{props.info.comment}</p>
            <p><strong>Puntuación:</strong> {renderSwitch(props.info.rating)}</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Review
