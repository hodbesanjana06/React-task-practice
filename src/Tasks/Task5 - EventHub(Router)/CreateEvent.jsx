import { useState } from "react";
import events from "./eventsData";
import { useNavigate } from "react-router-dom";

function CreateEvent({setEvents}){

    const navigate = useNavigate()

    function handleform(e){
        e.preventDefault()

        const newObj = {
           id:Date.now(), title: name , date , time , location , category , capacity , about , type , Amt
        }

        setEvents((previousEvents)=> [
            ...previousEvents , newObj
        ])
        navigate("/events")
    }

    const [name , setName]= useState("")
    const [date , setDate]= useState("")
    const [time , setTime] = useState("")
    const [location , setLocation] = useState("")
    const [category , setCategory] = useState("")
    const [capacity , setCapacity] = useState("")
    const [about , setAbout] = useState("")
    const [type , setType] = useState("")
    const [Amt , setAmt ] = useState("")
    return(
        <>
            <div className="createEvent-section">

                <div className="createEvent-hero-section">
                    <h3>
                     ➕ Create New Event <br />
                     Share your event with everyone !
                    </h3>
                </div>


                <div className="createEvent-form">
                    <form onSubmit={handleform}>

                        <label>Event Name </label> <br />
                        <input type="text" placeholder="Event Name" value={name} onChange={(e)=> setName(e.target.value)}/> <br />

                        <label>Date </label> <br />
                        <input type="date" value={date} onChange={(e)=> setDate(e.target.value)} /> <br />

                        <label>Time</label> <br />
                        <input type="time"  value={time} onChange={(e)=> setTime(e.target.value)}/> <br />
                        
                        <label>Location</label> <br />
                        <input type="text" placeholder="location" value={location} onChange={(e)=> setLocation(e.target.value)} /> <br />

                        <label>Category</label> <br />
                        <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                            <option value="">select category</option>
                            <option value="Music Festival">Music Festival</option>
                            <option value="Workshop">Workshop</option>
                            <option value="Art Show">Art Show</option>
                            <option value="Dance Marethon">Dance Marethon</option>
                        </select> <br />

                        <label>Capacity</label> <br />
                        <input type="text" placeholder="capacity of peoples" value={capacity} onChange={(e)=> setCapacity(e.target.value)} /> <br />

                        <label>About Event</label> <br />
                        <textarea value={about} onChange={(e)=>setAbout(e.target.value)} placeholder="Write about your event..."></textarea>


                        <label>Entry Type </label> <br />
                        <select value={type} onChange={(e)=> setType(e.target.value)}>
                            <option value="">select type</option>
                            <option value="Free">Free</option>
                            <option value="Paid">Paid</option>
                        </select> <br />

                        <label>Entry Amount</label> 
                            <select value={Amt} onChange={(e)=> setAmt(e.target.value)}>
                                <option value="">select amt</option>
                                <option value="N/A">N/A</option>
                                <option value="200">200</option>
                                <option value="500">500</option>
                                <option value="1000">1000</option>
                            </select> <br />

                            <button type="submit">Create Event</button>
                    </form>
                </div>

            </div>
        </>
    )
}
export default CreateEvent;