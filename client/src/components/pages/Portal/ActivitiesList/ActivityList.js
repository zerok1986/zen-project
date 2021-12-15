import React, { useContext } from "react";
import UserContext from "../../../../context/UserContext";
import Activity from "./Activity/Activity";
import "./ActivitiesList.css";
import ActivityDetails from "./Activity/ActivityDetails/ActivityDetails";
import { Switch, Route } from "react-router-dom";
import MapList from "../../../MapList";
import { Button } from "react-bootstrap";

const ActivityList = (props) => {
  const { detailsClick } = useContext(UserContext);

  const userLocation = {
    coordinates: [props.userLocation.coordinates[0], props.userLocation.coordinates[1]],
  };

  return (
    <>
      {detailsClick ? (
        <section>
          <Switch>
            <Route path="/activities/activity/:id" render={(props) => <ActivityDetails {...props} />} />
          </Switch>
        </section>
      ) : (
        <>
          <div className="map-container">
            <MapList location={userLocation} activities={props.activities} activitiesInitial={props.activitiesInitial} />
          </div>
          <br></br>
          {props.activities.length !== props.activitiesInitial.length && (
            <Button className="btn-create-fit" onClick={() => props.clearFilters()}>
              <i className="fas fa-undo-alt" style={{ fontSize: "12px", marginRight: "0.2rem" }}></i>
              Lista completa
            </Button>
          )}
          <div className="activitiesList-card">
            {props.activities.map((elem) => (
              <Activity deleteActivity={props.deleteActivity} elem={elem} key={elem._id} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ActivityList;
