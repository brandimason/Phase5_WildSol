import { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
// import Login from './components/pages/Login'
// import Home from './components/pages/Home'
// import About from './components/pages/About'
// import Schedule from './components/pages/Schedule'
// import Community from './components/pages/Community'
// import SignUp from './components/pages/SignUp'
// import React from 'react';
// // bootstrap css import
// import 'bootstrap/dist/css/bootstrap.min.css';
// // imports for bootstrap
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

function App() {
  const [user, setUser] = useState(null)
  function fetchUsers(){
    fetch('/api/checksession')
    .then(res=> {
      if (res.ok){
        res.json()
        .then(data => setUser(data))
      }
      else{
        setUser(null)
      }
    })
  }

  useEffect(()=>{
    fetchUsers()
  },[])

  // const [user, setUser] = useState(null)
  // function fetchUsers(){
  //   fetch('/api/checksession')
  //   .then(res=> {
  //     if (res.ok){
  //       res.json()
  //       .then(data => setUser(data))
  //     }
  //     else{
  //       setUser(null)
  //     }
  //   })
  // }

  // useEffect(()=>{
  //   fetchUsers()
  // },[])


  return (
    <>
    <NavBar user={user} setUser={setUser}/>
    

    {/* <Router>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">WildSol Collective</Navbar.Brand>
        </Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about" to="/about">About</Nav.Link>
            <Nav.Link as={Link} to= {"/schedule"}>Schedule</Nav.Link>
          </Nav>
      </Navbar>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path ="/schedule" element={<Schedule/>}/>
            <Route path="/community" element={<Community/>}/>
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    </Router> */}
    </>

    
  )
}

export default App
