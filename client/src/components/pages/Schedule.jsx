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
// mobiscroll for calendar view
// import "@mobiscroll/react/dist/css/mobiscroll.min.css";

const locales = {
    "en-US": enUS
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

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

const events = [
    {
    title : "Power Flow",
    start : new Date('2023-08-12T13:00:00-05:00'),
    end : new Date('2023-08-12T14:00:00-05:00')
    },
    {
    title : "Power Flow",
    start : new Date(2023,8,22),
    end : new Date(2023,8,22)
    },
    {
    title : "Power Flow",
    start : new Date(2023,8,19),
    end : new Date(2023,8,19)
    }
]


function Schedule() {

    


  return (
    <div>
    <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{height:500, margin :"50px"}}/>
    </div>
  )
}

export default Schedule
