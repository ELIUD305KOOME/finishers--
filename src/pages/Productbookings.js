import React, { useEffect, useState } from 'react';
import { Bar, Pie, Line, Radar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';


const ProductBookings = () => {
  const [ProductBookings, setProductBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingBookingId, setEditingBookingId] = useState(null);
  const [appointment, setAppointment] = useState('');
  const [status, setStatus] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [statistics, setStatistics] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProductBookings = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/products/bookings`);
        if (!response.ok) {
          throw new Error('Failed to fetch product bookings');
        }
        const data = await response.json();
        setProductBookings(data.product_bookings);
        calculateStatistics(data.product_bookings);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductBookings();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter ProductBookings based on the search query
  const filteredBookings = ProductBookings.filter((booking) => {
    return (
      (booking.product_name?.toLowerCase().includes(searchQuery.toLowerCase()) || '')
      || (booking.name?.toLowerCase().includes(searchQuery.toLowerCase()) || '')
      || (booking.phone?.toLowerCase().includes(searchQuery.toLowerCase()) || '')
      || (booking.message?.toLowerCase().includes(searchQuery.toLowerCase()) || '')
      || (booking.status?.toLowerCase().includes(searchQuery.toLowerCase()) || '')
    );
  });

  useEffect(() => {
    const interval = setInterval(() => {
      calculateStatistics(ProductBookings); 
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [ProductBookings]);

  const calculateStatistics = (bookings) => {
    const counts = {
      totalBookings: bookings.length,
      productFrequency: {},
      statusCounts: {},
      totalAmountPaid: 0,
      customerFrequency: {},
      revenuePerproduct: {},
      mostFrequentproduct: '',
      mostFrequentCustomer: '',
      leastFrequentproduct: '',
      highestRevenueproduct: '',
      highestPayingCustomer: '',
    };
  
    bookings.forEach((booking) => {
      const amountPaid = Number(booking.amount_paid) || 0; // Ensure amount_paid is treated as a number
  
      counts.productFrequency[booking.product_name] =
        (counts.productFrequency[booking.product_name] || 0) + 1;
  
      counts.statusCounts[booking.status] =
        (counts.statusCounts[booking.status] || 0) + 1;
  
      counts.totalAmountPaid += amountPaid;
  
      counts.customerFrequency[booking.name] =
        (counts.customerFrequency[booking.name] || 0) + 1;
  
      counts.revenuePerproduct[booking.product_name] =
        (counts.revenuePerproduct[booking.product_name] || 0) + amountPaid;
    });
  
    counts.mostFrequentproduct = Object.entries(counts.productFrequency).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
    counts.leastFrequentproduct = Object.entries(counts.productFrequency).reduce((a, b) => (b[1] < a[1] ? b : a))[0];
    counts.mostFrequentCustomer = Object.entries(counts.customerFrequency).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
    counts.highestRevenueproduct = Object.entries(counts.revenuePerproduct).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
    counts.highestPayingCustomer = Object.entries(bookings.reduce((acc, booking) => {
      acc[booking.name] = (acc[booking.name] || 0) + (Number(booking.amount_paid) || 0);
      return acc;
    }, {})).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
  
    setStatistics(counts);
  };

  const handleDelete = async (bookingId) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products/bookings/${bookingId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete product booking');
      }

      const data = await response.json();
      alert(data.message);
      const updatedBookings = ProductBookings.filter((booking) => booking.id !== bookingId);
      setProductBookings(updatedBookings);
      calculateStatistics(updatedBookings);
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  const handleUpdateBooking = async (bookingId) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products/bookings/${bookingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ appointment, status, amount_paid: amountPaid }),
      });

      if (!response.ok) {
        throw new Error('Failed to update booking');
      }

      const data = await response.json();
      alert(data.message);

      const updatedBookings = ProductBookings.map((booking) =>
        booking.id === bookingId
          ? { ...booking, appointment, status, amount_paid: amountPaid }
          : booking
      );

      setProductBookings(updatedBookings);
      calculateStatistics(updatedBookings);

      setEditingBookingId(null);
      setAppointment('');
      setStatus('');
      setAmountPaid('');
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 mx-auto"></div>
        <p className="text-lg text-gray-700 mt-4">Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-600 text-center">Error: {error}</div>;
  }

  return (
    <div className="bg-gray-100 shadow-md h-full rounded-md p-4 max-w-full overflow-y-auto">
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* General Statistics */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-medium mb-4">General Statistics</h2>
          <table className="table-auto w-full text-sm text-left">
            <tbody>
              <tr>
                <th className="px-2 py-1 font-medium text-gray-600">Total Bookings</th>
                <td className="px-2 py-1">{statistics.totalBookings}</td>
              </tr>
              <tr>
                <th className="px-2 py-1 font-medium text-gray-600">Total Amount Paid</th>
                <td className="px-2 py-1">Ksh {statistics.totalAmountPaid}</td>
              </tr>
              <tr>
                <th className="px-2 py-1 font-medium text-gray-600">Most Frequent product</th>
                <td className="px-2 py-1">{statistics.mostFrequentproduct}</td>
              </tr>
              <tr>
                <th className="px-2 py-1 font-medium text-gray-600">Least Frequent product</th>
                <td className="px-2 py-1">{statistics.leastFrequentproduct}</td>
              </tr>
              <tr>
                <th className="px-2 py-1 font-medium text-gray-600">Most Frequent Customer</th>
                <td className="px-2 py-1">{statistics.mostFrequentCustomer}</td>
              </tr>
              <tr>
                <th className="px-2 py-1 font-medium text-gray-600">Highest Revenue product</th>
                <td className="px-2 py-1">{statistics.highestRevenueproduct}</td>
              </tr>
              <tr>
                <th className="px-2 py-1 font-medium text-gray-600">Highest Paying Customer</th>
                <td className="px-2 py-1">{statistics.highestPayingCustomer}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Statistics Charts */}
        <div className="chart-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="chart-container" style={{ width: '100%', height: '300px' }}>
            <Pie
              data={{
                labels: Object.keys(statistics.statusCounts || {}),
                datasets: [
                  {
                    label: 'Status Distribution',
                    data: Object.values(statistics.statusCounts || {}),
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#FF5733','#33FF57','#FF8C33','#33A2FF'],
                  },
                ],
              }}
            />
          </div>
          <div className="chart-container" style={{ width: '100%', height: '300px' }}>
            <Bar
              data={{
                labels: Object.keys(statistics.productFrequency || {}),
                datasets: [
                  {
                    label: 'product Bookings',
                    data: Object.values(statistics.productFrequency || {}),
                    backgroundColor: '#4CAF50',
                  },
                ],
              }}
            />
          </div>
          <div className="chart-container" style={{ width: '100%', height: '300px' }}>
            <Line
              data={{
                labels: Object.keys(statistics.revenuePerproduct || {}),
                datasets: [
                  {
                    label: 'Revenue per product',
                    data: Object.values(statistics.revenuePerproduct || {}),
                    borderColor: '#FF5733',
                    fill: false,
                  },
                ],
              }}
            />
          </div>
          <div className="chart-container" style={{ width: '100%', height: '300px' }}>
            <Radar
              data={{
                labels: Object.keys(statistics.productFrequency || {}),
                datasets: [
                  {
                    label: 'product Frequency',
                    data: Object.values(statistics.productFrequency || {}),
                    borderColor: '#FF6384',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: true,
                  },
                ],
              }}
            />
          </div>
          <div className="chart-container" style={{ width: '100%', height: '300px' }}>
            <Doughnut
              data={{
                labels: Object.keys(statistics.customerFrequency || {}),
                datasets: [
                  {
                    label: 'Customer Frequency',
                    data: Object.values(statistics.customerFrequency || {}),
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#FF5733','#33FF57','#FF8C33','#33A2FF'],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
      {/* Search Bar */}
      <div className="text-blue-400">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-300 rounded w-full mb-4"
        />
      </div>

      {/* Table on Large Screens */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="table-auto w-full border-collapse text-sm">
          <thead className="bg-gray-100 text-gray-600 sticky top-0 z-10">
            <tr>
              {['product Name', 'Customer', 'Phone', 'Message', 'Time', 'Appointment', 'Status', 'Amount Paid', 'Actions'].map((header) => (
                <th key={header} className="px-4 py-2 border-b text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-green-700">
            {filteredBookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b truncate">{booking.product_name}</td>
                <td className="px-4 py-2 border-b truncate">{booking.name}</td>
                <td className="px-4 py-2 border-b truncate">{booking.phone}</td>
                <td className="px-4 py-2 border-b max-w-xs break-words">{booking.message}</td>
                <td className="px-4 py-2 border-b truncate">{booking.timestamp}</td>
                <td className="px-4 py-2 border-b">
                  {editingBookingId === booking.id ? (
                    <input
                      type="datetime-local"
                      value={appointment}
                      onChange={(e) => setAppointment(e.target.value)}
                      className="px-2 py-1 border border-gray-300 rounded w-full"
                    />
                  ) : (
                    <span className="py-1 px-1 text-gray-800 truncate">
                      {booking.appointment ? booking.appointment.replace('T', ' - ') : 'Not Set'}
                    </span>
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingBookingId === booking.id ? (
                    <input
                      type="text"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="px-2 py-1 border border-gray-300 rounded w-full"
                    />
                  ) : (
                    <span className="text-gray-800">{booking.status || 'Not Set'}</span>
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingBookingId === booking.id ? (
                    <input
                      type="number"
                      value={amountPaid}
                      onChange={(e) => setAmountPaid(e.target.value)}
                      className="px-2 py-1 border border-gray-300 rounded w-full"
                    />
                  ) : (
                    <span className="text-gray-800">
                      {booking.amount_paid ? `Ksh ${booking.amount_paid}` : 'Not Set'}
                    </span>
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  <div className="flex gap-2">
                    {editingBookingId === booking.id ? (
                      <button
                        className="bg-green-500 text-white text-xs py-1 px-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                        onClick={() => handleUpdateBooking(booking.id)}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="bg-blue-500 text-white text-xs py-1 px-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onClick={() => {
                          setEditingBookingId(booking.id);
                          setAppointment(booking.appointment || '');
                          setStatus(booking.status || '');
                          setAmountPaid(booking.amount_paid || '');
                        }}
                      >
                        Edit
                      </button>
                    )}
                    <button
                      className="bg-red-500 text-white text-xs py-1 px-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                      onClick={() => handleDelete(booking.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table on Small Screens */}
      <div className="lg:hidden">
        <div className="space-y-4">
          {filteredBookings.map((booking) => (
            <div key={booking.id} className="bg-green-200 shadow-sm rounded-br-none rounded-3xl p-4">
              {/* Booking Name and Phone */}
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm">{booking.name}</p>
                <p className="text-gray-500">{booking.phone}</p>
              </div>

              {/* Message Bubble */}
              <div className="p-3 mt-2 rounded-tl-none rounded-3xl text-xs bg-green-50 text-green-600 break-words">
                {booking.message}
              </div>

              {/* Appointment */}
              <div className="mt-2 text-xs flex gap-2">
                {editingBookingId === booking.id ? (
                  <input
                    type="datetime-local"
                    value={appointment}
                    onChange={(e) => setAppointment(e.target.value)}
                    className="px-2 py-1 border border-gray-300 rounded w-full"
                  />
                ) : (
                  <span className="py-1 px-1 text-gray-800">
                    {booking.appointment ? booking.appointment.replace('T', ' - ') : 'Not Set'}
                  </span>
                )}
              </div>

              {/* Status */}
              <div className="mt-2 text-xs flex gap-2">
                {editingBookingId === booking.id ? (
                  <input
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="px-2 py-1 border border-gray-300 rounded w-full"
                  />
                ) : (
                  <span className="py-1 px-1 text-gray-800">{booking.status || 'Not Set'}</span>
                )}
              </div>

              {/* Amount Paid */}
              <div className="mt-2 text-xs flex gap-2">
                {editingBookingId === booking.id ? (
                  <input
                    type="number"
                    value={amountPaid}
                    onChange={(e) => setAmountPaid(e.target.value)}
                    className="px-2 py-1 border border-gray-300 rounded w-full"
                  />
                ) : (
                  <span className="py-1 px-1 text-gray-800">{booking.amount_paid || 'Not Set'}</span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-2 flex gap-2">
                {/* Save/Cancel Edit */}
                {editingBookingId === booking.id ? (
                  <button
                    className="bg-green-500 text-white text-xs py-1 px-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                    onClick={() => handleUpdateBooking(booking.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="bg-yellow-500 text-white text-xs py-1 px-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    onClick={() => {
                      setEditingBookingId(booking.id);
                      setAppointment(booking.appointment || '');
                      setStatus(booking.status || '');
                      setAmountPaid(booking.amount_paid || '');
                    }}
                  >
                    Edit
                  </button>
                )}

                {/* Delete Button */}
                <button
                  className="bg-red-500 text-white text-xs py-1 px-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                  onClick={() => handleDelete(booking.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default ProductBookings;