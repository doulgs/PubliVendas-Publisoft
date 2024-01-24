import React from "react";
import { useAuth } from "../context/authContext";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
};

export { Routes };
