import React from 'react'
import { useState } from 'react';

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

    function handleCreateAccount(){

    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            {/* name */}
            <input type="text" name="name" placeholder='name' value={name} onChange={handleName}/>
            {/* email */}
            <input type="text" email="email" placeholder='email' value={email} onChange={handleEmail}/>
            {/* address */}
            <input type="text" name="address" placeholder='address' value={address} onChange={handleAddress}/>
            {/* #password */}
            <input type="text" password="password" placeholder='password' value={password} onChange={handlePassword}/>
            {/* #create account button  */}
            <button type="submit">Create Account</button>
        </form>
    </div>
    )
}

export default SignUp;