import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProfilePage from '../../../../ProfilePage/ProfilePage'
import { Switch, Route } from 'react-router-dom'
import ActivitiesService from '../../../../../../services/activities.service'
import UserContext from '../../../../../../context/UserContext'
import './ActivityDetails.css'
import Map from '../../../../../Map'

const { formatDate } = require('../../../../../../utils')

const activitiesService = new ActivitiesService()

const ActivityDetails = (props) => {
  const [actDetails, setActDetails] = useState({
    name: '',
    type: '',
    maxAssistants: '',
    date: '',
    location: {
      coordinates: [],
    },
    price: 0,
    duration: 0,
    teacher: '',
  })

  const { outDetailsClick } = useContext(UserContext)

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
          location,
          price,
          duration,
          teacher,
        } = res.data

        setActDetails({
          name,
          type,
          maxAssistants,
          date,
          location,
          price,
          duration,
          teacher,
        })
      })
      .catch((err) => console.error(err))
  }, [])

  console.log(actDetails)
  return (
    <>
      <Container className="details-container">
        <h1>Detalles de actividad</h1>

        <Row className="justify-content-around">
          <Col md={6} style={{ overflow: 'hidden' }}>
            <article>
              <h2>{actDetails.name}</h2>
              <div>
                <p>{actDetails.type}</p>
                <hr />
                <br />
                <p>
                  {' '}
                  <strong>Nº máximo de asistentes:</strong>{' '}
                  {actDetails.maxAssistants}
                </p>
                <p>
                  <strong>Fecha y Hora: </strong>
                  {formatDate(new Date(actDetails.date))}
                </p>
                <hr />
                <br />
                <p>
                  <strong>Precio: </strong> {actDetails.price} €
                </p>
                <p>
                  <strong>Duración: </strong>
                  {actDetails.duration} minutos
                </p>
                <p>
                  <strong> Profesor: </strong>
                  <Link to={`/users/user/${actDetails.teacher._id}`}>
                    <b>{actDetails.teacher.username}</b>
                  </Link>
                </p>
              </div>
            </article>
          </Col>
        </Row>
        <Row className="back-button">
          <Button onClick={outDetailsClick}>Volver</Button>
        </Row>
        <Row className="map-container">
          <Map location={actDetails.location} />
        </Row>
      </Container>
    </>
  )
}

export default ActivityDetails
