import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./ConfirmedBooking.css"
import logo from "../../assets/little_lemon.png"

function ConfirmedBooking() {
    const location = useLocation();
    console.log(location)
  return (
    <div className='app__booking-success' id='success'>
        <Link to='/'><button type='button' className='close__button'>X</button></Link>
        <div className="app__booking-message">
            <div className="app__footer-logo">
                <img src={logo} alt="logo" />
            </div>
            <p className='message-confirmation headtext__section'>Your booking has been confirmed!</p>
            <div className="app__booking-details">
                <p className='details-text p__description'>We are waiting for you on <u>{location.state.date}</u> at <u>{location.state.time}</u>.</p>
                <p className='details-text p__description'>We are expecting <u>{location.state.guests} Guest(s)</u></p>
                <p className='details-text p__description'>Occasion: <u>{location.state.occasion.toUpperCase()}</u></p>
            </div>
            <p className='message-warning p__highlight'>*If any of the details are wrong, please contact us as soon as possible.</p>
        </div>
    </div>
  )
}

export default ConfirmedBooking