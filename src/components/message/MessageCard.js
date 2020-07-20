import React from "react";
//import MessageList from "./MessageList"
//import "./MessageCard.css";

const MessageCard = props => {

    return (
        <>
            <div className="card">
                <div className="card-content">
                    <picture>
                        {/* <img src={require(`./${props.animal.picture}`)} alt={props.animal.name} /> */}
                    </picture>
                    <div className=".constructedMessageCard">
                        <h3 className=""><strong><a href="http://localhost:3000/friends/new">{props.message.userId}</a></strong></h3> 
                         <p className="">{props.message.entryDate}</p>
                            <h4 className="">{props.message.entry}</h4>
                        
                    </div>
                    {/* <Link to={`/animals/${props.animal.id}`}><button>Lets take a closer look!</button></Link> */}
                    <button type="button" onClick={() => props.deleteMessage(props.message.id)}>Delete Message</button>
                    <button type="button" onClick={() => props.history.push(`/messages/${props.message.id}/edit`)}>Edit</button>
                </div>
            </div>

        </>
    )
}

export default MessageCard

