import { useState } from "react";

function FoodCard({f}){
    const[isDescription , setDescription] = useState(false)
    return(
        <>
            <div className="card" key={f.id}>
                        <h1>{f.img}</h1>
                        <h4 className="food-name">{f.name}</h4>
                        <h4 className="food-info">
                            {f.price} <br />
                            Cateory : {f.category}
                        </h4>

                        <div className="button">
                                <button className="btn" onClick={()=> setDescription(!isDescription)}>{isDescription ? "Hide Info":"Show Info"}</button>
                                {
                                    isDescription &&(
                                        <>
                                            <h5>{f.description}</h5>
                                        </>
                                    )
                                } <br /> <br />
                                <button className="btn">add to card</button>
                        </div>

                    </div>
        </>
    )
}
export default FoodCard;
