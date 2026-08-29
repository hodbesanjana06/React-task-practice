import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Navbar(){
    const navbartheme = useContext(ThemeContext);

    return(
        <>
            <h3>navbar theme color is : {navbartheme}</h3>
        </>
    )
}
export default Navbar;
