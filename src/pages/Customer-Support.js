import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaComments, FaQuestionCircle } from "react-icons/fa";

export default function CustomerSupport() {
  const [message, setMessage] = useState("");
  
  return (
    <div className="min-h-screen bg-cover bg-fixed bg-center text-white flex flex-col items-center p-8 relative overflow-hidden" style={{ backgroundImage: "url('/blog.webp')" }}>
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <h1 className="text-5xl font-bold flex items-center gap-2">
          <FaComments className="text-yellow-400 animate-bounce" /> Customer Support
        </h1>
        <p className="mt-3 text-lg">We’re here to help. Get in touch with us anytime!</p>
      </motion.div>
      
      {/* Contact Options */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full mb-12">
        <div className="bg-white p-6 rounded-lg text-gray-900 shadow-lg flex flex-col items-center">
          <FaPhone className="text-blue-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold">Call Us</h2>
          <p className="mt-2 text-gray-600">+254 (792) 182-559</p>
        </div>
        <div className="bg-white p-6 rounded-lg text-gray-900 shadow-lg flex flex-col items-center">
          <FaEnvelope className="text-red-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold">Email Us</h2>
          <p className="mt-2 text-gray-600">support@serfion.com</p>
        </div>
        <div className="bg-white p-6 rounded-lg text-gray-900 shadow-lg flex flex-col items-center">
          <FaQuestionCircle className="text-green-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold">FAQs</h2>
          <p className="mt-2 text-gray-600">Find answers to common questions.</p>
        </div>
      </div>
      
      {/* Support Form */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-lg shadow-xl max-w-3xl w-full text-gray-900">
        <h2 className="text-2xl font-semibold mb-4 text-center">Send Us a Message</h2>
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Describe your issue or inquiry..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Submit Request
        </button>
      </motion.div>
    </div>
  );
}
