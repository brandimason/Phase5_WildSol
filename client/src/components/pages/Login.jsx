import React from 'react'

// would like to add the functionality of adding the login only when the user wants to sign up for an event. Otherwise there is no reason to really sign in
function Login() {


  return (
    <div>
      <form>
          <input type="text" email="email" placeholder='email'/>
          <input type="text" password="password" placeholder='password'/>
          <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;