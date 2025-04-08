import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import ServiceManager from './servicemanager';
import VipUsers from './vip_users';

const ManageUsers = () => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-4">Manage Users</h2>
    <p>View and manage all users here.</p>
    <VipUsers />
  </div>
);

const Settings = () => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-4">Settings</h2>
    <ServiceManager />
  </div>
);

// Register Component
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [_image, setImage] = useState(null); // New state for image
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    if (_image) formData.append('_image', _image);

    try {
      const response = await fetch(`/register`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      setSuccess(true);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-0">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md sm:max-w-lg">
        <h2 className="text-sm sm:text-3xl font-bold text-gray-800 text-center mb-6">
          Admin Registration
        </h2>
        {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
        {success && (
          <div className="bg-green-100 text-xs text-green-700 p-3 rounded mb-4">
            Registration successful! Redirecting to login...
          </div>
        )}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="image">
              Profile Image
            </label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              accept="image/*"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-sm text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

const AdminDashboard = () => (
  <div className="flex h-screen bg-gray-100">
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>
      <nav>
        {['dashboard', 'manage-users', 'settings', 'register'].map((path) => (
          <li key={path} className="mb-2">
            <Link to={path} className="block py-2 px-4 rounded hover:bg-gray-700 capitalize">
              {path.replace('-', ' ')}
            </Link>
          </li>
        ))}
      </nav>
    </aside>
    <main className="flex-1 p-6 overflow-y-auto">
      <Routes>
        <Route path="dashboard" element={<h1>Welcome to the Admin Dashboard</h1>} />
        <Route path="manage-users" element={<ManageUsers />} />
        <Route path="settings" element={<Settings />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </main>
  </div>
);

export default AdminDashboard;
