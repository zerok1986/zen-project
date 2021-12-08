import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import UserContext from '../../../context/UserContext'
import UserService from '../../../services/user.service'
import ProfileCard from './ProfileCard/ProfileCard'
import ActivityList from '../Portal/ActivitiesList/ActivityList'

const userService = new UserService()

const ProfilePage = (props) => {
  const [showModal, setModal] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    role: '',
    name: '',
    image: '',
  })

  const {outDetailsClick} = useContext(UserContext)

  useEffect(() => {
    const { id } = props.match.params

    userService
      .getOneUser(id)
      .then((res) => {
        const { username, email, role, name, image } = res.data

        setUserDetails({ username, email, role, name, image })
      })
      .catch((err) => console.log(err))
  }, [])

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      <Container>
        <h1>Detalles de {userDetails.username}</h1>

        <Row>
          <Col>
            <ProfileCard userDetails={userDetails} />
          </Col>
          <Col>{/* <ActivityList /> */}</Col>
        </Row>
        <Row>
          {/* <Col>
          <ReviewList />
        </Col>
        <Col>
          <Button onClick={openModal}>Crea una nueva review</Button>
          <Modal show={showModal} backdrop="static" onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Nueva Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <NewReviewForm />
            </Modal.Body>
          </Modal>
        </Col> */}
        </Row>
        <Row>
          <Button onClick={outDetailsClick}>
            Volver
          </Button>
        </Row>
      </Container>
    </>
  )
}

export default ProfilePage
