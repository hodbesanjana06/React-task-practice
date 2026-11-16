import { useState } from "react";
import "./Form.css"
function Form(){

    
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [age , setAge] = useState("")
    const [Gender , setGender] = useState("")
    const [position , setPosition] = useState("")
    const [exp , setExp] = useState("")
    const [error , setError] = useState({})

    function handleReset(){
        setName("")
        setAge("")
        setEmail("")
        setGender("")
        setPosition("")
        setExp("")
    }
    function handleSubmit(e){
        e.preventDefault();
        let newError = {}

        if(!name.trim()){
            newError.name ="Name is Required"
        }
        if(!email){
            newError.email ="Email is Required !"
        }
        if(!age){
            newError.age ="Age is Required !"
        }
        if(!Gender){
            newError.Gender = "Gender is Required !"
        }
        if(!position){
            newError.position = "Select at least one position!"
        }
        if(!exp){
            newError.exp = "at least 10 letters !"
        }

        setError(newError)
        if(Object.keys(newError).length === 0){
            alert("Form Submittes");
            console.log({name , age , email , Gender, position , exp});
            
        }

    }

    return(
        <div className="main">
            <h3 className="title">❄️ Untitled UI</h3>

            <div className="head-section">
                <h3>Apply for this role</h3>
                <a href="#">UX Designer.Full Time .Remote </a>
            </div>

            <div className="form-section">
                <form onSubmit={handleSubmit}>

                    <label><b>Full Name</b> </label> <br />
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter Your name" /> <br />
                    {error.name && <p style={{color : "red", marginLeft : "120px"}}>{error.name}</p>} <br />

                    <label><b>Email</b> </label> <br />
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="abc@gmail.com"/> <br />
                    {error.email && <p style={{color : "red", marginLeft : "120px"}}>{error.email}</p>} <br />

                    <label><b>Age</b> </label> <br />
                    <input type="number" value={age} onChange={(e)=> setAge(e.target.value)} placeholder="Enter age"/> <br />
                    {error.age && <p style={{color : "red", marginLeft : "120px"}}>{error.age}</p>} <br />

                    <label><b>Gender</b> </label> <br />
                    <input className="gender" type="radio" name="Gender" value="Male" checked={Gender === "Male"}  onChange={(e)=> setGender(e.target.value)}/> Male 
                    <input  className="gender"  type="radio" name="Gender" value="Female" checked={Gender === "Female"} onChange={(e)=> setGender(e.target.value)}/> Female <br />
                    {error.Gender && <p style={{color : "red", marginLeft : "120px"}}>{error.Gender}</p>} <br />

                    <label><b>Positions</b></label> <br />
                    <select value={position} onChange={(e)=> setPosition(e.target.value)}>
                        <option value="">Select Positions</option>
                        <option value="UX Design">UX Design</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Remote">Remote</option>
                    </select> <br /> 
                    {error.position && <p style={{color : "red", marginLeft : "120px"}}>{error.position}</p>} <br />


                    <label><b>Experience</b> </label> <br />
                    <input type="number" value={exp} onChange={(e)=> setExp(e.target.value)} placeholder="Enter Your Experience" /> <br />
                    {error.exp && <p style={{color : "red", marginLeft : "120px"}}>{error.exp}</p>} <br />


                    <button className="btn" type="submit">Submit</button>
                    <button className="btn" onClick={handleReset} type="button">Reset</button>



                </form>
            </div>
        </div>
    )
}
export default Form;