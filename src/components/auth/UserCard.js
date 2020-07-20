import React from "react";
import  "./UserCard.css"

const UserCard = () => {
  return (
      
    <div className="card">
      <div className="card-content">
      <h1>Welcome to Nutshell</h1>
        <picture>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="User" />
        </picture>
        <h3>
          <span className="card-petname">
              
          </span>
        </h3>
      </div>
    </div>
  );
};

export default UserCard;