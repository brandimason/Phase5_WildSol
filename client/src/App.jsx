import { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import React from 'react';
import Footer from './components/pages/Footer';


//TO DO
// - uninstall bootstrap and mobiscroll


function App() {
  const [user, setUser] = useState(null)
  function fetchUsers(){
    fetch('/api/checksession')
    .then(res=> {
      if (res.ok){
        res.json()
        .then(data => setUser(data))
        // .then()
      }
      else{
        setUser(null)
      }
    })
  }

  useEffect(()=>{
    fetchUsers()
  },[])

  return (
    <>
      <NavBar user={user} setUser={setUser}/>
      <Footer />
    </>
  )
}

export default App
