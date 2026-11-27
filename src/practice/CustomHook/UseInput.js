import { useState } from "react";

function Useinput(){
    const [text , setText] = useState("");

    function handleInput(e){
        setText(e.target.value)
    }

    function clear(){
        setText("")
    }

    return{value : text , onchange : handleInput , clear}
}
export default Useinput;

// import Useinput from "./practice/CustomeHook/UseInput";

// function App(){
//   const input  = Useinput("");

//   return(
//     <>
//       <h3>custome hooks...</h3>

//       <input type="text" value={input.value} onChange={input.onchange} placeholder="Enter something...."/> 
//       <button onClick={input.clear}>clear</button>
//       <h4>Input value {input.value}</h4>
    
//     </>
//   )
// }
// export default App;
