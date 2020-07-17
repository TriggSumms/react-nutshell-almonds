import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";


const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/home"
        render={props => {
          return <Home />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;