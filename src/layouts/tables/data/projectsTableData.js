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

// React imports
import React, { useState } from "react";

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

function MapModal({ isOpen, onClose, location, hospitalName }) {
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
        <h2 id="map-modal-title">{hospitalName} Location</h2>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${location}`}
          allowFullScreen
        ></iframe>
      </Box>
    </Modal>
  );
}

const LocationButton = React.memo(({ location, hospitalName }) => {
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
        hospitalName={hospitalName}
      />
    </>
  );
});

LocationButton.displayName = 'LocationButton';

const hospitalsTableData = {
  columns: [
    { name: "hospital", align: "left" },
    { name: "lga", align: "left" },
    { name: "license status", align: "center" },
    { name: "number of staff", align: "center" },
    { name: "paye tax status", align: "center" },
    { name: "action", align: "center" },
    { name: "location", align: "center" },
  ],

  rows: [
    {
      hospital: [
        <ArgonBox display="flex" alignItems="center" key="JMH">
          <ArgonTypography variant="button" fontWeight="bold">
            JMH
          </ArgonTypography>
        </ArgonBox>,
        "Jos Medical Hospital"
      ],
      lga: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          Jos North
        </ArgonTypography>
      ),
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="renewed" color="success" size="xs" container />
      ),
      "number of staff": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          150
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="paid" color="success" size="xs" container />
      ),
      action,
      location: <LocationButton location="9.8965,8.8583" hospitalName="Jos Medical Hospital" />,
    },
    {
      hospital: [
        <ArgonBox display="flex" alignItems="center" key="PGH">
          <ArgonTypography variant="button" fontWeight="bold">
            PGH
          </ArgonTypography>
        </ArgonBox>,
        "Plateau General Hospital"
      ],
      lga: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          Jos South
        </ArgonTypography>
      ),
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="expired" color="error" size="xs" container />
      ),
      "number of staff": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          200
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="unpaid" color="error" size="xs" container />
      ),
      action,
      location: <LocationButton location="9.8965,8.8583" hospitalName="Plateau General Hospital" />,
    },
    {
      hospital: [
        <ArgonBox display="flex" alignItems="center" key="JUTH">
          <ArgonTypography variant="button" fontWeight="bold">
            JUTH
          </ArgonTypography>
        </ArgonBox>,
        "Jos University Teaching Hospital"
      ],
      lga: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          Jos North
        </ArgonTypography>
      ),
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="renewed" color="success" size="xs" container />
      ),
      "number of staff": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          300
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="paid" color="success" size="xs" container />
      ),
      action,
      location: <LocationButton location="9.8965,8.8583" hospitalName="Jos University Teaching Hospital" />,
    },
    {
      hospital: [
        <ArgonBox display="flex" alignItems="center" key="BMH">
          <ArgonTypography variant="button" fontWeight="bold">
            BMH
          </ArgonTypography>
        </ArgonBox>,
        "Bingham Memorial Hospital"
      ],
      lga: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          Jos South
        </ArgonTypography>
      ),
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="renewed" color="success" size="xs" container />
      ),
      "number of staff": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          100
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="paid" color="success" size="xs" container />
      ),
      action,
      location: <LocationButton location="9.8965,8.8583" hospitalName="Bingham Memorial Hospital" />,
    },
    {
      hospital: [
        <ArgonBox display="flex" alignItems="center" key="OLA">
          <ArgonTypography variant="button" fontWeight="bold">
            OLA
          </ArgonTypography>
        </ArgonBox>,
        "Our Lady of Apostles Hospital"
      ],
      lga: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          Jos North
        </ArgonTypography>
      ),
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="expired" color="error" size="xs" container />
      ),
      "number of staff": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          120
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="unpaid" color="error" size="xs" container />
      ),
      action,
      location: <LocationButton location="9.8965,8.8583" hospitalName="Our Lady of Apostles Hospital" />,
    },
    {
      hospital: [
        <ArgonBox display="flex" alignItems="center" key="PMH">
          <ArgonTypography variant="button" fontWeight="bold">
            PMH
          </ArgonTypography>
        </ArgonBox>,
        "Pankshin Medical Hospital"
      ],
      lga: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          Pankshin
        </ArgonTypography>
      ),
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="renewed" color="success" size="xs" container />
      ),
      "number of staff": (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          80
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="paid" color="success" size="xs" container />
      ),
      action,
      location: <LocationButton location="9.3333,9.4333" hospitalName="Pankshin Medical Hospital" />,
    },
  ],
};

export default hospitalsTableData;