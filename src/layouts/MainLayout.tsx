import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { DarkThemeContext } from "../context/DarkThemeContext";

import "@fontsource/roboto";
import "@fontsource/roboto-slab"

const MainLayout = () => {
  const { isDarkTheme } = useContext(DarkThemeContext);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFD700",
      },
      secondary: {
        main: "#FFF5E1",
      },
      tertiary: {
        main: "#F5DEB3",
        light: "FFC0CB",
      },
      headerFooter: {
        main: "#8B4513",
      },
      mode: isDarkTheme ? "dark" : "light",
    },
    typography: {
      fontFamily: [
        'Roboto',
        'Roboto Slab',
        'sans-serif',
        'Arial',
      ].join(","),
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