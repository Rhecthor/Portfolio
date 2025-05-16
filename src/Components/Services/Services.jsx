import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className="services">
        <div className="services-title">
            <h1>My Services</h1>
        </div>
        <div className="services-container">
            <div className="services-format">
            <ul>01</ul>
            <h4>Web Devlopment</h4>
            <p>I create websites that stand out among others.</p>
            <div className="services-readmore">
            <p>Read More</p>
        </div>
</div>
          <div className="services-format">
         <ul>02</ul>
            <h4>Mobile App Developemnt</h4>
            <p>I create mobile apps for different services most especillay banking services.</p>
            <div className="services-readmore">
            <p>Read More</p>
            </div>
            </div>
            
            <div className="services-format">
            <ul>03</ul>
            <h4>Graphic Design</h4>
            <p>I create stunning designs for my websites and apps.</p>
            <div className="services-readmore">
            <p>Read More</p>
        </div>
            </div>

            <div className="services-format">
            <ul>04</ul>
            <h4>Digital Marketing</h4>
            <p>We market our apps and website for proper recognition.</p>
            <div className="services-readmore">
            <p>Read More</p>
        </div>
            </div>

            <div className="services-format">
            <ul>05</ul>
            <h4>Content Writing</h4>
            <p>We give outstanding contents for your website.</p>
            <div className="services-readmore">
            <p>Read More</p>
        </div>
            </div>

            <div className="services-format">
                <ul>06</ul>
                <h4>Social Media</h4>
                <p>I advertise your website or app on all socila media platforms.</p>
                <div className="services-readmore">
            <p>Read More</p>
        </div>
            </div>
        </div>
        </div>
  )
}

export default Services