import React, { useState } from 'react';
import MessageManager from '../../modules/MessageManager';
import UserList from '../auth/UserList';
//import MessageList from './MessageList'



//Method for Creating Time Stamp in readeable form(mdn docs)...
let timeStamp = new Intl.DateTimeFormat("en", {
    timeStyle: "medium",
    dateStyle: "short"
});

const MessageForm = props => {
    const [message, setMessage] = useState({ entry: "", entryDate: timeStamp.format(Date.now()), id: "", userId: 0 });
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //This will handle the changes  and grab all em messages come an "evt = event"
    const handleFieldChange = evt => {
        const stateToChange = { ...message, ...user}
        stateToChange[evt.target.id] = evt.target.value;
        setMessage(stateToChange);
    }

    //message.userId = sessionStorage.getItem("activeUser")


    const currentUserId = sessionStorage.getItem("activeUser")
    message.userId = parseInt(currentUserId)
    



    //Pushing the constructed message with our manager to post the message
    const constructNewMessage = evt => {
        evt.preventDefault();
        if (message.entry === "") {
            window.alert("O me O my, looks like you dont wanna send a message?...Please fill out entry to continue.");
        } else {
            // This is in place to control the user(s) clicks and too  make sure were not flooded with new messages
            setIsLoading(true);
 

/* 
            MessageManager.post(message)
                .then(() => {props.getMessages()
               setIsLoading(false)})
            */
          MessageManager.post(message)
                .then(() => MessageManager.getAll())
                
                //.then(() => props.history.push("/home"))
 

                } 
        
    };


    return (
        <>
        
            <form >
                <fieldset className="messageInput__Container">
                    <div className="formgrid">
                        <label htmlFor="entry">Start your Chat!</label>
                        <input
                            type="hidden"
                            required
                            onChange={handleFieldChange}
                            id="userId"
                            value={message.userId}   
                        />
                        <input
                            type="textarea"
                            required
                            onChange={handleFieldChange}
                            id="entry"
                            placeholder="Write your message Here..."
                            rows="75" cols="100"
                        ></input>
                    </div>
                    <div className="alignRight">
                        <button
                        className="messageSubmit__button"
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewMessage}
                        >Submit ur Message</button>
                    </div>
                </fieldset>
            </form>
        
        </>
    )

}

export default MessageForm;