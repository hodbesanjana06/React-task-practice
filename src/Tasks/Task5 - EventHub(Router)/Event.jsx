import EventCard from "./EventCard";
import { useState } from "react";
import events from "./eventsData";

function Event({events}){
    function handleform(e){
        e.preventDefault()
    }
    const [search , setSearch] = useState("")
    const [category , setCategory] = useState("")
    
    return(
        <>
        <div className="event-hero-section">
            <h3>
                All Events <br />
                Discover Something Exciting !
            </h3>
        </div>

        <div className="search-section">
            <form onSubmit={handleform}>
                <label>🔍 Search Event : </label>
                <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} />
                <label>Category : </label>
                <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Music Festival">Music Festival</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Art Show">Art Show</option>
                </select>

            </form>

        </div>

        <div className="event-list">
            {
                events.filter((e)=>
                e.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((e)=>(
                    <EventCard key={e.id} event={e}/>
                ))
            }  
        </div>

        </>
    )
}
export default Event;