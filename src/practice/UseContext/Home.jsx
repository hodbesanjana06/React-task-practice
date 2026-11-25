import { useContext } from "react";
import { themeContext } from "./ThemeContext";
import { languageContext } from "./LanguageContext";


function Home(){
    // const theme  = useContext(themeContext);
    const {language , setLanguage} = useContext(languageContext)
    
    return(
        <>
            {/* <h2>Home Component ! </h2>
            <h4>Theme is {theme}</h4> */}
            <h2>Home Page !</h2>
            <h4>Home page language {language}</h4>
            <button onClick={()=> setLanguage(language === "English" ? "Hindi" : "English")}>change language</button>
        </>
    )
}
export default Home;




// import { themeContext } from "./practice/UseContext/ThemeContext";
// import Home from "./practice/UseContext/Home";
// import Navbar from "./practice/UseContext/Navbar";
// import LanguageProvider from "./practice/UseContext/LanguageContext";
// function App(){
//   const theme = "dark"
//   return(
//     <>
//         {/* <themeContext.Provider   value={theme}>
//           <Home/>
//           <Navbar/>
//         </themeContext.Provider> */}

//         <LanguageProvider>
//           <Navbar/>
//           <Home/>
          
//         </LanguageProvider>
//     </>
//   )
// }
// export default App;