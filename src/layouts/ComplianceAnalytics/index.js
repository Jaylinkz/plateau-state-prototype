import React, { useState, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

// Argon Dashboard 2 MUI components
import MDBox from "components/ArgonBox";
import MDTypography from "components/ArgonTypography";
import MDButton from "components/ArgonButton";
import MDAlert from "components/ArgonAlert";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Mock tax compliance data
const mockTaxComplianceData = [
  { 
    id: 1, 
    name: "Plateau State Hospitality Ltd", 
    type: "Hospitality", 
    taxComplianceScore: 85, 
    isTaxCompliant: true,
    lastTaxAssessment: "2023-06-15",
    taxViolations: ["Minor reporting delay"],
    taxRiskLevel: "Low",
    outstandingTax: 0,
    totalAnnualRevenue: 5200000,
    taxesPaid: 1560000,
    requiredTaxActions: ["Submit Q2 tax report"]
  },
  { 
    id: 2, 
    name: "Kpachudu Hotel Rukubaroad", 
    type: "Hospitality", 
    taxComplianceScore: 45, 
    isTaxCompliant: false,
    lastTaxAssessment: "2023-05-20",
    taxViolations: [
      "Underreported income", 
      "Late tax payment", 
      "Incomplete tax documentation"
    ],
    taxRiskLevel: "High",
    outstandingTax: 750000,
    totalAnnualRevenue: 8500000,
    taxesPaid: 1275000,
    requiredTaxActions: [
      "Complete tax audit", 
      "Pay outstanding tax liability", 
      "Submit comprehensive financial records"
    ]
  },
  { 
    id: 3, 
    name: "Plateau Tech Innovations", 
    type: "Technology", 
    taxComplianceScore: 90, 
    isTaxCompliant: true,
    lastTaxAssessment: "2023-07-01",
    taxViolations: [],
    taxRiskLevel: "Very Low",
    outstandingTax: 0,
    totalAnnualRevenue: 12000000,
    taxesPaid: 3600000,
    requiredTaxActions: []
  },
];

function ComplianceAnalytics() {
  const [taxEntities, setTaxEntities] = useState(mockTaxComplianceData);
  const [nonCompliantEntities, setNonCompliantEntities] = useState([]);
  const [taxComplianceMetrics, setTaxComplianceMetrics] = useState({
    totalEntities: 0,
    compliantEntities: 0,
    nonCompliantEntities: 0,
    overallTaxComplianceRate: 0,
    highRiskEntities: 0,
    totalAnnualRevenue: 0,
    totalTaxesPaid: 0,
    totalOutstandingTax: 0
  });

  // Modal and Report Generation State
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [selectedInstitutionTypes, setSelectedInstitutionTypes] = useState({
    Hotels: false,
    Schools: false,
    "Filling Stations": false
  });

  useEffect(() => {
    // Compute tax compliance metrics
    const totalEntities = taxEntities.length;
    const compliantEntities = taxEntities.filter(entity => entity.isTaxCompliant).length;
    const nonCompliant = taxEntities.filter(entity => !entity.isTaxCompliant);
    const overallTaxComplianceRate = (compliantEntities / totalEntities) * 100;
    const highRiskEntities = taxEntities.filter(entity => entity.taxRiskLevel === "High").length;
    
    // Calculate financial metrics
    const totalAnnualRevenue = taxEntities.reduce((sum, entity) => sum + entity.totalAnnualRevenue, 0);
    const totalTaxesPaid = taxEntities.reduce((sum, entity) => sum + entity.taxesPaid, 0);
    const totalOutstandingTax = taxEntities.reduce((sum, entity) => sum + entity.outstandingTax, 0);

    setNonCompliantEntities(nonCompliant);
    setTaxComplianceMetrics({
      totalEntities,
      compliantEntities,
      nonCompliantEntities: nonCompliant.length,
      overallTaxComplianceRate,
      highRiskEntities,
      totalAnnualRevenue,
      totalTaxesPaid,
      totalOutstandingTax
    });
  }, [taxEntities]);

  const renderTaxComplianceCard = (entity) => (
    <Grid item xs={12} key={entity.id}>
      <Card>
        <MDBox p={2}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4}>
              <MDTypography variant="h6">{entity.name}</MDTypography>
              <MDTypography variant="caption" color={entity.isTaxCompliant ? "success" : "error"}>
                {entity.type} | {entity.taxRiskLevel} Tax Risk
              </MDTypography>
            </Grid>
            <Grid item xs={4}>
              <MDBox>
                <MDTypography variant="caption">Tax Compliance Score</MDTypography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress 
                      variant="determinate" 
                      value={entity.taxComplianceScore} 
                      color={entity.isTaxCompliant ? "success" : "error"}
                    />
                  </Box>
                  <Box sx={{ minWidth: 35 }}>
                    <MDTypography variant="body2" color="text">
                      {`${entity.taxComplianceScore}%`}
                    </MDTypography>
                  </Box>
                </Box>
              </MDBox>
            </Grid>
            <Grid item xs={4}>
              <MDBox>
                <MDTypography variant="caption">Last Tax Assessment</MDTypography>
                <MDTypography variant="body2">
                  {entity.lastTaxAssessment}
                </MDTypography>
              </MDBox>
            </Grid>
          </Grid>
          
          <Grid container spacing={2} mt={1}>
            <Grid item xs={4}>
              <MDBox>
                <MDTypography variant="caption">Annual Revenue</MDTypography>
                <MDTypography variant="body2">
                  ₦{entity.totalAnnualRevenue.toLocaleString()}
                </MDTypography>
              </MDBox>
            </Grid>
            <Grid item xs={4}>
              <MDBox>
                <MDTypography variant="caption">Taxes Paid</MDTypography>
                <MDTypography variant="body2" color="success">
                  ₦{entity.taxesPaid.toLocaleString()}
                </MDTypography>
              </MDBox>
            </Grid>
            <Grid item xs={4}>
              <MDBox>
                <MDTypography variant="caption">Outstanding Tax</MDTypography>
                <MDTypography variant="body2" color="error">
                  ₦{entity.outstandingTax.toLocaleString()}
                </MDTypography>
              </MDBox>
            </Grid>
          </Grid>
          
          {entity.taxViolations.length > 0 && (
            <MDBox mt={2}>
              <MDTypography variant="caption" color="error">Tax Violations:</MDTypography>
              {entity.taxViolations.map((violation, index) => (
                <MDTypography key={index} variant="body2" color="error">
                  • {violation}
                </MDTypography>
              ))}
            </MDBox>
          )}
          
          {entity.requiredTaxActions.length > 0 && (
            <MDBox mt={2}>
              <MDTypography variant="caption" color="warning">Required Tax Actions:</MDTypography>
              {entity.requiredTaxActions.map((action, index) => (
                <MDTypography key={index} variant="body2" color="warning">
                  • {action}
                </MDTypography>
              ))}
            </MDBox>
          )}
        </MDBox>
      </Card>
    </Grid>
  );

  // Modal Handlers
  const handleOpenReportModal = () => {
    setIsReportModalOpen(true);
  };

  const handleCloseReportModal = () => {
    setIsReportModalOpen(false);
  };

  const handleInstitutionTypeToggle = (type) => {
    setSelectedInstitutionTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleGenerateReport = () => {
    // Logic to generate report for selected institution types
    const selectedTypes = Object.keys(selectedInstitutionTypes)
      .filter(type => selectedInstitutionTypes[type]);
    
    console.log("Generating report for:", selectedTypes);
    // TODO: Implement actual report generation logic
    handleCloseReportModal();
  };

  // Render Modal for Report Generation
  const renderReportGenerationModal = () => (
    <Modal
      open={isReportModalOpen}
      onClose={handleCloseReportModal}
      aria-labelledby="ai-analytics-modal"
      aria-describedby="select-institutions-for-report"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: 2
      }}>
        <MDTypography id="ai-analytics-modal" variant="h4" component="h2" mb={2}>
          AI Analytics
        </MDTypography>
        
        <MDTypography variant="body2" color="text" mb={2}>
          Select Institution Types for Report Generation
        </MDTypography>

        <List>
          {Object.keys(selectedInstitutionTypes).map((type) => (
            <ListItem
              key={type}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={() => handleInstitutionTypeToggle(type)}
                  checked={selectedInstitutionTypes[type]}
                />
              }
              disablePadding
            >
              <ListItemText primary={type} />
            </ListItem>
          ))}
        </List>

        <MDBox mt={2} display="flex" justifyContent="space-between">
          <MDButton 
            color="secondary" 
            onClick={handleCloseReportModal}
          >
            Cancel
          </MDButton>
          <MDButton 
            color="primary" 
            onClick={handleGenerateReport}
            disabled={!Object.values(selectedInstitutionTypes).some(v => v)}
          >
            Generate Report
          </MDButton>
        </MDBox>
      </Box>
    </Modal>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <MDBox>
          <MDTypography variant="h4" mb={2}>Tax Compliance Analytics</MDTypography>
          
          {nonCompliantEntities.length > 0 && (
            <MDAlert color="error" dismissible>
              {nonCompliantEntities.length} Entities Require Immediate Tax Attention
            </MDAlert>
          )}

          <Grid container spacing={2} mb={3}>
            <Grid item xs={3}>
              <Card>
                <MDBox p={2} textAlign="center">
                  <MDTypography variant="h3" color="success">
                    {taxComplianceMetrics.overallTaxComplianceRate.toFixed(1)}%
                  </MDTypography>
                  <MDTypography variant="caption">Overall Tax Compliance Rate</MDTypography>
                </MDBox>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <MDBox p={2} textAlign="center">
                  <MDTypography variant="h3" color="error">
                    {taxComplianceMetrics.highRiskEntities}
                  </MDTypography>
                  <MDTypography variant="caption">High-Risk Tax Entities</MDTypography>
                </MDBox>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <MDBox p={2} textAlign="center">
                  <MDTypography variant="h3">
                    {taxComplianceMetrics.totalEntities}
                  </MDTypography>
                  <MDTypography variant="caption">Total Monitored Entities</MDTypography>
                </MDBox>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <MDBox p={2} textAlign="center">
                  <MDTypography variant="h3" color="warning">
                    ₦{(taxComplianceMetrics.totalOutstandingTax / 1000000).toFixed(1)}M
                  </MDTypography>
                  <MDTypography variant="caption">Total Outstanding Tax</MDTypography>
                </MDBox>
              </Card>
            </Grid>
          </Grid>

          <MDTypography variant="h6" mb={2}>Non-Compliant and High-Risk Tax Entities</MDTypography>
          <Grid container spacing={2}>
            {nonCompliantEntities.map(renderTaxComplianceCard)}
          </Grid>

          <MDBox mt={4}>
            <MDButton 
              color="primary" 
              fullWidth 
              onClick={handleOpenReportModal}
            >
              Generate Comprehensive Tax Compliance Report
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
      
      {/* Render the Report Generation Modal */}
      {renderReportGenerationModal()}
      
      <Footer />
    </DashboardLayout>
  );
}

export default ComplianceAnalytics;
