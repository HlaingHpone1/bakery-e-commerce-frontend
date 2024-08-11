import { ComponentType } from "react";
import { Navigate } from "react-router-dom";

import { userStore } from "../store/userStore";

interface PublicRouteProps {
  element: ComponentType;
}

const PublicRoute = ({ element: Element }: PublicRouteProps) => {
  const { logInUser, token } = userStore();

  return !logInUser && !!token ? <Navigate to="/" /> : <Element />;
};

export default PublicRoute;
