import { useState } from "react";

function Child({name , age , course}){
    const [isShow , setShow] = useState(false)
    return(
        <>
            
            <div className="main-container">
                <div className="card">
                    <h2>{name}</h2>
                    <h5>
                        Age : {age} <br />
                        Course : {course}
                    </h5>
                </div>
                 <hr />

            </div>

        </>
    )
}
export default Child;



// import { useState } from "react";
// import Child from "./practice/Controll-UnControll/Child";

// function App(){
//       const [isShow , setShow] = useState(true)
//       const students = [
//         {
//             name: "Rahul",
//             age: 21,
//             course: "React JS"
//         },
//         {
//             name: "Priya",
//             age: 22,
//             course: "JavaScript"
//         },
//         {
//             name: "Amit",
//             age: 20,
//             course: "Python"
//         }
//     ];

//   return(
//     <>
      
//       <button onClick={()=> setShow(!isShow)}>{isShow ? "Hide" : "Show"}</button>

//      {
//       isShow && students.map((s , index)=> (
//         <Child key={index} name={s.name} age = {s.age} course={s.course}/>
//       ))
//      }
//     </>
//   )
// }
// export default App;