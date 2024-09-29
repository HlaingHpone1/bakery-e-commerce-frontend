import React, { useEffect } from "react";

import {
  ChevronLeftRounded,
  ChevronRightRounded,
  MenuRounded,
} from "@mui/icons-material";

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

const drawerWidth = 210;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: "space-around",
}));

import { Outlet } from "react-router-dom";
import SettingSidebar from "../components/settings/SettingSidebar";

const SettingLayout = () => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
        >
          <DrawerHeader>
            <Typography variant="h6" component="h6">
              Settings
            </Typography>
            <IconButton>
              {theme.direction === "ltr" ? (
                <ChevronLeftRounded />
              ) : (
                <ChevronRightRounded />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <SettingSidebar />
        </Drawer>

        <Main
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              width: "30%",
            }}
          >
            <SettingSidebar />
          </Box>
          <Box
            sx={{
              width: "70%",
            }}
          >
            <Outlet />
          </Box>
        </Main>
      </Box>
    </>
  );
};

export default SettingLayout;
