import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import UserContext from '../../../context/UserContext'
import UserService from '../../../services/user.service'
import ReviewsService from '../../../services/reviews.service'
import EditProfileForm from './EditProfileForm'
import ProfileCard from './ProfileCard/ProfileCard'
import NewReviewForm from './Reviews/NewReviewForm/NewReviewForm'
import ReviewList from './Reviews/ReviewList/ReviewList'
import './ProfilePage.css'

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
  let avg = 0
  const [showModal, setModal] = useState(false)
  const [reviewsInfo, setReviewsInfo] = useState([])
  const { loggedUser, showText, outDetailsClick } = useContext(UserContext)
  const [showForm, setShowForm] = useState(false)
  const { id } = props.match.params

  useEffect(() => {
    reviewsService
      .getAllReviews()
      .then((res) => {
        let filteredReviews = res.data.filter((elm) => elm.ref._id === id)
        setReviewsInfo(filteredReviews)
      })
      .catch((err) => showText(err.response.data.message))
    calcAvg()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const reviews = reviewsInfo

  const refreshReviews = () => {
    reviewsService
      .getAllReviews()
      .then((res) => {
        let filteredReviews = res.data.filter((elm) => elm.ref._id === id)
        filteredReviews.forEach((elem) => (avg += elem.rating))
        setReviewsInfo(filteredReviews)
      })
      .catch((err) => showText(err.response.data.message))
  }

  const calcAvg = () => {
    reviewsInfo.forEach((elem) => (avg += elem.rating))
    return avg / reviews.length
  }

  const openForm = () => {
    setShowForm(true)
  }

  const closeForm = () => {
    setShowForm(false)
  }

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  useEffect(() => {
    userService
      .getOneUser(id)
      .then((res) => {
        const { username, email, role, name, image } = res.data

        setUserDetails({ username, email, role, name, image })
      })
      .catch((err) => showText(err.response.data.message))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const refreshUser = () => {
    userService
      .getOneUser(id)
      .then((res) => {
        const { username, email, role, name, image } = res.data

        setUserDetails({ username, email, role, name, image })
      })
      .catch((err) => showText(err.response.data.message))
  }

  const deleteReview = (id) => {
    reviewsService
      .deleteReview(id)
      .then((res) => console.info(res))
      .then(() => refreshReviews())
      .catch((err) => console.error(err))
  }

  return (
    <>
      <Container>
        <Col className="title-left">
          <Button className="button-profile-back" onClick={outDetailsClick}>
            Volver a la lista
          </Button>
        </Col>
        <div className="profile-container">
          <div className="profile-title">
            <h1 className="profile-username">{userDetails.username}</h1>
            {id === loggedUser._id && (
              <Row className="back-button">
                <Button className="btn-create-fit" onClick={() => openModal()}>
                  Editar perfil
                </Button>
              </Row>
            )}
          </div>
          <Row>
            <Col sm={12}>
              <ProfileCard userDetails={userDetails} />
              {userDetails.role === 'PROFESOR' && (
                <div className="rating-profile">
                  <span>Media:</span>
                  <span className="avg-span">
                    {calcAvg().toFixed([1]) + ' ???'}
                  </span>
                </div>
              )}
            </Col>
          </Row>
          <Modal
            className="modal-home"
            show={showModal}
            backdrop="static"
            onHide={closeModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>Editar perfil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {
                <EditProfileForm
                  {...userDetails}
                  refreshUser={refreshUser}
                  closeModal={closeModal}
                />
              }
            </Modal.Body>
          </Modal>

          {userDetails.role === 'PROFESOR' && id !== loggedUser._id ? (
            <>
              <Row className="back-button">
                <Button className="btn-create-fit" onClick={() => openForm()}>
                  Crear Rese??a
                </Button>
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
            </>
          ) : null}
          <Row>
            <Col>
              <ReviewList
                reviews={reviews}
                teacherId={id}
                refreshReviews={refreshReviews}
                deleteReview={deleteReview}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default ProfilePage
