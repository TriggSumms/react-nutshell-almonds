import React, { useState } from 'react';
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import './Almond.css';

const Almond = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;



  //hasUser makes sure the crendentials has a value
  const [hasUser, setHasUser] = useState(isAuthenticated());

//Used to refresh in after login in Login.js
  const setUser = user => {
    setHasUser(isAuthenticated());
  };

//Logout function located in Navbar
  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }


  return (

    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>

  );
}

export default Almond;