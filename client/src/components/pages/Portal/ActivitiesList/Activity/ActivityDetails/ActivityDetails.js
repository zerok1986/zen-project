import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ActivitiesService from '../../../../../../services/activities.service'
import UserContext from '../../../../../../context/UserContext'
import './ActivityDetails.css'
import Map from '../../../../../Map'

const { formatDate,formatDateFull } = require('../../../../../../utils')

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
    assistants : []
  })


  
  const {outDetailsClick, loggedUser} = useContext(UserContext)
  
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
          assistants
        })
      })
      .catch((err) => console.error(err))
  }, [])

  const updateAssistants = () => {
    const { id } = props.match.params;
    activitiesService.addParticipant(id).then((res) => setActDetails({ ...actDetails, assistants: res.data.assistants }));
  }

  const deleteParticipation = () => {
    const { id } = props.match.params;
    activitiesService.deleteParticipant(id)
    .then((res) => {
      setActDetails({...actDetails,assistants : res.data.assistants})
    });
  }
 

  return (
    <>
      <Container className="details-container">
        <Row className="justify-content-around">
          <Col md={6} style={{ overflow: "hidden" }}>
            <Col className="title-left">
              <Button className="btn-dark" onClick={outDetailsClick}>
                Volver
              </Button>
            </Col>
            <article>
              <h2>{actDetails.name}</h2>
              <div>
                <p>{actDetails.type}</p>
                <p>
                  <strong>Fecha:  </strong>
                  {formatDateFull(new Date(actDetails.date))}
                </p>
                <hr />

                <p>
                  {" "}
                  <strong>Nº máximo de asistentes:</strong> {actDetails.maxAssistants} <br></br>
                  <span>(Puestos disponibles: {actDetails.maxAssistants - actDetails.assistants.length})</span>
                </p>

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
          <Col>
            {actDetails.assistants.includes(loggedUser._id) ? (
              <Button className="btn-danger" onClick={() => deleteParticipation()}>
                Desapuntarse
              </Button>
            ) : (
              <Button onClick={() => updateAssistants(loggedUser)}>Apuntarse</Button>
            )}
          </Col>
        </Row>

        <Row className="map-container">
          <Map location={actDetails.location} />
        </Row>
      </Container>
    </>
  );
}

export default ActivityDetails
