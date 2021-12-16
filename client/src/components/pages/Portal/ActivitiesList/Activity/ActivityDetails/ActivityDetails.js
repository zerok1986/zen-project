import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ActivitiesService from '../../../../../../services/activities.service'
import UserContext from '../../../../../../context/UserContext'
import './ActivityDetails.css'
import Map from '../../../../../Map'

const { formatDateFull } = require('../../../../../../utils')

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
    assistants: [],
  })

  const { outDetailsClick, loggedUser, showText } = useContext(UserContext)

  useEffect(() => {
    document.querySelector('.mapDetails-container').style.display = 'flex'

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
          assistants,
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
          assistants,
        })
      })
      .catch((err) => showText(err.response.data.message))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateAssistants = () => {
    const { id } = props.match.params
    activitiesService
      .addParticipant(id)
      .then((res) =>
        setActDetails({ ...actDetails, assistants: res.data.assistants })
      )
      .catch((err) => showText(err.response.data.message))
  }

  const deleteParticipation = () => {
    const { id } = props.match.params
    activitiesService
      .deleteParticipant(id)
      .then((res) => {
        setActDetails({ ...actDetails, assistants: res.data.assistants })
      })
      .catch((err) => showText(err.response.data.message))
  }

  return (
    <>
      <Container className="details-container">
        <Row className="justify-content-around">
          <Col md={6} style={{ overflow: 'hidden' }}>
            <Col className="title-left">
              <Button className="btn-create" onClick={outDetailsClick}>
                Volver a la lista
              </Button>
            </Col>
            <article>
              <h2>{actDetails.name}</h2>
              <div>
                <p>{actDetails.type}</p>
                <p>{formatDateFull(new Date(actDetails.date))}</p>
                <p>
                  {' '}
                  <strong>Nº máximo de asistentes:</strong>{' '}
                  {actDetails.maxAssistants} <br></br>
                  <span>
                    (Puestos disponibles:{' '}
                    {actDetails.maxAssistants - actDetails.assistants.length})
                  </span>
                </p>
                <hr />

                <p className="atributes-details">
                  <strong>Precio: </strong> {actDetails.price} €
                </p>
                <p className="atributes-details">
                  <strong>Duración: </strong>
                  {actDetails.duration} minutos
                </p>
                <p className="atributes-details">
                  <strong> Profesor: </strong>
                  <Link to={`/users/user/${actDetails.teacher._id}`}>
                    <b>{actDetails.teacher.name}</b>
                  </Link>
                </p>
              </div>
            </article>
          </Col>
        </Row>
        <Row className="back-button">
          <Col>
            {actDetails.assistants.includes(loggedUser._id) ? (
              <Button
                className="btn-create-red"
                onClick={() => deleteParticipation()}
              >
                Desapuntarse
              </Button>
            ) : actDetails.assistants.length < actDetails.maxAssistants ? (
              <Button
                className="btn-create"
                onClick={() => updateAssistants(loggedUser)}
              >
                Apuntarse
              </Button>
            ) : (
              <span style={{ color: 'red' }}>Actividad llena</span>
            )}
          </Col>
        </Row>
        {actDetails.location.coordinates?.length && (
          <Row className="mapDetails-container">
            <Map location={actDetails.location} />
          </Row>
        )}
      </Container>
    </>
  )
}

export default ActivityDetails
