import { useState } from "react";

function ThemeHook(){
    const[isShow , setShow] = useState(false);

    function toggle(){
        setShow(!isShow)
    }
    return{ isShow , toggle}
}
export default ThemeHook;


import ThemeHook from "./practice/CustomeHook/ThemeHook";

// function App(){
//   const {isShow , toggle} = ThemeHook();
//   return(
//     <>
//       <h3>hello ! this is the example of custom hooks.</h3>
//       <button onClick={toggle}>{isShow ? "Hide Text" : "Show Text"}</button>

//       {
//         isShow && 
//           <p>Welcome ! this msg will be display on click...</p>
     
//       }
//     </>
//   )
// }
// export default App;
