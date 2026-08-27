import { useNavigate } from "react-router-dom";

function Bedroom(){
    const navigate= useNavigate();
    const handleBack = ()=> {
        navigate(-1)
    }
    return(
        <>
            <div className="bedroom-section">
                 <h3>🛏️ BEDROOM</h3>

                 <div className="bedroomInfo-section">
                    <h4>You found a mysterious key! 🔑</h4>
                    <span>🔑</span>
                 </div>

                 <button type="button" onClick={handleBack}>← Go Back</button>
            </div>
        </>
    )
}
export default Bedroom;