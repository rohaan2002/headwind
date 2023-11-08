import React from 'react'
import '../customm.css'

const textbox = ({labeler1, labeler2 ,rows}) => {
  return (
    <>
    <form action="" method='post'>
    <label className='text-white text-3xl my-3' >{labeler1}:</label>
    <input name='subject' placeholder={labeler1+' goes here'} required className='resize-none rounded-xl text-left text-3xl pt-3 pl-3 box-border bg-slate-300 responsive_width mb-12 h-16 placeholdy mt-3'/>

    <label className='text-white text-3xl my-3' >{labeler2}:</label>
    <textarea name='subject' placeholder={labeler2+' goes here'} required className='resize-none rounded-xl text-left text-3xl pt-3 pl-3 box-border bg-slate-300 responsive_width mb-12 h-80 mt-3 '/>

    <button className='neon-button m-3'>Submit</button>
    </form>
    </>
  )
}

export default textbox