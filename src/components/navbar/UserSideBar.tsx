import { Link } from "react-router-dom";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  AppRegistrationRounded,
  CakeRounded,
  Diversity2Rounded,
  EmojiFoodBeverageRounded,
  ForestRounded,
  HeadsetMicRounded,
  HomeRounded,
  StorefrontRounded,
} from "@mui/icons-material";

type UserSideBarProps = {
  setOpen: (open: boolean) => void;
};

const sideBarList = [
  {
    id: 1,
    title: "Home",
    icon: HomeRounded,
    link: "/",
  },
  {
    id: 2,
    title: "Products",
    icon: EmojiFoodBeverageRounded,
    link: "/products",
  },
  {
    id: 3,
    title: "Services",
    icon: CakeRounded,
    link: "/services",
  },
  {
    id: 4,
    title: "Blogs",
    icon: AppRegistrationRounded,
    link: "/blogs",
  },
  {
    id: 5,
    title: "Shops",
    icon: StorefrontRounded,
    link: "/shops",
  },
  {
    id: 6,
    title: "Contact Us",
    icon: HeadsetMicRounded,
    link: "/contact-us",
  },
  {
    id: 7,
    title: "Agricultural",
    icon: ForestRounded,
    link: "/agricultural",
  },
  {
    id: 8,
    title: "About us",
    icon: Diversity2Rounded,
    link: "/about-us",
  },
];

const UserSideBar = ({ setOpen }: UserSideBarProps) => {
  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpen(!open)}>
      <List>
        {sideBarList.map((list, i) => (
          <Link key={i} to={list.link}>
            <ListItem key={i} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <list.icon />
                </ListItemIcon>
                <ListItemText primary={list.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default UserSideBar;
