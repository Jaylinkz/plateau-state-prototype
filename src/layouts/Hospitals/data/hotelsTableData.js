/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonBadge from "components/ArgonBadge";
import { useState } from "react";

// Leaflet components for map
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function LicenseStatus({ status }) {
  return (
    <ArgonBadge
      variant="gradient"
      badgeContent={status}
      color={status === "renewed" ? "success" : "error"}
      size="xs"
      container
    />
  );
}

function PayeStatus({ status }) {
  return (
    <ArgonBadge
      variant="gradient"
      badgeContent={status}
      color={status === "paid" ? "success" : "error"}
      size="xs"
      container
    />
  );
}

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

function MapModal({ isOpen, onClose, location, hotelName }) {
  const [latitude, longitude] = '9.8751192878176,8.88407860998505'.split(',').map(Number);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="map-modal-title"
      aria-describedby="map-modal-description"
    >
      <Box sx={{
       position: 'absolute',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
       width: 600,
       height: 450,
       bgcolor: 'background.paper',
       border: '2px solid #000',
       boxShadow: 24,
       p: 4,
       display: 'flex',
       flexDirection: 'column'
      }}>
        <ArgonTypography
          variant="h6" // You can change this to h5, h4, etc. based on your design
          fontWeight="bold" // Make the font bold
          color="primary" // Change the color to your theme's primary color
          sx={{ marginBottom: 2 }} // Add some margin below the title
          id="map-modal-title"
        >{hotelName} Location</ArgonTypography>
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[latitude, longitude]}>
            <Popup>{hotelName}</Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Modal>
  );
}

function LocationPointer({ location, hotelName }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <LocationOnIcon />
      </IconButton>
      <MapModal
        isOpen={isModalOpen}
        onClose={handleClose}
        location={location}
        hotelName={hotelName}
      />
    </>
  );
}

const hotelsTableData = {
  columns: [
    { name: "hotel", align: "left" },
    { name: "location", align: "left" },
    { name: "license status", align: "center" },
    { name: "capacity", align: "center" },
    { name: "paye tax status", align: "center" },
    { name: "action", align: "center" },
    { name: "map", align: "center" },
  ],

  rows: [
    {
      hotel: [
        <ArgonBox display="flex" alignItems="center" key="HH">
          <ArgonTypography variant="button" fontWeight="bold">
            HH
          </ArgonTypography>
        </ArgonBox>,
        "Hill Station Hotel"
      ],
      location: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          Jos, Plateau State
        </ArgonTypography>
      ),
      "license status": <LicenseStatus status="renewed" />,
      capacity: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          150 rooms
        </ArgonTypography>
      ),
      "paye tax status": <PayeStatus status="paid" />,
      action,
      map: <LocationPointer location="9.910042127796425,8.87883832162263" hotelName="Hill Station Hotel" />,
    },
    {
      hotel: [
        <ArgonBox display="flex" alignItems="center" key="CP">
          <ArgonTypography variant="button" fontWeight="bold">
            CP
          </ArgonTypography>
        </ArgonBox>,
        "Crest Point Hotel"
      ],
      location: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          Jos, Plateau State
        </ArgonTypography>
      ),
      "license status": <LicenseStatus status="expired" />,
      capacity: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          100 rooms
        </ArgonTypography>
      ),
      "paye tax status": <PayeStatus status="unpaid" />,
      action,
      map: <LocationPointer location="9.8751192878176,8.88407860998505" hotelName="Crest Point Hotel" />,
    },
    {
      hotel: [
        <ArgonBox display="flex" alignItems="center" key="LV">
          <ArgonTypography variant="button" fontWeight="bold">
            LV
          </ArgonTypography>
        </ArgonBox>,
        "Lamingo Valley Hotel"
      ],
      location: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          Jos, Plateau State
        </ArgonTypography>
      ),
      "license status": <LicenseStatus status="renewed" />,
      capacity: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          80 rooms
        </ArgonTypography>
      ),
      "paye tax status": <PayeStatus status="paid" />,
      action,
      map: <LocationPointer location="9.9000,8.8667" hotelName="Lamingo Valley Hotel" />,
    },
    {
      hotel: [
        <ArgonBox display="flex" alignItems="center" key="RH">
          <ArgonTypography variant="button" fontWeight="bold">
            RH
          </ArgonTypography>
        </ArgonBox>,
        "Rayfield Resort Hotel"
      ],
      location: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          Jos, Plateau State
        </ArgonTypography>
      ),
      "license status": <LicenseStatus status="renewed" />,
      capacity: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          120 rooms
        </ArgonTypography>
      ),
      "paye tax status": <PayeStatus status="paid" />,
      action,
      map: <LocationPointer location="9.8833,8.8500" hotelName="Rayfield Resort Hotel" />,
    },
    {
      hotel: [
        <ArgonBox display="flex" alignItems="center" key="PH">
          <ArgonTypography variant="button" fontWeight="bold">
            PH
          </ArgonTypography>
        </ArgonBox>,
        "Plateau Hotel"
      ],
      location: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          Jos, Plateau State
        </ArgonTypography>
      ),
      "license status": <LicenseStatus status="expired" />,
      capacity: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          200 rooms
        </ArgonTypography>
      ),
      "paye tax status": <PayeStatus status="unpaid" />,
      action,
      map: <LocationPointer location="9.9167,8.9000" hotelName="Plateau Hotel" />,
    },
  ],
};

export default hotelsTableData;