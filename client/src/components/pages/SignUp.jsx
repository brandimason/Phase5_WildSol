import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom"


function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState(null)

    function handleName(e){
        setName(e.target.value)
    }

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handleAddress(e){
        setAddress(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("/api/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: name, email: email, address: address, password: password})
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    // function handleCreateAccount(){

    // }
    //form that I moved up
    // <form onSubmit={handleSubmit}>
    //         {/* name */}
    //         <input type="text" name="name" placeholder='name' value={name} onChange={handleName}/>
    //         {/* email */}
    //         <br></br>
    //         <input type="text" email="email" placeholder='email' value={email} onChange={handleEmail}/>
    //         {/* address */}
    //         <br></br>
    //         <input type="text" name="address" placeholder='address' value={address} onChange={handleAddress}/>
    //         {/* #password */}
    //         <br></br>
    //         <input type="text" password="password" placeholder='password' value={password} onChange={handlePassword}/>
    //         {/* #create account button  */}
    //         <br></br>
    //         <button type="submit">Create Account</button>
    //     </form>

    return (
    
    <div data-theme="light" className="hero min-h-screen bg-base-200">


        {/* addition items for create account */}





        {/* original create account */}

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create an Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit}
          className="space-y-6" action="#" method="POST">

            {/* code for email validation */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                //   value={email} 
                //   onChange={handleEmail}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* code for password */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-purple-600 hover:text-purple-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password" // adds security so you can't see
                //   value={password} 
                //   onChange={handlePassword}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* button for signing in */}
            <div>
              <button
                // type="submit"
                className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                Sign in
              </button>
              <br></br>
              <Link type='submit' to="/login">Already have an account? Log in here.</Link>
              {/* need to add a condition to this that if it's the user, route to class schedule */}
              {/* <Link to="/"
                // type="submit"
                className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                Sign in
              </Link> */}

              {/* <button>login</button>
              <br></br> */}
              {/* <button onClick={handleLogout}>{"Logout"}</button> */}
            </div>
          </form>

          

          
        </div>
      </div>

    </div>
    )
}

export default SignUp;

// additional items

{/* <div className="border-b border-gray-900/10 pb-12">
<h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
<p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
  <div className="sm:col-span-3">
    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
      First name
    </label>
    <div className="mt-2">
      <input
        type="text"
        name="first-name"
        id="first-name"
        autoComplete="given-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>

  <div className="sm:col-span-3">
    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
      Last name
    </label>
    <div className="mt-2">
      <input
        type="text"
        name="last-name"
        id="last-name"
        autoComplete="family-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>

  <div className="sm:col-span-4">
    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
      Email address
    </label>
    <div className="mt-2">
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>

  <div className="sm:col-span-3">
    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
      Country
    </label>
    <div className="mt-2">
      <select
        id="country"
        name="country"
        autoComplete="country-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
      >
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>
    </div>
  </div>

  <div className="col-span-full">
    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
      Street address
    </label>
    <div className="mt-2">
      <input
        type="text"
        name="street-address"
        id="street-address"
        autoComplete="street-address"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>

  <div className="sm:col-span-2 sm:col-start-1">
    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
      City
    </label>
    <div className="mt-2">
      <input
        type="text"
        name="city"
        id="city"
        autoComplete="address-level2"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>

  <div className="sm:col-span-2">
    <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
      State / Province
    </label>
    <div className="mt-2">
      <input
        type="text"
        name="region"
        id="region"
        autoComplete="address-level1"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>

  <div className="sm:col-span-2">
    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
      ZIP / Postal code
    </label>
    <div className="mt-2">
      <input
        type="text"
        name="postal-code"
        id="postal-code"
        autoComplete="postal-code"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
</div>
</div> */}