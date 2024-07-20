import React from 'react'

function Link(props) {
  return (
    <a href={props.url} className='inline-block p-4 text-xl lg:text-2xl font-medium hover:text-primary dark:hover:text-secondary duration-200'>
      {props.text}
    </a>
  )
}

export default Link
