import { Outlet } from "react-router-dom";

import { Box, Fab, Fade, Toolbar, useScrollTrigger } from "@mui/material";

import Navbar from "./Navbar";
import Footer from "./Footer";

import "@fontsource/roboto";
import "@fontsource/roboto-slab";
import { KeyboardArrowUp } from "@mui/icons-material";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Toolbar id="back-to-top-anchor" />
      <Outlet />
      <Footer />
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
      {/* <ReactQueryDevtools /> */}
    </>
  );
};

export default MainLayout;
