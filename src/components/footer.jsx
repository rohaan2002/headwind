import React from 'react'
import './customm.css'

const footer = () => {
    const currDate= new Date()
    const currYear= currDate.getFullYear();

  return (
    <div className='flex justify-between py-6 text-blue-100'>
        <ul className='italic text-xl ml-32'>
            <li>Vishi Rocket-Power Products, Inc. <br />64, New Balaji Road <br /> Thane, Maharashtra 43288</li>
            <li><a href="mailto: inquiry@vishirockets.com">Email: mailto: inquiry@vishirockets.com</a></li>
            <li><a href="tel:(+91)9625004582">Phone: (+91)9625004582</a></li>
            
        </ul>
        <ul className='hidden sm:block text-xl mx-6'>
            <li><a href="#rockets">Our Rockets</a></li>
            <li><a href="testimonials">Testimonials</a></li>
            <li><a href="contacts"></a>Contact Us</li>
        </ul>
        <ul className='text-xl mr-32'>
            <li>Copyright © {currYear}</li>
            <li>All Rights Reserved</li>
        </ul>
    </div>
  )
}

export default footer