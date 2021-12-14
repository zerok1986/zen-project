import React, { useContext } from "react";
import "./ProfileCard.css";
import UserContext from "../../../../context/UserContext";
import { Button } from "react-bootstrap";

const ProfileCard = (props) => {
  const { loggedUser } = useContext(UserContext);

  return (
    <div>
      <div className="user-card">
        {loggedUser.role === "GOD" && (
          <Button onClick={() => props.deleteUser(props.userDetails._id)} className="btn-create-fit" variant="primary">
            Eliminar
          </Button>
        )}
        <img src={props.userDetails.image} alt={props.name} />
        <br/>
        <br/>
        <h5>
          <strong>Nombre: </strong> {props.userDetails.name}
        </h5>
        <h6>
          <strong>Rol: </strong> {props.userDetails.role}
        </h6>
        <h6>
          <strong>Email: </strong>
          {props.userDetails.email}
        </h6>
        <br />
      </div>
    </div>
  );
};

export default ProfileCard;
