import React from 'react'
import { useState } from 'react';
//bootstrap for form
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
//boostrap css
import 'bootstrap/dist/css/bootstrap.min.css';


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
            <br></br>
            <input type="text" email="email" placeholder='email' value={email} onChange={handleEmail}/>
            {/* address */}
            <br></br>
            <input type="text" name="address" placeholder='address' value={address} onChange={handleAddress}/>
            {/* #password */}
            <br></br>
            <input type="text" password="password" placeholder='password' value={password} onChange={handlePassword}/>
            {/* #create account button  */}
            <br></br>
            <button type="submit">Create Account</button>
        </form>
        <br></br>
            <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="I agree to the terms & policies." />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
    </div>
    )
}

export default SignUp;