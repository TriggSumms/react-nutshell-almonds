import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import FriendList from "./friend/FriendList"

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
    }}/>
        {/* LOGIN ROUTE */}
        {/* //pass the `setUser` function to Login component. */}
        <Route path="/login" render={props => {
                return <Login setUser={setUser} {...props} />
    }}/>
      <Route
        path="/home"
        render={props => {
            return <FriendList {...props} />;
    }}/>




{/*************** ARTICLES ***************/}
      <Route
        exact
        path="/articles"
        render={props => {
           return <Home />;//Home here is a placeholder value. 
        //You would need to inserts and import articles once built
    }}/>
{/*************** EVENTS ***************/}

      <Route
        exact
        path="/events"
        render={props => {
            return <Home />;//Home here is a placeholder value. 
          //You would need to inserts and import events once built
    }}/>
      




{/*************** Tasks ***************NOTE FROM TRIGG:I ONLY PASSed THE "hasUSer" in place of "isAuthenticated"*******/}
      <Route 
        exact 
        path="/tasks" 
        render={props => {
            return <TaskList {...props} />
    }}/>

      <Route 
        path="/tasks/new" 
        render={(props) => {
        return <TaskForm {...props} />
    }}/>

      <Route 
        path="/tasks/:taskId(\d+)/edit" 
        render={props => {
          if (hasUser) {
            return <TaskEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
    }}/>


    </React.Fragment>
  );
};

export default ApplicationViews;