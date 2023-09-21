import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Cards() {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="https://images.squarespace-cdn.com/content/v1/5abdfeb6d274cbcdee549a8f/1675461804761-JRUTIW9A5XRRMZKFT52F/rovinj-croatia-1800x1000.jpeg?format=1500w" alt="Event" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Community Event</h2>
            <p>Here's a community event to sign up for!</p>
            <div className="card-actions">
              <button className="btn btn-primary">Sign Up Now</button>
            </div>
          </div>
        </div>
      );
    }

export default Cards