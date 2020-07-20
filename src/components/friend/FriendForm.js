import React, { useState } from 'react';
import FriendManager from '../../modules/FriendManager';
import './FriendForm.css'

const FriendForm = props => {
  const [friend, setfriend] = useState({ name: "", userId: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...friend };
    stateToChange[evt.target.id] = evt.target.value;
    setfriend(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create friend      object, invoke the FriendManager post method, and redirect to the full friend list
  */
  const constructNewfriend = evt => {
    evt.preventDefault();
    if (friend.name === "") {
      window.alert("Please input an friend name");
    } else {
      setIsLoading(true);
      // Create the friend and redirect user to friend list
      FriendManager.post(friend)
        .then(() => props.history.push("/home")); //sends the user back to "home" after adding friend
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="friend name"
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewfriend}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default FriendForm