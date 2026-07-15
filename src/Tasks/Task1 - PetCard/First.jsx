import { useState } from "react";
import "./first.css"
import PetCard from "./PetCard";
function First({list}){
    return(
        <>
            <div className="concepts">
                <ul>
                    <li>Components</li>
                    <li>Props</li>
                    <li>useState</li>
                    <li>Events</li>
                    <li>Conditional Rendering</li>
                </ul>
            </div>

            <div className="Task">
                <h2>Pet Adoption Card</h2>
                {
                    list.map((e)=>(
                        <PetCard pet={e} />
                    ))
                }
            </div>

        </>
    )
}
export default First;


// app.jsx(data pass)
//   const list= [
//     {
//       id : 1,
//       name : " Bruno",
//       age : 2, 
//       adopted : false

//     },
//     {
//       id : 2,
//       name : "Luna",
//       age : 1, 
//       adopted : true
//     },
      
//     { id : 3,name : "China", age : 4 , adopted : false} , 
//     {id : 4, name : "Sheru" , age : 3 , adopted : true}
//   ]