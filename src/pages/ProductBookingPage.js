import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductBookingPage = () => {
  // Extract productId from the URL using useParams
  const { productId } = useParams();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Check if productId is valid
  useEffect(() => {
    if (!productId) {
      setError('Product ID is missing.');
    }
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Ensure all fields are filled and productId is available
    if (!name || !phone || !message || !productId) {
      setError('Please provide your name, phone number, message, and valid product.');
      return;
    }

    const requestPayload = { name, phone, message };

    try {
      // Send POST request to the backend API with productId
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${productId}/clicks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayload),
      });

      const data = await response.json();

      if (data.whatsapp_url) {
        // Open the WhatsApp link in a new tab
        window.open(data.whatsapp_url, '_blank');
        setError(''); // Clear any previous errors
      } else {
        setError('Error: ' + (data.error || 'Unexpected error occurred.'));
      }
    } catch (error) {
      console.error('Error during booking:', error);
      setError('There was an error processing your booking.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6  shadow-lg w-full max-w-lg">
        <h2 className="lg:text-2xl text-sm font-bold text-center mb-4 text-gray-800">
          Product Booking
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm text-gray-700 font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Phone Input */}
          <div>
            <label htmlFor="phone" className="block text-sm text-gray-700 font-medium mb-2">
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm text-gray-700 font-medium mb-2">
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 text-xs rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here"
              rows="4"
              required
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-red-600 text-xs font-medium">{error}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-sm bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <i className="bi bi-whatsapp text-sm"></i>
            Book via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductBookingPage;
