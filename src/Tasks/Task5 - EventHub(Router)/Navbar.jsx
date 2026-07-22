
import {NavLink} from "react-router-dom";

function Navbar(){

    return(
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Event">Event</NavLink>
                <NavLink to="/CreateEvent">Create Event</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            
            </nav>
        </>
    )
}
export default Navbar;