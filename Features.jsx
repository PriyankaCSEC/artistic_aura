import React from 'react'

const Features = () => {
  return (
    <div>
      <section id="features" className="py-20 bg-gray-200 ">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Features</h2>
          <div className="flex flex-col gap-4  text-black">
            <div className=" p-8 rounded-lg shadow-lg text-center backdrop-blur-xl hover:scale-100">
              
              <h3 className="text-2xl font-bold  mb-4">Easy Upload</h3>
              <p className="">Upload your art in various formats quickly and easily.</p>
            </div>
            <div className=" p-8 rounded-lg shadow-lg text-center  backdrop-blur-xl">
              <h3 className="text-2xl font-bold mb-4">Community Feedback</h3>
              <p className="">Receive feedback and comments from other artists.</p>
            </div>
            <div className=" p-8 rounded-lg shadow-lg text-center  backdrop-blur-xl">
              <h3 className="text-2xl font-bold mb-4">Portfolio Showcase</h3>
              <p className="">Create a stunning portfolio to display your best works.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
