import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import NavBar from './components/NavBar'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Schedule from './components/pages/Schedule'
import Community from './components/pages/Community'
import SignUp from './components/pages/SignUp'

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


  return (
    <>
    <Router>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
            <Route path="/" element={<Home/>} />
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

export default App
