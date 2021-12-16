import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import mapStyles from './mapStyles'

const containerStyle = {
  width: '400px',
  height: '400px',
  border: '1px solid black',
}
const zoom = 12
const API_KEY = process.env.REACT_APP_API_KEY

const Map = (props) => {
  const center = {
    lat: props.location.coordinates[0],
    lng: props.location.coordinates[1],
  }
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        options={{
          styles: mapStyles,
        }}
      >
        <Marker
          position={center}
          icon={'https://img.icons8.com/ios-glyphs/30/000000/marker--v1.png'}
        />
      </GoogleMap>
    </LoadScript>
  )
}
export default Map
