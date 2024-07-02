import React from 'react'
import Imagecard from './Imagecard'


const Asidebar = () => {
  return (
    <div className="flex flex-row gap-4 h-full">
      <aside className="w-64 p-4 flex flex-col space-y-2 text-white h-screen bg-purple-900 bg-cover bg-fill font-bold lg:w-[400px]">
      <button className="py-2 hover:backdrop-blur-xl rounded">Home</button>
      <button className="py-2 hover:backdrop-blur-xl rounded">AI Art</button>
      <button className="py-2 hover:backdrop-blur-xl rounded">Photography</button>
      <button className="py-2 hover:backdrop-blur-xl rounded">Sketches</button>
      <button className="py-2 hover:backdrop-blur-xl rounded">Traditional Art</button>
      <button className="py-2 hover:backdrop-blur-xl rounded">Wallpapers</button>
      <button className="py-2 hover:backdrop-blur-xl rounded">Paintings and Drawings</button>
    </aside>
    <Imagecard/>
   
    
    </div>
  )
}

export default Asidebar
