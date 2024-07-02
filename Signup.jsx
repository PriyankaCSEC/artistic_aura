import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [user_name, setUsername] = useState('');
  const [user_email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/signup', {
        user_name,
        user_email,
        password,
      });
      console.log(response.data);
      navigate('/Homepage');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    
    <div className="min-h-screen flex flex-col justify-center sm:py-12 bg-signup-pic">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md backdrop-blur-sm">
        <h1 className="font-bold text-center text-2xl mb-5 text-purple-600">Create Account</h1>
        <div className="w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <form onSubmit={handleSubmit}>
              <label className="font-semibold text-sm pb-1 block text-purple-600">Name</label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                placeholder="Enter your name"
                value={user_name}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label className="font-semibold text-sm text-purple-600 pb-1 block">Email</label>
              <input
                type="email"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                placeholder="Enter your email"
                value={user_email}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
              <label className="font-semibold text-sm text-purple-600 pb-1 block">Password</label>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="transition duration-200 text-purple-600 hover:backdrop-blur-sm focus:bg-purple-800 focus:ring-4 focus:ring-purple-400 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Sign Up</span>
              </button>
            </form>
          </div>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <Link to="/Signin" className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-purple-500 hover:backdrop-blur-sm hover:border-white focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none focus:ring-opacity-50">
                  Already have an account?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Signup;
