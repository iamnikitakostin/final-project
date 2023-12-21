import React from 'react'
import './Specials.css'
import picture1 from '../../assets/salad.jpg'
import picture2 from '../../assets/lemon.jpg'
import picture3 from '../../assets/bruchetta.jpg'

function Specials() {
  return (
    <div className='main__specials flex__center'>
        <div className="main__specials-heading">
            <h1>This weeks specials!</h1>
            <button className='custom__button'>Online Menu</button>
        </div>
        <div className="main__specials-offers">
            <div className="specials__offers-item">
                <div className="item__image">
                    <img src={picture1} alt='salad'/>
                </div>
                <div className="item__heading">
                    <p className='headtext__card'>Greek salad</p>
                    <p className='p__highlight'>$12.99</p>
                </div>
                <p className='p__regular'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnised with cruncy garlic and rosemary croutons.</p>
                <a type='button' className='item__order'>Order a delivery →</a>
            </div>
            <div className="specials__offers-item">
                <div className="item__image">
                    <img src={picture2} alt='bruchetta'/>
                </div>
                <div className="item__heading">
                    <p className='headtext__card'>Greek salad</p>
                    <p className='p__highlight'>$12.99</p>
                </div>
                <p className='p__regular'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnised with cruncy garlic and rosemary croutons.</p>
                <a type='button' className='item__order'>Order a delivery →</a>
            </div>
            <div className="specials__offers-item">
                <div className="item__image">
                    <img src={picture1} alt='salad'/>
                </div>
                <div className="item__heading">
                    <p className='headtext__card'>Greek salad</p>
                    <p className='p__highlight'>$12.99</p>
                </div>
                <p className='p__regular'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnised with cruncy garlic and rosemary croutons.</p>
                <a type='button' className='item__order'>Order a delivery →</a>
            </div>
        </div>
    </div>
  )
}

export default Specials