import React from 'react'
import Activity from './Activity/Activity';
import "./ActivitiesList.css"
import ActivityDetails from './Activity/ActivityDetails/ActivityDetails';
import { Switch, Route } from 'react-router-dom'

const ActivityList = (props) => {
    return (
      <>
        <main>
          <Switch>
            <Route
              path = "/activities/activity/:id"
              render = {(props) => <ActivityDetails {...props} />}
            />
          </Switch>
        </main>
        <div className="activitiesList-card">
          {props.activities.map(elem => <Activity elem = {elem}/>)}
        </div>
      </>
    )
}

export default ActivityList
