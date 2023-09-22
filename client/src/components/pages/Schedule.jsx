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

  function boldDay(newCurrDay) {
    if (newCurrDay === 0) {
      let elem = document.getElementById("mon")
      elem.style.fontWeight = "bold"
    }

    if (newCurrDay === 1) {
      let elem = document.getElementById("tue")
      elem.style.fontWeight = "bold"
    }

    if (newCurrDay === 2) {
      let elem = document.getElementById("wed")
      elem.style.fontWeight = "bold"
    }
    if (newCurrDay === 3) {
      let elem = document.getElementById("thu")
      elem.style.fontWeight = "bold"
    }
    if (newCurrDay === 4) {
      let elem = document.getElementById("fri")
      elem.style.fontWeight = "bold"
    }
    if (newCurrDay === 5) {
      let elem = document.getElementById("sat")
      elem.style.fontWeight = "bold"
    }
    if (newCurrDay === 6) {
      let elem = document.getElementById("sun")
      elem.style.fontWeight = "bold"
    }
  }

  function handleNavClick(newCurrDay) {
    setCurrDay(newCurrDay)
    let elems = document.querySelectorAll("button")
    for (let i = 0; i < elems.length; i++) {
      elems[i].style.fontWeight = "normal"
    }

    boldDay(newCurrDay)
  }

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

              <li className='flex-1 text-center' style={{fontSize:"30px", padding: "1% 3%" }}><button id="mon" onClick={()=> handleNavClick(0)}>MON</button></li>
              <li className='flex-1 text-center' style={{fontSize:"30px", padding: "1% 3%"}}><button id="tue" onClick={()=> handleNavClick(1)}>TUE</button></li>
              <li className='flex-1 text-center' style={{fontSize:"30px", padding: "1% 3%"}}><button id="wed" onClick={()=> handleNavClick(2)}>WED</button></li>
              <li className='flex-1 text-center' style={{fontSize:"30px", padding: "1% 3%"}}><button id="thu" onClick={()=> handleNavClick(3)}>THU</button></li>
              <li className='flex-1 text-center' style={{fontSize:"30px", padding: "1% 3%"}}><button id="fri" onClick={()=> handleNavClick(4)}>FRI</button></li>
              <li className='flex-1 text-center' style={{fontSize:"30px", padding: "1% 3%"}}><button id="sat" onClick={()=> handleNavClick(5)}>SAT</button></li>
              <li className='flex-1 text-center' style={{fontSize:"30px", padding: "1% 3%"}}><button id="sun" onClick={()=> handleNavClick(6)}>SUN</button></li>

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