import React from "react";
import  "./FriendCard.css"

const FriendCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={props.friend.img} alt="No Profile Pic" />
        </picture>
        <h3>
          <span className="card-petname">
              {props.friend.name}
          </span>
        </h3>
        <button class="delete-friend" type="button" onClick={() => props.deleteFriend(props.friend.id)}>Delete Friend</button>
      </div>
    </div>
  );
};

export default FriendCard;