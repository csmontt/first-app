import React, {useRef, useEffect} from 'react';
import { Map, TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';

const defaultCenter = [51.505, -0.09];
const defaulZoom = 9;

function LeafletMap () {
  // in order to get access to the map instance we create a mapRef and we aplly it to the map
  // MapContainer ref={mapRef}
  const mapRef = useRef();
  
  // we use a useEffect hook so we can grab the map instance and access the map
  useEffect(() => {
    const {current = {} } = mapRef;
    const {LeafletElement: map} = current;
  }, []);

  return (
    <MapContainer ref={mapRef} center={defaultCenter} zoom={defaulZoom} fullscreenControl={true}>
      <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}


export default LeafletMap;