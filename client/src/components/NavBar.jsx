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

///// to dos:
// - figure out how to toggle the button between login/logout -- DONE
// - once logged in, have it route you to the schedule 
// - have the menu dropdown close once something else is clicked

//Stretch 
// - add classes route that has the class descriptions
// - add option for profile for user so they can update their account


function NavBar({user, setUser}) { 



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
{/* daisy UI NavBar Component */}
  <div data-theme="light" className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

          {/* NOT SURE IF THIS IS NEEDED - LOOKS LIKE IT WORKS WITHOUT IT
          <li><a>Home</a></li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li> */}
        </ul>
      </div>

        <Link to="/" className="btn btn-ghost normal-case text-xl">
        WildSol Collective
        </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
        <Link to="/community">Community</Link>
        </li>


        <li tabIndex={0}>
          <details>
            <summary>Studio</summary>
            <ul className="p-2">
              <li>
                <a>Classes</a>
              </li>

              <li>
                <Link to="/schedule">Schedule</Link>
              </li>

            </ul>
          </details>
        </li>
      </ul>
    </div>
    <div className="navbar-end">
      {user ? <Link onClick={handleLogout} to="/">Logout</Link>:<Link to="/login">Login</Link>}
    </div>
  </div>

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