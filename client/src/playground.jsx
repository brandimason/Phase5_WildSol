/// schedule 
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


{/* calendar to show the whole month */}
        {/* <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{height:500, margin :"50px"}}/> */}



function Schedule() {
    return (
      <div>
        <div data-theme="light" className="hero min-h-screen bg-base-200">
          {/* calendar to show the whole month */}
          {/* <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{height:500, margin :"50px"}}/> */}
  
  
  
        {/* table for classes */}
        {/* <nav> */}
          <div className="tabs">
            {/* <button>Button</button> */}
            <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
            </svg>
              <a className="tab tab-lg ">MON</a> 
              <a className="tab tab-lg ">TUE</a> 
              <a className="tab tab-lg ">WED</a>
              <a className="tab tab-lg ">THU</a>
              <a className="tab tab-lg ">FRI</a>
              <a className="tab tab-lg ">SAT</a>
              <a className="tab tab-lg ">SUN</a>
            {/* <button>Button</button> */}
            <div className='sbv-left-btn'>
              <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
              </svg>
            </div>
          </div>
        {/* </nav> */}
        </div>
    </div>
    )
}




////second way I tried to make calendar
{/* <div className='w-[800px] border'>
          <div className='grid grid-cols-7 items-center justify-center text-center'>
            <Cell>{"<"}</Cell>
            <Cell className='col-span-5'>September 2023</Cell>
            <Cell>{">"}</Cell>
          </div>
        </div> */}