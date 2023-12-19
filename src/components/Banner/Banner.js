import React from 'react'
import './Banner.css'
import foodImage from '../../assets/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg'


function Banner() {
  return (
    <div className='main__banner'>
        <div className="main__banner-content">
            <div className="content__heading">
                <h1 className='headtext__subtitle'>Little Lemon</h1>
                <h2 className='headtext__section'>Chicago</h2>
            </div>
            <p className='p__description'>We are a family owned Mediterranean restaraunt, focused on traditional recipes served with a modern twist.</p>
            <button className='custom__button'>Reserve a Table</button>
        </div>
        <div className="main__banner-picture">
            <img src={foodImage} alt='food'/>
        </div>

    </div>
  )
}

export default Banner