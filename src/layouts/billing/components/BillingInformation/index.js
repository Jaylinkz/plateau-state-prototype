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
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Payments
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pt={1} pb={2} px={2}>
        <TextField
          fullWidth
          placeholder="Search payments..."
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="Payment #1"
            company="St. John's College, Jos"
            Amount="₦115,000.00"
            Reason="License Renewal"
            Email="info@stjohnscollege.com"
            reason="License Renewal"
          />
          <Bill
            name="Payment #2"
            company="Baptist High School, Jos"
            Amount="₦83,030.00"
            Reason="License Renewal"
            Email="info@baptisthighschool.com"
            reason="License Renewal"
          />
          <Bill
            name="Payment #3"
            company="Government Secondary School, Jos"
            Amount="₦230,000.00"
            Reason="PAYE Tax"
            Email="info@gssjos.com"
            noGutter
          />
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default BillingInformation;
