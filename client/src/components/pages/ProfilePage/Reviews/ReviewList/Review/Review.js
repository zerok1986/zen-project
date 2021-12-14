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
          <hr />
          <Col>
            <img src={props.info.creator.image} alt="reviewer" />
          </Col>
          <Col xs={6}>
            <p>
              <b>{props.info.creator.name}: </b>
              {props.info.comment}
            </p>
            <h6>Puntuación: {renderSwitch(props.info.rating)}</h6>
          </Col>
          <hr />
        </Row>
      </Container>
    </>
  )
}

export default Review
