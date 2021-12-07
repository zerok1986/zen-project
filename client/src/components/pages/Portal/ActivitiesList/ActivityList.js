import React from 'react'
import Activity from './Activity/Activity';
import "./ActivitiesList.css"

function ActivityList(props) {

    console.log(props)
    return (
      <div className="activitiesList-card">
      { props.activities.map(elem =><Activity elem= {elem}/>)}
      </div>
    );
}

export default ActivityList
