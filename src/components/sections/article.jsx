import React from 'react'

const article = ({articlass, content}) => {
  return (
    <article className={articlass}>
        <h2 className='max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-white dark:text-white"'>{content}</h2>
    </article>
  )
}

export default article