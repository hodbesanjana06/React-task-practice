import { useContext } from "react";
import { CardContext } from "./CardContex";

function Navbar(){
    const cardinfo = useContext(CardContext);

    return(
        <>
            <h3>Navbar Page ! </h3>
            <h4>Card Count {cardinfo}</h4> <hr />
        </>
    )
}
export default Navbar;