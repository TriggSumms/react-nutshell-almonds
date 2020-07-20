import React, { useState, useEffect } from 'react';
//import the components we will need
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
      <div>
    <section className="section-content">
    <button type="button"
        className="btn"
        onClick={() => {props.history.push("/friends/new")}}>
        Add Friend!
    </button>
  </section>
    <div className="container-cards">
      {friends.map(friend => 
      <FriendCard
       key={friend.id} 
       friend={friend}
       UserId={friend.UserId}
       deleteFriend={deleteFriend} />)}
    </div>
    </div>
  );
};
export default FriendList