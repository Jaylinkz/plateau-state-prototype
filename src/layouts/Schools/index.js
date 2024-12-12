/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useMemo } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import FilterListIcon from "@mui/icons-material/FilterList";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import LeafletMap from "components/LeafletMap";

// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import schoolsTableData from "./data/authorsTableData";

function Schools() {
  const { columns, rows } = schoolsTableData;
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter states and anchors
  const [licenseAnchor, setLicenseAnchor] = useState(null);
  const [lgaAnchor, setLgaAnchor] = useState(null);
  const [staffSizeAnchor, setStaffSizeAnchor] = useState(null);
  const [payeAnchor, setPayeAnchor] = useState(null);
  
  const [licenseFilter, setLicenseFilter] = useState("all");
  const [lgaFilter, setLgaFilter] = useState("all");
  const [staffSizeFilter, setStaffSizeFilter] = useState("all");
  const [payeFilter, setPayeFilter] = useState("all");

  // Stats
  const totalSchools = rows.length;
  const totalStaff = rows.reduce((sum, row) => sum + parseInt(row.number_of_staff.props.children), 0);
  const totalPaye = rows.reduce((sum, row) => sum + parseInt(row.expected_income.props.children.replace(/,/g, '')), 0);
  const paidCount = rows.filter(row => row.paye_status.props.badgeContent === "PAID").length;

  const publicSchools = rows.filter(row => row.type.props.children === "Public");
  const privateSchools = rows.filter(row => row.type.props.children === "Private");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Filter handlers
  const handleFilterClick = (event, setAnchor) => {
    setAnchor(event.currentTarget);
  };

  const handleFilterClose = (setAnchor) => {
    setAnchor(null);
  };

  const handleFilterSelect = (filter, value, setFilter, setAnchor) => {
    setFilter(value);
    setAnchor(null);
  };

  // Get unique values for filters
  const uniqueLgas = [...new Set(rows.map(row => row.lga.props.children))];
  const staffSizeRanges = ["0-50", "51-100", "101-200", "200+"];

  const filteredRows = useMemo(() => {
    let filtered = rows;
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(row => 
        row.school.props.children.props.children.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by tab
    if (tabValue === 0) {
      filtered = filtered.filter(row => row.type.props.children === "Public");
    } else if (tabValue === 1) {
      filtered = filtered.filter(row => row.type.props.children === "Private");
    }

    // Apply license filter
    if (licenseFilter !== "all") {
      filtered = filtered.filter(row => row.license_status.props.badgeContent === licenseFilter);
    }

    // Apply LGA filter
    if (lgaFilter !== "all") {
      filtered = filtered.filter(row => row.lga.props.children === lgaFilter);
    }

    // Apply staff size filter
    if (staffSizeFilter !== "all") {
      filtered = filtered.filter(row => {
        const staffSize = parseInt(row.number_of_staff.props.children);
        switch (staffSizeFilter) {
          case "0-50": return staffSize <= 50;
          case "51-100": return staffSize > 50 && staffSize <= 100;
          case "101-200": return staffSize > 100 && staffSize <= 200;
          case "200+": return staffSize > 200;
          default: return true;
        }
      });
    }

    // Apply PAYE filter
    if (payeFilter !== "all") {
      filtered = filtered.filter(row => row.paye_status.props.badgeContent === payeFilter);
    }
    
    return filtered;
  }, [rows, searchQuery, tabValue, licenseFilter, lgaFilter, staffSizeFilter, payeFilter]);

  function MapModal({ isOpen, onClose, location, schoolName }) {
    // Convert location string to array of numbers
    const locationCoords = location.split(',').map(coord => parseFloat(coord.trim()));

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

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12}>
            <Card>
              <ArgonBox p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <ArgonTypography variant="h4" fontWeight="medium">
                      Schools Dashboard
                    </ArgonTypography>
                    <ArgonBox display="flex" gap={2} mt={1}>
                      <ArgonTypography variant="button" fontWeight="regular" color="text">
                        {totalSchools} schools
                      </ArgonTypography>
                      <ArgonTypography variant="button" fontWeight="regular" color="text">
                        •
                      </ArgonTypography>
                      <ArgonTypography variant="button" fontWeight="regular" color="text">
                        {totalStaff} staff
                      </ArgonTypography>
                      <ArgonTypography variant="button" fontWeight="regular" color="text">
                        •
                      </ArgonTypography>
                      <ArgonTypography variant="button" fontWeight="regular" color="text">
                        ₦{totalPaye.toLocaleString()} PAYE
                      </ArgonTypography>
                      <ArgonTypography variant="button" fontWeight="regular" color="text">
                        •
                      </ArgonTypography>
                      <ArgonTypography variant="button" fontWeight="regular" color="text">
                        {paidCount} paid
                      </ArgonTypography>
                    </ArgonBox>
                  </Grid>
                  <Grid item xs={12} md={6} display="flex" justifyContent="flex-end">
                    <TextField
                      placeholder="Search schools..."
                      variant="outlined"
                      size="small"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ width: 300 }}
                    />
                  </Grid>
                </Grid>
              </ArgonBox>
            </Card>
          </Grid>
        </Grid>

        <Card>
          <ArgonBox p={3}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label={`Public Schools (${publicSchools.length})`} />
              <Tab label={`Private Schools (${privateSchools.length})`} />
            </Tabs>

            <ArgonBox display="flex" gap={2} mt={3}>
              {/* License Status Filter */}
              <Button
                variant="outlined"
                startIcon={<Icon>settings</Icon>}
                onClick={(e) => handleFilterClick(e, setLicenseAnchor)}
                size="small"
                sx={{
                  color: 'rgb(103, 116, 142)',
                  borderColor: 'rgb(226, 232, 240)',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: 'rgb(226, 232, 240)',
                    backgroundColor: 'rgba(226, 232, 240, 0.1)',
                  },
                }}
              >
                License Status
              </Button>
              <Menu
                anchorEl={licenseAnchor}
                open={Boolean(licenseAnchor)}
                onClose={() => handleFilterClose(setLicenseAnchor)}
                PaperProps={{
                  sx: {
                    mt: 1,
                    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <MenuItem onClick={() => handleFilterSelect("licenseStatus", "all", setLicenseFilter, setLicenseAnchor)}>
                  All
                </MenuItem>
                <MenuItem onClick={() => handleFilterSelect("licenseStatus", "RENEWED", setLicenseFilter, setLicenseAnchor)}>
                  Renewed
                </MenuItem>
                <MenuItem onClick={() => handleFilterSelect("licenseStatus", "EXPIRED", setLicenseFilter, setLicenseAnchor)}>
                  Expired
                </MenuItem>
              </Menu>

              {/* LGA Filter */}
              <Button
                variant="outlined"
                startIcon={<Icon>location_on</Icon>}
                onClick={(e) => handleFilterClick(e, setLgaAnchor)}
                size="small"
                sx={{
                  color: 'rgb(103, 116, 142)',
                  borderColor: 'rgb(226, 232, 240)',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: 'rgb(226, 232, 240)',
                    backgroundColor: 'rgba(226, 232, 240, 0.1)',
                  },
                }}
              >
                LGA
              </Button>
              <Menu
                anchorEl={lgaAnchor}
                open={Boolean(lgaAnchor)}
                onClose={() => handleFilterClose(setLgaAnchor)}
                PaperProps={{
                  sx: {
                    mt: 1,
                    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <MenuItem onClick={() => handleFilterSelect("lga", "all", setLgaFilter, setLgaAnchor)}>
                  All
                </MenuItem>
                {uniqueLgas.map((lga) => (
                  <MenuItem key={lga} onClick={() => handleFilterSelect("lga", lga, setLgaFilter, setLgaAnchor)}>
                    {lga}
                  </MenuItem>
                ))}
              </Menu>

              {/* Staff Size Filter */}
              <Button
                variant="outlined"
                startIcon={<Icon>group</Icon>}
                onClick={(e) => handleFilterClick(e, setStaffSizeAnchor)}
                size="small"
                sx={{
                  color: 'rgb(103, 116, 142)',
                  borderColor: 'rgb(226, 232, 240)',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: 'rgb(226, 232, 240)',
                    backgroundColor: 'rgba(226, 232, 240, 0.1)',
                  },
                }}
              >
                Staff Size
              </Button>
              <Menu
                anchorEl={staffSizeAnchor}
                open={Boolean(staffSizeAnchor)}
                onClose={() => handleFilterClose(setStaffSizeAnchor)}
                PaperProps={{
                  sx: {
                    mt: 1,
                    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <MenuItem onClick={() => handleFilterSelect("staffSize", "all", setStaffSizeFilter, setStaffSizeAnchor)}>
                  All
                </MenuItem>
                {staffSizeRanges.map((range) => (
                  <MenuItem key={range} onClick={() => handleFilterSelect("staffSize", range, setStaffSizeFilter, setStaffSizeAnchor)}>
                    {range}
                  </MenuItem>
                ))}
              </Menu>

              {/* PAYE Status Filter */}
              <Button
                variant="outlined"
                startIcon={<Icon>payment</Icon>}
                onClick={(e) => handleFilterClick(e, setPayeAnchor)}
                size="small"
                sx={{
                  color: 'rgb(103, 116, 142)',
                  borderColor: 'rgb(226, 232, 240)',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: 'rgb(226, 232, 240)',
                    backgroundColor: 'rgba(226, 232, 240, 0.1)',
                  },
                }}
              >
                PAYE Status
              </Button>
              <Menu
                anchorEl={payeAnchor}
                open={Boolean(payeAnchor)}
                onClose={() => handleFilterClose(setPayeAnchor)}
                PaperProps={{
                  sx: {
                    mt: 1,
                    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <MenuItem onClick={() => handleFilterSelect("payeStatus", "all", setPayeFilter, setPayeAnchor)}>
                  All
                </MenuItem>
                <MenuItem onClick={() => handleFilterSelect("payeStatus", "PAID", setPayeFilter, setPayeAnchor)}>
                  Paid
                </MenuItem>
                <MenuItem onClick={() => handleFilterSelect("payeStatus", "UNPAID", setPayeFilter, setPayeAnchor)}>
                  Unpaid
                </MenuItem>
              </Menu>
            </ArgonBox>
          </ArgonBox>
          
          <ArgonBox px={3} pb={3}>
            <Table columns={columns} rows={filteredRows} />
          </ArgonBox>
        </Card>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Schools;