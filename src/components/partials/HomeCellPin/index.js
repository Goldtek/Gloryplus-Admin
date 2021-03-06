import React, { useState } from 'react';

import InfoWindow from '../infowindow';

const HomeCellPin = ({  setHomeCell, cell_id, place }) => {
    const [show, setVisibilty] = useState(false);
    return (
    <div className="pin" style={{zIndex: 2 }}>
      {show && <InfoWindow place={place} />} 
      <img src="img/cell.png" style={{ width: '30px', height: "30px"}} onClick={() => setHomeCell(cell_id)} onMouseEnter={() => setVisibilty(true)} onMouseLeave={() => setVisibilty(false)} />
    </div>
  );

}

export default HomeCellPin;