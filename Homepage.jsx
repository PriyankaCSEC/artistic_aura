
import React from 'react'
import Navbar from './Navbar'
import Asidebar from './Asidebar'
import Imagecard from './Imagecard'

const Homepage = () => {
  return (
    <div className='bg-slate-800'>
      <div>
        <Navbar/>
      </div>
       {/* <Asidebar/> */}
       <Imagecard/>
      
    </div>
  )
}

export default Homepage
