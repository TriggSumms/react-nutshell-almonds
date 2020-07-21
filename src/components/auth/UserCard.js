import React from "react";
import  "./UserCard.css"

const UserCard = props => {
  return (
      
    <div className="user-card">
      <div className="user-card-content">
      <h1>Welcome to Nutshell, {props.user.user}</h1>
        <picture>
          <img src={props.user.img} alt="User" />
        </picture>
        <h3>
          <span className="card-petname">
          </span>
          <button className="edit__Button" type="Button" onClick={() => props.history.push(`/users/${props.user.id}/edit`)}>Edit Profile</button>
        </h3>
      </div>
    </div>
  );
};

export default UserCard;