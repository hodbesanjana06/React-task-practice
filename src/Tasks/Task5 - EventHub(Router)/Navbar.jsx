
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


// import { BrowserRouter , Routes , Route } from "react-router-dom";

// import Navbar from "./Tasks/Task5 - EventHub(Router)/Navbar";
// import Home from "./Tasks/Task5 - EventHub(Router)/Home";
// import Profile from "./Tasks/Task5 - EventHub(Router)/Profile";
// import Event from "./Tasks/Task5 - EventHub(Router)/Event";
// import CreateEvent from "./Tasks/Task5 - EventHub(Router)/CreateEvent";
// import "./Tasks/Task5 - EventHub(Router)/eventhub.css"
// import EventDetails from "./Tasks/Task5 - EventHub(Router)/EventDetails";
// import { useState } from "react";
// import eventsData from "./Tasks/Task5 - EventHub(Router)/eventsData";
// import Overview from "./Tasks/Task5 - EventHub(Router)/Overview";
// import MyEvents from "./Tasks/Task5 - EventHub(Router)/MyEvents";

// function App(){
//   const [events , setEvents] = useState(eventsData);
//   return (
//     <>
//       <BrowserRouter>
//           <Navbar/>
//           <Routes>
//             <Route path ="/" element = {<Home/>}/> 
//             <Route path="/Event" element={<Event events={events}/>} />
//             <Route path="/CreateEvent" element={<CreateEvent setEvents={setEvents}/>}/>
//             <Route path="/Profile" element={<Profile/>} >
//               <Route path="Overview" element={<Overview/>} />
//               <Route path="MyEvents" element={<MyEvents/>} />
//             </Route>
//             <Route path="/event/:id" element={<EventDetails events={events}/>} />
//           </Routes>
          
//       </BrowserRouter>
//     </>
//   )
// }
// export default App;