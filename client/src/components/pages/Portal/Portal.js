import React, {useState,useEffect} from 'react'
import ActivitiesService from "../../../services/activities.service"
import ActivityList from './ActivitiesList/ActivityList';
import SearchBar from "../Portal/SearchBar/SearchBar";
import {  Button, Modal } from "react-bootstrap";
import "./Portal.css"

function Portal() {
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
          <Button onClick={openModal}>Crea una nueva montaña rusa</Button>
            
          <Modal show={showModal} backdrop="static" onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Nueva Coaster</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h1>Hola</h1>
            </Modal.Body>
          </Modal>

          <SearchBar searchActivity={findActivity}></SearchBar>
          <ActivityList activities={activitiesList} />
        </div>
      </div>
    );
}

export default Portal
