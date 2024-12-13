/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import MapIcon from "@mui/icons-material/Map";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonBadge from "components/ArgonBadge";
import ArgonButton from "components/ArgonButton";

// React imports
import React, { useState } from "react";
import LeafletMap from "components/LeafletMap";

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

function MapModal({ isOpen, onClose, location, hotelName }) {
  // Convert location string to array of numbers
  const locationCoords = '9.832741158817356,8.894310679293955'.split(',').map(coord => parseFloat(coord.trim()));

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
        width: '80vw',
        maxWidth: '800px',
        height: '70vh',
        bgcolor: 'background.paper',
        borderRadius: '10px',
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.1)',
        p: 0,
        overflow: 'hidden'
      }}>
        <ArgonBox 
          p={2} 
          borderBottom="1px solid" 
          borderColor="rgb(226, 232, 240)"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <ArgonTypography variant="h6" fontWeight="medium">
            {hotelName} Location
          </ArgonTypography>
          <ArgonButton 
            variant="text" 
            color="primary"
            onClick={onClose}
            sx={{ minWidth: 'auto', p: 1 }}
          >
            <Icon sx={{ color: 'rgb(103, 116, 142)' }}>close</Icon>
          </ArgonButton>
        </ArgonBox>
        <Box sx={{ width: '100%', height: 'calc(100% - 60px)' }}>
          <LeafletMap 
            location={locationCoords} 
            name={hotelName} 
            style={{ height: '100%', width: '100%' }} 
          />
        </Box>
      </Box>
    </Modal>
  );
}

function LocationButton({ location, hospitalName }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ArgonButton
        variant="text"
        color="primary"
        onClick={() => setIsModalOpen(true)}
        sx={{ minWidth: 'auto' }}
      >
        <Icon sx={{ color: 'rgb(103, 116, 142)' }}>location_on</Icon>
      </ArgonButton>
      <MapModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        location={location}
        hospitalName={hospitalName}
      />
    </>
  );
}

const hotelsTableData = {
  columns: [
    { name: "hotel", align: "left" },
    { name: "type", align: "left" },
    { name: "license status", align: "center" },
    { name: "number of staff", align: "center" },
    { name: "paye tax status", align: "center" },
    { name: "expected income from paye", align: "center" },
    { name: "action", align: "center" },
    { name: "location", align: "center" },
  ],

  rows: [
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center">
          <ArgonBox mr={2}>
            <ArgonTypography variant="button" fontWeight="medium">
              PH
            </ArgonTypography>
          </ArgonBox>
          <ArgonTypography variant="button" fontWeight="medium">
            Plateau Hotel
          </ArgonTypography>
        </ArgonBox>
      ),
      type: (
        <ArgonBadge variant="gradient" badgeContent="STANDARD" color="info" size="xs" container />
      ),
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="RENEWED" color="success" size="xs" container />
      ),
      "number of staff": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          75
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="PAID" color="success" size="xs" container />
      ),
      "expected income from paye": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          2,500,000
        </ArgonTypography>
      ),
      action,
      location: <LocationButton location="9.8965,8.8583" hospitalName="Plateau Hotel" />,
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center">
          <ArgonBox mr={2}>
            <ArgonTypography variant="button" fontWeight="medium">
              ELIM
            </ArgonTypography>
          </ArgonBox>
          <ArgonTypography variant="button" fontWeight="medium">
            Elim Top Suites
          </ArgonTypography>
        </ArgonBox>
      ),
      type: (
        <ArgonBadge variant="gradient" badgeContent="LUXURY" color="primary" size="xs" container />
      ),
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="RENEWED" color="success" size="xs" container />
      ),
      "number of staff": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          120
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="PAID" color="success" size="xs" container />
      ),
      "expected income from paye": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          5,000,000
        </ArgonTypography>
      ),
      action,
      location: <LocationButton location="9.8965,8.8583" hospitalName="Elim Top Suites" />,
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center">
          <ArgonBox mr={2}>
            <ArgonTypography variant="button" fontWeight="medium">
              BI
            </ArgonTypography>
          </ArgonBox>
          <ArgonTypography variant="button" fontWeight="medium">
            Budget Inn
          </ArgonTypography>
        </ArgonBox>
      ),
      type: (
        <ArgonBadge variant="gradient" badgeContent="BUDGET" color="warning" size="xs" container />
      ),
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="EXPIRED" color="error" size="xs" container />
      ),
      "number of staff": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          40
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="UNPAID" color="error" size="xs" container />
      ),
      "expected income from paye": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          1,200,000
        </ArgonTypography>
      ),
      action,
      location: <LocationButton location="9.8965,8.8583" hospitalName="Budget Inn" />,
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center">
          <ArgonBox mr={2}>
            <ArgonTypography variant="button" fontWeight="medium">
              BC
            </ArgonTypography>
          </ArgonBox>
          <ArgonTypography variant="button" fontWeight="medium">
            BHHR Classic Hotel
          </ArgonTypography>
        </ArgonBox>
      ),
      type: (
        <ArgonBadge variant="gradient" badgeContent="STANDARD" color="info" size="xs" container />
      ),
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="RENEWED" color="success" size="xs" container />
      ),
      "number of staff": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          25
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="PAID" color="success" size="xs" container />
      ),
      "expected income from paye": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          1,800,000
        </ArgonTypography>
      ),
      action,
      location: <LocationButton location="9.8965,8.8583" hospitalName="BHHR Classic Hotel" />,
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center">
          <ArgonBox mr={2}>
            <ArgonTypography variant="button" fontWeight="medium">
              IG
            </ArgonTypography>
          </ArgonBox>
          <ArgonTypography variant="button" fontWeight="medium">
            Ikemba Guest House
          </ArgonTypography>
        </ArgonBox>
      ),
      type: (
        <ArgonBadge variant="gradient" badgeContent="GUEST HOUSE" color="info" size="xs" container />
      ),
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="PENDING" color="warning" size="xs" container />
      ),
      "number of staff": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          15
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="PENDING" color="warning" size="xs" container />
      ),
      "expected income from paye": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          950,000
        </ArgonTypography>
      ),
      action,
      location: <LocationButton location="9.8977,8.8597" hospitalName="Ikemba Guest House" />,
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center">
          <ArgonBox mr={2}>
            <ArgonTypography variant="button" fontWeight="medium">
              SG
            </ArgonTypography>
          </ArgonBox>
          <ArgonTypography variant="button" fontWeight="medium">
            Sharpe Guest House
          </ArgonTypography>
        </ArgonBox>
      ),
      type: (
        <ArgonBadge variant="gradient" badgeContent="GUEST HOUSE" color="info" size="xs" container />
      ),
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="EXPIRED" color="error" size="xs" container />
      ),
      "number of staff": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          18
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="UNPAID" color="error" size="xs" container />
      ),
      "expected income from paye": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          1,200,000
        </ArgonTypography>
      ),
      action,
      location: <LocationButton location="9.8988,8.8566" hospitalName="Sharpe Guest House" />,
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center">
          <ArgonBox mr={2}>
            <ArgonTypography variant="button" fontWeight="medium">
              AG
            </ArgonTypography>
          </ArgonBox>
          <ArgonTypography variant="button" fontWeight="medium">
            Ajalah Guest House
          </ArgonTypography>
        </ArgonBox>
      ),
      type: (
        <ArgonBadge variant="gradient" badgeContent="GUEST HOUSE" color="info" size="xs" container />
      ),
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="RENEWED" color="success" size="xs" container />
      ),
      "number of staff": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          12
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="PAID" color="success" size="xs" container />
      ),
      "expected income from paye": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          800,000
        </ArgonTypography>
      ),
      action,
      location: <LocationButton location="9.8955,8.8573" hospitalName="Ajalah Guest House" />,
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center">
          <ArgonBox mr={2}>
            <ArgonTypography variant="button" fontWeight="medium">
              SL
            </ArgonTypography>
          </ArgonBox>
          <ArgonTypography variant="button" fontWeight="medium">
            Samgamo Lodge
          </ArgonTypography>
        </ArgonBox>
      ),
      type: (
        <ArgonBadge variant="gradient" badgeContent="GUEST HOUSE" color="info" size="xs" container />
      ),
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="PENDING" color="warning" size="xs" container />
      ),
      "number of staff": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          20
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="PENDING" color="warning" size="xs" container />
      ),
      "expected income from paye": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          1,400,000
        </ArgonTypography>
      ),
      action,
      location: <LocationButton location="9.8944,8.8592" hospitalName="Samgamo Lodge" />,
    },
  ],
};

export default hotelsTableData;