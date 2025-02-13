import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';  // Import Chart.js
import ServiceManager from './ServiceManager';
import ProductManager from './ProductManager';
import ServiceBookings from './servicebookings';
import ProductBookings from './Productbookings';
import AddBooking from './AddBooking'
import { useNavigate } from 'react-router-dom';
// import ProductStatic from './Statics';

// Dashboard Component
const Dashboard = () => {
  const productChartRef = useRef(null);
  const serviceChartRef = useRef(null);
  const totalChartRef = useRef(null);

  const [stats, setStats] = useState({
    totalProductClicks: 0,
    totalServiceClicks: 0,
    totalClicks: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/total-clicks`); // Flask endpoint
        const data = await response.json();
        setStats({
          totalProductClicks: data.total_product_clicks || 0,
          totalServiceClicks: data.total_service_clicks || 0,
          totalClicks: data.total_clicks || 0,
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    fetchStats(); // Fetch data when the component mounts

    // Function to create pie chart
    const createChart = (chartRef, data, colors) => {
      const ctx = chartRef.current.getContext('2d');
      return new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Clicks', 'Remaining'],
          datasets: [
            {
              data: [data, 100 - data],
              backgroundColor: colors,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false, // Hide legend for small pie chart
            },
            tooltip: {
              enabled: false, // Disable tooltip
            },
          },
        },
      });
    };

    // Create charts with unique color schemes
    const productColors = ['#FF6384', '#E2E2E2'];
    const serviceColors = ['#36A2EB', '#E2E2E2'];
    const totalColors = ['#FFCE56', '#E2E2E2'];

    const productChart = createChart(productChartRef, stats.totalProductClicks, productColors);
    const serviceChart = createChart(serviceChartRef, stats.totalServiceClicks, serviceColors);
    const totalChart = createChart(totalChartRef, stats.totalClicks, totalColors);

    return () => {
      productChart.destroy();
      serviceChart.destroy();
      totalChart.destroy();
    };
  }, [stats]);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800">Dashboard Overview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {/* Product Clicks Section */}
        <div className="bg-blue-100 p-4 rounded-lg text-blue-800 shadow flex items-center">
          <div className="w-16 h-16">
            <canvas ref={productChartRef} /> {/* Pie chart for Product Clicks */}
          </div>
          <div className="ml-4">
            <h4 className="text-md text-sm font-medium">Product Clicks</h4>
            <p className="text-l font-bold">{stats.totalProductClicks}</p>
          </div>
        </div>

        {/* Service Clicks Section */}
        <div className="bg-green-100 p-4 rounded-lg text-green-800 shadow flex items-center">
          <div className="w-14 h-14">
            <canvas ref={serviceChartRef} /> {/* Pie chart for Service Clicks */}
          </div>
          <div className="ml-4">
            <h4 className="text-md text-sm font-medium">Service Clicks</h4>
            <p className="text-l font-bold">{stats.totalServiceClicks}</p>
          </div>
        </div>

        {/* Total Clicks Section */}
        <div className="bg-gray-100 p-4 rounded-lg text-gray-800 shadow flex items-center">
          <div className="w-16 h-16">
            <canvas ref={totalChartRef} /> {/* Pie chart for Total Clicks */}
          </div>
          <div className="ml-4">
            <h4 className="text-md text-sm font-medium">Total Clicks</h4>
            <p className="text-l font-bold">{stats.totalClicks}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Manage Users Component
const ManageUsers = () => (
  <div className="bg-gray-100 w-full  rounded-none p-0 m-0 overflow-hidden">
    <div className="overflow-x-auto w-full h-full">
      <ServiceBookings />
    </div>
  </div>
);

// Settings Component
const Settings = () => (
  <div className="bg-gray-100 w-full  rounded-none p-0 m-0 overflow-hidden">
    <div className="overflow-x-auto w-full h-full">
    <ProductBookings />
    </div>
  </div>

);

// add booking adding
const Booking_adding = () => (
  <div className="bg-gray-100 w-full  rounded-none p-0 m-0 overflow-hidden">
    <div className="overflow-x-auto w-full h-full">
    <AddBooking/>
    </div>
  </div>

);

// Register Component
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // React Router's navigation hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      const data = await response.json();
      setSuccess(true);

      // Redirect to login page
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
    <form onSubmit={handleSubmit}>
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
      <button
        type="submit"
        className="w-full bg-blue-500 text-sm text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition-colors"
      >
        Register
      </button>
    </form>
    <p className="text-xs text-gray-600 text-center mt-4">
      Already have an account?{' '}
      <button
        className="text-blue-500 hover:underline focus:outline-none"
        onClick={() => navigate('/login')}
      >
        Login
      </button>
    </p>
  </div>
</div>

  );
};

const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [stats, setStats] = useState({
    totalProductClicks: 0,
    totalServiceClicks: 0,
    totalClicks: 0,
  });

  const [searchQuery, setSearchQuery] = useState('');

  // Fetch stats from Flask API
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/total-clicks`); // Flask endpoint
        const data = await response.json();
        setStats({
          totalProductClicks: data.total_product_clicks || 0,
          totalServiceClicks: data.total_service_clicks || 0,
          totalClicks: data.total_clicks || 0,
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    fetchStats();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard stats={stats} />;
      case 'users':
        return <ManageUsers />;
      case 'settings':
        return <Settings />;
      case 'register':
        return <Register />;
      case 'ServiceManager':
        return <ServiceManager />;
      case 'ProductManager':
        return <ProductManager />;
      case 'Booking_adding':
        return <Booking_adding/>;
      default:
        return <Dashboard stats={stats} />;
    }
  };

  return (
    <div className="flex h-full bg-gray-100">
      {/* Sidebar for larger screens */}
      <aside className="hidden sm:flex sm:w-25 sm:bg-gray-800 lg:bg-gray-400 sm:text-white sm:flex-col sm:justify-between sm:p-4">
        <div className="flex-1 flex flex-col items-center">
          <div className="text-center mb-4">
            <h1 className="text-xl font-bold">Admin panel</h1>
          </div>
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className={`p-3 rounded hover:bg-gray-700 ${currentPage === 'dashboard' ? 'bg-gray-700' : ''}`}
            >
              <i className="bi bi-pie-chart-fill text-lg"> </i>
              statics
            </button>
            <button
              onClick={() => setCurrentPage('users')}
              className={`p-3 rounded hover:bg-gray-700 ${currentPage === 'users' ? 'bg-gray-700' : ''}`}
            >
              <i className="bi bi-gear-fill text-lg"> </i>
              service
            </button>
            <button
              onClick={() => setCurrentPage('settings')}
              className={`p-3 rounded hover:bg-gray-700 ${currentPage === 'settings' ? 'bg-gray-700' : ''}`}
            >
              <i className="bi bi-box-fill text-lg"> </i>
              product
            </button>
            <button
              onClick={() => setCurrentPage('register')}
              className={`p-3 rounded hover:bg-gray-700 ${currentPage === 'register' ? 'bg-gray-700' : ''}`}
            >
              <i className="bi bi-person-plus-fill text-lg"> </i>
              admin
            </button>
            <button
              onClick={() => setCurrentPage('ServiceManager')}
              className={`p-3 rounded hover:bg-gray-700 ${currentPage === 'ServiceManager' ? 'bg-gray-700' : ''}`}
            >
              <i className="bi bi-database-fill-gear text-lg"> </i>
              service
            </button>
            <button
              onClick={() => setCurrentPage('ProductManager')}
              className={`p-3 rounded hover:bg-gray-700 ${currentPage === 'ProductManager' ? 'bg-gray-700' : ''}`}
            >
              <i className="bi bi-database-gear text-lg"> </i>
              product
            </button>
            <button
              onClick={() => setCurrentPage('Booking_adding')}
              className={`p-3 rounded hover:bg-gray-700 ${currentPage === 'Booking_adding' ? 'bg-gray-700' : ''}`}
            >
              <i className="bi bi-plus-circle-fill"> </i>
              Booking
            </button> 
          </nav>
        </div>

        <div className="text-center mt-4">
          <a
            href="/"
            className="p-3 text-red-400 hover:bg-gray-700 hover:text-white rounded"
          >
            <i className="bi bi-box-arrow-right text-lg"></i>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 h-auto flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-white shadow px-6 py-2 sm:py-4">
          <h2 className="text-sm sm:text-xl font-semibold text-gray-800">Admin Dashboard</h2>
          {/* Search Bar */}
          <div className="relative w-48 sm:w-80">
            <i className="bi bi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-xs sm:text-base"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 p-4 sm:p-6 min-h-full">{renderContent()}</main>

      </div>

      {/* Sidebar for small screens (horizontal, at bottom) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-gray-800 text-white">
        <div className="flex justify-around py-2 space-x-1">
          <button
            onClick={() => setCurrentPage('dashboard')}
            className={`p-2 rounded hover:bg-gray-700 ${currentPage === 'dashboard' ? 'bg-gray-700' : ''}`}
          >
            <i className="bi bi-pie-chart-fill text-sm"></i>
          </button>
          <button
            onClick={() => setCurrentPage('users')}
            className={`p-2 rounded hover:bg-gray-700 ${currentPage === 'users' ? 'bg-gray-700' : ''}`}
          >
            <i className="bi bi-gear-fill text-sm"></i>
          </button>
          <button
            onClick={() => setCurrentPage('settings')}
            className={`p-2 rounded hover:bg-gray-700 ${currentPage === 'settings' ? 'bg-gray-700' : ''}`}
          >
            <i className="bi bi-box-fill text-sm"></i>
          </button>
          <button
            onClick={() => setCurrentPage('register')}
            className={`p-2 rounded hover:bg-gray-700 ${currentPage === 'register' ? 'bg-gray-700' : ''}`}
          >
            <i className="bi bi-person-plus-fill text-sm"></i>
          </button>
          <button
            onClick={() => setCurrentPage('ServiceManager')}
            className={`p-2 rounded hover:bg-gray-700 ${currentPage === 'ServiceManager' ? 'bg-gray-700' : ''}`}
          >
            <i className="bi bi-database-fill-gear text-sm"></i>
          </button>
          <button
            onClick={() => setCurrentPage('ProductManager')}
            className={`p-2 rounded hover:bg-gray-700 ${currentPage === 'ProductManager' ? 'bg-gray-700' : ''}`}
          >
            <i className="bi bi-database-gear text-sm"></i>
          </button>
          <button
            onClick={() => setCurrentPage('Booking_adding')}
            className={`p-2 rounded hover:bg-gray-700 ${currentPage === 'Booking_adding' ? 'bg-gray-700' : ''}`}
          >
            <i className="bi bi-plus-circle-fill text-sm"></i>
          </button>
          {/* <button
          onClick={() => setCurrentPage('/')}
          className={`p-2 rounded hover:bg-gray-700 ${currentPage === 'logout' ? 'bg-gray-700' : ''}`}
          >
            <i className="bi bi-box-arrow-right text-sm"></i>
            </button> */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
