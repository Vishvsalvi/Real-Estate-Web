import React from 'react'
import Filter from './Filter'
import Nav from './Nav'

const Body = () => {
  return (
    <div className='relative z-10'>
      <Nav/>
  <header aria-label="Page Header" className="bg-gray-50 relative top-[5rem] md:z-10 -z-10 ">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
     
  
      <div className="mt-8">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl text-center font-[poppins] ">
          Search property to rent 
        </h1>
  
        <Filter/>
      </div>
    </div>
  </header>
  </div>
  )
}

export default Body