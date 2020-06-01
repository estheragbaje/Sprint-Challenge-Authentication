import React from "react";
import { Redirect, Route } from "react-router-dom";

export function PrivateRoute(props) {
  const token = window.localStorage.getItem("token");
  if (token) {
    return <Route {...props} />;
  }
  return <Redirect to="/" />;
}

export default PrivateRoute;
