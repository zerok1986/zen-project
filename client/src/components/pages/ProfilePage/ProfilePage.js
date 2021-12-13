import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import UserContext from '../../../context/UserContext'
import UserService from '../../../services/user.service'
import ReviewsService from '../../../services/reviews.service'
import ProfileCard from './ProfileCard/ProfileCard'
import NewReviewForm from './Reviews/NewReviewForm/NewReviewForm'
import ReviewList from './Reviews/ReviewList/ReviewList'

const userService = new UserService()
const reviewsService = new ReviewsService()

const ProfilePage = (props) => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    role: '',
    name: '',
    image: '',
  })

  const [showForm, setShowForm] = useState(false)
  const [reviewsInfo, setReviewsInfo] = useState([])

  const { id } = props.match.params

  useEffect(() => {
    reviewsService
      .getAllReviews()
      .then((res) => {
        let filteredReviews = res.data.filter((elm) => elm.ref._id === id)
        setReviewsInfo(filteredReviews)
      })
      .catch((err) => console.error(err))
  }, [])
  const reviews = reviewsInfo

  const refreshReviews = () => {
    reviewsService
      .getAllReviews()
      .then((res) => {
        let filteredReviews = res.data.filter((elm) => elm.ref._id === id)
        setReviewsInfo(filteredReviews)
      })
      .catch((err) => console.error(err))
  }

  const openForm = () => {
    setShowForm(true)
  }

  const closeForm = () => {
    setShowForm(false)
  }

  const { outDetailsClick } = useContext(UserContext)

  useEffect(() => {
    userService
      .getOneUser(id)
      .then((res) => {
        const { username, email, role, name, image } = res.data

        setUserDetails({ username, email, role, name, image })
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <Container>
        <div className="profile-container">
          <div className="profile-title">
            <h1>Detalles de {userDetails.username}</h1>
          </div>
          <Row>
            <Col>
              <ProfileCard userDetails={userDetails} />
            </Col>
          </Row>

          <Row className="back-button">
            <Button onClick={outDetailsClick}>Volver</Button>
          </Row>
          {userDetails.role === 'PROFESOR' && (
            <>
              <Row className="back-button">
                <Button onClick={() => openForm()}>Crear Reseña</Button>
              </Row>
              <Row>
                {showForm && (
                  <NewReviewForm
                    show={showForm}
                    closeForm={closeForm}
                    teacherId={id}
                    refreshReviews={refreshReviews}
                  />
                )}
              </Row>
              <Row>
                <Col>
                  <ReviewList reviews={reviews} teacherId={id} />
                </Col>
              </Row>
            </>
          )}
        </div>
      </Container>
    </>
  )
}

export default ProfilePage
