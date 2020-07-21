import React, { useState } from 'react';
import FriendManager from '../../modules/FriendManager';
import './FriendForm.css';

const FriendForm = props => {
    const [friend, setFriend] = useState({ name: "", userId: 0 });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...friend };
        stateToChange[evt.target.id] = evt.target.value;
        setFriend(stateToChange);
    };

    /* Local method for validation, set loadingStatus, create friend object, invoke the FriendManager post method, and redirect to the full friend list */
    const constructNewFriend = evt => {
        evt.preventDefault();
        if (friend.name === "") {
            window.alert("Please complete all fields");
        } else {
            setIsLoading(true);
            // Create the friend and redirect user to friend list
            FriendManager.post(friend)
                .then(() => props.history.push("/home"));
        }
    };

    const activeId = sessionStorage.getItem("activeUser")
    friend.userId = parseInt(activeId)
  return (
    <>
      <form>
        <fieldset>
          <input
            type="hidden"
            required
            className="form-control"
            onChange={handleFieldChange}
            id="userId"
            value={friend.userId}
          />
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
              onClick={constructNewFriend}
            >Save</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default FriendForm