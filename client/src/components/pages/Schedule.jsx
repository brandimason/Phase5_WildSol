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
// - map through the data and render the class for the day of the week



function Schedule() {
  return (
    <div>
      <div data-theme="light" className="hero min-h-screen bg-base-200">
        <Cal></Cal>
        <Mon></Mon>
        {/* <div className="hero-content text-center "> */}
          {/* <Cal /> */}
            {/* <div className="max-w-4xl">
            
            </div> */}
        </div>
      </div>
    // </div>
  )
}

export default Schedule
