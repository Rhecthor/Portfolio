import React from 'react'
import './Footer.css'
import  log from '../../assets/log.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={log} alt="" />
                <p>I'm a front end web developer. I have over 4years of experience in this field. I have worked with various companies like IGHUB.</p>
            </div>

            <div className="footer-top-right">
                <div className="footer-email-input">
                    <input type="email" placeholder='Enter your email'  /> 
                </div>

                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
<hr />
<div className="footer-bottom">
    <p className="fotter-bottom-left">@ 2025 Miracle Chimechefulam. All rights reserved.</p>
    <div className="footer-bottom-right">
        <p>Terms of Services</p>
        <p>Privacy Policy</p>
        <p>Coonect with me</p>
    </div>
</div>

    </div>
  )
}

export default Footer