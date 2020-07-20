import React, { useState } from "react"
import UserManager from "./../../modules/UserManager"
import { Link } from "react-router-dom";

const Login = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "", userName: "" });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    //Input FROM Chris M.
    sessionStorage.setItem("credentials", JSON.stringify(credentials))
    sessionStorage.setItem("activeUser", 1)

  }
   



  /* This is representing our sign in and registration forms. 
  We can adjust the visualization and functionality as needed */

  return (
    <div>
      <form onSubmit={handleLogin}>
        <fieldset>
          <h3>Please sign in</h3>
          <div className="formgrid">
            <input onChange={handleFieldChange} type="userName"
              id="userName"
              placeholder="Username"
              required="" autoFocus="" />
            <label htmlFor="userName">Username</label>

            <input onChange={handleFieldChange} type="password"
              id="password"
              placeholder="Password"
              required="" />
            <label htmlFor="inputPassword">Password</label>
          </div>
          <button type="submit">Sign in</button>
        </fieldset>
      </form>
      
      <div className="register">New user? 
      <Link to="/register">Register a new account</Link>
      </div> 
    </div>
  );
};

export default Login;