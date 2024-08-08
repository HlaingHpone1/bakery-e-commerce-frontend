import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { DarkThemeContext } from "../context/DarkThemeContext";

import "@fontsource/roboto";
import "@fontsource/roboto-slab";

const MainLayout = () => {
  const { isDarkTheme } = useContext(DarkThemeContext);

  const theme = createTheme({
    palette: {
      mode: isDarkTheme ? "dark" : "light",
      primary: {
        main: "#FFD700",
      },
      secondary: {
        main: "#FFF5E1",
      },
      tertiary: {
        main: "#8B4513",
      },
      optional: {
        main: "#F5DEB3",
        light: "FFC0CB",
      },
    },
    typography: {
      fontFamily: ["Roboto", "Roboto Slab", "sans-serif", "Arial"].join(","),
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Outlet />
        <Footer />
        <ReactQueryDevtools />
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
