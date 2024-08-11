import { Link, useNavigate } from "react-router-dom";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
} from "@mui/material";

import {
  AccountCircle,
  Dashboard,
  LogoutRounded,
  SettingsRounded,
  SvgIconComponent,
} from "@mui/icons-material";

import { userStore } from "../../store/userStore";

type ProfileMenuProps = {
  anchorEl: HTMLElement | null;
  handleMenuClose: () => void;
};

type MenuList = {
  id: number;
  title: string;
  icon: SvgIconComponent;
  link: string;
};

const menuList: MenuList[] = [
  {
    id: 1,
    title: "Profile",
    icon: AccountCircle,
    link: "/profile",
  },
  {
    id: 2,
    title: "Settings",
    icon: SettingsRounded,
    link: "/settings",
  },
];

const ProfileMenu = ({ anchorEl, handleMenuClose }: ProfileMenuProps) => {
  const navigate = useNavigate();
  const { logInUser, logOut } = userStore();

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      {logInUser && (
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/admin");
            }}
          >
            <ListItemIcon>
              <Dashboard
                sx={{
                  minWidth: "40px",
                  fontSize: "27px",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Admin Dashboard" />
          </ListItemButton>
        </ListItem>
      )}

      {menuList.map((list) => (
        <Link key={list.id} to={list.link}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <list.icon
                  sx={{
                    minWidth: "40px",
                    fontSize: "27px",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={list.title} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}

      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            handleMenuClose();
            logOut();
          }}
        >
          <ListItemIcon>
            <LogoutRounded
              sx={{
                minWidth: "40px",
                fontSize: "27px",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItemButton>
      </ListItem>
    </Menu>
  );
};

export default ProfileMenu;
