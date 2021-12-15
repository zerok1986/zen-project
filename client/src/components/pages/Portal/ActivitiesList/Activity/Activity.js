import React, { useContext } from 'react'
import UserContext from '../../../../../context/UserContext'
import './activity.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const { formatDate, formatDateHour } = require('../../../../../utils')

const Activity = (props) => {
  let formattedDate = new Date(props.elem.date)
  formattedDate = formatDate(formattedDate)
  let formattedHour = formatDateHour(new Date(props.elem.date))

  const { setDetailsClick } = useContext(UserContext)
  const { loggedUser } = useContext(UserContext)
  return (
    <div>
      <div className="activity-card">
        <div className="photo-content">
          <img src={props.elem.teacher.image} alt="imageTeacher" />
          <h5 className="teacher-name">{props.elem.teacher.name}</h5>
        </div>
        <div className="info-content">
          <div>
            <h5 className="activity-name">{props.elem.name}</h5>
            <h6>{props.elem.type}</h6>
            <div className="date-content">
              <h6 className="date-titles">
                <i className="fas fa-calendar-week"></i>
                {formattedDate}
              </h6>
              <h6 className="date-titles">
                <i className="fas fa-clock"></i>
                {formattedHour}
              </h6>
            </div>
          </div>
          <div className="content-bottom-activity">
            <h6>{props.elem.price} €</h6>
            <Link to={`/activities/activity/${props.elem._id}`}>
              <Button
                className="btn-details-activity details-activity"
                onClick={setDetailsClick}
                variant="primary"
              >
                Detalles
              </Button>
              {loggedUser.role === 'GOD' && (
                <Button
                  className="btn-home"
                  onClick={() => props.deleteActivity(props.elem._id)}
                  variant="primary"
                >
                  Eliminar
                </Button>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity
