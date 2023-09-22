import React from 'react'
import { useEffect, useState } from 'react'
import Monday from '../Monday'
import Tuesday from '../Tuesday'

const classes = [
  {
    "day": "Monday",
    "classes": [
      { 
      start_time: "6:30AM",
      duration: "60 min.",
      className: "Power Flow 60",
      teacher: "Margot Antonelli",
      image: "https://images.squarespace-cdn.com/content/v1/5abdfeb6d274cbcdee549a8f/1684268950680-55QNSFOFE74OL09AHMIA/Margot%2BWeb.jpg?format=300w"
    },
    { 
      start_time: "6:30AM",
      duration: "60 min.",
      className: "Power Flow 60",
      teacher: "Emma Kirby",
      image: "https://images.squarespace-cdn.com/content/v1/5abdfeb6d274cbcdee549a8f/1684269196833-OU8AT91S2UJ6X3DIPDSK/Emman+Web.jpg?format=750w"  
    },
    { 
      start_time: "6:30AM",
      duration: "60 min.",
      className: "Power Flow 60",
      teacher: "Sybil Meyer",
      image: "https://images.squarespace-cdn.com/content/v1/5abdfeb6d274cbcdee549a8f/1625072441664-3HIEKTD7WS6IBV9Y8PKA/sybil+meyer+1.jpg?format=750w" 
    },
    { 
      start_time: "6:30AM",
      duration: "60 min.",
      className: "Power Flow 60",
      teacher: "Kaileigh Gallivan",
      image: "https://images.squarespace-cdn.com/content/v1/5abdfeb6d274cbcdee549a8f/1684269179299-9MXAY9XIO00F0JDW6PRJ/Untitled+2.jpg?format=750w"  
    },
    { 
      start_time: "6:30AM",
      duration: "60 min.",
      className: "Power Flow 60",
      teacher: "Jess Yanez",
      image: "https://images.squarespace-cdn.com/content/v1/5abdfeb6d274cbcdee549a8f/1625072210158-DMFT188MJLFWYFZPNQ3D/jess+yanez+2.jpg?format=750w"  
    },
    { 
      start_time: "6:30AM",
      duration: "60 min.",
      className: "Power Flow 60",
      teacher: "Kat Wyman",
      image: "https://images.squarespace-cdn.com/content/v1/5abdfeb6d274cbcdee549a8f/1625072060881-URITPEM1NB2EGNA7NFM5/kat+wyman+1.jpg?format=750w"
    },
    { 
      start_time: "6:30AM",
      duration: "60 min.",
      className: "Power Flow 60",
      teacher: "Brooke Wyman",
      image: "https://images.squarespace-cdn.com/content/v1/5abdfeb6d274cbcdee549a8f/1625072149608-SOSH4AXLHJBYHROTSJHG/brooke+wyman+2.jpg?format=750w"
    }
    ]
  }
]

function Schedule() {

  const [currDay, setCurrDay] = useState(0)

  return (

    <div data-theme="light" className="min-h-screen bg-base-200">
      <div className="max-w-4xl min-w-full">
      
      {/* everything goes below these divs */}
      
      {/* table */}
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <nav className='justify-center' style={{width:"100%"}}>
          <ul className="flex flex-row" style={{width:"100%"}}>

              <li className='flex-1 text-center' style={{fontSize:"30px", padding: "1% 3%"}}><button onClick={()=> setCurrDay(0)}>MON</button></li>
              <li className='flex-1 text-center' style={{fontSize:"30px", padding: "1% 3%"}}><button onClick={()=> setCurrDay(1)}>TUE</button></li>
              <li className='flex-1 text-center' style={{fontSize:"30px", padding: "1% 3%"}}><button>WED</button></li>
              <li className='flex-1 text-center' style={{fontSize:"30px", padding: "1% 3%"}}><button>THU</button></li>
              <li className='flex-1 text-center' style={{fontSize:"30px", padding: "1% 3%"}}><button>FRI</button></li>
              <li className='flex-1 text-center' style={{fontSize:"30px", padding: "1% 3%"}}><button>SAT</button></li>
              <li className='flex-1 text-center' style={{fontSize:"30px", padding: "1% 3%"}}><button>SUN</button></li>

            </ul>
      </nav>
              <table className="table rounded" style={{width:"100%", border: "1px solid rgb(0, 0, 0)"}}>
                <thead style={{border: "1px solid rgb(0, 0, 0)", }}>Today's Date <button className='btn btn-outline btn-sm '>Today</button></thead>

              {currDay === 0 ? <Monday/> : <Tuesday/>}

              </table>
            </div>



        {/* everything stays above these divs */}
            </main>
          </div>

      </div>
    </div>

  )
}

export default Schedule