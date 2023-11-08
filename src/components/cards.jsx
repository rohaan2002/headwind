import React from 'react'

const cards = ({logo,children,price}) => {
  return (
    <div className='w-60 h-64 border-2 border-yellow-500 p-5 m-auto rounded-2xl text-slate-100 my-8'>
        <img className='h-28 mx-auto' src={logo} alt="" />
        <p className='text-3xl py-2 text-center'>{children}</p>
        <p className='text-3xl text-slate-400 text-center'>{price}</p>
    </div>
  )
}

export default cards