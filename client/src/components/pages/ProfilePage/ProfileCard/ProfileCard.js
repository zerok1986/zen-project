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
          <Button onClick={() => props.deleteUser(props.userDetails._id)} className="btn-home" variant="primary">
            Eliminar
          </Button>
        )}
        <img src={props.userDetails.image} alt={props.name} />
        <br />
        <hr />
        <h5>
          <strong>Name: </strong> {props.userDetails.name}
        </h5>
        <h6>
          <strong>You are: </strong> {props.userDetails.role}
        </h6>
        <h6>
          <strong>Your email: </strong>
          {props.userDetails.email}
        </h6>
        <br />
      </div>
    </div>
  );
};

export default ProfileCard;
