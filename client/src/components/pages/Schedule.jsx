import React from 'react'
import { useEffect, useState } from 'react'
import Monday from '../Days/Monday'
import Tuesday from '../Days/Tuesday'
import Wednesday from '../Days/Wednesday'
import Thursday from '../Days/Thursday'
import Friday from '../Days/Friday'
import Saturday from '../Days/Saturday'
import Sunday from '../Days/Sunday'



function Schedule() {
  let today = new Date();
  const [currDay, setCurrDay] = useState(today.getDay()-1)

  const tabs = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

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
              {
                tabs.map((tab, index) => {
                  let fontWeight = index === currDay ? "bold" : "normal"
                  return (<li className='flex-1 text-center' style={{fontSize:"30px", padding: "1% 3%", fontWeight:`${fontWeight}` }}><button id={tab.toLowerCase()} onClick={()=> setCurrDay(index)}>{tab}</button></li>)
                })
              }

            </ul>
      </nav>

              {currDay === 0 ? <Monday/> : currDay === 1 ? <Tuesday/> : currDay === 2 ? <Wednesday/> : currDay === 3 ? <Thursday/> : currDay === 4 ? <Friday/> : currDay === 5 ? <Saturday/> : <Sunday/>}

            </div>



        {/* everything stays above these divs */}
            </main>
          </div>

      </div>
    </div>

  )
}

export default Schedule