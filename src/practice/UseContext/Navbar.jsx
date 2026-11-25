import { useContext } from "react";
import { themeContext } from "./ThemeContext";
import { languageContext } from "./LanguageContext";
function Navbar(){
    // const Access_theme = useContext(themeContext);
    const {language, setLanguage} = useContext(languageContext)
    return(
        <>
            {/* <h2>Navbar Component ! </h2>
            <h4>Theme of 
            navbar is {Access_theme}</h4> */}

            <h3>Navbar page !</h3>
            <h4>navbar language is {language}</h4> <hr />
        </>
    )
}
export default Navbar;