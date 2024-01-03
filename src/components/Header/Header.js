import React from 'react'
import logo from "../../assets/aa38384d3942a55696d8070552aed2f4c190fc14.jpg"
import Nav from "../Nav/Nav"
import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='app__header'>
      <div className='app__header-logo'>
        <Link to='/'><img src={logo} alt='logo' /></Link>
      </div>
      <Nav/>
    </header>
  )
}

export default Header