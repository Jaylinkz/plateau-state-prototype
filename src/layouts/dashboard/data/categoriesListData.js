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

// Argon Dashboard 2 MUI components
import ArgonTypography from "components/ArgonTypography";

const categoriesListData = [
  {
    color: "dark",
    icon: <i className="ni ni-tag" style={{ fontSize: "12px" }} />,
    name: "Hotels",
    description: (
      <>
        2,345 Hotels,{" "}
        {/* <ArgonTypography variant="caption" color="text" fontWeight="medium">
          346+ sold
        </ArgonTypography> */}
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-tag" style={{ fontSize: "12px" }} />,
    name: "Schools",
    description: (
      <>
        1,240 Schools,{" "}
        {/* <ArgonTypography variant="caption" color="text" fontWeight="medium">
          15 open
        </ArgonTypography> */}
      </>
    ),
    route: "/",
  },
  // {
  //   color: "dark",
  //   icon: <i className="ni ni-box-2" style={{ fontSize: "12px" }} />,
  //   name: "Error logs",
  //   description: (
  //     <>
  //       1 is active,{" "}
  //       <ArgonTypography variant="caption" color="text" fontWeight="medium">
  //         40 closed
  //       </ArgonTypography>
  //     </>
  //   ),
  //   route: "/",
  // },
  {
    color: "dark",
    icon: <i className="ni ni-tag" style={{ fontSize: "12px" }} />,
    name: "Hospitals",
    description: (
      <>
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          +&nbsp;50 hospitals
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
];

export default categoriesListData;
