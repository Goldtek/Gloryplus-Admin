import React from 'react';


const InfoWindow = (props) => {
    const { place } = props;
    const infoWindowStyle = {
      position: 'absolute',
      bottom: 10,
      left: '-75px',
      width: 220,
      backgroundColor: 'white',
      boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
      padding: 10,
      fontSize: 14,
      zIndex: 100,
    };
  
    return (
      <div style={infoWindowStyle}>
        <div style={{ fontSize: 14 }}>
          Coordinator: {place.coordinator}
        </div>
        <div style={{ fontSize: 12 }}>
          <span style={{ color: 'grey' }}>
            Address: {place.address}
            {' '}
          </span>
          
          <span style={{ color: 'lightgrey' }}>
            {String.fromCharCode(9733).repeat(5 - Math.floor(5))}
          </span>
        </div>
        <div style={{ fontSize: 12, color: 'grey' }}>
          phone: {place.phone}
        </div>
        <div style={{ fontSize: 12, color: 'green' }}>
          Open
        </div>
      </div>
    );
  };
  

  export default InfoWindow;