import React, { useState } from 'react';

function AddBooking() {
  // Manage the form data state
  const [formData, setFormData] = useState({
    product_id: '',
    service_id: '',
    name: '',
    phone: '',
    message: '',
    appointment: '',
    status: 'pending',
    amount_paid: ''
  });

  // Manage the type of booking (either product or service)
  const [bookingType, setBookingType] = useState('product');

  // Handle toggle between service and product
  const handleBookingTypeToggle = (e) => {
    setBookingType(e.target.value);
    setFormData({
      ...formData,
      product_id: '',  // Reset product_id if switching to service
      service_id: ''   // Reset service_id if switching to product
    });
  };

  // Handle input changes for form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = bookingType === 'product' ? `${process.env.REACT_APP_API_URL}/products/bookings` : `${process.env.REACT_APP_API_URL}/services/bookings`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Booking created successfully!');
        console.log(result);
      } else {
        const error = await response.json();
        alert('Error: ' + error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error with the request.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-sm font-semibold text-gray-700 mb-6 text-center">Create a Booking</h1>

      {/* Toggle between Product and Service Booking */}
      <div className="flex justify-center space-x-6 mb-6">
        <label className="flex items-center text-gray-600">
          <input
            type="radio"
            name="bookingType"
            value="product"
            checked={bookingType === 'product'}
            onChange={handleBookingTypeToggle}
            className="mr-2"
          />
          Product Booking
        </label>
        <label className="flex items-center text-gray-600">
          <input
            type="radio"
            name="bookingType"
            value="service"
            checked={bookingType === 'service'}
            onChange={handleBookingTypeToggle}
            className="mr-2"
          />
          Service Booking
        </label>
      </div>

      {/* Form for Product or Service Booking */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {bookingType === 'product' ? (
          <>
            {/* Product ID */}
            <div className="mb-4">
              <label htmlFor="product_id" className="block text-sm font-medium text-gray-600">Product Name:</label>
              <input
                type="text"
                id="product_id"
                name="product_id"
                value={formData.product_id}
                onChange={handleInputChange}
                required
                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        ) : (
          <>
            {/* Service ID */}
            <div className="mb-4">
              <label htmlFor="service_id" className="block text-sm font-medium text-gray-600">Service Name:</label>
              <input
                type="text"
                id="service_id"
                name="service_id"
                value={formData.service_id}
                onChange={handleInputChange}
                required
                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        )}

        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Customer Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        {/* Appointment Date */}
        <div className="mb-4">
          <label htmlFor="appointment" className="block text-sm font-medium text-gray-600">Appointment:</label>
          <input
            type="datetime-local"
            id="appointment"
            name="appointment"
            value={formData.appointment}
            onChange={handleInputChange}
            placeholder="YYYY-MM-DD HH:MM:SS"
            className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Status */}
        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-medium text-gray-600">Status:</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {/* Amount Paid */}
        <div className="mb-4">
          <label htmlFor="amount_paid" className="block text-sm font-medium text-gray-600">Amount Paid:</label>
          <input
            type="number"
            id="amount_paid"
            name="amount_paid"
            value={formData.amount_paid}
            onChange={handleInputChange}
            step="0.01"
            className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create Booking
        </button>
      </form>
    </div>
  );
}

export default AddBooking;
