import React from 'react'
import './ProfileCard.css'
function ProfileCard(props) {
  return (
    <div>
      <div className="user-card">
        <img src={props.userDetails.image} alt={props.name} />
        <br />
        <hr />
        <h5>
          <strong>Name: </strong> {props.userDetails.name}
        </h5>
        <h6>
          <strong>You are: </strong> {props.userDetails.role}
        </h6>
        <h6>
          <strong>Your email: </strong>
          {props.userDetails.email}
        </h6>
        <br />
      </div>
    </div>
  )
}

export default ProfileCard
