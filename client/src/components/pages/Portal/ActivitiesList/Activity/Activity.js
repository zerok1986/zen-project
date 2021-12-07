import React from 'react'
import './activity.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Activity(props) {
  return (
    <div>
      <div className="activity-card">
        <h4>{props.elem.name}</h4>
        <h6>{props.elem.type}</h6>
        <h8>{props.elem.date}</h8>
        <br />
        <Link to={`/activities/activity/${props.elem._id}`}>
          <Button variant="primary">Detalles</Button>
        </Link>
      </div>
    </div>
  )
}

export default Activity
