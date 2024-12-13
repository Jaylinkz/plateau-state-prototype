import { useState } from "react";
import {
  Card,
  Icon,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
  Modal,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function FlaggedInstitutions() {
  const [institutions] = useState([
    { name: "Elim Kpachudu Hotel", type: "Hotel", reason: "License Expired", date: "2024-01-10" },
    { name: "Jossy Royal Hotel", type: "Hotel", reason: "Unpaid PAYE Tax", date: "2024-01-09" },
    { name: "Semshak Hotel", type: "Hotel", reason: "License Expired", date: "2024-01-08" },
    { name: "Fatima Private School", type: "School", reason: "Unpaid PAYE Tax", date: "2024-01-07" },
    { name: "Saints Academy", type: "School", reason: "License Expired", date: "2024-01-06" },
    { name: "Jinkai Hospital", type: "Hospital", reason: "License Expired", date: "2024-01-05" },
  ]);

  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (institution) => {
    setSelectedInstitution(institution);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedInstitution(null);
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
  };

  const shareOptions = [
    { icon: 'email', text: 'Share via Email', action: () => console.log('Email sharing') },
    { icon: 'print', text: 'Print Details', action: () => console.log('Print details') },
    { icon: 'file_download', text: 'Download Report', action: () => console.log('Download report') },
    { icon: 'content_copy', text: 'Copy Link', action: () => console.log('Copy link') },
  ];

  const handleShare = () => {
    setSelectedInstitution({ name: "All Flagged Institutions" });
    setOpenModal(true);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Card>
            <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <ArgonBox>
                <ArgonTypography variant="h6" gutterBottom>
                  Flagged Institutions
                </ArgonTypography>
                <ArgonBox display="flex" alignItems="center" lineHeight={0}>
                  <Icon
                    sx={{
                      fontWeight: "bold",
                      color: ({ palette: { info } }) => info.main,
                      mt: -0.5,
                    }}
                  >
                    notification
                  </Icon>
                  <ArgonTypography variant="button" fontWeight="regular" color="text">
                    &nbsp;<strong>{institutions.length}</strong> institutions flagged
                  </ArgonTypography>
                </ArgonBox>
              </ArgonBox>
              <Tooltip title="Share List" placement="left">
                <IconButton onClick={handleShare} color="info">
                  <ShareIcon />
                </IconButton>
              </Tooltip>
            </ArgonBox>
            <ArgonBox px={3} pb={3}>
              <TableContainer sx={{ 
                minWidth: 800,
                '& .MuiTableCell-root': {
                  padding: '16px',
                  whiteSpace: 'nowrap'
                }
              }}>
                <Table>
                  <colgroup>
                    <col style={{width:'35%'}}/>
                    <col style={{width:'15%'}}/>
                    <col style={{width:'25%'}}/>
                    <col style={{width:'15%'}}/>
                    <col style={{width:'10%'}}/>
                  </colgroup>
                  <TableBody>
                    {institutions.map((institution) => (
                      <TableRow 
                        key={institution.name}
                        sx={{
                          '&:hover': {
                            backgroundColor: 'rgba(0,0,0,0.04)'
                          },
                          '& .MuiTableCell-root': {
                            borderBottom: '1px solid rgba(0,0,0,0.06)',
                          }
                        }}
                      >
                        <TableCell sx={{ paddingLeft: '24px' }}>{institution.name}</TableCell>
                        <TableCell sx={{ paddingLeft: '24px' }}>{institution.type}</TableCell>
                        <TableCell sx={{ paddingLeft: '24px' }}>{institution.reason}</TableCell>
                        <TableCell sx={{ paddingLeft: '24px' }}>{institution.date}</TableCell>
                        <TableCell sx={{ textAlign: 'center' }}>
                          <IconButton 
                            size="small" 
                            color="info" 
                            onClick={() => handleOpenModal(institution)}
                          >
                            <Icon>visibility</Icon>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </ArgonBox>
          </Card>
        </ArgonBox>
      </ArgonBox>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="share-modal-title"
      >
        <Box sx={modalStyle}>
          <Typography id="share-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
            Share Institution Details
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            {selectedInstitution?.name}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <List>
            {shareOptions.map((option) => (
              <ListItem 
                button 
                key={option.text}
                onClick={option.action}
                sx={{ 
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.04)'
                  }
                }}
              >
                <ListItemIcon>
                  <Icon>{option.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={option.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Modal>
    </DashboardLayout>
  );
}

export default FlaggedInstitutions;
