// src/components/Signin.jsx

import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const [user_name, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/Homepage';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/signin', {
        user_name,
        password,
      });

      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user_name', user_name);

      // Redirect to the intended page or homepage
      navigate(from, { replace: true });
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12 bg-signin-pic bg-cover">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md backdrop-blur-sm">
        <h1 className="font-bold text-center text-4xl mb-5 text-white">Sign In</h1>
        <div className="w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <form onSubmit={handleSubmit}>
              <label className="font-semibold text-sm text-white pb-1 block">Username</label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                placeholder="Enter your username"
                value={user_name}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <label className="font-semibold text-sm text-white pb-1 block">Password</label>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <div className="text-red-500 mb-3">{error}</div>}
              <button
                type="submit"
                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Login</span>
              </button>
            </form>
          </div>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <Link to="/forgot-password" className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none focus:ring-opacity-50">Forgot Password?</Link>
              </div>
              <div className="text-center sm:text-right whitespace-nowrap">
                <Link to="/signup" className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none focus:ring-opacity-50">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
