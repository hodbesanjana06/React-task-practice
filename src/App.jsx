
import "./Tasks/Task8 - MovieHub/MovieHub.css";
import Navbar from "./Tasks/Task8 - MovieHub/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Routes , Route } from "react-router-dom";
import Home from "./Tasks/Task8 - MovieHub/Pages/Home";
import Movie from "./Tasks/Task8 - MovieHub/Pages/Movie";
import Favorites from "./Tasks/Task8 - MovieHub/Pages/Favorites";

function App(){
  return(
    <>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/Movie" element={<Movie/>}/>
          <Route path="/Favorites" element={<Favorites/>}/>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}
export default App;