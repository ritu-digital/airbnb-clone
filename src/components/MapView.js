import React from 'react';
import { useState } from 'react';
import '../MapView.css';
import ReactMapGL, { Marker } from 'react-map-gl';
import RoomIcon from '@material-ui/icons/Room';

const MapView = () => {
  const [viewport, setViewport] = useState({
    width: 600,
    height: 570,
    latitude: 20.5937,
    longitude: 78.9629,
    zoom: 3,
  });
  return (
    <div className='mapView'>
      <ReactMapGL
        // mapStyle='mapbox://styles/mapbox/dark-v9'
        mapboxApiAccessToken={
          'pk.eyJ1Ijoicml0dWRpZ2l0YWwiLCJhIjoiY2tyZnVtazJ6MGhjdjJ1bzBkM3ZtdmljNCJ9.dAUwe6wDH5K9gKUL6YKTVQ'
        }
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Marker
          latitude={22.5726}
          longitude={88.3639}
          offsetLeft={-20}
          offsetTop={-16}
        >
          <RoomIcon style={{ color: 'red' }} />
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default MapView;
