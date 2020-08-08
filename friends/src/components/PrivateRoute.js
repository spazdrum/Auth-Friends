import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const privateRoute = ({ component: Component, ...prop }) => {
  return (
    <Route
      {...prop}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default privateRoute;
