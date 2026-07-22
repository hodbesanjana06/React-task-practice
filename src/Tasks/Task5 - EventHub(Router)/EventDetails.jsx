import { useParams } from "react-router-dom";
import events from "./eventsData";

function EventDetails({events}){
    const {id} = useParams();
    const event = events.find((e)=> e.id === Number(id))


    if (!event) {
    return (
        <div className="event-not-found">
            <h2>Event Not Found</h2>
            <p>The event you're looking for doesn't exist.</p>
        </div>
    );
}

    return(
        <>
         <div className="event-details">
            <h2>{event.title}</h2>

            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Category:</strong> {event.category}</p>
            <p><strong>Capacity:</strong> {event.capacity}</p>
            <p><strong>Entry:</strong> {event.entry}</p>

            <h3>About Event</h3>
            <p>{event.about}</p>
        </div>
        </>
    )
}
export default EventDetails;