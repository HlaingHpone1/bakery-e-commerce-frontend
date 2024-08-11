import { Route, Routes } from "react-router-dom";
import { ComponentType } from "react";

import Home from "../pages/Home";
import Product from "../pages/Product";
import PublicRoute from "./PublicRoute";
import Login from "../pages/auth/Login";
import NotFound from "../pages/NotFound";
import Blog from "../pages/visitor/Blog";
import Shop from "../pages/visitor/Shop";
import PrivateRoute from "./PrivateRoute";
import Setting from "../pages/user/Setting";
import Profile from "../pages/user/Profile";
import Register from "../pages/auth/Register";
import AboutUs from "../pages/visitor/AboutUs";
import MainLayout from "../layouts/MainLayout";
import AddToCart from "../pages/user/AddToCart";
import Services from "../pages/visitor/Services";
import ContactUs from "../pages/visitor/ContactUs";
import BlogDetail from "../pages/visitor/BlogDetail";
import Agricultural from "../pages/visitor/Agricultural";
import ProductDetail from "../pages/visitor/ProductDetail";

export type Role = "Admin" | "User";

interface RouteConfig {
  path: string;
  element: ComponentType;
  private: boolean;
  role: Role[];
  children?: RouteConfig[];
}

const Router = () => {
  const routeList: RouteConfig[] = [
    {
      path: "/",
      element: MainLayout,
      private: false,
      role: ["Admin", "User"],
      children: [
        {
          path: "/",
          element: Home,
          private: false,
          role: ["Admin", "User"],
        },
        {
          path: "/products",
          element: Product,
          private: false,
          role: ["Admin", "User"],
        },
        {
          path: "/products/:id",
          element: ProductDetail,
          private: false,
          role: ["Admin", "User"],
        },
        {
          path: "/services",
          element: Services,
          private: false,
          role: ["Admin", "User"],
        },
        {
          path: "/blogs",
          element: Blog,
          private: false,
          role: ["Admin", "User"],
        },
        {
          path: "/blogs/:id",
          element: BlogDetail,
          private: false,
          role: ["Admin", "User"],
        },
        {
          path: "/profile/:id",
          element: Profile,
          private: true,
          role: ["Admin", "User"],
        },
        {
          path: "/shops",
          element: Shop,
          private: false,
          role: ["Admin", "User"],
        },
        {
          path: "/contact-us",
          element: ContactUs,
          private: false,
          role: ["Admin", "User"],
        },
        {
          path: "/agricultural",
          element: Agricultural,
          private: false,
          role: ["Admin", "User"],
        },
        {
          path: "/add-to-cart",
          element: AddToCart,
          private: true,
          role: ["Admin", "User"],
        },
        {
          path: "/settings",
          element: Setting,
          private: true,
          role: ["Admin", "User"],
        },
        {
          path: "/about-us",
          element: AboutUs,
          private: true,
          role: ["Admin", "User"],
        },
      ],
    },
    {
      path: "/login",
      private: false,
      element: Login,
      role: ["Admin", "User"],
    },
    {
      path: "/register",
      private: false,
      element: Register,
      role: ["Admin", "User"],
    },
    {
      path: "*",
      private: false,
      element: NotFound,
      role: ["Admin", "User"],
    },
  ];

  const renderRoutes = (routes: RouteConfig[]) => {
    return routes.map(
      ({ path, element: Element, private: isPrivate, role, children }) => (
        <Route
          key={path}
          path={path}
          element={
            isPrivate ? (
              <PrivateRoute element={Element} roles={role} />
            ) : (
              <PublicRoute element={Element} />
            )
          }
        >
          {children && renderRoutes(children)}
        </Route>
      )
    );
  };

  return (
    <>
      <Routes>{renderRoutes(routeList)}</Routes>
    </>
  );
};

export default Router;
