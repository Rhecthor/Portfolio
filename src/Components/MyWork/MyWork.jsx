import React from 'react'
import './MyWork.css'
import ecom from '../../assets/ecom.jpg'
import cyber from '../../assets/cyber.jpg'
import mobile from '../../assets/mobile.jpg'
import port from '../../assets/port.jpg'
import real from '../../assets/real.jpg'
import myth from '../../assets/myth.jpg'

const MyWork = () => {
  return (
    <div className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
      </div>

      <div className="mywork-container">
       <img src={ecom} alt="" />
       <img src={cyber} alt="" />
       <img src={mobile} alt="" />
       <img src={port} alt="" />
       <img src={real} alt='' />
       <img src={myth} alt="" />
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
      </div>

    </div>
  )
}

export default MyWork