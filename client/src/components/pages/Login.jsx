import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom"


// would like to add the functionality of adding the login only when the user wants to sign up for an event. Otherwise there is no reason to really sign in
function Login({setUser}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [user, setUser] = useState(null)

  function handleEmail(e){
    setEmail(e.target.value)
  }

  function handlePassword(e){
    setPassword(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch("/api/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email: email, password: password})
    })
    .then(res=>{
      if(res.ok){
        res.json().then(user => {
          // console.log(user)
          setUser(user)
        })
      }
    })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
          {/* email */}
          <input type="text" email="email" placeholder='email' value={email} onChange={handleEmail}/>
          {/* #password */}
          <input type="text" password="password" placeholder='password' value={password} onChange={handlePassword}/>

          {/* #login button  */}
          {/* this method isn't going to work bc even if I put in the wrong information, it will route me to the correct page but doesnt log me in or give me any errors -- I think I need to do a terhnary or something */}
          <button>
          <Link type="submit" to="/schedule">Login</Link>
          </button>

          <button>
            <Link type='submit' to="/signup">Sign Up</Link>
          </button>
      </form>
    </div>
  )
}

export default Login;