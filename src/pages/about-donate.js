import React from "react";
import { motion } from "framer-motion";

export default function Donations() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500"
        >
          How Your Donations Help Us Grow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg mt-4 text-gray-700 opacity-80"
        >
          See how your contributions support our mission in providing excellent services.
        </motion.p>
      </div>

      {/* Impact Section */}
      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {[
          {
            title: "Technology Upgrades",
            description: "Your donations help us acquire better tools, software, and infrastructure to serve you faster and more efficiently.",
            icon: "💻"
          },
          {
            title: "Training & Skill Development",
            description: "Funds contribute to continuous learning and skill-building for our team to stay at the cutting edge.",
            icon: "📚"
          },
          {
            title: "Community Outreach",
            description: "We organize free workshops, mentorships, and community events, funded by your support.",
            icon: "🤝"
          },
          {
            title: "Creative Innovations",
            description: "Your generosity allows us to explore new technologies and creative solutions to real-world challenges.",
            icon: "💡"
          }
        ].map((impact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <div className="text-4xl mb-4">{impact.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{impact.title}</h3>
            <p className="text-gray-600 text-sm">{impact.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Your Impact by the Numbers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { number: "500+", label: "Workshops Hosted" },
            { number: "1,200+", label: "Individuals Trained" },
            { number: "$20K+", label: "Technology Invested" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
              className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition duration-300"
            >
              <h3 className="text-3xl font-bold text-purple-600">{stat.number}</h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6"
        >
          Every contribution matters. Help us continue providing exceptional services and expanding our impact.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Donate Now
        </motion.button>
      </div>
    </div>
  );
}
