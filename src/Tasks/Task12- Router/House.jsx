import { Outlet , NavLink } from "react-router-dom";

function House(){
    return(
        <>
            <div className="house-section">
                <h3>🏚️ MYSTERY HOUSE</h3>
                <hr />

                <div className="houseCard-section">
                    <h4>Where do you want to go? </h4>

                    <div className="mystery-cards">
                        <NavLink to="bedroom" className="card">
                            <h4>🛏️</h4>
                            <strong>Bedroom</strong>
                        </NavLink>

                        <NavLink to="library" className="card">
                            <h4>📚</h4>
                            <strong>Library</strong>
                        </NavLink>

                        <NavLink to="secretRoom" className="card">
                            <h4>🔒</h4>
                            <strong>Secret Room</strong>
                        </NavLink>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}
export default House;