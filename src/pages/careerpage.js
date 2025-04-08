import React from "react";
import { motion } from "framer-motion";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500"
        >
          Join Our Team – Employment Opportunities
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg mt-4 opacity-80 text-gray-700"
        >
          Looking for a job? Explore open positions and career growth at <span className="font-semibold text-blue-600">Emur-Tech</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-md mt-6 text-gray-700 leading-relaxed"
        >
          <span className="font-semibold">Development Specialist | Trader | Medical Biller & Coder | Prompt Engineer | Graphic Designer</span>
          <br /><br />
          At Emur-Tech, we design engaging posters and cards, set up targeted marketing campaigns through Business Suite and other platforms, and build websites — from basic static pages to dynamic, fully functional web solutions.
          <br /><br />
          As a Junior Expert Advisor & Indicator Developer, we specialize in creating trading bots, custom indicators, and automation tools tailored for traders and businesses. Our diverse skill set spans software development, trading systems, AI prompt engineering, medical billing/coding, and digital marketing strategy.
        </motion.p>
      </div>

      {/* Open Positions Section */}
      <div className="max-w-4xl mx-auto mt-10">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Open Positions
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Frontend Developer",
              description: "Build responsive user interfaces using React and TailwindCSS."
            },
            {
              title: "Backend Developer",
              description: "Work with Flask, Node.js, and databases to power our applications."
            },
            {
              title: "Graphic Designer",
              description: "Design posters, cards, and visual assets for digital marketing campaigns."
            },
            {
              title: "Prompt Engineer",
              description: "Develop and optimize AI prompts for efficient and intelligent automation."
            },
            {
              title: "Medical Biller & Coder",
              description: "Manage medical billing, coding, and insurance claim processes accurately."
            },
            {
              title: "Trading Bots Developer",
              description: "Create custom bots, indicators, and automation tools for financial trading."
            },
            {
              title: "AI Engineer",
              description: "Design and develop intelligent systems for business and creative automation."
            },
            {
              title: "Full Stack Developer",
              description: "Build and maintain scalable full-stack web applications."
            },
            {
              title: "Social Media Marketer",
              description: "Manage social media platforms, campaigns, and digital engagement strategies."
            },
            {
              title: "Digital Product Manager",
              description: "Oversee product development, roadmaps, and user-centric design processes."
            }
          ].map((position, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{position.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{position.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-gray-700 text-base mb-4">
          Don't see a position that fits? We’re always looking for talented individuals. Submit your resume and we’ll be in touch!
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Submit Resume
        </button>
      </div>
    </div>
  );
}
