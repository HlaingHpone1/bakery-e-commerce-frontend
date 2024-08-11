import { Outlet } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Box from "@mui/material/Box";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AdminNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 6 }}>
          <Outlet />
        </Box>
      </Box>
      <ReactQueryDevtools />
    </>
  );
};

export default AdminLayout;
