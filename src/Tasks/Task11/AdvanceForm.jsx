import { useState } from "react";
import "./AdvanceForm.css";

function AdvanceFrom(){
    function handleForm(e){
        e.preventDefault()
        addVehicle()

    }
    function handleService(e){
        const s = e.target.value;
        if(e.target.checked){
            setServices([...services, s])
        }else{
            setServices(services.filter(remove => remove !== s))
        }
    }
    function addVehicle(){
        const newObj = {vehicleId, ownerName , vehicleName ,vehicleType , serviceType ,services ,description }

        setVehicleList([...vehicleList ,newObj ])

        setOwnerName("")
        setVehicleName("")
        setDescription("")
        setServiceType("")
        setVehicleType("")
        setVehicleId("")
        setServices([])
    }

    function handleDelete(vehicleId){
        setVehicleList(vehicleList.filter(f => f.vehicleId !== vehicleId))
    }

   function handleEdit(vehicleList){

    setOwnerName(vehicleList.ownerName)
    setVehicleName(vehicleList.vehicleName)
    setVehicleType(vehicleList.vehicleType)
    setServiceType(vehicleList.serviceType)
    setServices(vehicleList.services)
    setDescription(vehicleList.description)

    setEditId(vehicleList.vehicleId)
   }
   function handleUpdate(){
    setVehicleList(vehicleList.map((e)=> e.vehicleId === editId ? {...e, ownerName , vehicleName , vehicleType, serviceType , services , description} : e))

    setEditId(null)
    setOwnerName("")
    setVehicleName("")
    setDescription("")
    setServiceType("")
    setVehicleType("")
    setVehicleId("")
    setServices([])

   }
    
    const [vehicleList , setVehicleList] = useState([])
    const [vehicleId , setVehicleId] = useState("")
    const [ownerName , setOwnerName] = useState("")
    const [vehicleName , setVehicleName] = useState("")
    const [vehicleType , setVehicleType] = useState("")
    const [serviceType , setServiceType] = useState("")
    const [services , setServices] = useState([])
    const [description , setDescription] = useState("")
    const [editId , setEditId] = useState(null)

    return(
        <>
            <div className="main-container">
                <hr /><h3>Vehicle Service Manager</h3> <hr />

                <div className="form-section">
                    <h4>Add Vehicle</h4>
                    
                    <form onSubmit={handleForm}>
                        <strong>Vehicle Id : </strong> <input type="number" value={vehicleId} onChange={(e)=> setVehicleId(e.target.value)} /> <br />
                        <strong>Owner Name : </strong> <input type="text" value={ownerName} onChange={(e)=> setOwnerName(e.target.value)}/> <br />
                        <strong>Vehicle Name : </strong> <input type="text" value={vehicleName} onChange={(e)=> setVehicleName(e.target.value)} /> <br />
                        <strong>Vehicle Type : </strong><select value={vehicleType} onChange={(e)=> setVehicleType(e.target.value)}> 
                            <option value="">Select Type</option>
                            <option value="Car">Car</option>
                            <option value="Bike">Bike</option>
                            <option value="Scooty">Scooty</option>
                            <option value="Jeep">Jeep</option>
                        </select> <br />
                        <strong>Service Type : </strong> 
                        <input type="radio" name="serviceType" value="General" checked={serviceType=== "General"} onChange={(e)=> setServiceType(e.target.value)}/>General 
                        <input type="radio" name="serviceType" value="Oil Change" checked={serviceType === "Oil Change"} onChange={(e)=> setServiceType(e.target.value)} /> Oil Change 
                        <input type="radio" name="serviceType" value="Repair" checked={serviceType === "Repair"} onChange={(e)=> setServiceType(e.target.value)} />Repair 
                        <input type="radio" name="serviceType" value="Full Service" checked={serviceType === "Full Service"} onChange={(e)=> setServiceType(e.target.value)}/>Full Service  <br />

                        <strong>Services : </strong> <br />
                        <input type="checkbox" value="Engine" checked={services.includes("Engine")} onChange={handleService} /> Engine <br />
                        <input type="checkbox" value="Brake" checked={services.includes("Brake")}  onChange={handleService}/>Brake <br />
                        <input type="checkbox" value="Tyre" checked={services.includes("Tyre")}  onChange={handleService} /> Tyre <br />
                        <input type="checkbox" value="Battery" checked={services.includes("Battery")} onChange={handleService} />Battery <br />

                        <strong>Description : </strong>
                        <textarea value={description} onChange={(e)=> setDescription(e.target.value)}></textarea> <br />

                            {
                                editId !== null ? (
                                <button type="button" onClick={handleUpdate}>Update Vehicle</button>)
                                :(
                                    <button type="submit">Add Vehicle</button>
                                    
                                )
                            }
                        {
                            vehicleList.map((e)=>(
        
                                <div className="vehicle-info" key={e.vehicleId}>
                                    <strong>Id : </strong> {e.vehicleId} <br /> 
                                    <strong>Owner : </strong> {e.ownerName} <br />
                                    <strong>Vehicle : </strong> {e.vehicleName} <br />
                                    <strong>Type : </strong> {e.vehicleType} <br />
                                    <strong>Service Type : </strong> {e.serviceType} <br />
                                    <strong>Services : </strong> {e.services.join(" | ")} <br />
                                    <strong>Descripton : </strong> {e.description} <br />

                                    <div className="btn-sections">
                                        <button type="button" onClick={()=> handleDelete(e.vehicleId)}>Delete</button>
                                        <button type="button" onClick={()=> handleEdit(e)}>Edit</button>
                                    </div>
                                </div>
                            ))
                        }
                    </form>
                </div>
            </div>
        </>
    )
}
export default AdvanceFrom;