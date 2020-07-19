import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import ArticleList from "./article/ArticleList"
import ArticleForm from "./article/ArticleForm"
import Login from "./auth/Login";
import FriendList from "./friend/FriendList"

import TaskList from "./task/TaskList";
import TaskForm from './task/TaskForm';
import TaskEditForm from './task/TaskEditForm';


// Check if credentials are in session storage returns true/false
//Redirects to login if nothing in session storage.
const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

const ApplicationViews = (props) => {
    return (
        <React.Fragment>
            <Route
                exact
                path="/home"
                render={props => {
                    if (isAuthenticated()) {
                        return <Home />;
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
            <Route
                exact
                path="/articles"
                render={props => {
                    if (isAuthenticated()) {
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


            <Route
                exact
                path="/events"
                render={props => {
                    if (isAuthenticated()) {
                        return <Home />;//Home here is a placeholder value. 
                        //You would need to inserts and import events once built
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
            <Route
                exact
                path="/tasks"
                render={props => {
                    if (isAuthenticated()) {
                        return <TaskList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

            <Route
                path="/tasks/new"
                render={(props) => {
                    return <TaskForm {...props} />
                }} />

            <Route
                path="/tasks/:taskId(\d+)/edit"
                render={props => {
                    if (isAuthenticated()) {
                        return <TaskEditForm {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
            <Route path="/login" component={Login} />
        </React.Fragment>
    );
}
export default ApplicationViews;