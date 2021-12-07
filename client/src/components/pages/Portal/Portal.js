import React, {useState,useEffect,useContext} from 'react'
import ActivitiesService from "../../../services/activities.service"
import ActivityList from './ActivitiesList/ActivityList';
import SearchBar from "../Portal/SearchBar/SearchBar";
import {  Button, Modal } from "react-bootstrap";
import "./Portal.css"
import NewActivityForm from './ActivitiesList/NewActivityForm/NewActivityForm';
import ActivitiesFilter from "./ActivitiesList/ActivitiesFilter/ActivitiesFilter"

import UserContext from "../../../context/UserContext"


function Portal() {

const {loggedUser} = useContext(UserContext)

const service = new ActivitiesService();
const [activitiesList, setList] = useState([])
const [activitiesInitial, setListInitial] = useState([]);
const [showModal, setModal] = useState(false)



useEffect(() => {
    refreshActivities()
}, [])

const findActivity = (activity) => {
  let copy = activitiesInitial.filter((elm) =>  elm.name.toLowerCase().includes(activity.toLowerCase()) || elm.type.toLowerCase().includes(activity.toLowerCase()))
  ;

    setList(copy)

}

 const refreshActivities = () => {
   service
     .getAllActivities()
     .then((response) => {
       const activities = response.data;
       setList(activities)
       setListInitial(activities);
       
     })
     .catch((err) => console.log(err));
 };

  const openModal = () => {
    setModal(true)
  };

  const closeModal = () => {
    setModal(false);
  };


 
       


    return (
      <div className="portal-container">
        <div>
          {loggedUser.role === "TEACHER" ? (
            <Button onClick={openModal}>Crea una nueva actividad</Button>
          ) : (
            <Button onClick={openModal}>Buscar nuevas actividades</Button>
          )}

          <Modal show={showModal} backdrop="static" onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Nueva Actividad</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
                {loggedUser.role === "TEACHER" ? <NewActivityForm closeModal={closeModal} refreshActivities={refreshActivities} /> :
                 <ActivitiesFilter closeModal={closeModal} refreshActivities={refreshActivities} />

                }
             

             
            </Modal.Body>
          </Modal>

          <SearchBar searchActivity={findActivity}></SearchBar>
          <ActivityList activities={activitiesList} />
        </div>
      </div>
    );
}

export default Portal
