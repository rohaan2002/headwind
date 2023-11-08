import React from 'react'

const review = ({children, author}) => {
  return (
    <>
    <p className='m-8 text-slate-400 text-2xl text-center max-w-4xk mb-14 mr-12'><i className='text-zinc-400 text-6xl'>❝</i>{children} <i className='text-zinc-400 text-6xl absolute  '>❞</i>
    
    <figcaption className='text-slate-600 mt-6 text-right text-sm sm:text-xl italic'>{author}</figcaption>
    </p>
    </>
  )
}

export default review