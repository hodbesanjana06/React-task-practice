import { createContext } from "react";

export const ThemeContext = createContext("light");



// import ThemePage from "./practice/CombinedHooks/UseContext/ThemePage";
// import { ThemeContext } from "./practice/CombinedHooks/UseContext/ThemeContext";
// import { useState } from "react";

// function App(){
//   const [theme , setTheme] = useState("light")

//   function toggleTheme(){
//     setTheme(theme === "light" ? "dark" : "light")
//   }

   
//   return(
//     <>
//       <ThemeContext.Provider value={theme}>
//         <ThemePage/>
//       <button onClick={toggleTheme}>{theme === "light" ? " Chnage into Dark" : "Chnage into Light"}</button>

//       </ThemeContext.Provider>
//     </>
//   )
// }
// export default App;