import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ActivitiesService from '../../../../../../services/activities.service'
const { formatDate } = require("../../../../../../utils")

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
        console.log(res)
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
    <Container>
      <h1>Detalles</h1>

      <Row className="justify-content-around">
        <Col md={6} style={{ overflow: "hidden" }}>
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
              <p>Precio: {actDetails.price}</p>
              <p>Duración: {actDetails.duration}</p>
              <p>
                Profesor: <b>{actDetails.teacher}</b>
              </p>
            </div>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default ActivityDetails
