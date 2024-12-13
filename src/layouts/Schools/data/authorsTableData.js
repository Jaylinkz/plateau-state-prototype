/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonBadge from "components/ArgonBadge";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonButton from "components/ArgonButton";
import LeafletMap from "components/LeafletMap";

// React
import { useState } from "react";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function School({ image, name }) {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonBox mr={2}>
        <ArgonAvatar src={image} size="sm" variant="rounded" />
      </ArgonBox>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium">
          {name}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

function LicenseStatus({ icon, color, status }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonBadge
        variant="contained"
        color={color}
        size="xs"
        badgeContent={status}
        container
      />
    </ArgonBox>
  );
}

function MapModal({ isOpen, onClose, location, schoolName }) {
  // Convert location string to array of numbers
  const locationCoords = '9.925725338025762,8.878873226982945'.split(',').map(coord => parseFloat(coord.trim()));

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
            {schoolName} Location
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
            name={schoolName} 
            style={{ height: '100%', width: '100%' }} 
          />
        </Box>
      </Box>
    </Modal>
  );
}

function LocationButton({ location, schoolName }) {
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
        schoolName={schoolName}
      />
    </>
  );
}

const schoolsTableData = {
  columns: [
    { name: "school", align: "left" },
    { name: "type", align: "left" },
    { name: "lga", align: "left" },
    { name: "license_status", align: "left" },
    { name: "number_of_staff", align: "center" },
    { name: "expected_income", align: "center" },
    { name: "paye_status", align: "center" },
    { name: "action", align: "center" },
    { name: "map", align: "center" },
  ],

  rows: [
    {
      school: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          Government Secondary School Jos
        </ArgonTypography>
      ),
      type: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Public
        </ArgonTypography>
      ),
      lga: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Jos North
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge variant="gradient" badgeContent="EXEMPTED" color="secondary" size="xs" container />
      ),
      number_of_staff: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          150
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          150,000
        </ArgonTypography>
      ),
      paye_status: (
        <ArgonBadge variant="gradient" badgeContent="PAID" color="success" size="xs" container />
      ),
      action: (
        <ArgonBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
          <ArgonBox mr={1}>
            <ArgonButton variant="text" color="primary">
              <Icon sx={{ color: 'rgb(103, 116, 142)' }}>edit</Icon>
            </ArgonButton>
          </ArgonBox>
          <ArgonButton variant="text" color="error">
            <Icon sx={{ color: 'rgb(103, 116, 142)' }}>delete</Icon>
          </ArgonButton>
        </ArgonBox>
      ),
      map: <LocationButton location="9.9353, 8.8878" schoolName="Government Secondary School Jos" />,
    },
    {
      school: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          St. John's College
        </ArgonTypography>
      ),
      type: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Private
        </ArgonTypography>
      ),
      lga: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Jos South
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge variant="gradient" badgeContent="EXPIRED" color="error" size="xs" container />
      ),
      number_of_staff: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          200
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          200,000
        </ArgonTypography>
      ),
      paye_status: (
        <ArgonBadge variant="gradient" badgeContent="UNPAID" color="error" size="xs" container />
      ),
      action: (
        <ArgonBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
          <ArgonBox mr={1}>
            <ArgonButton variant="text" color="primary">
              <Icon sx={{ color: 'rgb(103, 116, 142)' }}>edit</Icon>
            </ArgonButton>
          </ArgonBox>
          <ArgonButton variant="text" color="error">
            <Icon sx={{ color: 'rgb(103, 116, 142)' }}>delete</Icon>
          </ArgonButton>
        </ArgonBox>
      ),
      map: <LocationButton location="9.9353, 8.8878" schoolName="St. John's College" />,
    },
    {
      school: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          Government Secondary School Jos
        </ArgonTypography>
      ),
      type: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Public
        </ArgonTypography>
      ),
      lga: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Jos North
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge variant="gradient" badgeContent="EXEMPTED" color="secondary" size="xs" container />
      ),
      number_of_staff: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          150
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          150,000
        </ArgonTypography>
      ),
      paye_status: (
        <ArgonBadge variant="gradient" badgeContent="PAID" color="success" size="xs" container />
      ),
      action: (
        <ArgonBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
          <ArgonBox mr={1}>
            <ArgonButton variant="text" color="primary">
              <Icon sx={{ color: 'rgb(103, 116, 142)' }}>edit</Icon>
            </ArgonButton>
          </ArgonBox>
          <ArgonButton variant="text" color="error">
            <Icon sx={{ color: 'rgb(103, 116, 142)' }}>delete</Icon>
          </ArgonButton>
        </ArgonBox>
      ),
      map: <LocationButton location="9.9353, 8.8878" schoolName="Government Secondary School Jos" />,
    },
    {
      school: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          St. Louis College Jos
        </ArgonTypography>
      ),
      type: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Private
        </ArgonTypography>
      ),
      lga: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Jos North
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge variant="gradient" badgeContent="EXPIRED" color="error" size="xs" container />
      ),
      number_of_staff: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          40
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          40,000
        </ArgonTypography>
      ),
      paye_status: (
        <ArgonBadge variant="gradient" badgeContent="PAID" color="success" size="xs" container />
      ),
      action: (
        <ArgonBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
          <ArgonBox mr={1}>
            <ArgonButton variant="text" color="primary">
              <Icon sx={{ color: 'rgb(103, 116, 142)' }}>edit</Icon>
            </ArgonButton>
          </ArgonBox>
          <ArgonButton variant="text" color="error">
            <Icon sx={{ color: 'rgb(103, 116, 142)' }}>delete</Icon>
          </ArgonButton>
        </ArgonBox>
      ),
      map: <LocationButton location="9.9353, 8.8878" schoolName="St. Louis College Jos" />,
    },
    {
      school: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          Federal Government College Jos
        </ArgonTypography>
      ),
      type: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Public
        </ArgonTypography>
      ),
      lga: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Jos South
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge variant="gradient" badgeContent="EXEMPTED" color="secondary" size="xs" container />
      ),
      number_of_staff: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          60
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          60,000
        </ArgonTypography>
      ),
      paye_status: (
        <ArgonBadge variant="gradient" badgeContent="UNPAID" color="error" size="xs" container />
      ),
      action: (
        <ArgonBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
          <ArgonBox mr={1}>
            <ArgonButton variant="text" color="primary">
              <Icon sx={{ color: 'rgb(103, 116, 142)' }}>edit</Icon>
            </ArgonButton>
          </ArgonBox>
          <ArgonButton variant="text" color="error">
            <Icon sx={{ color: 'rgb(103, 116, 142)' }}>delete</Icon>
          </ArgonButton>
        </ArgonBox>
      ),
      map: <LocationButton location="9.9353, 8.8878" schoolName="Federal Government College Jos" />,
    },
    {
      school: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          Gss gindiri
        </ArgonTypography>
      ),
      type: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Public
        </ArgonTypography>
      ),
      lga: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Mangu
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge variant="gradient" badgeContent="EXEMPTED" color="secondary" size="xs" container />
      ),
      number_of_staff: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          70
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          70,000
        </ArgonTypography>
      ),
      paye_status: (
        <ArgonBadge variant="gradient" badgeContent="PAID" color="success" size="xs" container />
      ),
      action: (
        <ArgonBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
          <ArgonBox mr={1}>
            <ArgonButton variant="text" color="primary">
              <Icon sx={{ color: 'rgb(103, 116, 142)' }}>edit</Icon>
            </ArgonButton>
          </ArgonBox>
          <ArgonButton variant="text" color="error">
            <Icon sx={{ color: 'rgb(103, 116, 142)' }}>delete</Icon>
          </ArgonButton>
        </ArgonBox>
      ),
      map: <LocationButton location="9.9353, 8.8878" schoolName="Gss gindiri" />,
    },
    {
      school: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          University of Jos
        </ArgonTypography>
      ),
      type: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Public
        </ArgonTypography>
      ),
      lga: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Jos North
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge variant="gradient" badgeContent="EXEMPTED" color="secondary" size="xs" container />
      ),
      number_of_staff: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          100
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          100,000
        </ArgonTypography>
      ),
      paye_status: (
        <ArgonBadge variant="gradient" badgeContent="PAID" color="success" size="xs" container />
      ),
      action: (
        <ArgonBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
          <ArgonBox mr={1}>
            <ArgonButton variant="text" color="primary">
              <Icon sx={{ color: 'rgb(103, 116, 142)' }}>edit</Icon>
            </ArgonButton>
          </ArgonBox>
          <ArgonButton variant="text" color="error">
            <Icon sx={{ color: 'rgb(103, 116, 142)' }}>delete</Icon>
          </ArgonButton>
        </ArgonBox>
      ),
      map: <LocationButton location="9.9353, 8.8878" schoolName="University of Jos" />,
    },
    {
      school: (
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          Plateau State University Bokkos
        </ArgonTypography>
      ),
      type: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Public
        </ArgonTypography>
      ),
      lga: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Bokkos
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge variant="gradient" badgeContent="EXEMPTED" color="secondary" size="xs" container />
      ),
      number_of_staff: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          80
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          80,000
        </ArgonTypography>
      ),
      paye_status: (
        <ArgonBadge variant="gradient" badgeContent="UNPAID" color="error" size="xs" container />
      ),
      action: (
        <ArgonBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
          <ArgonBox mr={1}>
            <ArgonButton variant="text" color="primary">
              <Icon sx={{ color: 'rgb(103, 116, 142)' }}>edit</Icon>
            </ArgonButton>
          </ArgonBox>
          <ArgonButton variant="text" color="error">
            <Icon sx={{ color: 'rgb(103, 116, 142)' }}>delete</Icon>
          </ArgonButton>
        </ArgonBox>
      ),
      map: <LocationButton location="9.9353, 8.8878" schoolName="Plateau State University Bokkos" />,
    },
  ],
};

export default schoolsTableData;