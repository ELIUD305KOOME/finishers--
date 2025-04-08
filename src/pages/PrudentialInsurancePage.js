import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function PrudentialInsurancePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-teal-600"
        >
          Prudential Insurance: Smart Insurance for a Secure Life
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg mt-4 opacity-80 text-gray-700"
        >
          Discover why <span className="font-semibold text-green-700">Prudential Insurance</span> is a top choice for individuals and businesses seeking reliable coverage.
        </motion.p>

        <p className="text-sm text-gray-500 mt-1">Jan 1, 2025</p>
      </div>

      {/* Benefits Section */}
      <div className="max-w-4xl mx-auto mt-10">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Why Choose Prudential?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <ShieldCheck className="text-green-700 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Trusted Coverage Options</h3>
            <p className="text-gray-600 text-sm">
              Prudential offers diverse insurance plans to fit your personal and business needs with unmatched reliability.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <ShieldCheck className="text-green-700 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Financial Strength</h3>
            <p className="text-gray-600 text-sm">
              Backed by a long-standing reputation, Prudential ensures your claims and benefits are delivered promptly.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <ShieldCheck className="text-green-700 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Focus</h3>
            <p className="text-gray-600 text-sm">
              Enjoy dedicated customer support and personalized guidance for all your insurance queries and needs.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <ShieldCheck className="text-green-700 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovative Tools</h3>
            <p className="text-gray-600 text-sm">
              Utilize digital tools and mobile solutions to manage policies, file claims, and track coverage efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-gray-700 text-base mb-4">
          Secure your life and business today. Choose <span className="font-semibold text-green-700">Prudential Insurance</span> for smart, reliable protection.
        </p>
        <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
          Learn More
        </button>
      </div>
    </div>
  );
}
