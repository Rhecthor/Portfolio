import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently avaiable to take any project. I am here to talk about anything yo want to work on. You can contact me anytime.</p>
            <div className="contact-details">
              <div className="contact-detail">
               <h2>Email:</h2>
               <p>miraclechimechefulam27@gmail.com</p>
              </div>
              
              <div className="contact-detail">
                <h2>Phone Number:</h2>
                <p>09131710767</p>
                </div>

                <div className="contact-detail">
                <h2>Location:</h2>
                <p>Umuohu Ndume Ibeku.</p>
              </div>
               </div>
          </div>

          <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter Your Name" name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter Email Here' name='email' />
            <label htmlfor="">Message</label>
            <textarea name="message" rows="8" placeholder='Enter Message Here'></textarea>
            <button type='submit' className="contact-submit">Submit Now</button>
          </form>
            
        </div>

    </div>
  )
}

export default Contact