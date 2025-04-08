import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function LemcoInsurancePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600"
        >
          LEMCO Insurance: Secure Your Future Today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg mt-4 opacity-80 text-gray-700"
        >
          Understand the benefits of choosing <span className="font-semibold text-blue-700">LEMCO Insurance</span> for comprehensive coverage and financial security.
        </motion.p>
      </div>

      {/* Benefits Section */}
      <div className="max-w-4xl mx-auto mt-10">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Why Choose LEMCO?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <ShieldCheck className="text-blue-700 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Coverage</h3>
            <p className="text-gray-600 text-sm">
              Get protection across health, life, property, and business sectors with flexible plan options tailored to your needs.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <ShieldCheck className="text-blue-700 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Financial Security</h3>
            <p className="text-gray-600 text-sm">
              Ensure peace of mind with policies designed to safeguard your finances during unexpected events and future planning.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <ShieldCheck className="text-blue-700 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Support</h3>
            <p className="text-gray-600 text-sm">
              Benefit from professional advice and assistance from our experienced team whenever you need it.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <ShieldCheck className="text-blue-700 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick Claims Process</h3>
            <p className="text-gray-600 text-sm">
              Experience fast and hassle-free claims processing to ensure you receive the support you deserve without delays.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-gray-700 text-base mb-4">
          Protect what matters most. Choose <span className="font-semibold text-blue-700">LEMCO Insurance</span> and secure your future today.
        </p>
        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
          Get a Quote
        </button>
      </div>
    </div>
  );
}
