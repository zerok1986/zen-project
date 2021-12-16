import React, { useState, useContext } from 'react'
import {
  GoogleMap,
  LoadScript,
  Marker,
  Circle,
  InfoWindow,
} from '@react-google-maps/api'
import { Link } from 'react-router-dom'
import mapStyles from './mapStyles'
import UserContext from '../context/UserContext'

const containerStyle = {
  width: '400px',
  height: '400px',
  border: '1px solid black',
}
const zoom = 14
const API_KEY = process.env.REACT_APP_API_KEY

const MapList = (props) => {
  const [selectedActivity, setSelectedActivity] = useState(null)

  const { setDetailsClick } = useContext(UserContext)
  console.log(props.location.coordinates)
  const center = {
    lat: Number(props.location.coordinates[0]),
    lng: Number(props.location.coordinates[1]),
  }

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
        {props.activities.length !== props.activitiesInitial.length && (
          <Circle
            center={center}
            radius={1250}
            options={{
              fillColor: 'rgba(110, 134, 214, 0.404)',
              strokeOpacity: 0.3,
            }}
          />
        )}
        {props.activities.map((activity) => {
          return (
            <Marker
              icon={
                'https://img.icons8.com/ios-glyphs/30/000000/marker--v1.png'
              }
              key={activity._id}
              title={activity.name}
              position={{
                lat: activity.location.coordinates[0],
                lng: activity.location.coordinates[1],
              }}
              onClick={() => {
                setSelectedActivity(activity)
              }}
            />
          )
        })}

        {selectedActivity && (
          <InfoWindow
            position={{
              lat: selectedActivity.location.coordinates[0],
              lng: selectedActivity.location.coordinates[1],
            }}
            onCloseClick={() => {
              setSelectedActivity(null)
            }}
          >
            <span>
              <Link
                className="sandwich"
                onClick={() => setDetailsClick()}
                to={`/activities/activity/${selectedActivity._id}`}
              >
                {selectedActivity.name}
              </Link>
            </span>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  )
}
export default MapList
