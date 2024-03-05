import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            <div className="flexColStart f-left">
                <img src="./logo.png" alt="" width={120}/>

                <span className="secondaryText">
                    your best homefinder partner <br/>
                    © 2024, Made with love by Qunooj
                </span>
            </div>

            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>Karachi, Islamabad, Lahore</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>About Us</span>
                    <span>Product</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer