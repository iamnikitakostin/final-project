import React from 'react'
import Main from "../../components/Main/Main"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

function HomePage() {
  return (
    <div className='app__homepage'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default HomePage