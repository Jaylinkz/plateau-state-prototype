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

function LicenseStatus({ status }) {
  return (
    <ArgonBadge
      variant="gradient"
      badgeContent={status}
      color={status === "renewed" ? "success" : "error"}
      size="xs"
      container
      data-status={status} // Add a data attribute to store the status
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
      }}>
        <h2 id="map-modal-title">{hotelName} Location</h2>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBQHKZTwhPJX_9IevM5jKC8kmz0Tl0dGis&q=${location}`}
          allowFullScreen
        ></iframe>
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
      map: <LocationPointer location="9.8965,8.8583" hotelName="Hill Station Hotel" />,
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
      map: <LocationPointer location="9.9167,8.8833" hotelName="Crest Point Hotel" />,
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