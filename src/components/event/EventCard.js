import React from "react";
import "./EventCard.css";

const EventCard = props => {

    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    <span className="card-eventname">{props.event.name}</span>
                    <p>Date: {props.event.date}</p>
                    <p>Location: {props.event.location}</p>
                    <button type="button" onClick={() => props.history.push(`/events/${props.event.id}/edit`)}>Edit</button>
                    <button type="button" onClick={() => props.deleteEvent(props.event.id)}>Delete</button>
                </h3>
            </div>
        </div>
    );
};


export default EventCard;