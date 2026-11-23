// import { useMemo, useState } from "react";

import { useMemo, useState } from "react";

// function UseMemo(){
//     const[count , setCount] = useState(0)
//     const[num , setNumber] = useState(4)

//     const result = useMemo(()=> {
//         return num * num
//     }, [num])

//     return(
//         <>
//             <h3>UseMemo Example</h3>
//             <h4>Count : {count}</h4>
//             <button onClick={()=> setCount(count + 1)}>Increase count</button>
//             <h3>Number  : {num} ||  Squre : {result}</h3>
//             <button onClick={()=> setNumber(num + 1)}>change number</button>
//         </>
//     )
// }
// export default UseMemo;

function UseMemo(){
    const[num , setNumber] = useState("")
    const[count , setCount] = useState(0)

    const cube = useMemo(()=> {
        console.log("calculatuing cube");
        
        return num * num * num
    }, [num])

    return(
        <>  
            <h3>task</h3>
            <input type="number" value={num} onChange={(e)=> setNumber(e.target.value)} placeholder="enter number..."/> <br />
            <h3>count {count}</h3>
            <button onClick={()=> setCount(count + 1)}>increae count </button> <br />
            <h3>Cube {cube}</h3>
            <button onClick={()=> setNumber(num + 1)}>Increase Cube value</button>
        </>
    )
}
export default UseMemo;