import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Geocode from "react-geocode";
import { FormControl, FormGroup, InputLabel, Input, FormLabel, Select, MenuItem } from "@mui/material";

const ActivitiesFilter = (props) => {
  const [filterInfo, setFilterInfo] = useState({
    type: "",
    date: "",
    address: "",
    lat: "",
    lng: "",
  });

  const [confirmedAdress, setAdress] = useState(false);
  const [classWhite, setClass] = useState("btn-confirm-address-filter");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.closeModal();
    props.setUserLocation({
      coordinates: [filterInfo.lat, filterInfo.lng],
    });
    props.findActivityByFilter(filterInfo);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    setFilterInfo({
      ...filterInfo,
      [name]: value,
    });
  };

  Geocode.setApiKey("AIzaSyA2EY6nvc3be8-6agfTwW2PNHPH0GX3dg8");
  Geocode.setLanguage("es");
  Geocode.setRegion("es");
  Geocode.setLocationType("ROOFTOP");

  const transformAddress = (address) => {
    Geocode.fromAddress(address).then(
      (res) => {
        const { lat, lng } = res.results[0].geometry.location;
        setFilterInfo({ ...filterInfo, lat: lat, lng: lng });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const changeParticipation = () => {
    setAdress(true);
    setClass("btn-confirmed-address-filter");
  };

  const setStateNew = () => {
    transformAddress(filterInfo.address);
    changeParticipation();
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="type">
              <Form.Label>Tipo de clase</Form.Label>
              <Form.Select name="type" type="text" onChange={handleInputChange} value={filterInfo.type}>
                <option>Tipo</option>
                <option value="YOGA">Yoga</option>
                <option value="TAICHI">Taichí</option>
                <option value="MEDITACION">Meditación</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Fecha</Form.Label>
              <Form.Control onChange={handleInputChange} value={filterInfo.date} name="date" type="date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                placeholder="Plaza de España"
                value={filterInfo.address}
                name="address"
                type="text"
              />
            </Form.Group>
            <Button className={classWhite} onClick={() => setStateNew()}>
              {confirmedAdress ? "Dirección confirmada" : "Confirmar direccion"}
            </Button>
            <br></br>

            <Form.Group className="mb-3" controlId="lat" style={{ display: "none" }}>
              <Form.Label>Latitud</Form.Label>
              <Form.Control onChange={handleInputChange} value={filterInfo.lat} name="lat" type="number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lng" style={{ display: "none" }}>
              <Form.Label>Longitud</Form.Label>
              <Form.Control onChange={handleInputChange} value={filterInfo.lng} name="lng" type="number" />
            </Form.Group>

            <Button className="btn-create-fit" variant="primary" type="submit">
              Encontrar clases
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ActivitiesFilter;
