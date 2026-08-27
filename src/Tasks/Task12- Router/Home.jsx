import { Link } from "react-router-dom";
function Home(){
    return(
        
        <>
            <div className="home-section">
                <h3>🗝️ MYSTERY HOUSE </h3>

                <div className="headlines">
                    <h4>
                        Welcome to the mysterious house! <br />
                        Something strange happened last night...
                    </h4>
                </div>

                <Link to="/house">Enter The House →</Link>
                
            </div>
        </>
    )
}
export default Home;

//-----------------------------------------------------------
//                      APP.JSX
//-----------------------------------------------------------

// import { Route, Routes } from "react-router-dom";
// import Home from "./Tasks/Task12- Router/Home";
// import House from "./Tasks/Task12- Router/House";
// import Bedroom from "./Tasks/Task12- Router/Bedroom";
// import Library from "./Tasks/Task12- Router/Library";
// import Clue from "./Tasks/Task12- Router/Clue";
// import SecretRoom from "./Tasks/Task12- Router/SecretRoom";
// import NotFound from "./Tasks/Task12- Router/NotFound";
// import "./Tasks/Task12- Router/MysteryHouse.css";

// function App(){ 
//   return(
  
//     <Routes>

//       <Route path="/" element={<Home/>}/>
      
//       <Route path="/house" element={<House/>}>
//         <Route path="bedroom" element={<Bedroom/>}/>
//         <Route path="library" element={<Library/>}/>
//         <Route path="secretRoom" element={<SecretRoom />} />
//       </Route>

//       <Route path="/clue/:clueId" element={<Clue />}/>
//       <Route path="*" element={<NotFound />} />

//     </Routes>
      
    
//   )
// }
// export default App;