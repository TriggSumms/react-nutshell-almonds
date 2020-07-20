import React, { useState, useEffect } from "react"
import MessageManager from "../../modules/MessageManager"
import TaskCard from "../task/TaskCard";




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
        //let timeStamp = new Date();
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
            <form>
                <fieldset>
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
                        {/* Not sure if date is needed here, might need to change to time stamp? */}
{/*        <label htmlFor="entryDate">Entry Date</label>
            <input
              type="date"
              required
              onChange={handleFieldChange}
              id="entryDate"
              placeholder="Date"
            ></input> 
*/}
                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={updateExistingMessage}
                        >Submit ur Message</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default MessageEditForm