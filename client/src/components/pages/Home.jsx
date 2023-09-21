import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            {/* <h1 className="text-5xl font-bold">{user? <p>Hello there, {user.name}</p> : null}</h1> */}
            <h1 className="text-5xl font-bold">A YOGA STUDIO AND MAGNETIC COMMUNITY DISHING OUT SWEATY, HIGH ENERGY CLASSES WITH DOPE BEATS TO HUMANS CRAVING TRANSFORMATION FROM INSIDE OUT. MEET THE BEST VERSION OF YOURSELF. WE ARE ALLERGIC TO BORING.</h1>
            <br></br>
            <Link to="/schedule" className="btn btn-primary">LETS SWEAT</Link>
          </div>
        </div>
      </div>

      {/* about section */}
      <div data-theme="light" className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
      <div className="max-w-4xl">
          <h1 className="text-3xl font-bold">Our Why:</h1>
          <p className="py-6">
            <i>
            To empower individuals so that they can live a life of possibility and connection both on and off the mat. 
            </i>
            <br></br>
            <br></br>
            We believe in our collective, and that we are all in this together. We believe in showing up as your truest self and letting yourself shine, because when you shine, we all shine. We believe in hugs and high-fives, and in championing your neighbor. We believe all souls are created equal. <a className="font-bold"> We believe that vulnerability is the gateway to living a bold, beautiful, courageous life.</a> We believe that sweat is magic, and that there is power in music. We believe in gratitude. We believe in acceptance. We believe in connection. We believe in YOU. 
            <br></br>
            <br></br>
            <i>
            We are WildSol Collective.
            </i>
            <br></br>
            </p>
        </div>
        </div>
        </div>
    </>
      
  )
}

export default Home