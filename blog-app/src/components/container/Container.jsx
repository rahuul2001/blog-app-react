import React from 'react'

export const Container = ({children}) => {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>{
        children
    }</div>
  )
}
