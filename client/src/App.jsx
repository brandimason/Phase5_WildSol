// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import NavBar from './components/NavBar'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Schedule from './components/pages/Schedule'
import Community from './components/pages/Community'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      {/* <NavLink> */}
        <NavBar/>
        <Routes>
            <Route exact path="/" Component={Home}></Route>
            <Route path="/about" Component={About}></Route>
            <Route path ="/schedule" Component={Schedule}></Route>
            <Route path="/community" Component={Community}></Route>
            <Route path="/login" Component={Login}></Route>
        </Routes>
      {/* </NavLink> */}
    </Router>
    </>
  )
}

export default App
