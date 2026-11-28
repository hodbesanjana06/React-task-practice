import { createContext } from "react";
export const CardContext = createContext(0);





// import { useState } from "react";
// import { CardContext } from "./practice/CombinedHooks/UseContext/CardContex";
// import Navbar from "./practice/CombinedHooks/UseContext/Navbar";
// import Counter from "./practice/CombinedHooks/UseContext/Counter";

// function App(){ 
//   const [count , setCount] = useState(0);
//   function addToCard(){
//     setCount(count + 1)
//   }
//   function decreaseCount(){
//     setCount(count - 1)
//   }
//   return(
//     <>
//         <CardContext.Provider value={count}>
//           <Navbar/>
//           <Counter/>
//           <button onClick={addToCard}>Increase Count</button>
//           <button onClick={decreaseCount}>Decrease Count</button>
//         </CardContext.Provider>
//     </>
//   )
// }
// export default App;