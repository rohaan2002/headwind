import React from 'react'
import './customm.css';
const header = () => {
  return (
   
    <header class="bg-teal-700 text-white sticky top-0 z-10 w-full" >
      <section class="w-full mx-auto p-4 flex justify-between items-center">
        <h1 class="text-3xl font-medium">
          <a href="#hero">🚀 Vishi Rockets</a>
        
        </h1>
        <div>
          <button 
          className="text-3xl md:hidden focus:outline-none " id="hamburger-icon">
          &#9776;
         </button>
         <nav className="hidden md:inline space-x-8 text-xl" aria-label='main'>
            <a href="#rockets" className="hover:opacity-80">Our Launches</a>
            <a href="#testimonials" className="hover:opacity-80">Hear from Customers</a>
            <a href="#contacts" className="hover:opacity-80">Contact Us</a>
         </nav>
        </div>

      </section>  
      </header>
  )
}

export default header