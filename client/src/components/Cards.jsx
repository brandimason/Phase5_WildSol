import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const events = [
  {
  name : "Luxury Croatian Yoga Retreat",
  description : "Show up for empowered and nourishing yoga classes lead by world class teachers and leaders, deep and authentic cultural experiences, adventure and exploration, and a 5-star luxury hotel experience.",
  image: "https://images.squarespace-cdn.com/content/v1/5abdfeb6d274cbcdee549a8f/1675461806433-S3WGR1LQQX3V0ARAXA90/rovinj-pula-trips-tours-shore-excursions-croatia-1.jpeg?format=750w",
  duration : "October 15th-20th 2023",
  location : "Grand Park Hotel Rovinj, Croatia",
  },
 {
  name : "Sound Bath with Bladen",
  description : "Weaving together the sounds of tuning forks, gongs, a shruti box, crystal singing bowls, chimes, and voice, you will be intuitively guided to rest and replenish. All ages welcome. Yoga mats, cushions, blankets journaling/art supplies are provided and feel free to bring your own.",
  image: "https://images.squarespace-cdn.com/content/v1/5d31ed671abe780001b2964d/1589317162822-022X0SZ7AKDVJMDUK0E6/Phyllica+Bonanno+playing+crystal+bowls.",
  duration : "September 22nd, 2023",
  location : "WildSol Collective Studio"
 },
 {
  name : "WildSol Yoga Teacher Training",
  description : "Immerse yourself in a life changing experience - whether you're looking to deepen your practice or begin the journey of becoming a yoga teacher, this training is designed to transform you from the inside out.",
  image: "https://images.squarespace-cdn.com/content/v1/5abdfeb6d274cbcdee549a8f/311d16c7-ff39-4196-9ef2-ebaed69443f9/november+6+2021-3932.jpg",
  duration : "January 12th - April 26th 2024",
  location : "WildSol Collective Studio"
}]

function Cards() {
    return (
      <div className='display: flex flex-1 flex-row space-x-20 justify-center'>

        {events.map((val, key) => {
            return (
              <div className='display: flex flex-row'>
                {/* card item */}
                <div className="card w-96 bg-base-100 shadow-xl ">
                  <figure key={key} className="px-10 pt-10">
                    <img src={val.image} alt="Event" className="rounded-xl" />
                  </figure>
                      <div className="card-body items-center text-center">
                      <h2 className="card-title">{val.name}</h2>
                      <p>{val.description}</p>
                      <p>Dates: {val.duration}</p>
                      <p>Location: {val.location}</p>
                        <div className="card-actions">
                          {/* <button className="btn btn-primary">Sign Up Now</button> */}
                          {/* modal */}
                          <button className='btn btn-outline' onClick={()=>document.getElementById('my_modal_2').showModal()}>Sign Up Now</button>
                            <dialog id="my_modal_2" className="modal">
                              <div className="modal-box">
                              <h3 className="font-bold text-lg text-center">We'll reach out to you with the details.</h3>
                              </div>
                              <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                              </form>
                            </dialog>
                        </div>
                      </div>
                  </div>
              </div>
            )
          })}
        </div>
      );
    }

export default Cards