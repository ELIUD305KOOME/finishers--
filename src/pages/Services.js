import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch services from the backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/services");
        if (!response.ok) {
          throw new Error("Failed to fetch services.");
        }
        const data = await response.json();
        setServices(data);
        setFilteredServices(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to load services.");
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // useEffect(() => {
  //     // Register ScrollTrigger with GSAP
  //     gsap.registerPlugin(ScrollTrigger); // Register the plugin
  
  //     // GSAP ScrollTrigger animation
  //     gsap.utils.toArray('.animate').forEach((elem) => {
  //       gsap.fromTo(elem, {
  //         opacity: 0,
  //         scale: 0.8,
  //         rotationX: 30,
  //       }, {
  //         opacity: 1,
  //         scale: 1,
  //         rotationX: 0,
  //         duration: 1,
  //         ease: 'power3.out',
  //         scrollTrigger: {
  //           trigger: elem,
  //           start: 'top 80%',
  //           end: 'bottom 20%',
  //           scrub: true,
  //         }
  //       });
  //     });
  
  //     // GSAP 3D animation for page scroll interaction
  //     gsap.to('.page-container', {
  //       rotationY: 15,
  //       transformOrigin: 'center center',
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: '.page-container',
  //         start: 'top top',
  //         end: 'bottom bottom',
  //         scrub: 1,
  //       }
  //     });
  //     }, []);

  // Handle search query input
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setFilteredServices(services); // If no search query, show all services
    } else {
      const filtered = services.filter((service) =>
        service.name.toLowerCase().includes(query)
      );
      setFilteredServices(filtered);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 mx-auto"></div>
        <p className="text-lg text-gray-700 mt-4">Loading...</p>
      </div>
    );
  }

  // Render error state
  if (error)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg font-bold">{error}</p>
      </div>
    );

  // Render services list
  return (
    <div className="relative h-[90%] max-w-full mx-auto   py-8 px-4  sm:px-6 lg:px-8"
    style={{
      backgroundImage: "url('https://img.freepik.com/premium-photo/grooming-salon-14_975681-234403.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  >
      {/* Black overlay with backdrop blur */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm z-0"></div>
      {/* <div
        className=" h-full mb-2 flex items-center justify-center px-4 py-8 sm:py-16 relative"
        > */}
        {/* Section Header */}
        <h1 className="lg:text-2xl lg:ml-[10%] lg:mr-[10%] text-sm font-extrabold text-indigo-100 mb-6 z-10 relative">
          Featured Services
        </h1>

        {/* Search Bar */}
        <div className="mb-6 relative  flex ">
          <input
            type="text"
            placeholder="Search for services..."
            value={searchQuery}
            onChange={handleSearch}
            className="py-2 px-4   lg:ml-[10%] lg:mr-[10%] border-none bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-none focus:ring-none"
          />
        </div>
      


      <div className="grid grid-cols-2 sm:grid-cols-3 lg:mt-[20vh] lg:ml-[10%]  overflow-y-auto lg:mr-[10%] border-t border-green-800 pt-4 text-center justify-center lg:mt-20 md:grid-cols-6 lg:grid-cols-3 gap-1 z-10 relative">
        {/* Render filtered services */}
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="relative     h-[30vh] lg:h-[40vh]  rounded-lg  justify-center overflow-hidden shadow-lg hover:shadow-2xl transition-shadow-200 duration-300"
          >
            {/* Image */}
            <Link to={`/services/${service.id}`}>
              <img
                src={service.service_img || "https://via.placeholder.com/300"}
                alt={service.name}
                className="w-full h-full justify-center object-cover grayscale-0 hover:grayscale-[100%]"
              />
            </Link>

            

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-green-800 to-transparent p-2">
              <h2 className="text-white text-xs font-semibold truncate">{service.name}</h2>
              {/* <p className="text-gray-50 text-xs mt-1">
                Ksh{service.price.toFixed(2)}
              </p> */}
            </div>

            {/* Book Now Button */}
            <Link
              to={`/services/${service.id}/book`}
              className="absolute bottom-2 right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded hover:bg-green-600 transition duration-200"
            >
              <i className="bi bi-whatsapp text-sm"></i>
            </Link>
          </div>
        ))}
      </div>
      </div>
    
  );
};

export default ServiceList;
