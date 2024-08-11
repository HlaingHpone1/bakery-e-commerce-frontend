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
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Services from "../pages/visitor/Services";
import ContactUs from "../pages/visitor/ContactUs";
import UserList from "../pages/admin/user/UserList";
import BlogList from "../pages/admin/blog/BlogList";
import BlogDetail from "../pages/visitor/BlogDetail";
import OrderList from "../pages/admin/order/OrderList";
import Agricultural from "../pages/visitor/Agricultural";
import ProductDetail from "../pages/visitor/ProductDetail";
import ProductList from "../pages/admin/product/ProductList";
import CategoryList from "../pages/admin/category/CategoryList";

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
      path: "/admin",
      element: AdminLayout,
      private: true,
      role: ["Admin"],
      children: [
        {
          path: "/admin",
          element: Dashboard,
          private: true,
          role: ["Admin"],
        },
        {
          path: "/admin/users",
          element: UserList,
          private: true,
          role: ["Admin"],
        },
        {
          path: "/admin/blogs",
          element: BlogList,
          private: true,
          role: ["Admin"],
        },
        {
          path: "/admin/categories",
          element: CategoryList,
          private: true,
          role: ["Admin"],
        },
        {
          path: "/admin/products",
          element: ProductList,
          private: true,
          role: ["Admin"],
        },
        {
          path: "/admin/orders",
          element: OrderList,
          private: true,
          role: ["Admin"],
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
