import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <ul className='p__special'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li><a href='#about'>About</a></li>
        <li><a href='#specials'>Menu</a></li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li><a href=''>Order Online</a></li>
        <li><a href=''>Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav