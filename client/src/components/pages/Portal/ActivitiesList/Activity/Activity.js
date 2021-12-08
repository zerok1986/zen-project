import React from 'react'
import './activity.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const { formatDate } = require("../../../../../utils");

function Activity(props) {
  let formattedDate = new Date(props.elem.date)
 formattedDate = formatDate(formattedDate)

  return (
    <div>
      <div className="activity-card">
        <h4>{props.elem.name}</h4>
        <h5>{props.elem.type}</h5>
        <h6>{formattedDate} </h6>
        <br />
        <Link to={`/activities/activity/${props.elem._id}`}>
          <Button variant="primary">Detalles</Button>
        </Link>
      </div>
    </div>
  );
}

export default Activity
