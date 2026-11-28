import { useContext } from "react";
import { CardContext } from "./CardContex";

function Counter(){
    const counterInfo = useContext(CardContext)
    return(
        <>
            <h3>Couter Page !</h3>
            <h4>Count {counterInfo}</h4> <hr />
        </>
    )
}
export default Counter;