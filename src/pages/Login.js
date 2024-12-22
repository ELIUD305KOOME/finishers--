import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      // Store JWT token in localStorage
      localStorage.setItem('authToken', data.access_token);
      // Redirect to dashboard
      navigate('/dashboard');
    } else {
      // Handle error (e.g., invalid credentials)
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white  rounded-lg p-8 lg:w-full max-w-sm">
        <h2 className="lg:text-2xl text-sm font-bold text-gray-800 text-center mb-6"><i className="bi bi-person-circle"></i> Admin</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-xs text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-xs text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 lg:text-2x1 text-sm text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
          <p
          className='text-xs text-gray-500'>only admins can login </p>
        </form>
      </div>
      {/* footer */}

    </div>
  );
};

export default Login;
