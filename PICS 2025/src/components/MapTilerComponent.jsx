// MapTilerComponent.js
import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import "../components/css/MapTilerComponent.css";

const MapTilerComponent = () => {
  const initialCoordinates = { latitude: 31.70865725843599, longitude: 76.52734186721506 };
  const [viewport, setViewport] = useState({
    ...initialCoordinates,
    zoom: 15,
  });
  const [markerPosition, setMarkerPosition] = useState(initialCoordinates);
  const [showPopup, setShowPopup] = useState(false);
    // Function to handle marker drag
    const handleMarkerDrag = (event) => {
      const newLatitude = event.lngLat.lat;
      const newLongitude = event.lngLat.lng;
  
      // Update marker position
      setMarkerPosition({
        latitude: newLatitude,
        longitude: newLongitude,
      });
  
      // Update map viewport to follow marker
      setViewport((prev) => ({
        ...prev,
        latitude: newLatitude,
        longitude: newLongitude,
      }));
    setShowPopup(true); // Show the popup when marker is moved
  };

  const zoomIn = () => {
    setViewport((prev) => ({ ...prev, zoom: prev.zoom + 1 }));
  };

  // Zoom out function
  const zoomOut = () => {
    setViewport((prev) => ({ ...prev, zoom: prev.zoom - 1 }));
  };

  return (
    <div>
      <div className='mapContainer'>
      <Map
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        style={{ width: '100%', height: '380px' }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=MU8QvrpOmtlqN83iLfu0"
        mapboxAccessToken="MU8QvrpOmtlqN83iLfu0"
      >
        <Marker
          latitude={markerPosition.latitude}
          longitude={markerPosition.longitude}
          draggable
          onDragEnd={handleMarkerDrag}
        />

        {/* Popup showing location name and coordinates */}
        {showPopup && (
          <Popup
            latitude={markerPosition.latitude}
            longitude={markerPosition.longitude}
            onClose={() => setShowPopup(false)}
            closeOnClick={false}
            anchor="top"
          >
            <div>
              <h3>Selected Location</h3>
              <p>Latitude: {markerPosition.latitude.toFixed(4)}</p>
              <p>Longitude: {markerPosition.longitude.toFixed(4)}</p>
            </div>
          </Popup>
        )}
      </Map>
      </div>
      
      {/* Display coordinates below the map */}
      <div className="coordinates">
        <p>Latitude: {markerPosition.latitude.toFixed(6)}</p>
        <p>Longitude: {markerPosition.longitude.toFixed(6)}</p>
      </div>

      {/* Zoom Control Buttons */}
      <div className="zoom-buttons">
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut}>Zoom Out</button>
      </div>
    </div>
  );
};

export default MapTilerComponent;

// 31.70865725843599, 76.52734186721506
