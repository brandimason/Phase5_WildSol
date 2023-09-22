import React from 'react'
import Cards from '../Cards'

function Community() {
 
  return (
      <div data-theme="light" className="min-h-screen bg-base-200 justify-center ">
        
      <div>
          <h1 className="text-3xl font-bold text-center" style={{fontSize:"40px", padding: "4%"}}>Community Events</h1>
          <Cards/>
        </div>
      
      </div>
  )
}

export default Community