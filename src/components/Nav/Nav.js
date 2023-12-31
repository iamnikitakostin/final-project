import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';


function Nav() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className='app__navbar'>
      <ul className='p__special app__navbar-links'>
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

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#000' fontSize={27} onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
          <ul className='app__navbar-smallscreen_links'>
            <li className='p__opensans'><a href="#home">Home</a></li>
            <li className='p__opensans'><a href="#specials">Menu</a></li>
            <li className='p__opensans'><a href="/booking">Reservations</a></li>
            <li className='p__opensans'><a href="#contact">Order Online</a></li>
          </ul>
        </div>
        )}
    </div>
    </nav>
  )
}

export default Nav