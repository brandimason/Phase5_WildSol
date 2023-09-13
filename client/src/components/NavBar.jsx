import React from "react";
import { Link } from "react-router-dom"

//the ul and li doesnt seem necessary at this point just leaving it out for now, could come back in later when I need to add styling.
function NavBar() {
    return (
        <>
            {/* <ul> */}
                {/* <li> */}
                    <Link to="/">Home</Link>
                    <br></br>
                    <Link to="/about">About</Link>
                    {/* empty route */}
                    <br></br>
                    <Link to="/schedule">Class Schedule</Link>
                    {/* empty route */}
                    <br></br>
                    <Link to="/community">Community</Link>
                    {/* empty route */}
                    <br></br>
                {/* </li> */}
                {/* <li> */}
                    <Link to="/login">Login</Link>
                {/* </li> */}
            {/* </ul> */}
        </>
    )
}

export default NavBar;