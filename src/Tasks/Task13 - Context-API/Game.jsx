import { useContext } from "react";
import gameContext from "./GameContext";
import "./Game.css"

function Game(){

    const {health , setHealth} = useContext(gameContext)
    const {score , setScore} = useContext(gameContext)
    const {coins , setCoins} = useContext(gameContext)
    return(
        <>
            <h2><center>context API Practice</center></h2>
            <div className="gamepage-section">
                <h3>🧙 MONSTER HUNTER</h3>
                <hr />
                <h4>
                    ❤️ Health: {health} <br />
                    ⭐ Score: {score} <br />
                    💰 Coins {coins} <br />

                     👹 A MONSTER APPEARS! 
                </h4>

                <button onClick={()=> 
                {
                    setHealth(health-20)
                    setScore(score + 10)
                }

                } >⚔️ Attack</button> <br />


                <button onClick={()=>{
                    setCoins(coins + 10)
                    setScore(score + 10)
                }}>💎 Find Treasure</button>
            </div>
        </>
    )
}
export default Game;
