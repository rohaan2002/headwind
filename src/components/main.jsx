import React from 'react'
import Dab from '../assets/images/rocketdab.png'
import Launch from '../assets/images/rocketlaunch.png'
import Man from '../assets/images/rocketman.png'
import Rider from '../assets/images/rocketride.png'
import './customm.css'
import Section from './sections/section'
import Cards from './cards'
import Review from './sections/review'
import Textbox from './sections/form'
import Footer from './footer'


const main = () => {
  return (
    <>
    <main className='max-w-4xl mx-auto'>
        <section id='hero' className='flex flex-col-reverse justify-center items-center sm:flex-row  p-6 gap-8 mb-'>
            <article className='sm:w-1/2 dark my-24'>
                <h2
                    class="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white"
                > Space Race is on again!! <span className='dark:text-indigo-400'>What are you sending</span> this time?</h2>
                <p className='max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400'>We make cryogenic engines indigenously with the expertise and assistance from Global Players like ISRO, JAXA and ESA.</p>
                <p className='max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400'>Space Flights made Affordable - <span className='text-red-400'>Vishi Rockets</span>!</p>
            </article>
            <img className='w-1/2 wave-element aura-element' src={Dab} alt="" />
        </section>
{/* 
        <Section classname={'flex flex-col-reverse justify-center items-center sm:flex-row  p-6 gap-8 mb-12'} >whatever</Section> */}
        <hr className='mx-auto dark:bg-white w-1/2' />
        <section id='rockets' className='p-6 my-12'>
            <h2 className="text-4xl font-bold text-center sm:text-5xl text-white mb-6">Rockets we offer</h2>
        <div className='block sm:flex py-10 mb-48'>
        <Cards logo={Man} price="$">Explorer</Cards>
        <Cards logo={Rider} price="$$">Adventurer</Cards>
        <Cards logo={Launch} price="$$$">Infinity</Cards>
        </div>
        </section>
        <hr className='mx-auto dark:bg-white w-1/2'/>

        <section id='testimonials' className='p-6 my-12 mb-24'>
        <h2 className="text-4xl font-bold text-center sm:text-5xl text-white mb-6">Testimonials</h2>
        <Review author='—CosmicCinephile'>So, I've been to the Moon a few times now, and this engine made it feel like a routine drive. Ordering? Easier than ordering food. Packaging? Tougher than my space helmet. On the lunar surface, it maneuvered smoother than my daily commute, turning rough patches into a cosmic cakewalk. Craters and peaks? Explored like a pro.</Review>
        <Review author='—AstroTrailblazer2060'>Chillin' on Saturn's moons is my thing. This engine? Arrived faster than my morning coffee. Packaging could survive a meteor shower. Landing on Titan? Smooth as a Sunday cruise. Ponds, hills, and valleys? Explored 'em all without breaking a sweat.</Review>
        <Review author='—StargazerPioneer'>Vishi Rockets propelled my odyssey to the ice giants. With their engines' optimal fuel consumption, I unveiled Neptune's secrets and journeyed through Uranus' captivating atmosphere.</Review>
        <Review author='—NovaNomad'>Picture this: I'm in deep space, courtesy of this kickass engine. Ordering it was like online shopping for me. Packaging? Tougher than surviving a movie marathon. Every light-year felt like a scene from epic films. Space travel turned into my weekend hobby, with moments as thrilling as a binge-worthy series.</Review>

        </section>
        <hr className='mx-auto dark:bg-white w-1/2' />

        <section id='contacts' className='my-12 p-6 mb-32'>
        <h2 className="text-4xl font-bold text-center sm:text-5xl text-white mb-6">Contact Us</h2>
        <Textbox labeler1='Subject' labeler2='Message' rows='2'></Textbox>
        
        <div className='relative ml-60 mb-24'><div className='rubber mt-10 w-72 p-6 absolute'>Vanity by <a href='https://github.com/rohaan2002'><b className='text-cyan-700'>Rohann</b></a></div></div>
      
        </section>


    </main>
        <section className='bg-teal-600 w-full mt-0'>
            <Footer></Footer>
        </section>
        </>
  ) 
}

export default main