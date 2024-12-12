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
  
  // Handle location whether it's a string or array
  const coordinates = React.useMemo(() => {
    if (!location) return defaultPosition;
    if (Array.isArray(location)) return location;
    if (typeof location === 'string') {
      return location.split(',').map(coord => parseFloat(coord.trim()));
    }
    return defaultPosition;
  }, [location]);

  return (
    <MapContainer
      center={coordinates}
      zoom={13}
      style={{ width: "100%", height: "100%", ...style }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={coordinates}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
}

LeafletMap.propTypes = {
  location: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.string]),
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
};

LeafletMap.defaultProps = {
  style: {},
};

export default LeafletMap;
