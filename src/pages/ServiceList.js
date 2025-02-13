import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch services from the backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/services`);
        if (!response.ok) {
          throw new Error("Failed to fetch services.");
        }
        const data = await response.json();
        setServices(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to load services.");
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 mx-auto"></div>
        <p className="text-lg text-gray-700 mt-4">Loading...</p>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg font-bold">{error}</p>
      </div>
    );
  }

  // Render services list
  return (
    <div className="relative max-w-full mx-auto bg-orange-500 py-8 px-4 sm:px-6 lg:px-8">
      {/* Black overlay with backdrop blur */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm z-0"></div>

      <h1 className="lg:text-2xl text-sm text-shadow-md font-extrabold text-indigo-50 mb-6 z-10 relative">
        Featured Services
      </h1>

      <div className="grid grid-cols-2 sm:h-full sm:grid-cols-3 h-full md:grid-cols-4 lg:grid-cols-4 gap-4 z-10 relative">
        {services.slice(0, 6).map((service) => (
          <div
            key={service.id}
            className="relative w-full h-48 lg:h-[40vh]   shadow-lg shadow-black overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 group"
          >
            {/* Image */}
            <Link to={`/services/${service.id}`}>
              <div className="w-full h-full relative">
                {/* Before Image */}
                <div
                  className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${service.before_service_image || ""})`,
                  }}
                ></div>
                {/* After Image */}
                <div
                  className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${service.after_service_image || ""})`,
                  }}
                ></div>
              </div>
            </Link>

            {/* Availability Banner */}
            <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg">
              Available
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-green-800 to-transparent p-2">
              <h2 className="text-white text-xs font-semibold truncate">{service.name}</h2>
              <p className="text-white text-xs mt-1">Starts -Ksh{service.price.toFixed(2)}</p>
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

      <div className="mt-6 ">
        <Link
          to="/services"
          className="text-indigo-100 text-xs shadow-md shadow-blue-500 rounded bg-gradient-to-r from-green-800 mb-6 z-10 relative md:text-2xl lg:text-2xl text-md underline-none hover:text-red-600"
        >
          View All Services
        </Link>
      </div>
    </div>
  );
};

export default ServiceList;
