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
// 9.925704191707313, 8.879742257363066
// @mui material components
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import MapIcon from "@mui/icons-material/Map";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/Schools/data/authorsTableData";
import hospitalsTableData from "layouts/tables/data/projectsTableData";
import hotelsTableData from "layouts/tables/data/hotelsTableData";

import React from 'react';

function Schools() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = hospitalsTableData;
  const { columns: hCols, rows: hRows } = hotelsTableData;

  const [tabValue, setTabValue] = React.useState(0);
  const [licenseFilter, setLicenseFilter] = React.useState("all");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleLicenseFilterChange = (event) => {
    setLicenseFilter(event.target.value);
  };

  const filteredRows = rows.filter((row) => {
    if (licenseFilter === "all") return true;
    const badgeContent = row["license status"].props.badgeContent; // Extract the badge content
    return badgeContent === licenseFilter;
  });

  const publicSchools = filteredRows.filter((row) => row.type.props.job === "Public");
  const privateSchools = filteredRows.filter((row) => row.type.props.job === "Private");

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Card>
            <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              {/* <ArgonTypography variant="h6">Schools</ArgonTypography> */}
              {/* <TextField
                placeholder="Search..."
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              /> */}
              <Select
                value={licenseFilter}
                onChange={handleLicenseFilterChange}
                displayEmpty
                inputProps={{ 'aria-label': 'License Filter' }}
                size="small"
                className="custom-select"
              >
                <MenuItem value="all">All Licenses</MenuItem>
                <MenuItem value="renewed">Renewed</MenuItem>
                <MenuItem value="expired">Expired</MenuItem>
              </Select>
            </ArgonBox>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="school type tabs" sx={{ fontSize: '0.75rem' }}>
              <Tab label="Public Schools" />
              <Tab label="Private Schools" />
            </Tabs>
            <ArgonBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={tabValue === 0 ? publicSchools : privateSchools} />
            </ArgonBox>
          </Card>
        </ArgonBox>
        
        {/* <Card>
          <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <ArgonTypography variant="h6">Hospitals</ArgonTypography>
            <TextField
              placeholder="Search..."
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </ArgonBox>
          <ArgonBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <Table columns={hCols} rows={hRows} />
          </ArgonBox>
        </Card>
        <ArgonBox mt={3}>
          <Card>
            <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                <ArgonTypography variant="h6">Hotels</ArgonTypography>
              <TextField
                placeholder="Search..."
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </ArgonBox>
            <ArgonBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={hCols} rows={hRows} />
            </ArgonBox>
          </Card>
        </ArgonBox> */}
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Schools;
