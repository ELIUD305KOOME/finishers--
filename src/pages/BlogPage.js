import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "How emur Enhances Customer Support",
      description: "Learn how emur ensures top-notch customer service through fast response times and expert assistance.",
      date: "Feb 28, 2025",
      link: "/blog/customer-support",
      
    },
    {
      title: "Join Our Team – Employment Opportunities",
      description: "Looking for a job? Explore open positions and career growth at emur.",
      date: "Feb 25, 2025",
      link: "/blog/employment-opportunities",
      
    },
    {
      title: "How Your Donations Help Us Grow",
      description: "See how your contributions support our mission in providing excellent services.",
      date: "Feb 20, 2025",
      link: "/blog/donations-impact",
      
    },
    {
      title: "Mental Health Awareness in the Workplace",
      description: "Understanding the importance of mental well-being for employees and how emur supports a healthy work environment.",
      date: "Feb 15, 2025",
      link: "/blog/mental-health-awareness",
      
    },
    {
      title: "Cybersecurity: Protecting Your Data Online",
      description: "Tips and insights on keeping your personal and business data secure in the digital age.",
      date: "Feb 10, 2025",
      link: "/blog/cybersecurity-tips",
      
    },
    {
      title: "The Impact of AI on Job Markets",
      description: "How artificial intelligence is transforming employment opportunities and the future of work.",
      date: "Feb 5, 2025",
      link: "/blog/ai-job-market",
     
    },
    {
      title: "emur’s Expertise in Website Development",
      description: "Discover how emur creates fast, user-friendly websites that enhance business presence online.",
      date: "Jan 30, 2025",
      link: "/blog/website-development",
      
    },
    {
      title: "Digital Marketing Strategies that Drive Results",
      description: "Learn how emur helps businesses increase leads and conversions through top-tier marketing strategies.",
      date: "Jan 25, 2025",
      link: "/blog/digital-marketing-strategies",
    },
    {
      title: "E-commerce Success with emur’s Solutions",
      description: "Tailored solutions that optimize e-commerce platforms for better customer experience and sales growth.",
      date: "Jan 20, 2025",
      link: "/blog/ecommerce-success",
      
    },
    {
      title: "Depi Estates: Real Estate Investment Insights",
      description: "Explore lucrative real estate opportunities and investment strategies with Depi Estates.",
      date: "Jan 15, 2025",
      link: "/blog/depi-estates",
      
    },
    {
      title: "LEMCO Insurance: Secure Your Future Today",
      description: "Understand the benefits of choosing LEMCO Insurance for comprehensive coverage and financial security.",
      date: "Jan 10, 2025",
      link: "/blog/lemco-insurance",
      
    },
    {
      title: "El-Wood emur: Business Growth Solutions",
      description: "How El-Wood emur empowers businesses with innovative solutions and strategic growth planning.",
      date: "Jan 5, 2025",
      link: "/blog/elwood-emur",
      
    },
    {
      title: "Prudential Insurance: Smart Insurance for a Secure Life",
      description: "Discover why Prudential Insurance is a top choice for individuals and businesses seeking reliable coverage.",
      date: "Jan 1, 2025",
      link: "/blog/prudential-insurance",
      
    }
  ];

  return (
    <div 
      className="min-h-screen bg-gray-900 text-white relative overflow-hidden"
      style={{ backgroundImage: "url('/mekoli.jpeg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
    >
      {/* Hero Section */}
      <section className="relative py-20 text-center bg-black bg-opacity-50">
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="absolute fixed w-[450px] h-[150px] bg-gradient-to-br from-rose-900 to-rose-200 opacity-30 transform -skew-y-[20deg] -translate-y-4"></div>
          <div className="absolute fixed w-[450px] h-[150px] bg-gradient-to-br from-rose-900 to-rose-200 opacity-30 transform -skew-y-[20deg] -translate-y-4"></div>
          <div className="absolute fixed w-[450px] h-[150px] bg-gradient-to-br from-rose-900 to-rose-200 opacity-30 transform -skew-y-[20deg] -translate-y-4"></div>
          <div className="absolute fixed w-[450px] h-[150px] bg-gradient-to-br from-rose-900 to-rose-200 opacity-30 transform -skew-y-[20deg] -translate-y-4"></div>
          <h1 className="relative fixed text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 z-10">
            emur
          </h1>

          <p className="text-lg mt-4 fixed text-gray-300 max-w-xl leading-relaxed z-10 relative">
            Stay updated with our latest news, services, and employment opportunities.
          </p>
        </motion.div>
      </section>

      {/* Blog Posts */}
      <div className="max-w-6xl mx-auto px-6 py-12 bg-opaque bg-opacity-50">
        <h2 className="text-3xl font-semibold text-center mb-8"></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-transparent p-6 shadow-lg rounded-xl border border-blue-400 hover:scale-105 transition transform duration-300"
            >
              {/* <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-md mb-4" /> */}
              <h3 className="text-xl font-semibold text-blue-400">{post.title}</h3>
              <p className="text-gray-800 mt-2">{post.description}</p>
              <p className="text-sm text-gray-500 mt-3">{post.date}</p>
              <Link to={post.link} className="text-blue-400 mt-3 block font-semibold hover:underline">
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
