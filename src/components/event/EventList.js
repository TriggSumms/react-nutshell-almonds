import React, { useState, useEffect } from 'react';
//import the components we will need
import EventCard from './EventCard';
import EventManager from '../../modules/EventManager';

const EventList = (props) => {
    // The initial state is an empty array
    const [events, setEvents] = useState([]);

    const getEvents = () => {
        // After the data comes back from the API, we
        //  use the setEvents function to update state
        return EventManager.getAll().then(eventsFromAPI => {
            setEvents(eventsFromAPI)
        });
    };

    // got the events from the API on the component's first render
    useEffect(() => {
        getEvents()
    }, []);

    const deleteEvent = id => {
        EventManager.delete(id)
            .then(() => EventManager.getAll().then(setEvents));
    };

    // Finally we use map() to "loop over" the events array to show a list of event cards
    return (
        <>
            
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/events/new") }}>
                    New Event
                </button>
            </section>
            <div className="container-cards">
                {events.map(event => {
                    if (event.userId === parseInt(sessionStorage.getItem("activeUser"))) {
                        return (
                            <EventCard
                                key={event.id}
                                event={event}
                                deleteEvent={deleteEvent}
                                {...props} 
                            />
                        )
                    }
                })}
            </div>
            
        </>
    );
};

export default EventList