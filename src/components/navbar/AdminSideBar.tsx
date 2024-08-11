import {
  AppRegistrationRounded,
  CategoryRounded,
  EmojiFoodBeverageRounded,
  PeopleAlt,
  TaskRounded,
} from "@mui/icons-material";
import { userStore } from "../../store/userStore";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

type AdminSideBarProps = {
  open: boolean;
};

const AdminSideBar = ({ open }: AdminSideBarProps) => {
  const { role } = userStore();

  const MenuList = [
    {
      id: 1,
      text: "Users",
      link: "/admin/users",
      icon: PeopleAlt,
      role: ["Admin"],
    },
    {
      id: 2,
      text: "Blogs",
      link: "/admin/blogs",
      icon: AppRegistrationRounded,
      role: ["Admin"],
    },
    {
      id: 3,
      text: "Categories",
      link: "/admin/categories",
      icon: CategoryRounded,
      role: ["Admin"],
    },
    {
      id: 4,
      text: "Products",
      link: "/admin/products",
      icon: EmojiFoodBeverageRounded,
      role: ["Admin"],
    },
    {
      id: 5,
      text: "Orders",
      link: "/admin/orders",
      icon: TaskRounded,
      role: ["Admin"],
    },
  ];
  return (
    <>
      {MenuList.filter((list) => list.role.includes(role)).map((list, i) => (
        <>
          <ListItem key={i} disablePadding sx={{ display: "block" }}>
            <Link to={list.link}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <list.icon />
                </ListItemIcon>
                <ListItemText
                  primary={list.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        </>
      ))}
    </>
  );
};

export default AdminSideBar;
