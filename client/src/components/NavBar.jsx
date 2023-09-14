import React from "react";
import { Link } from "react-router-dom"

//the ul and li doesnt seem necessary at this point just leaving it out for now, could come back in later when I need to add styling.
function NavBar({user, setUser}) {

    function handleLogout(){
        fetch("/api/logout",{
            method:"DELETE",
        })
        setUser(null)
    }
    return (
        <>
            {/* <ul> */}
                {/* <li> */}
                    {user? <p>Hello {user.name}</p> : null}
                    <Link to="/">Home</Link>
                    <br></br>
                    <Link to="/about">About</Link>
                    <br></br>
                    <Link to="/schedule">Class Schedule</Link>
                    <br></br>
                    <Link to="/community">Community</Link>
                    <br></br>
                {/* </li> */}
                {/* <li> */}
                    {user ? <Link onClick={handleLogout} to="/">Logout </Link>:<Link to="/login">Login</Link>}
                    <br></br>
                    {/* <Link to="/signup">Signup</Link> */}
                {/* </li> */}
            {/* </ul> */}
        </>
    )
}

export default NavBar;