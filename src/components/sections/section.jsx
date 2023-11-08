import React from 'react'
import Article from './article'

const section = ({classname,children}) => {
  return (
    <section className={classname}>
        <Article articlass={'sm:w-1/2 dark'} content={children}></Article>
    </section>
  )
}

export default section