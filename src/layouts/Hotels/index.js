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

// @mui material components
import React, { useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import MapIcon from "@mui/icons-material/Map";
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
import authorsTableData from "layouts/tables/data/authorsTableData";
import hospitalsTableData from "layouts/tables/data/projectsTableData";
import hotelsTableData from "layouts/tables/data/hotelsTableData";

function Hotels() {
  const { columns: hCols, rows: hRows } = hotelsTableData;
  const [licenseFilter, setLicenseFilter] = useState("all");
  
  const handleLicenseFilterChange = (event) => {
    setLicenseFilter(event.target.value);
  };

  const filteredRows = hRows.filter((row) => {
    if (licenseFilter === "all") return true;
    // Access the status using the data attribute
    const licenseStatus = row["license status"];
    const badgeContent = licenseStatus?.props?.['data-status'];
    return badgeContent === licenseFilter;
  });

  // Modify the columns to change 'completion' to 'license status'
  // const modifiedPrCols = prCols.map(col => 
  //   col.name === "completion" ? { ...col, name: "license status" } : col
  // );

  // Modify the rows to change 'completion' to 'license status' and add 'location' button
  // const modifiedPrRows = prRows.map(row => ({
  //   ...row,
  //   "license status": (
  //     <ArgonTypography variant="caption" color="text" fontWeight="medium">
  //       {row.completion.props.value >= 50 ? "renewed" : "expired"}
  //     </ArgonTypography>
  //   ),
  //   location: (
  //     <Button
  //       variant="contained"
  //       color="primary"
  //       startIcon={<MapIcon />}
  //       onClick={() => openMap(row.latitude, row.longitude)} // You'll need to add latitude and longitude to your data
  //     >
  //       View Map
  //     </Button>
  //   )
  // }));

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mt={3}>
          <Card>
            <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <Select
                value={licenseFilter}
                onChange={handleLicenseFilterChange}
                displayEmpty
                inputProps={{ 'aria-label': 'License Filter' }}
                size="small"
                sx={{ width: 150 }}
              >
                <MenuItem value="all">All Licenses</MenuItem>
                <MenuItem value="renewed">Renewed</MenuItem>
                <MenuItem value="expired">Expired</MenuItem>
              </Select>
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
              <Table columns={hCols} rows={filteredRows} />
            </ArgonBox>
          </Card>
        </ArgonBox>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Hotels;
