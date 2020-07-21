import React, { useState, useEffect } from 'react';
//import the components we will need
import UserCard from './UserCard';
import UserManager from '../../modules/UserManager';

const UserList = (props) => {
  // The initial state is an empty array
  const [user, setUser] = useState([]);
  const id = sessionStorage.getItem("activeUser")
  const getUser = (id) => {
    // After the data comes back from the API, we
    //  use the setUsers function to update state
    return UserManager.getUser(id).then(userFromAPI => {
      setUser(userFromAPI)
    });
  };

  // got the users from the API on the component's first render
  useEffect(() => {
    getUser(id);
  }, []);

  // Finally we use map() to "loop over" the users array to show a list of animal cards
  return (
      <div>
    <div className="container-cards">
      
      <UserCard 
      key={user.id}
      user={user}
      name={user.name}
      id={user.id}
      {...props} 
       />)
       {/* <button type="button"
      className="btn"
      onClick>
      Edit Profile
  </button> */}
    </div>
    </div>
  );
};
export default UserList