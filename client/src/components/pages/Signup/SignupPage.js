import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import AuthService from "../../../services/auth.service";
import UserContext from "../../../context/UserContext";

const authService = new AuthService();

const SignupPage = (props) => {
  const [signupInfo, setSignupInfo] = useState({
    username: "",
    email: "",
    pwd: "",
    role: "",
  });
  const { storeUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    authService
      .signup(signupInfo.username, signupInfo.email, signupInfo.pwd, signupInfo.role)
      .then((response) => {
        storeUser(response.data);
        props.closeModal();
      })
      .catch((err) => console.error(err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    setSignupInfo({
      ...signupInfo,
      [name]: value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Nombre de usuario</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          value={signupInfo.username}
          name="username"
          type="text"
          placeholder="Elige un nombre de usuario"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          value={signupInfo.email}
          name="email"
          type="email"
          placeholder="email@email.com"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control onChange={handleInputChange} value={signupInfo.pwd} name="pwd" type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="role">
        <Form.Label>Tipo de perfil</Form.Label>
        <Form.Select
          name="role"
          type="text"
          onChange={handleInputChange}
          value={signupInfo.role}
          aria-label="Default select example"
        >
          <option>Selecciona tu perfil</option>
          <option value="ALUMNO">Alumno</option>
          <option value="PROFESOR">Profesor</option>
        </Form.Select>
      </Form.Group>

      <Button className="btn-home" variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
};

export default SignupPage;
