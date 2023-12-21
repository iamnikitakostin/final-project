import React from 'react'
import logo from "../../assets/little_lemon.png"
import "./Footer.css"

function Footer() {
  return (
    <footer className='app__footer app__wrapper_info section__padding'>
        <div className="app__footer-logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="app__footer-identity">
          <div className='identity-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d564962.6297609241!2d-113.92880828486594!3d51.08731007868543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537171d909a5e60f%3A0x46319103c140df8!2sLemon%20Garden!5e0!3m2!1sen!2sca!4v1703191822810!5m2!1sen!2sca" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="app__footer-findUs">
          <div className='findUs__location'>
            <h1 className='headtext__section'>Address</h1>
            <p className='p__highlight'>8388 Capstan Way #1423, Richmond, BC V6X 4B6</p>
          </div>
          <div className='findUs__hours'>
            <h1 className='headtext__section'>Open Hours</h1>
            <ul>
              <li className='p__highlight'>Tuesday to Sunday: 11AM - 2:30PM, 5PM - 9PM</li>
              <li className='p__highlight'>Monday: Closed</li>
            </ul>
          </div>
          <div className="findUs__contacts">
          <h1 className='headtext__section'>Call Us</h1>
            <p className='p__highlight'>+1 (604) 285-5113</p>
          </div>
        </div>

    </footer>
  )
}

export default Footer