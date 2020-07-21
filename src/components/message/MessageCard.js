import React from "react";
//import MessageList from "./MessageList"
import "./MessageCard.css"

const MessageCard = props => {

const currentUser = parseInt(sessionStorage.getItem("activeUser"))
        if (props.message.userId == currentUser) {

    return (
    
            <div className="chat__Container">
                <div className="constructedMessage-Container">
                    <div className="constructedMessageCard">
                        <div className="messageCard-content">
{/*                             <h3 className="messageCard-content__User">      
                            <picture class="messageProfile__Picture"><img src={require(`./${props.user.picture}`)} alt={props.user.userId} /></picture>
                            <strong>{props.message.userId}</strong></h3> */}
                            <p className="messageCard-content__EntryDate">{props.message.entryDate}</p>
                            <h4 className="messageCard-content__Entry">{props.message.entry}</h4>
                        </div>
                    </div>
                    <div className="button__container">
                        {/* <Link to={`/animals/${props.animal.id}`}><button>Lets take a closer look!</button></Link> */}
                        <button className="message__button" type="button" onClick={() => props.deleteMessage(props.message.id)}>Delete</button>
                        <button className="message__button" type="button" onClick={() => props.history.push(`/messages/${props.message.id}/edit`)}>Edit</button>
                    </div>
                </div>
            </div>
       
             )
            }
    else {
        return(
            <div className="chat__Container">
            <div className="constructedMessage-Container">
                <div className="constructedMessageCard">
                    <div className="messageCard-content">
                        <h3 className="messageCard-content__User"><strong>{props.message.userId}</strong></h3>
                        <p className="messageCard-content__EntryDate">{props.message.entryDate}</p>
                        <h4 className="messageCard-content__Entry">{props.message.entry}</h4>
                    </div>
                </div>
        </div>
        </div>
        
        )
    }
}
    


export default MessageCard

