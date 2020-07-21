import React, { useState, useEffect } from 'react';
import FriendCard from './FriendCard';
import FriendManager from '../../modules/FriendManager';

const FriendList = (props) => {
  // The initial state is an empty array
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    // After the data comes back from the API, we
    //  use the setFriends function to update state
    return FriendManager.getAll().then(friendsFromAPI => {
      setFriends(friendsFromAPI)

    });
  };

  const deleteFriend = id => {
    FriendManager.delete(id)
      .then(() => FriendManager.getAll().then(setFriends));
  };

  // got the friends from the API on the component's first render
  useEffect(() => {
    getFriends();
  }, []);

  //add this button above your display of animal cards

  // Finally we use map() to "loop over" the friends array to show a list of animal cards
  return (
    <>
      <section className="friend-section-content">
        <h1 className="friend-header">Your Friends:</h1>

      </section>

      <div className="friend-container-cards">
        {/* edit this for card appearance */}
        {friends.map(friend => {
          if (friend.userId == sessionStorage.getItem("activeUser")) {
            return (
              <FriendCard
                key={friend.id}
                friend={friend}
                deleteFriend={deleteFriend}
                {...props}
              />
            )
          }

        })}

      </div>
      <div>
        <button type="button"
          className="btn"
          onClick={() => { props.history.push("/friends/new") }}>
          Add a Friend
            </button>
      </div>
    </>
  );
};
export default FriendList