import { Link } from "react-router-dom";

function EventCard({event}){
    return(
        <>
            <div className="event-card">
                <h2>{event.title}</h2>
                <p>
                    {event.date} <br />
                    {event.location}
                </p>
                
                <Link to={`/event/${event.id}`}>View Details</Link>
            </div>
        </>
    )
}
export default EventCard;