import React from 'react';
import GoogleMapReact from 'google-map-react'
import './map.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

import './map.css'

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">hello ha</p>
  </div>
)

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Home cell Locations </h2>
    {console.log('logs--->', process.env.REACT_APP_MAPKEY)}

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPKEY }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
         text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map

