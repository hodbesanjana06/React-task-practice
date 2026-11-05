import { useState } from "react";
import Dashboard from "./Dashboar";

function StudentForm(){

    const [name , setName] = useState("")
    const [age , setAge] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [gender , setGender] = useState("")
    const [skills , setSkills] = useState([])
    const [course , setCourse] = useState("")
    const [dob , setDOB] = useState("")
    const [about , setAbout] = useState("")

    const[error , setError] = useState({})


    function handleSubmit(e){
        e.preventDefault()

        const newError = {}

        if(!name.trim()){
            newError.name  = "Name is required"
        }else if(name.length < 3){
            newError.name = "Minimun 3 characters required"
        }


        if(age < 18){
            newError.age = "Age must be at least 18."
        }

        if(!email.trim()){
            newError.email = "Email required !"
        }
        if(password.length < 8){
            newError.password = "Password must have at least 8 characters."
        }

        if(!gender){
            newError.gender = "Gender must be selected."
        }
        if(skills.length < 1){
            newError.skills = "At least one skill must be selected."
        }
        if(!course.trim()){
            newError.course= "Course must be selected."
        }
        if(!dob){
            newError.dob = "Date of birth is required."
        }
        if(about.length < 10 ){
            newError.about = "contain at least 10 characters."
        }

        setError(newError)


         if(Object.keys(newError).length === 0){
            alert("Form Submittes");
            console.log({name , age , email , password , gender , skills , course, dob , aboutMe});
            
        }
    }
    function handleSkills(e){
        const s = e.target.value;

        if(e.target.checked){
            setSkills([...skills , s])
        }else{
            setSkills(skills.filter(s => s !== skills))
        }
    }

    return(
    <>
        <h3>Student Registration Form</h3>

            <form onSubmit={handleSubmit}>

                <label>Full Name : </label> <br />
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} /> 
                {error.name && <p style={{color : "red"}}>{error.name}</p>} <br />
                <br /> <br />

                <label>Age: </label> <br />
                <input type="number" value={age} onChange={(e)=> setAge(e.target.value)} /> 
                    {error.age && <p style={{color : "red"}}>{error.age}</p>} <br />
                <br /> <br />

                <label>Email: </label> <br />
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} /> 
                    {error.email && <p style={{color : "red"}}>{error.email}</p>} <br />
                <br /> <br />

                <label>Password: </label> <br />
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} /> <br /> <br />
                {error.password && <p style={{color : "red"}}>{error.password}</p>} <br />

                
                <label>Gender: </label> <br />
                <input type="radio" name = "gender" value="Male" checked={gender === "Male"} onChange={(e)=> setGender(e.target.value)} /> Male 
                <input type="radio" name = "gender" value="Female" checked={gender === "Female"} onChange={(e)=> setGender(e.target.value)} /> Female <br /> <br />
                {error.gender && <p style={{color : "red"}}>{error.gender}</p>} <br />

                <label>Skills: </label> <br />
                <input type="checkbox" value="JS" onChange={handleSkills} />JS <br /> 
                <input type="checkbox" value="HTML" onChange={handleSkills} />HTML <br /> 
                <input type="checkbox" value="React" onChange={handleSkills} />React <br /> 
                <input type="checkbox" value="Cyber" onChange={handleSkills} />Cyber <br /> <br /> 
                {error.skills && <p style={{color : "red"}}>{error.skills}</p>} <br />

                <label>Course: </label> <br />
                <select value={course} onChange={(e)=> setCourse(e.target.value)}>
                        <option value="">Select </option>
                        <option value="React Development">React Development</option>    
                        <option value="Full Stack Development">Full Stack Development</option>    
                        <option value="UI/UX Design">UI/UX Design</option>    

                </select> 
                    {error.course && <p style={{color : "red"}}>{error.course}</p>} <br />
                <br /> <br />

                <label>Date of Birth: </label> <br />
                <input type="date" value={dob} onChange={(e)=> setDOB(e.target.value)} /> <br /> <br />
                {error.dob && <p style={{color : "red"}}>{error.dob}</p>} <br />


                <label>About Me: </label> <br />
                <textarea value={about} onChange={(e)=>setAbout(e.target.value)}></textarea> <br /> <br />
                {error.about && <p style={{color : "red"}}>{error.about}</p>} <br />


                <button type="submit">submit</button>




            </form>
        
    </>
    )
}
export default StudentForm;
