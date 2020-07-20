import React, { useState, useEffect } from "react"
import FriendManager from "../../modules/FriendManager"

const FriendForm = props => {
    const [friend, setFriend] = useState({ name: "", userId: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...friend };
        stateToChange[evt.target.id] = evt.target.value;
        setFriend(stateToChange);
    };

    const updateExistingFriend = evt => {
        evt.preventDefault()
        setIsLoading(true);

    // This is an edit, so we need the id
    const newFriend = {
        id: props.match.params.taskId,
        name: friend.name,
        userId: friend.userId
    };

    FriendManager.update(newFriend)
        .then(() => props.history.push("/friends"))
    };
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

    useEffect(() => {
        FriendManager.get(props.match.params.taskId)
            .then(friend => {
                setFriend(friend);
                setIsLoading(false);
            });
    }, []);

    friend.userId = sessionStorage.getItem("activeUser");
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
              onClick={constructNewfriend}
            >Save</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default FriendForm