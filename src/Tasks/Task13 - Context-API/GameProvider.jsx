import { useState } from "react";
import gameContext from "./GameContext";

function GameProvider({children}){
    const [health , setHealth] = useState(100)
    const [score , setScore] = useState(0)
    const [coins , setCoins] = useState(20)

    return(
        <>

        <gameContext.Provider value={{health, setHealth , score, setScore, coins , setCoins}}>
            {children}
        </gameContext.Provider>
            
        </>
    )
}
export default GameProvider;