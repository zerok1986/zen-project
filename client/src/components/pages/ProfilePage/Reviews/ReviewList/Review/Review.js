import React, { useContext } from 'react'
import UserContext from '../../../../../../context/UserContext'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { formatDate } from '../../../../../../utils'
import './Review.css'

const Review = (props) => {
  const { loggedUser } = useContext(UserContext)

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
            {loggedUser.role === 'GOD' && (
              <Button
                className="btn-home"
                onClick={() => props.deleteReview(props.info._id)}
                variant="primary"
              >
                Eliminar
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Review
