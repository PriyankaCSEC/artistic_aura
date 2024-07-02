import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className=" top-0 bg-purple-800 p-4 flex justify-between items-center w-full">
      <div className="text-white font-bold text-lg">ArtisticAura</div>
      <div className="flex flex-row gap-10">
      <button className="text-white font-semibold">
        <Link to="/Postart">Post my art</Link></button>
      
      </div>
      
    </nav>
  );
};

export default Navbar;
