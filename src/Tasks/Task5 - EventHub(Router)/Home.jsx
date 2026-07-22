import { Link } from "react-router-dom";
import EventCard from "./EventCard";
function Home(){
    return(
        <>
            <div className="home-container">

                <div className="hero-section">
                    <h2>🎉 Discover Amazing Events</h2>
                    <h3>
                        Find events. Meet People. <br />
                        Create Unforgettable memories.
                    </h3>
                    
                    <button> <Link to="/Event">Explore Events</Link></button>
                </div><hr />

                <div className="featured-section">
                    <h2>🔥 Featured Events</h2>
                    <div className="feature-card">
                        <h3>🎵 Music Festival</h3>
                        <Link to="/event/101" className="view-btn">View</Link>
                    </div>
                    <div className="feature-card">
                        <h3>💻 Tech Workshop</h3>
                        <Link to="/event/102" className="view-btn">View</Link>
                    </div>
                    <div className="feature-card">
                        <h3>🎨 Art Show</h3>
                        <Link to="/event/103" className="view-btn">View</Link>

                    </div>
                </div><hr />

                <div className="eventhub-section">
                    <h2>🎯 Why Eventhub ?</h2>        
                    <div className="eventhub-text">🔍 Discover <br /> <span>Find interesting events.</span></div>
                    <div className="eventhub-text">📅 Plan<br /> <span>Create and organize your events.</span></div>
                    <div className="eventhub-text">🎉 Enjoy<br /> <span>Join events and create memories.</span></div>

                </div>

            </div>
        </>
    )
}
export default Home;