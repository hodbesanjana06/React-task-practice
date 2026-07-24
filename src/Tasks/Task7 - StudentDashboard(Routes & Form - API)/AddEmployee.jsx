import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function AddEmployee({addEmployee}){
    const navigate = useNavigate()
    function handleform(e){
        e.preventDefault()
        
        const newObj = {
            id: Date.now(), firstName : name , lastName : "", image : "https://dummyjson.com/icon/emily/128",
            email : email , phone : phone , company : {
                name : company , department : dept , title : job
            },
            address :{
                address : address,
                city : city , country : country
            },
            university : university   
        }
        addEmployee(newObj)
        navigate("/Employee");

    }

    
    const [name , setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email , setEmail] = useState("")
    const [dept , setDepartment] = useState("")
    const [company , setCompany] = useState("")
    const [job ,setJob] = useState("")
    const [city , setCity] = useState("")
    const [country , setCountry] = useState("")
    const [address , setAddress] = useState("")
    const [university , setUniversity] = useState("")
    
    return(
        <>
            <div className="addEmp-section">
                <div className="hero-section">
                    <h3>➕ Add New Employee</h3>
                    <p>Add Employee to your team</p>
                </div>

                <div className="addEmp-form">
                    <form onSubmit={handleform}>
                        <label>Full Name</label> <br />
                        <input type="text"  value={name} onChange={(e)=> setName(e.target.value)}/> <br />

                        <label>Phone Number</label> <br />
                        <input type="number" value={phone} onChange={(e)=> setPhone(e.target.value)} /> <br />

                        <label>Email</label> <br />
                        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} /> <br />

                        <label>Department</label> <br />
                        <select value={dept} onChange={(e)=> setDepartment(e.target.value)}>
                            <option value="select department">Select Department</option>    
                            <option value="Support">Support</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Research and Development">Research and Development</option>
                            <option value="Human Resources">Human Resources</option>
                            <option value="Product Management">Product Management</option>
                            <option value="Marketing">Marketing</option>
                        </select> <br />

                        <label>Job Title</label> <br />
                        <select value={job} onChange={(e)=> setJob(e.target.value)}>
                            <option value="Select Job">Select Job</option>
                            <option value="Sales Manager">Sales Manager</option>
                            <option value="Support Specialist">Support Specialist</option>
                            <option value="Accountant">Accountant</option>
                            <option value="Research Analyst">Research Analyst</option>
                            <option value="Quality Assurance Engineer">Quality Assurance Engineer</option>
                            <option value="Web Developer">Web Developer</option>
                        </select> <br />

                        <label>Company Name</label> <br />
                        <input type="text" value={company} onChange={(e)=> setCompany(e.target.value)} /> <br />

                        <label>Country</label> <br />
                        <select value={country} onChange={(e)=> setCountry(e.target.value)}>
                            <option value="Select Country">Select Country</option>
                            <option value="USA">USA</option>
                            <option value="India">India</option>
                            <option value="Japan">Japan</option>
                            <option value="UP">UP</option>
                        </select> <br />

                        <label>City</label> <br />
                        <input type="text" value={city} onChange={(e)=> setCity(e.target.value)} /> <br />

                        <label>Address</label> <br />
                        <input type="text" value={address} onChange={(e)=> setAddress(e.target.value)} /> <br />
                         
                         <label>University</label> <br />
                         <input type="text" value={university} onChange={(e)=> setUniversity(e.target.value)} /> <br />

                        <button type="submit">Add Employee</button>                       
                    </form>
                </div>
            </div>
        </>
    )
}
export default AddEmployee;