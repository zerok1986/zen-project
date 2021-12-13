import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import UserService from "../../../services/user.service";
import UserContext from "../../../context/UserContext";
import UploadService from "../../../services/upload.services";
const userService = new UserService();

const EditProfileForm = (props) => {
  const [userInfo, setUserInfo] = useState({
    username: props.username,
    email: props.email,
    name: props.name,
    pwd: "",
    image: props.image,
  });
  const { storeUser } = useContext(UserContext);
  const { loggedUser } = useContext(UserContext);
  const uploadService = new UploadService();
  const handleSubmit = (e) => {
    e.preventDefault();

    userService
      .editUser(loggedUser._id, userInfo)
      .then((response) => {
        storeUser(response.data);
        props.closeModal();
        props.refreshUser();
      })
      .catch((err) => console.error(err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleUploadChange = (e) => {
    const uploadData = new FormData();
    uploadData.append("imageData", e.target.files[0]);

    uploadService
      .uploadImage(uploadData)
      .then((response) => {
        console.log(response);
        setUserInfo({ ...userInfo, image: response.data.cloudinary_url });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          value={userInfo.username}
          name="username"
          type="text"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          value={userInfo.name}
          name="name"
          type="text"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          value={userInfo.email}
          name="email"
          type="email"
        />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleInputChange} value={userInfo.pwd} name="pwd" type="password" placeholder="Introduce tu contraseña para editar" />
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="imageData">
        <Form.Label>Image</Form.Label>
        <Form.Control
          onChange={handleUploadChange}
          value={setUserInfo.image}
          name="image"
          type="file"
        />
      </Form.Group>

      <Button className="modal-button" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EditProfileForm;
