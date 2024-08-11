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

export type Role = "admin" | "user";

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
      role: ["admin", "user"],
      children: [
        {
          path: "/",
          element: Home,
          private: false,
          role: ["admin", "user"],
        },
        {
          path: "/products",
          element: Product,
          private: false,
          role: ["admin", "user"],
        },
        {
          path: "/products/:id",
          element: ProductDetail,
          private: false,
          role: ["admin", "user"],
        },
        {
          path: "/services",
          element: Services,
          private: false,
          role: ["admin", "user"],
        },
        {
          path: "/blogs",
          element: Blog,
          private: false,
          role: ["admin", "user"],
        },
        {
          path: "/blogs/:id",
          element: BlogDetail,
          private: false,
          role: ["admin", "user"],
        },
        {
          path: "/profile/:id",
          element: Profile,
          private: true,
          role: ["admin", "user"],
        },
        {
          path: "/shops",
          element: Shop,
          private: false,
          role: ["admin", "user"],
        },
        {
          path: "/contact-us",
          element: ContactUs,
          private: false,
          role: ["admin", "user"],
        },
        {
          path: "/agricultural",
          element: Agricultural,
          private: false,
          role: ["admin", "user"],
        },
        {
          path: "/add-to-cart",
          element: AddToCart,
          private: true,
          role: ["admin", "user"],
        },
        {
          path: "/settings",
          element: Setting,
          private: true,
          role: ["admin", "user"],
        },
        {
          path: "/about-us",
          element: AboutUs,
          private: true,
          role: ["admin", "user"],
        },
      ],
    },
    {
      path: "/login",
      private: false,
      element: Login,
      role: ["admin", "user"],
    },
    {
      path: "/register",
      private: false,
      element: Register,
      role: ["admin", "user"],
    },
    {
      path: "*",
      private: false,
      element: NotFound,
      role: ["admin", "user"],
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
              <Element />
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
      <Routes>
        {routeList.map((route, i) => {
          const RouteComponent = route.private ? (
            <PrivateRoute element={route.element} roles={route.role} />
          ) : (
            <PublicRoute element={route.element} />
          );

          return (
            <Route key={i} path={route.path} element={RouteComponent}>
              {route.children && renderRoutes(route.children)}
            </Route>
          );
        })}
      </Routes>
    </>
  );
};

export default Router;
