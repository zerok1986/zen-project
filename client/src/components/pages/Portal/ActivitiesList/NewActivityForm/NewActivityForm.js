import React, { useState, useContext } from "react";
import Geocode from "react-geocode";
import UserContext from "../../../../../context/UserContext";
import { Form, Button } from "react-bootstrap";
import ActivitiesService from "../../../../../services/activities.service";
import "./NewActivityForm.css";
const activitiesService = new ActivitiesService();

const NewActivityForm = (props) => {
  const { loggedUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    maxAssistants: "",
    date: "",
    address: "",
    lat: "",
    lng: "",
    price: 0,
    duration: 0,
    teacher: loggedUser,
  });
  const [confirmedAdress, setAdress] = useState(false);
  const [classWhite, setClass] = useState("btn-create-fit");

  const handleChange = (e) => {
    let { name, value } = e.currentTarget;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    activitiesService
      .createActivity(formData)
      .then((res) => {
        props.closeModal();
        props.refreshActivities();
      })
      .catch((err) => console.error(err));
  };

  Geocode.setApiKey("AIzaSyA2EY6nvc3be8-6agfTwW2PNHPH0GX3dg8");
  Geocode.setLanguage("es");
  Geocode.setRegion("es");
  Geocode.setLocationType("ROOFTOP");

  const transformAddress = (address) => {
    Geocode.fromAddress(address).then(
      (res) => {
        const { lat, lng } = res.results[0].geometry.location;
        setFormData({ ...formData, lat: lat, lng: lng });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const changeParticipation = () => {
    setAdress(true);
    setClass("btn-create-green");
  };
  const setStateNew = () => {
    transformAddress(formData.address);
    changeParticipation();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control onChange={handleChange} value={formData.name} name="name" type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="type">
        <Form.Label>Tipo de Actividad</Form.Label>
        <Form.Select name="type" type="text" onChange={handleChange} value={formData.type} className="small-input">
          <option>Actividad</option>
          <option value="YOGA">Yoga</option>
          <option value="TAICHI">Taichí</option>
          <option value="MEDITACION">Meditación</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="maxAssistants">
        <Form.Label>Nº máximo de asistentes</Form.Label>
        <Form.Control onChange={handleChange} value={formData.maxAssistants} name="maxAssistants" type="number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Fecha</Form.Label>
        <Form.Control onChange={handleChange} value={formData.date} name="date" type="datetime-local" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Dirección</Form.Label>
        <Form.Control onChange={handleChange} value={formData.address} name="address" type="text" />
      </Form.Group>
      <Button className={classWhite} onClick={() => setStateNew()}>
        {confirmedAdress ? "Dirección confirmada" : "Confirmar direccion"}
      </Button>

      <Form.Group className="mb-3" controlId="lat" style={{ display: "none" }}>
        <Form.Label>Latitud</Form.Label>
        <Form.Control onChange={handleChange} value={formData.lat} name="lat" type="number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lng" style={{ display: "none" }}>
        <Form.Label>Longitud</Form.Label>
        <Form.Control onChange={handleChange} value={formData.lng} name="lng" type="number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Precio</Form.Label>
        <Form.Control onChange={handleChange} value={formData.price} name="price" type="number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="duration">
        <Form.Label>Duración</Form.Label>
        <Form.Control onChange={handleChange} value={formData.duration} name="duration" type="number" />
      </Form.Group>

      <Button className="btn-home" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewActivityForm;
