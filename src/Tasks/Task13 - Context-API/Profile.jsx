import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Profile(){

    const {theme , setTheme} = useContext(ThemeContext)
    return(
        <>
            <h3> Current Theme is : {theme}</h3>
            <button onClick={()=> setTheme("Dark")}>dark theme</button>
        </>
    )
}
export default Profile;