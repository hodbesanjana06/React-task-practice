import {
  FaBolt,
  FaLaugh,
  FaHeart,
  FaGhost,
  FaRocket,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function Home(){
    return(
        <>
        
            <div className="home-container">

                <div className="hero-section">
                    <h2>MovieHub</h2>
                    <p>Discover Amazing Movies Anytime !</p>

                    <h3>Watch Trending , Top-rated & Classic movies <br /> All in One Place .</h3>
                    <Link to="/Movie">Movie</Link>
                </div> <hr />


                <div className="trending-section">
                    <h2>Trending Movies</h2>
                    <div  className="movie-card">
                        <img src="" alt="" />
                        <h3>
                            Avatar <br />
                            ⭐ 8.5  <br />
                            Action
                        </h3>
                        <button type="submit">View Details</button>
                    </div>

                    <div  className="movie-card">
                        <img src="" alt="" />
                        <h3>
                            Avatar <br />
                            ⭐ 8.5  <br />
                            Action
                        </h3>
                        <button type="submit">View Details</button>
                    </div>

                    <div  className="movie-card">
                        <img src="" alt="" />
                        <h3>
                            Avatar <br />
                            ⭐ 8.5  <br />
                            Action
                        </h3>
                        <button type="button">View Details</button>
                    </div>

                </div> <hr />

                <div className="genre-section">
                    <h2>🎭 Browse by Genre</h2>

                    <div className="genre-container">
                        <div className="genre-card">
                            <FaBolt className="genre-icon"/>
                            <h3>Action</h3>
                        </div>
                        <div className="genre-card">
                            <FaLaugh className="genre-icon"/>
                            <h3>Comedy</h3>
                        </div>
                        <div className="genre-card">
                            <FaHeart className="genre-icon"/>
                            <h3>Romance</h3>
                        </div>
                        <div className="genre-card">
                            <FaGhost className="genre-icon"/>
                            <h3>Horror</h3>
                        </div>
                        <div className="genre-card">
                            <FaRocket className="genre-icon"/>
                            <h3>Sci-Fi</h3>
                        </div>
                    </div>
                    
                </div> <hr />


                <div className="why-section">
                    <h2>Why MovieHub?</h2>
                    <ul>
                        <li>✔ Browse thousands of amazing movies</li>
                        <li>✔ Find movies by genre</li>
                        <li>✔ View movie details instantly</li>
                        <li>✔ Save your favorite movies</li>
                    </ul>
                </div>



            </div>

        </>
    )
}
export default Home;