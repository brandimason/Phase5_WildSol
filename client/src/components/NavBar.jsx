// moving navbar just here
import { useEffect, useState, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'
import Schedule from './pages/Schedule'
import Community from './pages/Community'
import SignUp from './pages/SignUp'
import Classes from './pages/Classes'
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
      
        <Router>
      {/* daisy UI NavBar Component */}
        <div data-theme="light" className="navbar bg-base-100">
          <div className="navbar-start">

              <Link to="/" className="btn btn-ghost normal-case text-xl">
              WildSol Collective
              </Link>
          </div>
          <div className="navbar-center hidden lg:flex" >
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

              <li>
                <Link to="/classes">Classes</Link>
              </li>

              <li>
                <Link to="/schedule">Schedule</Link>
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
              <Route path="/classes" element={<Classes/>}/>
          </Routes>
      </Router>
      
  )
}

export default NavBar;