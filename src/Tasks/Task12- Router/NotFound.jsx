import { Link } from "react-router-dom";
function NotFound(){
    return(
        <div className="notfound-section">
            <h3>❌ 404</h3>
            <h4>
                 Page Not Found <br />
                 You are lost in the house!
            </h4>
            <Link to="/">🏠 Go Home</Link>
        </ div>
    )
}
export default NotFound;