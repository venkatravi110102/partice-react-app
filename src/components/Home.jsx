import { Link } from "react-router-dom"

export const Home=()=>{
    return(
        <div>
            this is home page - new changes
            <Link to="/about-us">About Us</Link>
        </div>
    )
}