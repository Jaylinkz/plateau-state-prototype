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

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
const bgImage ="";
  // "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg";

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={{
        image: bgImage,
        title: '"Everything Made Easy"',
        description:
          "automated services for schools, hospitals and hotels",
      }}
    >
      <ArgonBox component="form" role="form">
        <ArgonBox mb={2}>
          <ArgonInput type="email" placeholder="Email" size="large" />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonInput type="password" placeholder="Password" size="large" />
        </ArgonBox>
        <ArgonBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <ArgonTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mt={4} mb={1}>
          <ArgonButton
            color="success"
            size="large"
            fullWidth
            sx={{
              background: 'linear-gradient(135deg, #34d058 0%, #4cdf70 100%)',
              '&:hover': {
                background: 'linear-gradient(135deg, #2ebd4e 0%, #45c764 100%)',
              },
            }}
          >
            Sign In
          </ArgonButton>
        </ArgonBox>
        {/* <ArgonBox mt={3} textAlign="center">
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <ArgonTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
            >
              Sign up
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox> */}
      </ArgonBox>
    </IllustrationLayout>
  );
}

export default Illustration;
