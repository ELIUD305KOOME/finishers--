import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import ServiceManager from './servicemanager';
import VipUsers from './vip_users';
import AdminRegister from './register';

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

const Register  = () => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-4">Register Costs</h2>
    <p>Add, edit, and delete register costs here.</p>
    <AdminRegister/>
  </div>
);


const AdminDashboard = () => (
  <div className="flex h-screen bg-gray-100">
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>
      <nav>
        <ul>
          {['dashboard', 'manage-users', 'settings', 'register'].map((path) => (
            <li key={path} className="mb-2">
              <Link to={path} className="block py-2 px-4 rounded hover:bg-gray-700 capitalize">{path.replace('-', ' ')}</Link>
            </li>
          ))}
        </ul>
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
