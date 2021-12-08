import React from 'react'

function ProfileCard(props) {
  console.log(props)
  return (
    <div>
      <div className="user-card">
        <img src={props.image} alt={props.name} />
        <br />
        <hr />
        <h4>{props.name}</h4>
        <h6>{props.role}</h6>
        <h6>{props.email}</h6>
        <br />
      </div>
    </div>
  )
}

export default ProfileCard
