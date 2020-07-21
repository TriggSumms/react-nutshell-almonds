import React, { useState, useEffect } from 'react';
import MessageCard from './MessageCard';
import MessageManager from '../../modules/MessageManager';
import MessageForm from './MessageForm'
//import {sort} from '../../modules/HelperModules'



const MessageList = (props) => {
    // The initial state is an empty array
    const [messages, setMessages] = useState([]);


    //Pulling ALL message functionality
    const getMessages = () => {
        // After the data comes back from the API, we use the setMessages function to update state, SIDE NOTE: maybe sort the return by Date
        //The below function sorts via date of entry.....switch a/b around to change the direction
        return MessageManager.getAll().then(messagesFromAPI => {
            messagesFromAPI.sort((x, y) => {
                let a = new Date(x.entryDate),
                    b = new Date(y.entryDate);
                return a - b;
            });
            setMessages(messagesFromAPI)
        });
    };


    // get the messages from the API on the component's first render
    useEffect(() => {
        getMessages();
    }, []);



    // Delete Functionality, this targets and deletes a message ID and then returns the entire list of messages, then I added a .then(getMessages) to reflect changes to the date
    const deleteMessage = id => {
        MessageManager.delete(id)
            .then(() =>
                MessageManager.getAll().then(setMessages).then(getMessages));
    };

    return (
        <>
            
            <div className="container-cards">
                {messages.map(message => 
                            <MessageCard
                                key={message.id}
                                message={message}
                                deleteMessage={deleteMessage}
                                {...props}
                            />
                            
                            )}
            </div>
     <div><MessageForm {...props} /></div>

        </>
    )
}

export default MessageList;
