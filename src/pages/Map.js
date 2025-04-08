import React, { useState } from 'react';

const Map = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactMethod: 'email', // Default contact method: email
  });

  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill in all required fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    // Simulate form submission success
    setFormSuccess(true);
    setFormError(null);

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        contactMethod: 'email',
      });
      setFormSuccess(false);
    }, 3000);
  };

  return (
    <div
      className="relative bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('/business-logo.jpg')",
        backgroundAttachment: 'fixed', // Ensures the background image stays fixed
      }}
    >
      {/* Black overlay with backdrop blur */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="lg:text-3xl text-xl font-bold text-white relative mb-6">Contact Us</h2>
        <p className="lg:text-base text-sm text-gray-300 relative mb-8">
          We'd love to hear from you! Use the form below to send us a message via email or WhatsApp.
        </p>

        <div className="bg-transparent ml-2 rounded-lg shadow-md p-6 lg:p-8 max-w-lg mx-auto relative z-10">
          {formSuccess && (
            <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              Thank you for reaching out! We will get back to you shortly.
            </div>
          )}
          {formError && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">{formError}</div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-blue-700">
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-1 block w-full px-3 py-2 bg-transparent border border-blue-400 rounded-md shadow-sm text-blue-800 focus:ring-blue-600 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-blue-700">
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1 block w-full px-3 py-2 bg-transparent border border-blue-400 rounded-md shadow-sm text-blue-800 focus:ring-blue-600 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>

            {/* Phone Field */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-blue-700">
                Your Phone Number (Optional):
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="mt-1 block w-full px-3 py-2 bg-transparent border border-blue-400 rounded-md shadow-sm text-blue-800 focus:ring-blue-600 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-blue-700">
                Your Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Enter your message"
                className="mt-1 block w-full px-3 py-2 bg-transparent border border-blue-400 rounded-md shadow-sm text-blue-800 focus:ring-blue-600 focus:border-blue-500 sm:text-sm"
                required
              ></textarea>
            </div>

            {/* Contact Method */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Preferred Contact Method:</label>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input
                    id="contact-email"
                    name="contactMethod"
                    type="radio"
                    value="email"
                    checked={formData.contactMethod === 'email'}
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="contact-email" className="ml-3 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="contact-whatsapp"
                    name="contactMethod"
                    type="radio"
                    value="whatsapp"
                    checked={formData.contactMethod === 'whatsapp'}
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="contact-whatsapp" className="ml-3 block text-sm font-medium text-gray-700">
                    WhatsApp
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Logo Overlay */}
<div
  className="absolute top-4 right-4 w-24 h-24 rounded-full flex items-center justify-center shadow-lg bg-cover bg-center"
  style={{
    backgroundImage: "url('/ceo-eliud.jpg')", // Background image for the overlay
    backgroundSize: "cover", // Ensures the image covers the entire container
    backgroundPosition: "center", // Centers the image within the container
    border: "2px solid rgba(255, 255, 255, 0.5)", // Adds a semi-transparent border for contrast
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" // Subtle shadow for depth
  }}
>
  <p className="text-2xl font-bold text-indigo-600 text-shadow">emur</p>
</div>
    </div>
  );
};

export default Map;