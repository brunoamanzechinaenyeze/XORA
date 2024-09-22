import React from 'react'
import clsx from 'clsx'; // Ensure you're using this utility if required

const TestimonialItem = ({ item, containerClassName }) => {
  return (
    <div className={clsx('relative px-14 pt-11 pb-14 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-s2 after:content-[""] max-md:px-0 max-md:pt-11 after:max-md:-right-4', containerClassName)}>
      <blockquote className='h6 mb-8 text-p4'>
        {item.comment}
      </blockquote>
    </div>
  )
}

export default TestimonialItem
