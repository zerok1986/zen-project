import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProfilePage from '../../../../ProfilePage/ProfilePage'
import { Switch, Route } from 'react-router-dom'
import ActivitiesService from '../../../../../../services/activities.service'
import UserContext from '../../../../../../context/UserContext'
const { formatDate } = require('../../../../../../utils')

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

  const {outDetailsClick} = useContext(UserContext)

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
                <p>Fecha y Hora {formatDate(new Date(actDetails.date))}</p>
                <p>Latitud: {actDetails.lat}</p>
                <p>Longitud: {actDetails.lng}</p>
                <hr />
                <br />
                <p>Precio: {actDetails.price} €</p>
                <p>Duración: {actDetails.duration} minutos</p>
                <p>
                  Profesor:
                  <Link to={`/users/user/${actDetails.teacher._id}`}>
                    <b>{actDetails.teacher.username}</b>
                  </Link>
                </p>
              </div>
            </article>
            <Button onClick={outDetailsClick}>
            Vuélvame a la lista
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ActivityDetails
