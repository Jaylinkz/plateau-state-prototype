import { useState, useMemo } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import hotelsTableData from "./data/projectsTableData";

function Hotels() {
  const { columns, rows } = hotelsTableData;
  const [searchQuery, setSearchQuery] = useState("");
  const [tabValue, setTabValue] = useState(0);

  // Filter states and anchors
  const [licenseAnchor, setLicenseAnchor] = useState(null);
  const [payeAnchor, setPayeAnchor] = useState(null);
  const [licenseFilter, setLicenseFilter] = useState("all");
  const [payeFilter, setPayeFilter] = useState("all");

  // Stats
  const totalHotels = rows.length;
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
      return row["paye tax status"].props.badgeContent.toLowerCase() === "paid";
    } catch (error) {
      console.error('Error counting paid hotels:', error);
      return false;
    }
  }).length;

  const standardHotels = rows.filter(row => {
    try {
      return row.type.props.badgeContent === "STANDARD";
    } catch (error) {
      console.error('Error filtering standard hotels:', error);
      return false;
    }
  });

  const luxuryHotels = rows.filter(row => {
    try {
      return row.type.props.badgeContent === "LUXURY";
    } catch (error) {
      console.error('Error filtering luxury hotels:', error);
      return false;
    }
  });

  const budgetHotels = rows.filter(row => {
    try {
      return row.type.props.badgeContent === "BUDGET";
    } catch (error) {
      console.error('Error filtering budget hotels:', error);
      return false;
    }
  });

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

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
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
          const hotelName = row.hotel[0].props.children.toLowerCase();
          return hotelName.includes(searchQuery.toLowerCase());
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
          return row.type.props.badgeContent === "STANDARD";
        } catch (error) {
          console.error('Error filtering standard hotels:', error);
          return false;
        }
      });
    } else if (tabValue === 1) {
      filtered = filtered.filter(row => {
        try {
          return row.type.props.badgeContent === "LUXURY";
        } catch (error) {
          console.error('Error filtering luxury hotels:', error);
          return false;
        }
      });
    } else if (tabValue === 2) {
      filtered = filtered.filter(row => {
        try {
          return row.type.props.badgeContent === "BUDGET";
        } catch (error) {
          console.error('Error filtering budget hotels:', error);
          return false;
        }
      });
    }

    // Apply license filter
    if (licenseFilter !== "all") {
      filtered = filtered.filter(row => {
        try {
          const licenseStatus = row["license status"].props.badgeContent.toLowerCase();
          return licenseStatus === licenseFilter;
        } catch (error) {
          console.error('Error filtering by license status:', error);
          return false;
        }
      });
    }

    // Apply PAYE filter
    if (payeFilter !== "all") {
      filtered = filtered.filter(row => {
        try {
          return row["paye tax status"].props.badgeContent.toLowerCase() === payeFilter;
        } catch (error) {
          console.error('Error filtering by PAYE status:', error);
          return false;
        }
      });
    }
    
    return filtered;
  }, [rows, searchQuery, tabValue, licenseFilter, payeFilter]);

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
                      Hotels Table
                    </ArgonTypography>
                    <ArgonBox display="flex" gap={2} mt={1}>
                      <ArgonTypography variant="button" fontWeight="regular" color="text">
                        {totalHotels} hotels
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
                      placeholder="Search hotels..."
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
              aria-label="hotel type tabs"
              sx={{ 
                borderBottom: '1px solid', 
                borderColor: 'divider',
                px: 3,
                pt: 2 
              }}
            >
              <Tab label={`Standard Hotels (${standardHotels.length})`} />
              <Tab label={`Luxury Hotels (${luxuryHotels.length})`} />
              <Tab label={`Budget Hotels (${budgetHotels.length})`} />
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
            </ArgonBox>

            <Table 
              columns={columns} 
              rows={filteredRows} 
            />
          </ArgonBox>
        </Card>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Hotels;
