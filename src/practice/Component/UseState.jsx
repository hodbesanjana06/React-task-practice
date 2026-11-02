import { useState } from "react";

function UseState(){
    const [count , setCount]= useState(0);
    const [name , setName] = useState("Sanjana");
    const [isVisible , setVisible] = useState(true);
    const [skills , setSkills] = useState(['HTML', 'CSS' , 'JS'])
    const [isLogin , setLogin] = useState(true)
    const sub = ["HTML", "CSS" , "React"] ;


    return(
        <>
            <h2>Usestate Example.....</h2> <hr />
            
            <h3>Count : {count}</h3>
            <button onClick={()=> setCount(count + 1)}>Increase</button> <br />
            <button onClick={()=> setCount(count - 1)}>Decrease</button> <br />
            <button onClick={()=> setCount(0)}>Reset</button>
             <hr />
             <h3>
                Name : {name}  <br /> <br />
                Skills : {skills} <br />
             </h3>
             {isVisible && <h3>Visible</h3>} <br />

            <button onClick={()=> setName("React Developer")}>Change Name</button> <br />
            <button onClick={()=> setSkills([...skills, "react"])}>Raact Add</button> <br />
            <button onClick={()=> setVisible(!isVisible)}>Change Visibility</button> <br />
             <hr /> 

            <h3>Login Process</h3>
            {
                isLogin ? <h4>please login</h4> : <h4>Welcome Back !</h4>
            }

            <button onClick={()=> setLogin(!isLogin)}>{isLogin ? "Login" : "logout"}</button>
            
        <ul>
            {
                sub.map((s , index)=>(
                    <li key={index}>{s}</li>
                ))
            }
        </ul>
        </>
    )
}
export default UseState;
