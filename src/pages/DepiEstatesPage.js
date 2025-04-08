import React from "react";
import { motion } from "framer-motion";
import { HomeIcon } from "lucide-react";

export default function DepiEstatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600"
        >
          Depi Estates: Real Estate Investment Insights
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg mt-4 opacity-80 text-gray-700"
        >
          Explore lucrative real estate opportunities and investment strategies with
          <span className="font-semibold text-green-600"> Depi Estates</span>.
        </motion.p>
        <p className="text-sm text-gray-500 mt-1">Jan 15, 2025</p>
      </div>

      {/* Investment Insights Section */}
      <div className="max-w-4xl mx-auto mt-10">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Strategic Investment Opportunities
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <HomeIcon className="text-green-600 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Residential Properties</h3>
            <p className="text-gray-600 text-sm">
              Invest in high-demand residential real estate including single-family homes, apartments, and townhouses.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <HomeIcon className="text-green-600 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Commercial Properties</h3>
            <p className="text-gray-600 text-sm">
              Discover opportunities in office spaces, retail buildings, and industrial facilities for stable cash flow.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <HomeIcon className="text-green-600 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Real Estate Funds</h3>
            <p className="text-gray-600 text-sm">
              Diversify your portfolio through professionally managed real estate investment funds and REITs.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <HomeIcon className="text-green-600 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Land Development</h3>
            <p className="text-gray-600 text-sm">
              Invest in raw or underdeveloped land with potential for long-term growth and high returns.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-gray-700 text-base mb-4">
          Take the next step with <span className="font-semibold text-green-600">Depi Estates</span> and grow your wealth through smart real estate investments.
        </p>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Contact Us
        </button>
      </div>
    </div>
  );
}
