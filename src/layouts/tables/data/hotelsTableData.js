/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
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
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Liberty dam road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Ikemba Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          7, Kashim Ibrahim street
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    // Continue with all 81 hotels...
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Hillsite Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          No 5 bauchi ring road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Sharpe Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          5, Enteryer Street, Jos
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Ajalah Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          W41, Busa buji street, Katako
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Samgamo Lodge
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Lodge
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Tudun wada, ring road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Soyac Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          km3, plot 5, rukuba road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Hillside Guest Inn
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest Inn
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          5, Bauchi Ring road, Jos
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              El-Cortez Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Gamajigo, Zaria road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Express Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          43 Muhammadu Wada Street, polo
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Chiwarna Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          23, Zanana layout, Bauchi road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Falcon Guest Inn
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest Inn
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Behind NITEL Office, Bauchi road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Farin Gada Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Farin Gada Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Fina White House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Behind Federal Secretariat
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              First Class Guest Inn
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest Inn
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Opposite Plateau Hospital
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Gaskiya Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Behind Federal Secretariat
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Golden Touch Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Opposite State Library
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Grand Cubana Hotels
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Old Airport Junction
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Green Valley Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Tudun Wada Ring Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Hill Station Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hill Station Junction
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Hometel Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Behind Federal Secretariat
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              J&J Guest Inn
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest Inn
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Tudun Wada
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Jepat Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Behind Federal Secretariat
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Jos Business School Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Bauchi Ring Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Kenvee Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Behind NITEL Office
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Kings Palace Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Ahmadu Bello Way
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Krystal Palace Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Old Airport Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Lamonde Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Lamonde Street
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Luka Idi Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Behind Federal Secretariat
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Mees Palace Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Old Airport Junction
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Metro Guest Inn
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest Inn
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Tudun Wada Ring Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              New Giobanas Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Old Airport Junction
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Nike Lake Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Behind Federal Secretariat
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Oasis Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Ahmadu Bello Way
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Omega Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Behind Federal Secretariat
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Paulosa Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Behind Federal Secretariat
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Perez Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Behind Federal Secretariat
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Plateau Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Ahmadu Bello Way
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Prestige Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Behind Federal Secretariat
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Quarry Side Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Zaria Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Rayfield Resort
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Rayfield Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Rock Haven Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Rock Haven
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Royal Comfort Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Old Airport Junction
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Royal Palace Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Ahmadu Bello Way
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Samantha Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Behind Federal Secretariat
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Sharna Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Behind Federal Secretariat
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Sheraton Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Old Airport Junction
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Silk Suites
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Suites
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Old Airport Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Silver Bell Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Tudun Wada Ring Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Spring Waters Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Rayfield Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Standard Guest Inn
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest Inn
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Tudun Wada
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Steffans Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Old Airport Junction
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Sunrise Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Behind Federal Secretariat
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Tina Junction Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Tina Junction
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Tower Guest Inn
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest Inn
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Tudun Wada Ring Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Treasure Inn
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest Inn
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Tudun Wada
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Valada Suites
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Suites
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Old Airport Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Valley View Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Behind Federal Secretariat
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Venus Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Ahmadu Bello Way
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Victoria Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Behind Federal Secretariat
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Centre Hotel Limited
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          35, Rukuba Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Jascoe Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          After Car Wash, Rukuba Bye Pass
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Eastern Gate Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Tudun Wada Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Blissful Lodgings
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Lodge
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          1, Adjacent Police Headquarters
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Country Home Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          NEPA Close, Tudun Wada, Jos
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Randiamah Hotel and Resorts
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          No 6 Liberty Boulevard
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Hatfield Hotel and Suites
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          9 Thomas Didel Drive, Tudun Wada
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Franzy Suits
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Suites
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          11 Rest House Road Jos
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Ken Palace
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          11 Rest House Road, Opp Police Officer Mess Off Tudun Wada Ring Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Dreamz Guest Inn
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest Inn
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Rukuba Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Moi Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          4 Liberty Dam Close, Off Liberty Boulevard
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Green Valley Suites
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Suites
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          No 8c Hospital Road, Opp Water Board, Dogon Karfe
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Eagle Valley Royal Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          1A Tafawa Balewa Street
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Tekan Guest House
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Guest House
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Behind CBN Road Jos
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Jerrotel Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Bauchi Ring Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Peoples Hotel Limited
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Busa Buji
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Gordon House Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Zaria Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Wilton Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Tonaville Hotel and Gardens
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          10 Hausa Road, West of Mines
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Fina Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Km 3 Zaria Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
    {
      hotel: (
        <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
          <ArgonBox display="flex" flexDirection="column">
            <ArgonTypography variant="button" fontWeight="medium">
              Hillsite Hotel
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ),
      type: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Hotel
        </ArgonTypography>
      ),
      location: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          No 5 Bauchi Ring Road
        </ArgonTypography>
      ),
      rooms: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      staff: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      expected_income: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          --
        </ArgonTypography>
      ),
      license_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
      paye_status: (
        <ArgonBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
        />
      ),
    },
  ]
};

export default hotelsTableData;