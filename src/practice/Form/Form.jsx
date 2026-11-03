import { useState } from "react";

function Form(){
    const [name , setName] = useState("")
    const [age , setAge] = useState("")
    const [email , setEmail] = useState("")


    function handleSubmit(e){
        e.preventDefault();
        alert("Form submitted !")
    }
    return(
        <>
            <h3>Form Example</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="enter username"/> <br /> <br />

                <input type="number" value={age} onChange={(e)=> setAge(e.target.value)} placeholder="Enter the age"/> <br /> <br />

                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email"/> <br /> <br />

                <button type="submit">submit</button>

                {
                    name ? (<h3>{name}</h3>) : (<p>Please enter your value</p>)                  
                }

                {
                    age === "" ? "please enter your age" : Number(age) < 18 ? " Your are under 18" : "Your are an adult"
                    
                }
                <br /> <br />
                {
                    email ===""? "Please Enter email" : email.includes('@') ? "Email lokks valid" : "Enter Valid email"
                }

            </form>
        
        </>
    )
}
export default Form;
