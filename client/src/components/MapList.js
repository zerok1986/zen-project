import React from "react";
import { GoogleMap, LoadScript, Marker, Circle } from "@react-google-maps/api";
import mapStyles from "./mapStyles";

const containerStyle = {
  width: "400px",
  height: "400px",
};
const zoom = 14;
const API_KEY = "AIzaSyA2EY6nvc3be8-6agfTwW2PNHPH0GX3dg8";

const Map = (props) => {
  const center = {
    lat: props.location.coordinates[0],
    lng: props.location.coordinates[1],
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        options={{
          styles: mapStyles,
        }}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      >
        {props.activities.map((activity) => {
          return (
            <Marker
              icon={"https://img.icons8.com/ios-glyphs/30/000000/marker--v1.png"}
              key={activity._id}
              title={activity.name}
              position={{
                lat: activity.location.coordinates[0],
                lng: activity.location.coordinates[1],
              }}
            />
          );
        })}
        <Circle
          center={center}
          radius={1250}
          options={{
            fillColor: "rgba(110, 134, 214, 0.404)",
            strokeOpacity: 0.3,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};
export default Map;
