import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500"
        >
          Cybersecurity: Protecting Your Data Online
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg mt-4 opacity-80 text-gray-700"
        >
          Tips and insights on keeping your personal and business data secure in the digital age with
          <span className="font-semibold text-indigo-600"> emur</span>.
        </motion.p>
      </div>

      {/* Cybersecurity Tips Section */}
      <div className="max-w-4xl mx-auto mt-10">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Key Cybersecurity Practices
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <ShieldCheck className="text-indigo-500 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Use Strong Passwords</h3>
            <p className="text-gray-600 text-sm">
              Create unique passwords for each account using a mix of characters, numbers, and symbols. Consider using a password manager.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <ShieldCheck className="text-indigo-500 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Enable Two-Factor Authentication</h3>
            <p className="text-gray-600 text-sm">
              Add an extra layer of protection by enabling 2FA on all critical accounts to prevent unauthorized access.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <ShieldCheck className="text-indigo-500 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Stay Updated</h3>
            <p className="text-gray-600 text-sm">
              Regularly update your software, apps, and devices to patch vulnerabilities and enhance security.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <ShieldCheck className="text-indigo-500 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Be Aware of Phishing</h3>
            <p className="text-gray-600 text-sm">
              Avoid clicking on suspicious links or attachments. Always verify the source before sharing sensitive information.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-gray-700 text-base mb-4">
          Protect your digital presence with guidance and support from <span className="font-semibold text-indigo-600">emur</span>. Stay safe, stay informed.
        </p>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Learn More
        </button>
      </div>
    </div>
  );
}
