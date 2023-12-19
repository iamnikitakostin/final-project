import React from 'react'
import Banner from '../Banner/Banner'
import Specials from '../Specials/Specials'
import "./Main.css"

function Main() {
  return (
    <main className='flex__center'>
      <Banner/>
      <Specials/>
    </main>
  )
}

export default Main