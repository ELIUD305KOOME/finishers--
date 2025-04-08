import React from "react";
import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";

export default function MentalHealthPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500"
        >
          Mental Health Awareness in the Workplace
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg mt-4 opacity-80 text-gray-700"
        >
          Understanding the importance of mental well-being for employees and how{" "}
          <span className="font-semibold text-teal-600">emur</span> supports a healthy work environment.
        </motion.p>
      </div>

      {/* Supportive Initiatives Section */}
      <div className="max-w-4xl mx-auto mt-10">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          How We Promote Mental Wellness
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <HeartPulse className="text-teal-500 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Wellness Programs</h3>
            <p className="text-gray-600 text-sm">
              We offer wellness initiatives including mindfulness sessions, yoga classes, and stress management workshops.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <HeartPulse className="text-teal-500 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Employee Assistance</h3>
            <p className="text-gray-600 text-sm">
              Confidential counseling and mental health support services are available to all employees at no cost.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <HeartPulse className="text-teal-500 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Flexible Work Options</h3>
            <p className="text-gray-600 text-sm">
              Flexible hours and remote work policies help reduce burnout and accommodate personal well-being needs.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <HeartPulse className="text-teal-500 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Supportive Culture</h3>
            <p className="text-gray-600 text-sm">
              We foster a culture of openness, respect, and empathy to ensure every team member feels valued and supported.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-gray-700 text-base mb-4">
          Join <span className="font-semibold text-teal-600">emur</span> in building a workplace that cares about mental health and empowers every employee to thrive.
        </p>
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
          Learn More
        </button>
      </div>
    </div>
  );
}
