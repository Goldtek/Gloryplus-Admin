import React from 'react';
import GoogleMapReact from 'google-map-react'
import './map.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

import './map.css'


const LocationPin = ({ text }) => (
  <div className="pin">
    {/* <Icon icon={locationIcon} className="pin-icon" /> */}
    <img src="img/cell.png" style={{ width: '40px', height: "40px"}} />
  </div>
)

const Map = ({ locations, zoomLevel, currentLocation }) => (
  <div className="map" style={{marginBottom: '20px' }}>
    <h2 className="map-h2"> GloryPlus Home cell Locations </h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPKEY }}
        defaultCenter={currentLocation}
        defaultZoom={zoomLevel}
      >
          {locations.map(location => (
              <LocationPin
              lat={location.lat}
              lng={location.lng}
             text={location.address}
            />
          ))}
        
      </GoogleMapReact>
    </div>
  </div>
)

export default Map

