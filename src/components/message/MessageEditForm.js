import React, { useState, useEffect } from "react"
import MessageManager from "../../modules/MessageManager"
//import MessageCard from "../message/MessageCard";
import "./MessageCard.css"




const MessageEditForm = props => {
    const [message, setMessage] = useState({userId: "", entryDate: "", entry: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...message };
        stateToChange[evt.target.id] = evt.target.value;
        setMessage(stateToChange);
    };

    const updateExistingMessage = evt => {
        evt.preventDefault()
        setIsLoading(true);

        //Created an easy tag to post to the return edit card.... for showing chats when they are edited     
        const MessageChanged = "(~Edited~)"

        // This is an edit, so we need the id
        const editedMessage = {
            id: props.match.params.messageId,
            userId: message.userId,
            entryDate: message.entryDate + MessageChanged,
            entry: message.entry
        };

        MessageManager.update(editedMessage)
            .then(() => props.history.push("/home"))
    }

    useEffect(() => {
        MessageManager.get(props.match.params.messageId)
            .then(message => {
                setMessage(message);
                setIsLoading(false);
            });
    }, []);





    return (
        <>
        <div className="meesage__Container">
            <form >
                <fieldset className="messageInput__Container">
                    <div className="formgrid">
                        <label htmlFor="entry">Start your Chat!</label>
                        <input
                            type="hidden"
                            required
                            onChange={handleFieldChange}
                            id="userId"   
                        />
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="entry"
                            placeholder="Write your message Here..."
                        ></input>
                    </div>
                    <div className="alignRight">
                        <button
                        className="messageSubmit__button"
                            type="button"
                            disabled={isLoading}
                            onClick={updateExistingMessage}
                        >Submit ur Message</button>
                    </div>
                   
                </fieldset>
            </form>
         </div>
        </>
    );
}

export default MessageEditForm