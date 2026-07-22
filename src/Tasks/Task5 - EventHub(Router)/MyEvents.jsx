import events from "./eventsData"
import EventCard from "./EventCard"
function MyEvents(){
    return(
        <>
            
            {
                events.map((e)=> (
                    <EventCard key={e.id} event={e}/>
                ))
            }
            
        </>
    )
}
export default MyEvents