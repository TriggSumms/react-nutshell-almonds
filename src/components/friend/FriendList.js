import React, { useState, useEffect } from 'react';
//import the components we will need
import FriendCard from './FriendCard';
import FriendManager from '../../modules/FriendManager';

const FriendList = () => {
  // The initial state is an empty array
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    // After the data comes back from the API, we
    //  use the setFriends function to update state
    return FriendManager.getAll().then(friendsFromAPI => {
      setFriends(friendsFromAPI)
    });
  };

  // got the friends from the API on the component's first render
  useEffect(() => {
    getFriends();
  }, []);

  // Finally we use map() to "loop over" the friends array to show a list of animal cards
  return (
    <div className="container-cards">
      {friends.map(friend => 
      <FriendCard key={friend.id} friend={friend} />)}
    </div>
  );
};
export default FriendList