import React, { useState, useContext } from "react";
import { Navbar, Nav, Container, Modal } from "react-bootstrap";
import UserContext from "../../../context/UserContext";
import { Link } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import SignupPage from "../../pages/Signup/SignupPage";
import LoginPage from "../../pages/Login/LoginPage";
import "./Navbar.css";

const authService = new AuthService();

const Navigation = () => {
  const { loggedUser, storeUser } = useContext(UserContext);

  const [showModal, setModal] = useState(false);
  const [modalType, setType] = useState("");

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setType("");
  };

  const logout = () => {
    authService
      .logout()
      .then((response) => storeUser(null))
      .catch((err) => console.error(err));
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">NOMBRE ZEN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/home">
              Lista de actividades
            </Nav.Link>
            {loggedUser ? (
              <>
                <Nav.Link as={"span"} onClick={logout}>
                  Cerrar sesión
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  onClick={() => {
                    setType("Sign up");
                    openModal();
                  }}
                >
                  Registro
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    setType("Log in");
                    openModal();
                  }}
                >
                  Login
                </Nav.Link>
                {/* MODAL */}
                <Modal show={showModal} backdrop="static" onHide={closeModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>{modalType}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {modalType === "Sign up" ? <SignupPage closeModal={closeModal} /> : <LoginPage closeModal={closeModal} />}
                  </Modal.Body>
                </Modal>
                {/* MODAL */}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
