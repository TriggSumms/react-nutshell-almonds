import React from "react";
import  "./FriendCard.css"

const FriendCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="My Dog" />
        </picture>
        <h3>
          <span className="card-petname">
              {props.friend.name}
          </span>
        </h3>
        <button type="button" onClick={() => props.deleteFriend(props.friend.id)}>Delete Friend</button>
      </div>
    </div>
  );
};

export default FriendCard;