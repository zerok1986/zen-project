import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import UserContext from '../../../context/UserContext'
import UserService from '../../../services/user.service'
import ProfileCard from './ProfileCard/ProfileCard'
import NewReviewForm from './Reviews/NewReviewForm/NewReviewForm'

const userService = new UserService()

const ProfilePage = (props) => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    role: '',
    name: '',
    image: '',
  })

  const [showForm, setShowForm] = useState(false)
  const { id } = props.match.params

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
          {userDetails.role === 'TEACHER' && (
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
                  />
                )}
              </Row>
              <Row>
                <Col>{/* ReviewList con map de cada Review */}</Col>
              </Row>
            </>
          )}
        </div>
      </Container>
    </>
  )
}

export default ProfilePage
