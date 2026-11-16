import { useState } from "react";
import "./Food.css"
import FoodCard from "./FoodCard";

function Food({food}){
    return(
        <>
            <h3>Food Items Card</h3>
            <h3>
                Total Items : {food.length} <br />

            </h3>
        
            <div className="main-box">
                {
                food.map((f)=>(
                    <FoodCard f={f} key={f.id}/>
                ))
            }
            </div>
        </>
    )
}
export default Food;