import { Box, Grid, Stack, Typography } from "@mui/material";

import {
  AccessTimeFilledRounded,
  CalendarMonthRounded,
} from "@mui/icons-material";

import { logo } from "../utils/image";
import FooterLink from "../components/footer/FooterLink";
import ContainerWrapper from "./wrapper/ContainerWrapper";
import ContactInfo from "../components/footer/ContactInfo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      sx={{
        paddingY: "2rem",
        height: "100%",
        background: "linear-gradient(45deg, #FFD5AD, #FFF5E1)",
      }}
    >
      <ContainerWrapper component="footer">
        <Grid container marginBottom="8px">
          <Grid item smd={4} sm={12} xs={12}>
            <Box display="flex" gap="5px" alignItems="center">
              <Box
                component="img"
                src={logo.logo5}
                alt="This is Logo Image"
                sx={{
                  height: "80px",
                }}
              />
              <Stack>
                <Typography
                  variant="h3"
                  noWrap
                  component="h1"
                  sx={{
                    fontFamily: "Roboto Slab",
                    fontSize: "25px",
                    fontWeight: 700,
                  }}
                >
                  Shwe Pu Zun
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ fontSize: "14px" }}
                >
                  Cafeteria and Bakery House
                </Typography>
              </Stack>
            </Box>
            <Typography align="justify" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              inventore neque quas, maxime repellendus atque fuga aperiam.
              Dolore, doloribus. Laudantium nesciunt voluptates sapiente,
              veritatis tempora est autem porro numquam quam.
            </Typography>
          </Grid>
          <Grid item smd={4} sm={6} xs={12}>
            <Typography
              variant="h3"
              component="h1"
              align="center"
              sx={{
                marginBottom: "10px",

                fontFamily: "Roboto Slab",
                fontSize: "25px",
                fontWeight: 700,
              }}
            >
              Useful Links
            </Typography>
            <Stack alignItems="center" gap="8px">
              <FooterLink link="/" text="Home" />
              <FooterLink link="/products" text="Products" />
              <FooterLink link="/services" text="Services" />
              <FooterLink link="/shops" text="Shops" />
              <FooterLink link="/blogs" text="Blogs" />
            </Stack>
          </Grid>
          <Grid item smd={4} sm={6} xs={12}>
            <Typography
              variant="h3"
              component="h1"
              align="center"
              sx={{
                marginBottom: "10px",

                fontFamily: "Roboto Slab",
                fontSize: "25px",
                fontWeight: 700,
              }}
            >
              Opening Hours
            </Typography>

            <Box>
              <ContactInfo icon={<CalendarMonthRounded />} text="Mon - Sun" />
              <ContactInfo
                icon={<AccessTimeFilledRounded />}
                text="7:15 AM - 6:00 PM"
              />
              <ContactInfo
                icon={<CalendarMonthRounded />}
                text="09-123456789, 09-987654321"
              />
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            padding: "10px",
            borderTop: "2px solid #999",
          }}
        >
          <Typography variant="body1" component="p" align="center">
            &copy; {year} All right reserved
          </Typography>
        </Box>
      </ContainerWrapper>
    </Box>
  );
};

export default Footer;
