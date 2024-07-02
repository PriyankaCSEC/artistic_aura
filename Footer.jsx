import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer id="contact" className="bg-slate-900 py-12 text-sandle">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="mt-2 mb-6">info@artisticaura.com</p>
          <div className="flex justify-center space-x-4 mb-6">
            <a href="https://facebook.com" target="_blank" className="text-sandle hover:text-slate-500 transition duration-300">
              <i className="fab fa-facebook-f">facebook</i>
            </a>
            <a href="https://twitter.com" target="_blank" className="text-sandle hover:text-slate-500 transition duration-300">
              <i className="fab fa-twitter">twitter</i>
            </a>
            <a href="https://instagram.com" target="_blank" className="text-sandle hover:text-slate-500 transition duration-300">
              <i className="fab fa-instagram">instagram</i>
            </a>
          </div>
          <p className="text-sandle">&copy; 2024 ArtisticAura. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
