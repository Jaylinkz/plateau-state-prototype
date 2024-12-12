import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import PropTypes from "prop-types";

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function LeafletMap({ location, name, style }) {
  // Default coordinates for Nigeria
  const defaultPosition = [9.0820, 8.6753];
  
  return (
    <MapContainer
      center={defaultPosition}
      zoom={13}
      style={{ width: "100%", height: "100%", ...style }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {location && (
        <Marker position={location}>
          <Popup>{name}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

LeafletMap.propTypes = {
  location: PropTypes.arrayOf(PropTypes.number),
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
};

LeafletMap.defaultProps = {
  style: {},
};

export default LeafletMap;
