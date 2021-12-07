import React from 'react'
import "./activity.css"
function Activity(props) {
    return (
      <div>
          <div className="activity-card">
          <h4>{props.elem.name}</h4>
          <h6>{props.elem.type}</h6>
          <h8>{props.elem.date}</h8>
        </div>
        
      </div>
    );
}

export default Activity
