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
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";

// React imports
import { useState } from "react";

// Images
import school1 from "assets/images/school-1.png";
import school2 from "assets/images/school-2.png";
import school3 from "assets/images/school-3.jpg";

function Author({ image, name, email }) {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonBox mr={2}>
        <ArgonAvatar src={image} alt={name} size="sm" variant="rounded" />
      </ArgonBox>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium">
          {name}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="secondary">
          {email}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

function Function({ job, org }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </ArgonTypography>
      <ArgonTypography variant="caption" color="secondary">
        {org}
      </ArgonTypography>
    </ArgonBox>
  );
}

function MapModal({ isOpen, onClose, location, schoolName }) {
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
        <h2 id="map-modal-title">{schoolName} Location</h2>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${location}`}
          allowFullScreen
          title={`${schoolName} Map`}
        ></iframe>
      </Box>
    </Modal>
  );
}

function LocationButton({ location, schoolName }) {
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
        schoolName={schoolName}
      />
    </>
  );
}

const authorsTableData = {
  columns: [
    { name: "school", align: "left" },
    { name: "type", align: "left" },
    { name: "license status", align: "center" },
    { name: "established", align: "center" },
    { name: "lga", align: "center" },
    { name: "paye tax status", align: "center" },
    { name: "action", align: "center" },
    { name: "location", align: "center" },
  ],

  rows: [
    {
      school: <Author image={school1} name="Government Secondary School Jos" email="gssjos@edu.ng" />,
      type: <Function job="Public" org="Secondary" />,
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="renewed" color="success" size="xs" container />
      ),
      established: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          1972
        </ArgonTypography>
      ),
      lga: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Jos North
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="paid" color="success" size="xs" container />
      ),
      action: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </ArgonTypography>
      ),
      location: <LocationButton location="Government+Secondary+School+Jos" schoolName="Government Secondary School Jos" />,
    },
    {
      school: <Author image={school2} name="St. Louis College Jos" email="stlouisjos@edu.ng" />,
      type: <Function job="Private" org="Secondary" />,
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="renewed" color="success" size="xs" container />
      ),
      established: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          1960
        </ArgonTypography>
      ),
      lga: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Jos North
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="paid" color="success" size="xs" container />
      ),
      action: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </ArgonTypography>
      ),
      location: <LocationButton location="St.+Louis+College+Jos" schoolName="St. Louis College Jos" />,
    },
    {
      school: <Author image={school3} name="Federal Government College Jos" email="fgcjos@edu.ng" />,
      type: <Function job="Federal" org="Secondary" />,
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="expired" color="error" size="xs" container />
      ),
      established: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          1973
        </ArgonTypography>
      ),
      lga: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Jos South
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="unpaid" color="error" size="xs" container />
      ),
      action: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </ArgonTypography>
      ),
      location: <LocationButton location="Federal+Government+College+Jos" schoolName="Federal Government College Jos" />,
    },
    {
      school: <Author image={school1} name="Gss gindiri" email="gssgindiri@edu.ng" />,
      type: <Function job="Public" org="Secondary" />,
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="renewed" color="success" size="xs" container />
      ),
      established: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          1978
        </ArgonTypography>
      ),
      lga: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Mangu
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="paid" color="success" size="xs" container />
      ),
      action: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </ArgonTypography>
      ),
      location: <LocationButton location="Gss+gindiri" schoolName="Gss gindiri" />,
    },
    {
      school: <Author image={school2} name="University of Jos" email="unijos@edu.ng" />,
      type: <Function job="Federal" org="Tertiary" />,
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="renewed" color="success" size="xs" container />
      ),
      established: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          1975
        </ArgonTypography>
      ),
      lga: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Jos North
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="paid" color="success" size="xs" container />
      ),
      action: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </ArgonTypography>
      ),
      location: <LocationButton location="University+of+Jos" schoolName="University of Jos" />,
    },
    {
      school: <Author image={school3} name="Plateau State University Bokkos" email="plasu@edu.ng" />,
      type: <Function job="State" org="Tertiary" />,
      "license status": (
        <ArgonBadge variant="gradient" badgeContent="expired" color="error" size="xs" container />
      ),
      established: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          2005
        </ArgonTypography>
      ),
      lga: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Bokkos
        </ArgonTypography>
      ),
      "paye tax status": (
        <ArgonBadge variant="gradient" badgeContent="unpaid" color="error" size="xs" container />
      ),
      action: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </ArgonTypography>
      ),
      location: <LocationButton location="Plateau+State+University+Bokkos" schoolName="Plateau State University Bokkos" />,
    },
  ],
};

export default authorsTableData;
