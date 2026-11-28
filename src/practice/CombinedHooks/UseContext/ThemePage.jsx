import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";


function ThemePage(){
    const themeContext = useContext(ThemeContext);

    return(
        <div style={{
            backgroundColor : themeContext === "light" ? "yellow" : "black",
            color : themeContext === "light" ? "black" : "white",
            padding : "30px"
        }}>

            <h2>{themeContext} Mode !</h2>
            <h5>Hello User...</h5>
        </div>
    )
}
export default ThemePage;
