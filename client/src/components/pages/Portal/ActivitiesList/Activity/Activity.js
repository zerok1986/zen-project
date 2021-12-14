import React, { useContext } from "react";
import UserContext from "../../../../../context/UserContext";
import "./activity.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const { formatDateFull } = require("../../../../../utils");

const Activity = (props) => {
  let formattedDate = new Date(props.elem.date);
  formattedDate = formatDateFull(formattedDate);

  const { setDetailsClick } = useContext(UserContext);
  const { loggedUser } = useContext(UserContext);

  return (
    <div>
      <div className="activity-card">
        <h4>{props.elem.name}</h4>
        <h5>{props.elem.type}</h5>
        <h6>{formattedDate} </h6>

        <br />
        <Link to={`/activities/activity/${props.elem._id}`}>
          <Button className="btn-home" onClick={setDetailsClick} variant="primary">
            Detalles
          </Button>
          {(loggedUser.role === "GOD" || loggedUser._id === props.elem.teacher._id) && (
            <Button className="btn-home" onClick={() => props.deleteActivity(props.elem._id)} variant="primary">
              Eliminar
            </Button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Activity;
