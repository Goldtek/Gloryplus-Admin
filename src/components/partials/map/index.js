import React from 'react';
import GoogleMapReact from 'google-map-react'
import './map.css'
import lodash from 'lodash';

import InfoWindow from '../infowindow';
import './map.css'


const HomeCellPin = ({ text, setHomeCell, cell_id }) => (
  <div className="pin" style={{zIndex: 2 }}>
    <img src="img/cell.png" style={{ width: '30px', height: "30px"}} onClick={() => setHomeCell(cell_id)} />
  </div>
)

const UserPin = ({ text,  }) => (
    <div className="pin" style={{zIndex: 5 }}>
      <img src="img/userpin.png" style={{ width: '50px', height: "50px"}} />
    </div>
)

// Return map bounds based on list of places
const getMapBounds = (map, maps, places) => {
    const bounds = new maps.LatLngBounds();
    console.log('places', places)
    places.forEach((place) => {
      bounds.extend(new maps.LatLng(
        place.lat,
        place.lng,
      ));
    });
    return bounds;
  };
  
  // Re-center map when resizing the window
  const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
      });
    });
  };
  
  // Fit map to its bounds after the api is loaded
  const apiIsLoaded = (map, maps, places) => {
      
    // Get bounds by our places
    const bounds = getMapBounds(map, maps, places);
    // Fit map to bounds
    map.fitBounds(bounds);
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);
  };

 


  const Marker = ({ show, place }) => {
    const markerStyle = {
      border: '1px solid white',
      borderRadius: '50%',
      height: 10,
      width: 10,
      backgroundColor: show ? 'red' : 'blue',
      cursor: 'pointer',
      zIndex: 10,
    };

    return (
        <>
          <div style={markerStyle} />
          {show && <InfoWindow place={place} />}
        </>
      );
    };


    const Map = ({ locations, zoomLevel, currentLocation, setHomeCell }) => {
    console.log('current location', currentLocation);
    return (
      <div className="map" style={{marginBottom: '20px' }}>
          <h2 className="map-h2"> GloryPlus Home cell Locations </h2>

          <div className="google-map">
          {!lodash.isEmpty(locations) && (
          <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.REACT_APP_MAPKEY, libraries: ['visualization'] }}
              center={currentLocation}
              defaultZoom={zoomLevel}
              // yesIWantToUseGoogleMapApiInternals={true} 
          >

                <UserPin
                      key="xoxo"
                  lat={currentLocation.lat}
                  lng={currentLocation.lng}
                />

              {locations.map((location, index) => (
                  <HomeCellPin
                  key={index}
                  lat={location.lat}
                  lng={location.lng}
                  setHomeCell={setHomeCell}
                  cell_id={location.id}
                  />
              ))}
              
          </GoogleMapReact>
          )}
          </div>
      </div>
    )
    }

    export default Map

