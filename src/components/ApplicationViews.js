import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import ArticleList from "./article/ArticleList"
import ArticleForm from "./article/ArticleForm"
import Login from "./auth/Login";
import Register from "./auth/Register"
import FriendList from "./friend/FriendList"
import MessageList from "./message/MessageList"
import MessageForm from "./message/MessageForm"
import MessageEditForm from "./message/MessageEditForm"
import FriendForm from "./friend/FriendForm"
import TaskList from "./task/TaskList";
import TaskForm from './task/TaskForm';
import TaskEditForm from './task/TaskEditForm';
<<<<<<< HEAD
import UserList from "./auth/UserList"
import UserEditForm from "./auth/UserEditForm"

=======
import EventList from "./event/EventList";
import EventForm from './event/EventForm';
import EventEditForm from './event/EventEditForm';
>>>>>>> master


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
          return <Home {...props} />;
        }} />
      {/* LOGIN ROUTE */}
      {/* //pass the `setUser` function to Login component. */}
      <Route path="/login" render={props => {
        return <Login setUser={setUser} {...props} />
      }} />
<<<<<<< HEAD
     <Route 
      path="/home"
      render={props => {
        return <UserList {...props} />;
      }} />
      <Route
        path="/users/:userId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <UserEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
=======
      <Route path="/register" render={props => {
        return <Register setUser={setUser} {...props} />
      }} />
>>>>>>> master
      <Route
        path="/home"
        render={props => {
          return <FriendList {...props} />;
        }} />
           <Route
            path="/friends/new"
            render={(props) => {
                return <FriendForm {...props} />
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
          return <EventList {...props} />
        }} />
        
        <Route
        path="/events/new"
        render={(props) => {
          return <EventForm {...props} />
        }} />
        
        <Route
        path="/events/:eventId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <EventEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

      {/*************** TASKS ******************/}
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


