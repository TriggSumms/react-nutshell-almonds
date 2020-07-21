import React from "react";
//import MessageList from "./MessageList"
import "./MessageCard.css"

const MessageCard = props => {

const currentUser = parseInt(sessionStorage.getItem("activeUser"))
        if (props.message.userId == currentUser) {

    return (
        
        <div className="message__Container">
        <div className="constructedMessage-Container">
            <div className="constructedMessageCard">
                <div className="messageCard-content">
              <h3 className="messageCard-content__User"> <strong>{props.message.userId}</strong></h3> 
 
                   {/* <picture class="messageProfile__Picture"><img src={require(`./${props.message.picture}`)} alt={props.message.picture} /></picture>  */}
                    <h3 className="messageCard-content__EntryDate">{props.message.entryDate}</h3>
                    <h4 className="messageCard-content__Entry">{props.message.entry}</h4>
                </div>
            </div>
            <div className="button__container">
                <button className="message__buttons" type="button" onClick={() => props.deleteMessage(props.message.id)}>Delete</button>
                <button className="message__buttons" type="button" onClick={() => props.history.push(`/messages/${props.message.id}/edit`)}>Edit</button>
            </div>
        </div>
    </div>
             )
            }
    else {
        return(
            <div className="message__Container">
            
                <div className="constructedMessageCard">
                    <div className="messageCard-content">
                        <h3 className="messageCard-content__User"><strong>{props.message.userId}</strong></h3>
                        <h3 className="messageCard-content__EntryDate">{props.message.entryDate}</h3>
                        <h4 className="messageCard-content__Entry">{props.message.entry}</h4>
                    </div>
                </div>
        
        </div>
        
        )
    }
}
    


export default MessageCard