import { useState } from "react";

function PetCard({pet}){
    const [isAvailable , setPet] = useState(true);
    return(
        <>
        <div className="container">
            <h3>{pet.name}</h3>
            <p>Age : {pet.age} <br />
                status : {isAvailable ? "Available" : "Adopted"}
            </p>
            <button onClick={()=> setPet(!isAvailable)}>{isAvailable ? "Adopt" : "Return"}</button>

        </div>
        
        </>
    )
}
export default PetCard;