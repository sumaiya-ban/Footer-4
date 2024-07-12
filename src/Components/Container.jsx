import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-container m-auto lg:pt-0 pt-8 lg:px-0 px-4'>
      {children}
    </div>
  )
}

export default Container
