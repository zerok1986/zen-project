import React, { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import ActivitiesService from "../../../services/activities.service";
import ActivityList from "./ActivitiesList/ActivityList";
import SearchBar from "../Portal/SearchBar/SearchBar";
import { Button, Modal } from "react-bootstrap";
import "./Portal.css";
import NewActivityForm from "./ActivitiesList/NewActivityForm/NewActivityForm";
import ActivitiesFilter from "./ActivitiesList/ActivitiesFilter/ActivitiesFilter";
import UserContext from "../../../context/UserContext";
import ProfilePage from "../ProfilePage/ProfilePage";
const { formatDate } = require("../../../utils");

const service = new ActivitiesService();

const Portal = () => {
  const { loggedUser } = useContext(UserContext);
  const [activitiesList, setList] = useState([]);
  const [activitiesInitial, setListInitial] = useState([]);
  const [showModal, setModal] = useState(false);
  const [userLocation, setUserLocation] = useState({
    coordinates: [40.416626, -3.704652],
  });
  const { detailsClick } = useContext(UserContext);

  useEffect(() => {
    refreshActivities();
  }, []);

  const findActivity = (activity) => {
    let copy = activitiesInitial.filter(
      (elm) => elm.name.toLowerCase().includes(activity.toLowerCase()) || elm.type.toLowerCase().includes(activity.toLowerCase())
    );
    setList(copy);
  };

  const findActivityByFilter = (filterInputs) => {
    let maxLat = filterInputs.lat + 0.00889682909;
    let minLat = filterInputs.lat - 0.00889682909;
    let maxLng = filterInputs.lng + 0.00674932797;
    let minLng = filterInputs.lng - 0.00674932797;
    console.log("Filterinputs", filterInputs);
    console.log("UserLocation", userLocation.coordinates);
    console.log("ActivitiesInitial", activitiesInitial);

    let copy = activitiesInitial.filter((elem) => {
      if (!filterInputs.type && !filterInputs.date && !filterInputs.address) {
        //000
        return elem;
      } else if (!filterInputs.type && !filterInputs.date && filterInputs.address) {
        //001
        return (
          elem.location.coordinates[0] <= maxLat &&
          elem.location.coordinates[0] >= minLat &&
          elem.location.coordinates[1] <= maxLng &&
          elem.location.coordinates[1] >= minLng
        );
      } else if (!filterInputs.type && filterInputs.date && !filterInputs.address) {
        //010
        return formatDate(new Date(elem.date)) === formatDate(new Date(filterInputs.date));
      } else if (!filterInputs.type && filterInputs.date && filterInputs.address) {
        //011
        return (
          formatDate(new Date(elem.date)) === formatDate(new Date(filterInputs.date)) &&
          elem.location.coordinates[0] <= maxLat &&
          elem.location.coordinates[0] >= minLat &&
          elem.location.coordinates[1] <= maxLng &&
          elem.location.coordinates[1] >= minLng
        );
      } else if (filterInputs.type && !filterInputs.date && !filterInputs.address) {
        //100
        return elem.type === filterInputs.type;
      } else if (filterInputs.type && !filterInputs.date && filterInputs.address) {
        //101
        return (
          elem.type === filterInputs.type &&
          elem.location.coordinates[0] <= maxLat &&
          elem.location.coordinates[0] >= minLat &&
          elem.location.coordinates[1] <= maxLng &&
          elem.location.coordinates[1] >= minLng
        );
      } else if (filterInputs.type && filterInputs.date && !filterInputs.address) {
        //110
        return elem.type === filterInputs.type && formatDate(new Date(elem.date)) === formatDate(new Date(filterInputs.date));
      } else {
        //111
        return (
          elem.type === filterInputs.type &&
          formatDate(new Date(elem.date)) === formatDate(new Date(filterInputs.date)) &&
          elem.location.coordinates[0] <= maxLat &&
          elem.location.coordinates[0] >= minLat &&
          elem.location.coordinates[1] <= maxLng &&
          elem.location.coordinates[1] >= minLng
        );
      }
    });

    setList(copy);
  };

  const refreshActivities = () => {
    service
      .getAllActivities()
      .then((response) => {
        const activities = response.data;
        setList(activities);
        setListInitial(activities);
      })
      .catch((err) => console.error(err));
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="portal-container">
      <div>
        {!detailsClick &&
          (loggedUser.role === "TEACHER" ? (
            <>
              <Button onClick={openModal}>Crea una nueva actividad</Button>
            </>
          ) : (
            <Button onClick={openModal}>Buscar nuevas actividades</Button>
          ))}

        {detailsClick && (
          <Switch>
            <Route path="/users/user/:id" render={(props) => <ProfilePage {...props} />} />
          </Switch>
        )}

        <Modal show={showModal} backdrop="static" onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Nueva Actividad</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {loggedUser.role === "TEACHER" ? (
              <NewActivityForm closeModal={closeModal} refreshActivities={refreshActivities} />
            ) : (
              <ActivitiesFilter
                findActivityByFilter={findActivityByFilter}
                closeModal={closeModal}
                refreshActivities={refreshActivities}
                setUserLocation={setUserLocation}
              />
            )}
          </Modal.Body>
        </Modal>

        {!detailsClick && <SearchBar searchActivity={findActivity}></SearchBar>}
        <ActivityList activities={activitiesList} userLocation={userLocation} />
      </div>
    </div>
  );
};

export default Portal;
