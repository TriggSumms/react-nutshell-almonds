import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import ArticleList from "./article/ArticleList"
import ArticleForm from "./article/ArticleForm"
import Login from "./auth/Login";
import FriendList from "./friend/FriendList"
import MessageList from "./message/MessageList"
import MessageForm from "./message/MessageForm"
import MessageEditForm from "./message/MessageEditForm"

import TaskList from "./task/TaskList";
import TaskForm from './task/TaskForm';
import TaskEditForm from './task/TaskEditForm';


// Check if credentials are in session storage returns true/false
//Redirects to login if nothing in session storage.
//const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;
  return (
    <React.Fragment>
      <Route
        exact
        path="/home"
        render={(props) => {
          return <Home />;
        }} />
      {/* LOGIN ROUTE */}
      {/* //pass the `setUser` function to Login component. */}
      <Route path="/login" render={props => {
        return <Login setUser={setUser} {...props} />
      }} />
      <Route
        path="/home"
        render={props => {
          return <FriendList {...props} />;
        }} />

      <Route
        exact path="/home"
        render={props => {
          if (hasUser) {
            return <MessageList {...props}
            />
          }
          else {
            return <Redirect to="/home" />
          }
        }} />

      <Route
        path="/messages/:messageId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <MessageEditForm {...props}
            />
          }
          else {
            return <Redirect to="/home" />
          }
        }} />




      {/*************** ARTICLES ***************/}
      <Route
            exact
            path="/articles"
            render={props => {
                if (hasUser) {
                    return <ArticleList {...props}/>;//Home here is a placeholder value. 
                    //You would need to inserts and import articles once built
                } else {
                    return <Redirect to="/login" />
                }
            }} />
        <Route
            path="/articles/new"
            render={(props) => {
                return <ArticleForm {...props} />
            }} />

      {/*************** EVENTS ***************/}

      <Route
        exact
        path="/events"
        render={props => {
          return <Home />;//Home here is a placeholder value. 
          //You would need to inserts and import events once built
        }} />





      {/*************** Tasks ******************/}
      <Route
        exact
        path="/tasks"
        render={props => {
          return <TaskList {...props} />
        }} />

      <Route
        path="/tasks/new"
        render={(props) => {
          return <TaskForm {...props} />
        }} />

      <Route
        path="/tasks/:taskId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <TaskEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        </React.Fragment>
    );
}
export default ApplicationViews;


