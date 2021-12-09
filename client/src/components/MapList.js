import React from 'react'
import { GoogleMap, LoadScript, Marker, Circle } from '@react-google-maps/api'

const containerStyle = {
  width: '400px',
  height: '400px',
}
const zoom = 13.5
const API_KEY = 'AIzaSyA2EY6nvc3be8-6agfTwW2PNHPH0GX3dg8'

function Map(props) {
  
  const center = {
    lat: props.location.coordinates[0],
    lng: props.location.coordinates[1],
  }
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        {props.activities.map(activity => {
            return(
                <Marker 
                    title={activity.name}
                    position={{
                        lat: activity.location.coordinates[0],
                        lng: activity.location.coordinates[1],
                    }}
                />
            )
        })}
        <Circle center={center} radius={2500} options={{ fillColor: "rgba(110, 134, 214, 0.404)" , strokeOpacity: 0.3, }} />
      </GoogleMap>
    </LoadScript>
  )
}
export default Map
