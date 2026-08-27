import { useParams , useNavigate} from "react-router-dom";

function Clue(){
    const {clueId} = useParams()
    const navigate = useNavigate()
    const handleBack = ()=>{
        navigate(-1)
    }

    return(
        <div>
            {clueId === "1" && (
                <div className="clue-card">
                    <h3>🔎 CLUE {clueId}</h3>
                    <h4>
                        You found a small note <br />
                        under the bed. <br />

                        "Look where the stories sleeps".
                    </h4>
                    <button type="button" onClick={handleBack}>← Back</button>
                </div>
            )}

            {clueId === "2" && (
                <div className="clue-card">
                    <h3>🔎 CLUE {clueId}</h3>

                    <h4>
                        You found an old book.

                        "The key is hidden behind <br />something that tells time."
                    </h4>
                    <button type="button" onClick={handleBack}>← Back</button>
                </div>
            )}

            {clueId === "3" && (
                <div className="clue-card">
                    <h3>🔎 CLUE {clueId}</h3>

                    <h4>
                        You found a strange <br />
                        painting on the wall

                        "The treasure is closer <br />than you think..."
                    </h4>
                    <button type="button" onClick={handleBack}>← Back</button>
                </div>
            )}

            
        </div>
    )
}
export default Clue;