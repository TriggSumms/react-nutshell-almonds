import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import ArticleList from "./article/ArticleList"


const ApplicationViews = (props) => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/home"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        path="/articles"
        render={props => {
          return <ArticleList />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;