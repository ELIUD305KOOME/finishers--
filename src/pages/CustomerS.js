import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Map from './Map';

export default function CustomerSupportPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500"
        >
          How emur Enhances Customer Support
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg mt-4 opacity-80 text-gray-700"
        >
          Learn how <span className="font-semibold text-indigo-600">emur</span> ensures top-notch customer service through fast response times and expert assistance.
        </motion.p>
      </div>

      {/* Key Support Features Section */}
      <div className="max-w-4xl mx-auto mt-10">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Our Support Features
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <CheckCircle className="text-indigo-500 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Availability</h3>
            <p className="text-gray-600 text-sm">
              Our dedicated support team is available around the clock to assist customers, no matter their time zone.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <CheckCircle className="text-indigo-500 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Response Times</h3>
            <p className="text-gray-600 text-sm">
              We prioritize quick response times to ensure issues are resolved promptly and effectively.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <CheckCircle className="text-indigo-500 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Assistance</h3>
            <p className="text-gray-600 text-sm">
              Our support team includes specialists with deep knowledge to handle complex questions and offer valuable guidance.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <CheckCircle className="text-indigo-500 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Solutions</h3>
            <p className="text-gray-600 text-sm">
              We tailor our support to each customer’s needs, providing customized solutions that align with their goals.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-gray-700 text-base mb-4">
          Need assistance? Reach out to our support team and experience the <span className="font-semibold text-indigo-600">emur</span> difference.
        </p>
        
      </div>
      <Map />
    </div>
  );
}
