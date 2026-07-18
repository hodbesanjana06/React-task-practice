import { useState } from "react";

function TravelCard({ items , deleteItem , togglePacked }) {

    return (
        <>
            {
                items.map((e) => (
                    <div className="travel-card" key={e.id}>
                        <h3>{e.name}</h3>
                        <div>
                            <strong>Category : </strong> {e.category}  <br />
                            <strong>Priority : </strong> {e.priority} <br />
                            <strong>Status : </strong> {e.packed? "✅ Packed" : "❌ Not Packed"}

                           <div className="btn">
                                <button onClick={()=> togglePacked(e.id)}>{e.packed? "↩ Mark Unpacked": "✔ Mark Packed"}</button>
                                <button onClick={()=> deleteItem(e.id)}>Delete</button>
                           </div>

                            {e.confirm && "📦 Fragile Item"}

                        </div>


                    </div>
                ))
            }
        </>
    )
}
export default TravelCard;