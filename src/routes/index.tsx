import React, { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { Loading } from "../components/Loading";
import { dispararSync } from "../helpers/functions/dispararSync";

const Routes = () => {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function Sync() {
      setLoading(true);
      //await dispararSync();
      setLoading(false);
    }
    Sync();
  }, [isAuthenticated]);

  if (loading) return <Loading />;

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
};

export { Routes };
