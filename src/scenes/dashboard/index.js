import { Box } from "@mui/material";
import Header from "../../components/Header";
const Dashboard = () => {
  return (
    <Box m="20px">
      <Box dislplay="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to Dashboard" /> 
      </Box>
    </Box>
  );
};

export default Dashboard;
