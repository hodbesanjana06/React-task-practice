import { useRef, useState } from "react";

function Index(){
    const [name , setName]  = useState("")
    const nameRef = useRef(null)

    function handleSubmit(){
        alert(nameRef.current.value)
    }

    function submit(e){
        e.preventDefault();
        alert(`value is ${name}`)
    }
    return(
        <>
            <h3>Controlled & Uncontrolled Components Example</h3>

            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter name "/> <br /> <br />
            <button onClick={submit}>submit</button> 
            <p>{name}</p>
            <hr />
            <input type="text" ref={nameRef} placeholder="Enter name again" /> <br />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default Index;