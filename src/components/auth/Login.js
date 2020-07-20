import React, { useState } from "react"

const Login = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "", userName: ""});

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
/*
        For now, just store the email and password that
        the customer enters into session storage.
        ...Let's just trust the user... That's a good idea, right????
*/

   //Input FROM Chris M.
   sessionStorage.setItem("credentials", JSON.stringify(credentials))
   sessionStorage.setItem("activeUser", 1)
   //sessionStorage.setItem("activeUser", 2)


   
   //Goal is to use the push to route the user to the home/USER profile pg after sucessfully logging in
   props.setUser(credentials);
   props.history.push("/home");
  }



  /* This is representing our sign in and registration forms. 
  We can adjust the visualization and functionality as needed */
  
  return (
      <div>
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please sign in</h3>
        <div className="formgrid">
          <input onChange={handleFieldChange} type="email"
            id="email"
            placeholder="Email address"
            required="" autoFocus="" />
          <label htmlFor="inputEmail">Email address</label>

          <input onChange={handleFieldChange} type="password"
            id="password"
            placeholder="Password"
            required="" />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <button type="submit">Sign in</button>
      </fieldset>
    </form>

    <form onSubmit={handleLogin}>
    <fieldset>
      <h3>New User? Register an Account</h3>
      <div className="formgrid">
        <input onChange={handleFieldChange} type="email"
          id="email"
          placeholder="email@...com"
          required="" autoFocus="" />
        <label htmlFor="inputEmail">Email address</label>

        <input onChange={handleFieldChange} type="password"
          id="password"
          placeholder="Password"
          required="" />
        <label htmlFor="inputPassword">Password</label>

        <input onChange={handleFieldChange} type="userName"
          id="userName"
          placeholder="User Name"
          required="" />
        <label htmlFor="registerInputUserName">Create Your User Name</label>
      </div>
      <button type="submit">Create Account</button>
    </fieldset>
  </form>
  </div>
  );
};

export default Login;