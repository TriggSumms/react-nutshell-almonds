import React from "react";
import  "./FriendCard.css"

const FriendCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src="http://quotesnhumor.com/wp-content/uploads/2018/03/Best-Friend-Quotes-True-Friendship-Starts-here.jpg" alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">
              {props.friend.name}
          </span>
        </h3>
        <button type="button" onClick={() => props.deleteFriend(props.friend.id)}>Delete Friend</button>
      </div>
    </div>
  );
};

export default FriendCard;