import { Link, useNavigate } from "react-router-dom";

function Library(){
    const navigate = useNavigate()

    const handleBack = ()=>{
        navigate(-1)
    }
    

    return(
        <>
            <div className="library-section">
                <h3>📚 LIBRARY</h3>

                <div className="library-info">
                    <h4>
                        You found an old book! <br />
                        The book contains 3 clues.
                    </h4>
                </div>

                <div className="clues-section">
                    <Link to="/clue/1" className="clue">
                        <strong>🔎 Clue 1</strong>
                    </Link> <br />

                    <Link to="/clue/2" className="clue">
                        <strong>🔎 Clue 2</strong>
                    </Link> <br />

                    <Link to="/clue/3" className="clue">
                        <strong>🔎 Clue 3</strong>
                    </Link> <br />
                </div>

                <button type="button" onClick={handleBack}>Back</button>
            </div>

        </>
    )
}
export default Library;