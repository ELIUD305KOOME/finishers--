import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ServiceBookingPage = () => {
    // Use useParams to get the serviceId from the URL (if using react-router)
    const { serviceId } = useParams();
    
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // Ensure the serviceId is valid
    useEffect(() => {
        if (!serviceId) {
            setError("Service ID is missing.");
        }
    }, [serviceId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation: Check if all fields are filled out and if serviceId is available
        if (!name || !phone || !message || !serviceId) {
            setError('Please provide your name, phone number, message, and valid service.');
            return;
        }

        const requestPayload = { name, phone, message };

        try {
            // Send the POST request to the Flask API with the serviceId
            const response = await fetch(`${process.env.REACT_APP_API_URL}/services/${serviceId}/clicks`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestPayload),
            });

            const data = await response.json();

            if (data.whatsapp_url) {
                // Store the booking data in the database, and immediately open WhatsApp
                window.open(data.whatsapp_url, "_blank");
                setError(''); // Reset any previous error
            } else {
                setError('Error: ' + data.error);
            }
        } catch (error) {
            console.error('Error during booking:', error);
            setError('There was an error processing your booking.');
        }
    };

    return (
        <div className="max-w-lg mx-auto w-full p-9 bg-gray-50 h-full shadow-lg  mt-10">
            <h2 className="text-2xl font-bold text-center text-sm text-gray-900 mb-6">Service Booking</h2>
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                    <label htmlFor="name" className="block text-xs text-gray-700 font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border text-sm border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-100"
                        required
                    />
                </div>

                {/* Phone Input */}
                <div>
                    <label htmlFor="phone" className="block text-xs text-gray-700 font-semibold mb-2">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-100"
                        required
                    />
                </div>

                {/* Message Textarea */}
                <div>
                    <label htmlFor="message" className="block text-xs text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full text-sm  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-100"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 text-sm bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
                >
                    <i className="bi bi-whatsapp text-sm"></i>
                    Book via WhatsApp
                </button>
            </form>
        </div>
    );
};

export default ServiceBookingPage;
