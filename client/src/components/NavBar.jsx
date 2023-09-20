// moving navbar just here
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import NavBar from './components/NavBar'
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'
import Schedule from './pages/Schedule'
import Community from './pages/Community'
import SignUp from './pages/SignUp'
import React from 'react';
// bootstrap css import
import 'bootstrap/dist/css/bootstrap.min.css';
// imports for bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

///// to dos:
// figure out how to toggle the button between login/logout and route to homepage 

// function NavBar() {
function NavBar({user, setUser}) { 
  //--- original function name

// after moving NavBar Components here:
//i want to keep this on the parent level so moving back
// const [user, setUser] = useState(null)
//   function fetchUsers(){
//     fetch('/api/checksession')
//     .then(res=> {
//       if (res.ok){
//         res.json()
//         .then(data => setUser(data))
//       }
//       else{
//         setUser(null)
//       }
//     })
//   }

//   useEffect(()=>{
//     fetchUsers()
//   },[])


    function handleLogout(){
        fetch("/api/logout",{
            method:"DELETE",
        })
        setUser(null)
    }

    return (
        <>

{/* original */}
            {/* {user? <p>Hello {user.name}</p> : null}
            <Link to="/">Home</Link>
            <br></br>
            <Link to="/about">About</Link>
            <br></br>
            <Link to="/schedule">Class Schedule</Link>
            <br></br>
            <Link to="/community">Community</Link>
            <br></br>
            {user ? <Link onClick={handleLogout} to="/">Logout </Link>:<Link to="/login">Login</Link>}
            <br></br>
            <Link to="/signup">Signup</Link>
                     */}







          {/* trying to move navbar components here and here only  */}
          <Router>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                  <Navbar.Brand as={Link} to= {"/"}>WildSol Collective</Navbar.Brand>
                  {/* {user? <p>Hey {user.name}!</p> : null} // i moved this to the home page */}
                </Container>
                  <Nav className="me-auto">
                  {/* {user? <p>Hello {user.name}</p> : null} */}
                    <Nav.Link as={Link} to= {"/"}>Home</Nav.Link>
                    <Nav.Link as={Link} to= {"/about"}>About</Nav.Link>
                    <Nav.Link as={Link} to= {"/schedule"}>Schedule</Nav.Link>
                    <Nav.Link as={Link} to= {"/community"}>Community</Nav.Link>
                    {/* figure out how to toggle the button between login/logout and route to homepage */}
                    <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                    <Nav.Link as={Link} to={"/signup"}>Signup</Nav.Link>

                  </Nav>
              </Navbar>

        <Routes>
            <Route path="/" element={<Home user={user}/>} />
            <Route path="/about" element={<About/>} />
            <Route path ="/schedule" element={<Schedule/>}/>
            <Route path="/community" element={<Community/>}/>
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    </Router>
        </>
    )
}

export default NavBar;