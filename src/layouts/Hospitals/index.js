/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================
*/

import React, { useState, useMemo } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import SortIcon from "@mui/icons-material/Sort";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import FilterListIcon from "@mui/icons-material/FilterList";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

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
import hospitalsTableData from "./data/projectsTableData";

function Hospitals() {
  const { columns, rows } = hospitalsTableData;
  const [searchQuery, setSearchQuery] = useState("");
  const [tabValue, setTabValue] = useState(0);
  
  // Filter states
  const [licenseFilter, setLicenseFilter] = useState("all");
  const [lgaFilter, setLgaFilter] = useState("all");
  const [staffFilter, setStaffFilter] = useState("all");
  const [payeFilter, setPayeFilter] = useState("all");

  // Menu anchors
  const [licenseAnchor, setLicenseAnchor] = useState(null);
  const [lgaAnchor, setLgaAnchor] = useState(null);
  const [staffSizeAnchor, setStaffSizeAnchor] = useState(null);
  const [payeAnchor, setPayeAnchor] = useState(null);

  // Sorting
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Stats
  const totalHospitals = rows.length;
  const totalStaff = rows.reduce((sum, row) => {
    try {
      return sum + parseInt(row["number of staff"].props.children);
    } catch (error) {
      console.error('Error calculating staff:', error);
      return sum;
    }
  }, 0);
  const totalPaye = rows.reduce((sum, row) => {
    try {
      const incomeText = row["expected income from paye"].props.children;
      return sum + parseInt(incomeText.replace(/,/g, ''));
    } catch (error) {
      console.error('Error calculating PAYE:', error);
      return sum;
    }
  }, 0);
  const paidCount = rows.filter(row => {
    try {
      return row["paye tax status"].props.badgeContent === "paid";
    } catch (error) {
      console.error('Error counting paid hospitals:', error);
      return false;
    }
  }).length;

  const publicHospitals = rows.filter(row => {
    try {
      return row.type.props.children === "Public";
    } catch (error) {
      console.error('Error filtering public hospitals:', error);
      return false;
    }
  });
  const privateHospitals = rows.filter(row => {
    try {
      return row.type.props.children === "Private";
    } catch (error) {
      console.error('Error filtering private hospitals:', error);
      return false;
    }
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    // Reset filters when switching tabs
    setLicenseFilter("all");
    setLgaFilter("all");
    setStaffFilter("all");
    setPayeFilter("all");
  };

  // Get unique LGAs for the filter
  const uniqueLgas = useMemo(() => [...new Set(rows.map(row => 
    row.lga?.props?.children?.toString() || ""
  ))].filter(Boolean).sort(), [rows]);

  const filteredRows = useMemo(() => {
    let filtered = rows;
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(row => {
        try {
          const hospitalName = row.hospital[1].toLowerCase();
          return hospitalName.includes(searchQuery.toLowerCase());
        } catch (error) {
          console.error('Error filtering by search query:', error);
          return true;
        }
      });
    }
    
    // Filter by tab
    if (tabValue === 0) {
      filtered = filtered.filter(row => {
        try {
          return row.type.props.children === "Public";
        } catch (error) {
          console.error('Error filtering public hospitals:', error);
          return false;
        }
      });
    } else if (tabValue === 1) {
      filtered = filtered.filter(row => {
        try {
          return row.type.props.children === "Private";
        } catch (error) {
          console.error('Error filtering private hospitals:', error);
          return false;
        }
      });
    }

    // Apply license filter
    if (licenseFilter !== "all") {
      filtered = filtered.filter(row => {
        try {
          return row["license status"].props.badgeContent === licenseFilter;
        } catch (error) {
          console.error('Error filtering by license status:', error);
          return false;
        }
      });
    }

    // Apply LGA filter
    if (lgaFilter !== "all") {
      filtered = filtered.filter(row => {
        try {
          return row.lga.props.children === lgaFilter;
        } catch (error) {
          console.error('Error filtering by LGA:', error);
          return false;
        }
      });
    }

    // Apply staff size filter
    if (staffFilter !== "all") {
      filtered = filtered.filter(row => {
        try {
          const staffSize = parseInt(row["number of staff"].props.children);
          switch (staffFilter) {
            case "0-50": return staffSize <= 50;
            case "51-100": return staffSize > 50 && staffSize <= 100;
            case "101-200": return staffSize > 100 && staffSize <= 200;
            case "200+": return staffSize > 200;
            default: return true;
          }
        } catch (error) {
          console.error('Error filtering by staff size:', error);
          return false;
        }
      });
    }

    // Apply PAYE filter
    if (payeFilter !== "all") {
      filtered = filtered.filter(row => {
        try {
          return row["paye tax status"].props.badgeContent === payeFilter;
        } catch (error) {
          console.error('Error filtering by PAYE status:', error);
          return false;
        }
      });
    }
    
    return filtered;
  }, [rows, searchQuery, tabValue, licenseFilter, lgaFilter, staffFilter, payeFilter]);

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

  const handleSort = (key) => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const sortedRows = useMemo(() => {
    let sortableRows = [...filteredRows];
    if (sortConfig.key) {
      sortableRows.sort((a, b) => {
        let aValue = a[sortConfig.key]?.props?.children;
        let bValue = b[sortConfig.key]?.props?.children;

        // Handle array case (e.g., hospital name)
        if (Array.isArray(a[sortConfig.key])) {
          aValue = a[sortConfig.key][1];
          bValue = b[sortConfig.key][1];
        }

        // Handle badge content case
        if (a[sortConfig.key]?.props?.badgeContent) {
          aValue = a[sortConfig.key].props.badgeContent;
          bValue = b[sortConfig.key].props.badgeContent;
        }

        // Numeric comparison
        if (!isNaN(aValue) && !isNaN(bValue)) {
          aValue = Number(aValue);
          bValue = Number(bValue);
        }

        return sortConfig.direction === 'asc' 
          ? (aValue > bValue ? 1 : -1) 
          : (aValue < bValue ? 1 : -1);
      });
    }
    return sortableRows;
  }, [filteredRows, sortConfig]);

  function MapModal({ isOpen, onClose, location, hospitalName }) {
    // Ensure location is properly formatted and handle potential undefined values
    const locationCoords = location ? location.split(',').map(coord => parseFloat(coord.trim())) : [0, 0];

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
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          p: 0,
          overflow: 'hidden'
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #e5e5e5',
            px: 3,
            py: 2
          }}>
            <ArgonTypography variant="h6" fontWeight="medium" sx={{ color: '#344767' }}>
              {hospitalName} Location
            </ArgonTypography>
            <IconButton 
              onClick={onClose}
              size="small"
              sx={{ 
                color: '#8392ab',
                '&:hover': {
                  backgroundColor: 'rgba(131, 146, 171, 0.1)'
                }
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box sx={{ width: '100%', height: 'calc(100% - 57px)' }}>
            <LeafletMap 
              location={locationCoords} 
              name={hospitalName} 
              style={{ height: '100%', width: '100%' }} 
              zoom={15}
            />
          </Box>
        </Box>
      </Modal>
    );
  }

  function LocationButton({ location, hospitalName }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // For debugging
    console.log('LocationButton props:', { location, hospitalName });

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
                      Hospitals Dashboard
                    </ArgonTypography>
                    <ArgonBox display="flex" gap={2} mt={1}>
                      <ArgonTypography variant="button" fontWeight="regular" color="text">
                        {totalHospitals} hospitals
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
                      placeholder="Search hospitals..."
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
          <ArgonBox>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="hospital type tabs"
              sx={{ 
                borderBottom: '1px solid', 
                borderColor: 'divider',
                px: 3,
                pt: 2 
              }}
            >
              <Tab label="Public Hospitals" />
              <Tab label="Private Hospitals" />
            </Tabs>
          </ArgonBox>
          
          <ArgonBox p={3}>
            <ArgonBox 
              display="flex" 
              gap={2} 
              mb={3} 
              flexWrap="wrap"
              alignItems="center"
            >
              {/* License Status Filter */}
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<FilterListIcon />}
                onClick={(e) => handleFilterClick(e, setLicenseAnchor)}
                sx={{ 
                  textTransform: 'none', 
                  borderRadius: '8px', 
                  px: 2, 
                  py: 1,
                  borderColor: licenseFilter !== 'all' ? 'primary.main' : 'divider',
                  color: licenseFilter !== 'all' ? 'primary.main' : 'text.secondary',
                  '&:hover': {
                    backgroundColor: licenseFilter !== 'all' ? 'rgba(52, 202, 232, 0.1)' : 'transparent',
                    borderColor: 'primary.main'
                  }
                }}
              >
                {licenseFilter === 'all' ? 'License' : licenseFilter}
              </Button>
              <Menu
                anchorEl={licenseAnchor}
                open={Boolean(licenseAnchor)}
                onClose={() => handleFilterClose(setLicenseAnchor)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                sx={{
                  '& .MuiMenu-paper': {
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <MenuItem 
                  onClick={() => handleFilterSelect('licenseFilter', 'all', setLicenseFilter, setLicenseAnchor)}
                  selected={licenseFilter === 'all'}
                  sx={{ borderRadius: '8px' }}
                >
                  All Licenses
                </MenuItem>
                <MenuItem 
                  onClick={() => handleFilterSelect('licenseFilter', 'renewed', setLicenseFilter, setLicenseAnchor)}
                  selected={licenseFilter === 'renewed'}
                  sx={{ borderRadius: '8px' }}
                >
                  Renewed
                </MenuItem>
                <MenuItem 
                  onClick={() => handleFilterSelect('licenseFilter', 'expired', setLicenseFilter, setLicenseAnchor)}
                  selected={licenseFilter === 'expired'}
                  sx={{ borderRadius: '8px' }}
                >
                  Expired
                </MenuItem>
              </Menu>

              {/* LGA Filter */}
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<FilterListIcon />}
                onClick={(e) => handleFilterClick(e, setLgaAnchor)}
                sx={{ 
                  textTransform: 'none', 
                  borderRadius: '8px', 
                  px: 2, 
                  py: 1,
                  borderColor: lgaFilter !== 'all' ? 'primary.main' : 'divider',
                  color: lgaFilter !== 'all' ? 'primary.main' : 'text.secondary',
                  '&:hover': {
                    backgroundColor: lgaFilter !== 'all' ? 'rgba(52, 202, 232, 0.1)' : 'transparent',
                    borderColor: 'primary.main'
                  }
                }}
              >
                {lgaFilter === 'all' ? 'LGA' : lgaFilter}
              </Button>
              <Menu
                anchorEl={lgaAnchor}
                open={Boolean(lgaAnchor)}
                onClose={() => handleFilterClose(setLgaAnchor)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                sx={{
                  '& .MuiMenu-paper': {
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <MenuItem 
                  onClick={() => handleFilterSelect('lgaFilter', 'all', setLgaFilter, setLgaAnchor)}
                  selected={lgaFilter === 'all'}
                  sx={{ borderRadius: '8px' }}
                >
                  All LGAs
                </MenuItem>
                {uniqueLgas.map(lga => (
                  <MenuItem 
                    key={lga} 
                    onClick={() => handleFilterSelect('lgaFilter', lga, setLgaFilter, setLgaAnchor)}
                    selected={lgaFilter === lga}
                    sx={{ borderRadius: '8px' }}
                  >
                    {lga}
                  </MenuItem>
                ))}
              </Menu>

              {/* Staff Size Filter */}
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<FilterListIcon />}
                onClick={(e) => handleFilterClick(e, setStaffSizeAnchor)}
                sx={{ 
                  textTransform: 'none', 
                  borderRadius: '8px', 
                  px: 2, 
                  py: 1,
                  borderColor: staffFilter !== 'all' ? 'primary.main' : 'divider',
                  color: staffFilter !== 'all' ? 'primary.main' : 'text.secondary',
                  '&:hover': {
                    backgroundColor: staffFilter !== 'all' ? 'rgba(52, 202, 232, 0.1)' : 'transparent',
                    borderColor: 'primary.main'
                  }
                }}
              >
                {staffFilter === 'all' ? 'Staff' : staffFilter}
              </Button>
              <Menu
                anchorEl={staffSizeAnchor}
                open={Boolean(staffSizeAnchor)}
                onClose={() => handleFilterClose(setStaffSizeAnchor)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                sx={{
                  '& .MuiMenu-paper': {
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <MenuItem 
                  onClick={() => handleFilterSelect('staffFilter', 'all', setStaffFilter, setStaffSizeAnchor)}
                  selected={staffFilter === 'all'}
                  sx={{ borderRadius: '8px' }}
                >
                  All Sizes
                </MenuItem>
                <MenuItem 
                  onClick={() => handleFilterSelect('staffFilter', '0-50', setStaffFilter, setStaffSizeAnchor)}
                  selected={staffFilter === '0-50'}
                  sx={{ borderRadius: '8px' }}
                >
                  0-50 staff
                </MenuItem>
                <MenuItem 
                  onClick={() => handleFilterSelect('staffFilter', '51-100', setStaffFilter, setStaffSizeAnchor)}
                  selected={staffFilter === '51-100'}
                  sx={{ borderRadius: '8px' }}
                >
                  51-100 staff
                </MenuItem>
                <MenuItem 
                  onClick={() => handleFilterSelect('staffFilter', '101-200', setStaffFilter, setStaffSizeAnchor)}
                  selected={staffFilter === '101-200'}
                  sx={{ borderRadius: '8px' }}
                >
                  101-200 staff
                </MenuItem>
                <MenuItem 
                  onClick={() => handleFilterSelect('staffFilter', '200+', setStaffFilter, setStaffSizeAnchor)}
                  selected={staffFilter === '200+'}
                  sx={{ borderRadius: '8px' }}
                >
                  200+ staff
                </MenuItem>
              </Menu>

              {/* PAYE Status Filter */}
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<FilterListIcon />}
                onClick={(e) => handleFilterClick(e, setPayeAnchor)}
                sx={{ 
                  textTransform: 'none', 
                  borderRadius: '8px', 
                  px: 2, 
                  py: 1,
                  borderColor: payeFilter !== 'all' ? 'primary.main' : 'divider',
                  color: payeFilter !== 'all' ? 'primary.main' : 'text.secondary',
                  '&:hover': {
                    backgroundColor: payeFilter !== 'all' ? 'rgba(52, 202, 232, 0.1)' : 'transparent',
                    borderColor: 'primary.main'
                  }
                }}
              >
                {payeFilter === 'all' ? 'PAYE' : payeFilter}
              </Button>
              <Menu
                anchorEl={payeAnchor}
                open={Boolean(payeAnchor)}
                onClose={() => handleFilterClose(setPayeAnchor)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                sx={{
                  '& .MuiMenu-paper': {
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <MenuItem 
                  onClick={() => handleFilterSelect('payeFilter', 'all', setPayeFilter, setPayeAnchor)}
                  selected={payeFilter === 'all'}
                  sx={{ borderRadius: '8px' }}
                >
                  All Status
                </MenuItem>
                <MenuItem 
                  onClick={() => handleFilterSelect('payeFilter', 'paid', setPayeFilter, setPayeAnchor)}
                  selected={payeFilter === 'paid'}
                  sx={{ borderRadius: '8px' }}
                >
                  Paid
                </MenuItem>
                <MenuItem 
                  onClick={() => handleFilterSelect('payeFilter', 'unpaid', setPayeFilter, setPayeAnchor)}
                  selected={payeFilter === 'unpaid'}
                  sx={{ borderRadius: '8px' }}
                >
                  Unpaid
                </MenuItem>
              </Menu>

              {/* Sorting */}
              <ArgonBox 
                display="flex" 
                gap={1} 
                mb={2}
                sx={{
                  borderBottom: '1px solid',
                  borderColor: 'grey.300',
                  pb: 1
                }}
              >
                {columns.map(column => (
                  <Tooltip 
                    key={column.name} 
                    title={`Sort by ${column.name}${sortConfig.key === column.name ? 
                      ` (${sortConfig.direction === 'asc' ? 'ascending' : 'descending'})` : ''}`}
                  >
                    <IconButton
                      size="small"
                      onClick={() => handleSort(column.name)}
                      sx={{ 
                        opacity: sortConfig.key === column.name ? 1 : 0.5,
                        transform: sortConfig.key === column.name && sortConfig.direction === 'desc' ? 'rotate(180deg)' : 'none',
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >
                      <SortIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                ))}
              </ArgonBox>
            </ArgonBox>

            <Table 
              columns={columns} 
              rows={sortedRows.map(row => {
                const hospitalName = row.hospital[1];
                const defaultLocation = "9.8965,8.8583"; // Default to Jos coordinates
                
                return {
                  ...row,
                  location: (
                    <LocationButton 
                      location={defaultLocation}
                      hospitalName={hospitalName}
                    />
                  )
                };
              })} 
            />
          </ArgonBox>
        </Card>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Hospitals;
