import React, { useState } from 'react';
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
//import FriendCard from "./friend/FriendCard"
import './Almond.css';

const Almond = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;



  //hasUser makes sure the crendentials has a value
  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
<<<<<<< HEAD
=======
    // sessionStorage.setItem("credentials", JSON.stringify(user));
    // sessionStorage.setItem("activeUser", user.id);
    //Added an active user, in which will be temporarily tied to our first User in the Sample API....
    //Maybe I should push the activeUser to local storage?


>>>>>>> cd4d041faaac5421b8538e7a50e961bbd8fbbed0
    setHasUser(isAuthenticated());
  };

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