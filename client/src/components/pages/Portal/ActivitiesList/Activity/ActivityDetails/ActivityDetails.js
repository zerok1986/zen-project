import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ActivitiesService from '../../../../../../services/activities.service'
import ProfilePage from '../../../../ProfilePage/ProfilePage'
import { Switch, Route } from 'react-router-dom'

const activitiesService = new ActivitiesService()

const ActivityDetails = (props) => {
  const [actDetails, setActDetails] = useState({
    name: '',
    type: '',
    maxAssistants: '',
    date: '',
    lat: '',
    lng: '',
    price: 0,
    duration: 0,
    teacher: '',
  })

  useEffect(() => {
    const { id } = props.match.params

    activitiesService
      .getOneActivity(id)
      .then((res) => {
        const {
          name,
          type,
          maxAssistants,
          date,
          lat,
          lng,
          price,
          duration,
          teacher,
        } = res.data

        setActDetails({
          name,
          type,
          maxAssistants,
          date,
          lat,
          lng,
          price,
          duration,
          teacher,
        })
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Switch>
        <Route
          path="/users/user/:id"
          render={(props) => <ProfilePage {...props} />}
        />
      </Switch>
      <Container>
        <h1>Detalles</h1>

        <Row className="justify-content-around">
          <Col md={6} style={{ overflow: 'hidden' }}>
            <article>
              <h2>{actDetails.name}</h2>
              <div>
                <p>{actDetails.type}</p>
                <hr />
                <br />
                <p>Nº máximo de asistentes: {actDetails.maxAssistants}</p>
                <p>Fecha y Hora {actDetails.date}</p>
                <p>Latitud: {actDetails.lat}</p>
                <p>Longitud: {actDetails.lng}</p>
                <hr />
                <br />
                <p>Precio: {actDetails.price}</p>
                <p>Duración: {actDetails.duration}</p>
                <p>
                  Profesor:
                  <Link to={`/users/user/${actDetails.teacher._id}`}>
                    <b>{actDetails.teacher.username}</b>
                  </Link>
                </p>
              </div>
            </article>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ActivityDetails
