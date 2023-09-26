////this is the component i've been working with and I am redoing it bc the sizing wont work in the other one.

import React from 'react';
import { useState } from 'react';
// react calendar
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker'
import enUS from "date-fns/locale/en-US"
import Mon from './weekdays/Mon';
// import './Schedule.css'
import Cal from './calendar/Cal'
import Cards from '../Cards';

// const [scheduleArray, setScheduleArray] = useState([]);

//     React.useEffect(() => {
//         fetch('/api/yogaclasses')
//         .then(res => {
//             if (res.ok){
//                 res.json()
//                 .then(classes => setScheduleArray(classes))
//             }
//             else{
//                 setScheduleArray(null)
//             }
//         })
//     }, []);

//     console.log(scheduleArray)


/// self made calendar

//- small nav bar -- then once clicked, is display the information for that date/day and shows the classes (the table)
// - the nav bar actually needs to be a calendar display -- the specific day shows an open div
// - have tabs for every day of the week
// - the tab will render a table
// - map through the data and render the className for the day of the week



const classes = [
  { day: "Monday",
    start_time: "6:30AM",
    duration: "60 min.",
    className: "Power Flow 60",
    teacher: "Margot Antonelli"  
  },
  { day: "Tuesday",
    start_time: "6:30AM",
    duration: "60 min.",
    className: "Power Flow 60",
    teacher: "Margot Antonelli"  
  },
  { day: "Wednesday",
    start_time: "6:30AM",
    duration: "60 min.",
    className: "Power Flow 60",
    teacher: "Margot Antonelli"  
  },
  { day: "Thursday",
    start_time: "6:30AM",
    duration: "60 min.",
    className: "Power Flow 60",
    teacher: "Margot Antonelli"  
  },
  { day: "Friday",
    start_time: "6:30AM",
    duration: "60 min.",
    className: "Power Flow 60",
    teacher: "Margot Antonelli"  
  },
  { day: "Saturday",
    start_time: "6:30AM",
    duration: "60 min.",
    className: "Power Flow 60",
    teacher: "Margot Antonelli"  
  },
  { day: "Sunday",
    start_time: "6:30AM",
    duration: "60 min.",
    className: "Power Flow 60",
    teacher: "Margot Antonelli"  
  }
]

 // (console.log(classes)) 
  {/* { 
    Object.keys(classes).map((item, i) => (
        <li key={i}>
            <span >{ classes[item].day }</span>
            <br></br>
            <span >{ classes[item].start_time }</span>
            <br></br>
            <span >{ classes[item].duration }</span>
            <br></br>
            <span >{ classes[item].className }</span>
            <br></br>
            <span >{ classes[item].teacher }</span>
        </li>
    ))
  }  */}

  {/* {classes.map((val, key) => (
            <li key={key}>
              <span>{val.day}</span>
              <span>{val.start_time}</span>
              <span>{val.duration}</span>
              <span>{val.className}</span>
              <span>{val.teacher}</span>
            </li>
          ))} */}

function Schedule() {
          
  return (

    <div data-theme="light" className="hero min-h-screen bg-base-200">
    <div className="max-w-4xl">
    <div className='text-center'> Schedule of Classes
      {/* <div className='justify-center' style={{width:"100%"}}> */}
      <div>
        
        <nav style={{width:"100%"}}>
          <ul className="flex flex-row" style={{width:"100%"}}>
          <button>L</button>
            <li className='flex-1'><button>MON</button></li>
            <li className='flex-1'><button>TUE</button></li>
            <li className='flex-1'><button>WED</button></li>
            <li className='flex-1'><button>THU</button></li>
            <li className='flex-1'><button>FRI</button></li>
            <li className='flex-1'><button>SAT</button></li>
            <li className='flex-1'><button>SUN</button></li>
            <button>R</button>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col" style={{width:"100%"}}>
        <header>
          <h1>Today's Date 
            <button> TODAY btn </button>
          </h1>
        </header>
          {/* <table>
                <thead> don't think this is needed</thead>
                {classes.map((val, key) => {
                    return (
                      <tbody>
                        <tr key={key}>
                            <td>{val.start_time}</td>
                            <td>{val.duration}</td>
                            <td>{val.className}</td>
                            <td>{val.teacher}</td>
                        </tr>
                      </tbody>
                    )
                })}
            </table> */}
      </div>



      {/* table from tailwind */}
      <div className="overflow-x-auto ">
              <table className="table ">
              {classes.map((val, key) => {
                    return (
                <tbody>
                  {/* row 1 */}
                  <tr key={key}>
                    <td key={key}>
                      {/* {val.start_time}
                      <br/>
                      <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                      <div>
                          <div className="font-bold">{val.start_time}</div>
                          <div className="text-sm opacity-50">{val.duration}</div>
                          <div className="text-sm opacity-50">Denver</div>
                      </div>
                    </td>

                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src="https://images.squarespace-cdn.com/content/v1/5abdfeb6d274cbcdee549a8f/1684268950680-55QNSFOFE74OL09AHMIA/Margot%2BWeb.jpg?format=300w" alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{val.className}</div>
                          <div className="text-sm opacity-50">{val.teacher}</div>
                          <div className="text-sm opacity-50">Studio</div>
                        </div>
                      </div>
                    </td>

                    <th>
                      <button className="btn btn-outline">RESERVE</button>
                    </th>
                  </tr>


                </tbody>
                )
                })}
              </table>
            </div>
    </div>

    </div>
    </div>
  
  )
}

export default Schedule