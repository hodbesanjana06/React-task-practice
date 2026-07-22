import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function Profile(){
    return(
        <>
           <div className="profile-hero-section">

    <h3>
        👤 Profile <br />
        Welcome, Event Creator!
    </h3>

    <div className="profile-container">

        <div className="profile-intro">
            <h4>
                Alex Johnson <br />
                alex@email.com
            </h4>

            <Link to="Overview">Overview</Link>
            <Link to="MyEvents">My Events</Link>
        </div>

        <div className="profile-details">
            <Outlet />

            <h3>📊 Overview</h3>

            <p>
                🎫 Events Created: 5 <br />
                📅 Upcoming Events: 3
            </p>
        </div>

    </div>

</div>
        </>
    )
}
export default Profile;