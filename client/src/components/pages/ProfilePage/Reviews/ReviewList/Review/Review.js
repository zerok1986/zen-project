import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { formatDate } from '../../../../../../utils'
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
          <Col xs={4} className="review-col">
            <img src={props.info.creator.image} alt="reviewer" />
          </Col>
          <Col className="review-header" xs={8}>
            <p>
              <b style={{ fontSize: '1rem' }}>
                {props.info.creator.name} <br />
                <span>{renderSwitch(props.info.rating)}</span>
              </b>
            </p>
            <p className="comment-area">{props.info.comment}</p>
            <p>{formatDate(new Date(props.info.createdAt))}</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Review
