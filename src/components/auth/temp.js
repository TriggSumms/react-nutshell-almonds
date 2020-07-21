import React, { useState } from "react"
import { Link, useParams } from "react-router-dom";
import LoginManager from "../modules/LoginManager";

const Login = props => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading]= useState(false);

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...user};
    stateToChange[evt.target.id] = evt.target.value;
    setUser(stateToChange);
    
  };

    const handleLogin = e => {
      e.preventDefault();
const username="jim"
const password="test"
      LoginManager.getAll()
      .then(users => {
        console.log(users)
        users.find(user => {
        if(user.username===username&&user.password===password) {
          sessionStorage.removeItem('user');
          sessionStorage.setItem('user', JSON.stringify(user))
          console.log(sessionStorage.getItem('user', user))
          props.history.push('/');
        } 
        })
      })
    }
    /*
        For now, just store the email and password that
        the customer enters into session storage.
        ...Let's just trust the user... That's a good idea, right????
    */
    // sessionStorage.setItem(
    //   "credentials",
    //   JSON.stringify(credentials)
    // );
    // console.log(credentials)
    // props.setUser(credentials);
    // props.history.push("/");
  

  return (
    <div className="limiter">
      <div className="loginBoxContainer">
        <div className="loginBox">
          <div className="loginLogo">
            <img src="./nutshell2logo.png" alt="logo" />
          </div>


          <form onSubmit={handleLogin}>
            <span className="loginHeader">
              Sign In
            </span>

            <div className="form-input">
              <input onChange={handleFieldChange} className="inputField" type="text" id="email"/>
              <span className="focus-inputField" data-placeholder="Email"></span>
            </div>

            <div className="form-input">
              <input onChange={handleFieldChange} className="inputField" type="password" id="password"/>
              <span className="focus-inputField" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <div className="wrap-login-form-btn">
                <div className="login-form-bgbtn"></div>
                <button type="submit" className="login-form-btn">
                  Login
                </button>
              </div>
            </div>

            <div className="registerAcct">
              <span className="registerAcct__text">
                Don’t have an account?
              </span>
                <Link to="/register">
                Sign Up
                </Link>
            </div>
          </form>
        </div>
      </div>
	  </div>
  );
  };

export default Login;