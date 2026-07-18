import { useState } from "react";
import TravelCard from "./TravelCard";
import "./Travel.css"
function Travel(){

    function handlesubmit(e){
        e.preventDefault()
        handleItems()
    }
    function handleItems(){
        const newItem={
            id : Date.now(),
            name , category , priority , confirm , packed : false
        }

        setItems([...items , newItem])
     }
     function togglePacked(id){
        setItems(
            items.map((e)=> 
                e.id === id ? {...e , packed : !e.packed} : e
            )
        )
     }

    function deleteItem(id){
        setItems(items.filter((item) => item.id !== id));
    }
    const [name , setItemName] = useState("")
    const [category , setCategory] = useState("")
    const [priority , setPriority] = useState("")
    const [confirm , setConfirm] = useState("")
    const [items , setItems] = useState([])
    return(
        <>
           <div className="list-container">

                 <h3>✈ Travel Packing List</h3>
                    <h4>Never Forget Your Essentials !</h4>
                    <hr />
                    <div className="count">
                        <ul>
                            <li>📦 Total : {items.length}</li>
                            <li>✅ Packed : {}</li>
                            <li>🧳 Remaining :  {}</li>
                        </ul>
                    </div>
                    <hr />
                    <form onSubmit={handlesubmit}>
                        <label>Item Name </label>
                        <input type="text" value={name} onChange={(e)=> setItemName(e.target.value)}/> <br /> <br />

                        <label>Category </label>
                        <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                            <option value="">Select Category</option>
                            <option value="Clothes">Clothes</option>
                            <option value=" Documents"> Documents</option>
                            <option value=" Electronics"> Electronics</option>
                            <option value="Toiletries">Toiletries</option>
                            <option value="Medicines">Medicines</option>
                        </select> <br /> <br />

                        <label>Priority</label> <br />
                            <input type="radio" value="High" checked={priority === "High"} onChange={(e)=> setPriority(e.target.value)} /> High <br />
                            <input type="radio" value="Medium" checked={priority === "Medium"} onChange={(e)=> setPriority(e.target.value)} />Medium <br />
                            <input type="radio" value="Low" checked={priority === "Low"} onChange={(e)=> setPriority(e.target.value)} /> Low<br /> <br />

                        <input type="checkbox" checked={confirm}  onChange={(e)=> setConfirm(e.target.checked)}/>  Fragile Item <br />

                        <button type="submit">Add Items</button>    
                    </form>
                    <hr />
                    <TravelCard items={items} deleteItem={deleteItem} togglePacked={togglePacked}/>
       
           </div>
        </>
    )
}

export default Travel;