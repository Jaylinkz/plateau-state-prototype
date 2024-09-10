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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";

function CoverLayout({ title, description, image, imgPosition, button, children }) {
  return (
    <PageLayout>
      <ArgonBox mt={1}>
        <DefaultNavbar
    
          transparent
          light
        />
      </ArgonBox>
      <ArgonBox
        width="calc(100% - 2rem)"
        minHeight="50vh"
        borderRadius="lg"
        mx={2}
        mt={2}
        mb={8}
        pt={18}
        pb={20}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba } }) =>
            image &&
            `${linearGradient(
              rgba("#28a745", 0.7),
              rgba("#34ce57", 0.7)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: imgPosition,
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* The part that handles the background color is in the sx prop of this ArgonBox component. 
            It uses a linear gradient overlay on top of the background image. 
            The rgba function is used to add transparency to the gradient colors. */}
        <Grid container spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={10} lg={4}>
            <ArgonBox mb={1}>
              <ArgonTypography variant="h1" color="white" fontWeight="bold">
                {title}
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonTypography variant="body2" color="white" fontWeight="regular">
                {description}
              </ArgonTypography>
            </ArgonBox>
          </Grid>
        </Grid>
      </ArgonBox>
      <ArgonBox mt={{ xs: -26, lg: -24 }} px={1} width="calc(100% - 2rem)" mx="auto">
        <Grid container justifyContent="center">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </PageLayout>
  );
}

// Setting default values for the props of CoverLayout
CoverLayout.defaultProps = {
  title: "",
  description: "",
  imgPosition: "center",
  button: { color: "info" },
};

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  imgPosition: PropTypes.string,
  button: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
