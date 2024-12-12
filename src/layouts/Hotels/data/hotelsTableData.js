/* eslint-disable react/prop-types */
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonBadge from "components/ArgonBadge";

const hotelsTableData = {
  columns: [
    { name: "hotel", align: "left" },
    { name: "type", align: "left" },
    { name: "location", align: "center" },
    { name: "rooms", align: "center" },
    { name: "staff", align: "center" },
    { name: "expected_income", align: "center" },
    { name: "license_status", align: "center" },
    { name: "paye_status", align: "center" }
  ],
  rows: [
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              BHHR Classic Hotel
            </ArgonTypography>
            <ArgonTypography variant="caption" color="text">
              Liberty dam road
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          LUXURY
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          Jos North
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          45
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          62
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          8,500,000
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="contained"
          color="success"
          size="xs"
          badgeContent="RENEWED"
          container
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="contained"
          color="success"
          size="xs"
          badgeContent="PAID"
          container
        />
      )
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Ikemba Guest House
            </ArgonTypography>
            <ArgonTypography variant="caption" color="text">
              7, Kashim Ibrahim street
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          STANDARD
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          Jos North
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          28
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          35
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          4,200,000
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="contained"
          color="success"
          size="xs"
          badgeContent="RENEWED"
          container
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="contained"
          color="success"
          size="xs"
          badgeContent="PAID"
          container
        />
      )
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Hill Station Hotel
            </ArgonTypography>
            <ArgonTypography variant="caption" color="text">
              10, tudun wada road
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          LUXURY
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          Jos North
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          85
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          120
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          15,000,000
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="contained"
          color="success"
          size="xs"
          badgeContent="RENEWED"
          container
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="contained"
          color="success"
          size="xs"
          badgeContent="PAID"
          container
        />
      )
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Plateau Central Hotel
            </ArgonTypography>
            <ArgonTypography variant="caption" color="text">
              3 Zaria bypass, Apata
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          LUXURY
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          Jos North
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          75
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          95
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          12,000,000
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="contained"
          color="success"
          size="xs"
          badgeContent="RENEWED"
          container
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="contained"
          color="success"
          size="xs"
          badgeContent="PAID"
          container
        />
      )
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Sharpe Guest House
            </ArgonTypography>
            <ArgonTypography variant="caption" color="text">
              15 Zaria Bypass, Jos North
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          STANDARD
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          Jos North
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          28
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          35
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          4,500,000
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="contained"
          color="error"
          size="xs"
          badgeContent="EXPIRED"
          container
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="contained"
          color="success"
          size="xs"
          badgeContent="PAID"
          container
        />
      )
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              New Kampala Motel
            </ArgonTypography>
            <ArgonTypography variant="caption" color="text">
              22 Old Airport Road, Jos North
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          STANDARD
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          Jos North
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          32
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          40
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          5,200,000
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="contained"
          color="success"
          size="xs"
          badgeContent="RENEWED"
          container
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="contained"
          color="error"
          size="xs"
          badgeContent="PENDING"
          container
        />
      )
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Rosedeen Boulevard Suites
            </ArgonTypography>
            <ArgonTypography variant="caption" color="text">
              45 Bauchi Road, Jos North
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          LUXURY
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          Jos North
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          55
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          85
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          12,800,000
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="contained"
          color="success"
          size="xs"
          badgeContent="RENEWED"
          container
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="contained"
          color="success"
          size="xs"
          badgeContent="PAID"
          container
        />
      )
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Central Hotel
            </ArgonTypography>
            <ArgonTypography variant="caption" color="text">
              Rukuba rd
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          STANDARD
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          Jos North
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          40
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          55
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          6,000,000
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="contained"
          color="success"
          size="xs"
          badgeContent="RENEWED"
          container
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="contained"
          color="success"
          size="xs"
          badgeContent="PAID"
          container
        />
      )
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Jikrit Ultimate Suites
            </ArgonTypography>
            <ArgonTypography variant="caption" color="text">
              Bauchi road
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          LUXURY
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          Jos North
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          55
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          75
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          9,750,000
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="contained"
          color="success"
          size="xs"
          badgeContent="RENEWED"
          container
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="contained"
          color="success"
          size="xs"
          badgeContent="PAID"
          container
        />
      )
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Central Hotel
            </ArgonTypography>
            <ArgonTypography variant="caption" color="text">
              56 Ahmadu Bello Way, Jos North
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          STANDARD
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          Jos North
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          42
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          55
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          6,800,000
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge variant="contained" color="success" size="xs" badgeContent="RENEWED" container />
      ),
      paye_status: (
        <ArgonBadge variant="contained" color="error" size="xs" badgeContent="PENDING" container />
      )
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Jikrit Ultimate Suites
            </ArgonTypography>
            <ArgonTypography variant="caption" color="text">
              78 Tafawa Balewa Street, Jos North
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          LUXURY
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          Jos North
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          65
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          95
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="text" fontWeight="regular">
          15,500,000
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge variant="contained" color="error" size="xs" badgeContent="EXPIRED" container />
      ),
      paye_status: (
        <ArgonBadge variant="contained" color="success" size="xs" badgeContent="PAID" container />
      )
    }
  ]
};

export default hotelsTableData;