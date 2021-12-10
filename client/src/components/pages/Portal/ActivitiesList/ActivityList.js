import React, { useContext } from 'react'
import UserContext from '../../../../context/UserContext'
import Activity from './Activity/Activity'
import './ActivitiesList.css'
import ActivityDetails from './Activity/ActivityDetails/ActivityDetails'
import { Switch, Route } from 'react-router-dom'
import MapList from '../../../MapList'

const ActivityList = (props) => {
  const { detailsClick } = useContext(UserContext)

  console.log(props.userLocation)

  const userLocation = {
    coordinates: [props.userLocation.coordinates[0], props.userLocation.coordinates[1]]
  }

  return (
    <>
      {detailsClick ? (
        <section>
          <Switch>
            <Route
              path="/activities/activity/:id"
              render={(props) => <ActivityDetails {...props} />}
            />
          </Switch>
        </section>
      ) : (
        <>
          <div className="map-container">
            <MapList location={userLocation} activities={props.activities} />
          </div>
          <div className="activitiesList-card">
            {props.activities.map((elem) => (
              <Activity elem={elem} key={elem._id} />
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default ActivityList
