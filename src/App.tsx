import { useContext } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import Router from "./router/Router";
import AlertBox from "./components/alertBox/AlertBox";
import {
  DarkThemeContext,
  DarkThemeContextProvider,
} from "./context/DarkThemeContext";

function App() {
  const { isDarkTheme } = useContext(DarkThemeContext);

  const theme = createTheme({
    palette: {
      mode: isDarkTheme ? "dark" : "light",
      primary: {
        main: "#FFD5AD",
      },
      secondary: {
        main: "#FFF5E1",
      },
      tertiary: {
        main: "#8B4513",
      },
      optional: {
        main: "#F5DEB3",
      },
    },
    typography: {
      fontFamily: ["Roboto", "Roboto Slab", "sans-serif", "Arial"].join(","),
    },
    breakpoints: {
      values: {
        xs: 0,
        smx: 480,
        sm: 600,
        smd: 750,
        md: 900,
        lg: 1200,
        xl: 1536,
        inner_wrap: 1280,
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DarkThemeContextProvider>
          <Router />
        </DarkThemeContextProvider>
      </ThemeProvider>
      <AlertBox />
    </>
  );
}

export default App;
