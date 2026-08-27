import { Link } from "react-router-dom";
function SecretRoom(){
    return(
        <>
            <div className="secret-section">
                <h3>🔒 SECRET ROOM</h3>
                <h4>💎 You found the treasure!</h4>
                <h3>🎉 YOU WIN! 🎉</h3>

                <Link to="/">🔄 Play Again</Link>
            </div>
        </>
    )
}
export default SecretRoom;