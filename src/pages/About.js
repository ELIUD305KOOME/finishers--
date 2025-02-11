import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import Reviews from './recover';

const AboutUs = () => {

  useEffect(() => {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger); // Register the plugin

    // GSAP ScrollTrigger animation
    gsap.utils.toArray('.animate').forEach((elem) => {
      gsap.fromTo(elem, {
        opacity: 0,
        scale: 0.8,
        rotationX: 30,
      }, {
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elem,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        }
      });
    });

    // GSAP 3D animation for page scroll interaction
    gsap.to('.page-container', {
      rotationY: 15,
      transformOrigin: 'center center',
      ease: 'none',
      scrollTrigger: {
        trigger: '.page-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-gray-900 page-container">
      
      {/* Header Section */}
      <div className="relative bg-gradient-to-r  from-purple-600 via-indigo-500 to-blue-400 py-20 px-4 sm:px-6 lg:px-8 text-center text-white animate">
        <div className="max-w-7xl  mx-auto">
        <div className="mt-6 ml-4 flex -space-x-2 overflow-hidden">
            <img className="inline-block h-[20vh] w-[20vh] lg:h-[45vh] lg:w-[45vh] grayscale-0 hover:grayscale-[100%] rounded-full ring-2 ring-white" src="https://scontent.fnbo9-1.fna.fbcdn.net/v/t1.6435-9/161300556_2973421029540811_8038758810450998969_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeGyW4XQYUBXZfgaQd0zF2A83VI-7c7JiZndUj7tzsmJmaucqFBVSZ_94nD1c3J86TkYR_IpvX1gASGLte-E1Tog&_nc_ohc=C7grnQBAXckQ7kNvgGd_Pzg&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=AlU15eHoTagn5p-Okiobt8y&oh=00_AYDQMOv4z9fnDZsyzbMsaSxaBua6Qs8XYkBSRMJJQ6Qr7w&oe=678F6788" alt="" />
            {/* <img className="inline-block h-[15vh] w-[15vh] lg:h-[40vh] lg:w-[40vh] grayscale-0 hover:grayscale-[100%] rounded-full ring-2 ring-white" src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t1.6435-9/29261562_769120293277493_223519280723918848_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5bbf69&_nc_eui2=AeEiGkbPkgnb7RDrG4TiOcVqIJgG6Pw3vEsgmAbo_De8S4jM9vfFNF4eXOCYQEMQ85mvJTESNgwH9AqMgNQgA6sq&_nc_ohc=kq-V64akdlwQ7kNvgGNIPrD&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=AxEWuNL_7PXpG1LX9XVFtio&oh=00_AYCQ89ZvRklQzoFHvE8lc6lF9q87AHvAi9W--JKI9sbQTQ&oe=678F8C59" alt="" />
            <img className="inline-block h-[10vh] w-[10vh] lg:h-[30vh] lg:w-[30vh] grayscale-0 hover:grayscale-[100%] rounded-full ring-2 ring-white" src="https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/447875963_388719577553389_3354296193456504108_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeFL0geFUbaPrJQvL-5OmicVxmxipIVxN8fGbGKkhXE3x_PhnDPI6G4RmdXoMZXOmKYELjWiw-Eg95jQDhI32FI9&_nc_ohc=wN4arvboIlIQ7kNvgFhKRv6&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=A_VaOtJ9F25seggz-Qp7mKK&oh=00_AYDGmg3PMAgTkP993xxS0_HiW8Bd7cbzcKnt8uNFILCcaw&oe=676DCD0E" alt="" /> */}
            {/* <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
          </div>
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl mb-4 transition transform hover:scale-110 duration-500 ease-in-out">
            About Us
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl opacity-75 transition transform hover:translate-x-2 hover:opacity-100 duration-300">
            Discover who we are, what drives us, and the values that shape our journey.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-white shadow-xl rounded-lg mx-4 sm:mx-6 lg:mx-8 transition-transform hover:scale-105 duration-500 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8 transform hover:translate-y-2 transition-all">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 text-center leading-relaxed">
            At Solomons, we are passionate about creating exceptional grooming and skincare experiences. Our
            journey began with a vision to redefine beauty and self-care, blending innovation, precision, and luxury.
          </p>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 animate">
          <div className="hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600">
              To inspire confidence and self-expression by delivering premium grooming and skincare solutions tailored to
              individual needs. We strive to make every customer feel valued, empowered, and at their best.
            </p>
          </div>
          <div className="hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
            <ul className="list-disc list-inside text-lg text-gray-600">
              <li>Excellence in craftsmanship and service</li>
              <li>Commitment to sustainability and eco-friendly practices</li>
              <li>Innovation in grooming and skincare solutions</li>
              <li>Building trust through transparency and quality</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate">
          {/* <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Our</h2> */}
          
          <Reviews />
        </div>
      </section>

      { }
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Difference?</h2>
          <p className="mt-4 text-lg text-indigo-200 mb-6">
            Join us on our journey to redefine grooming and skincare. Discover our services and products today.
          </p>
          <a
            href="/services"
            className="mt-6 inline-block bg-white text-indigo-600 font-medium py-3 px-6 rounded-lg shadow-xl hover:bg-indigo-100 transition-all transform hover:scale-105 duration-300 ease-in-out"
          >
            Explore Our Services
          </a>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
