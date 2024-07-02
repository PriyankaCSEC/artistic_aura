import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'; 
import backgroundImage from './picpic.jpg';
import Features from './Features';
import Footer from './Footer';

const Landingpage = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="top-0 left-0 w-full z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-gray-800">ArtisticAura</div>
          <nav className="space-x-6 text-gray-600 hover:text-gray-800">
            <Link to="features" smooth={true}>Features</Link>
            <Link to="contact" smooth={true}>Contact</Link>
       
            <RouterLink to="/Homepage">Homepage</RouterLink>
          </nav>
        
          <button><RouterLink to="/Signin" className="bg-sandle text-white px-4 py-2 rounded-lg shadow">Login</RouterLink></button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center bg-slate-200 h-screen flex items-center font-bold" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Upload and Share Your Art</h1>
          <p className="text-lg text-white mb-8">Join our community of artists and showcase your creativity.</p>
     
          <RouterLink to="/Signup" className="bg-sandle text-white px-8 py-3 rounded-lg shadow">Get Started</RouterLink>
        </div>
      </section>

      <Features />
      <Footer />
    </div>
  );
};

export default Landingpage;
