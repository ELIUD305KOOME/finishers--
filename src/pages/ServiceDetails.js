import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams(); // Extract the service ID from the URL
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the service details from the backend
  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch(`/services/${id}`); // Proxy will handle the base URL
        if (!response.ok) {
          throw new Error("Failed to fetch service details.");
        }
        const data = await response.json();
        setService(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to load service details.");
        setLoading(false);
      }
    };

    fetchServiceDetails();
  }, [id]);

  // Render loading state
  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold">Loading service details...</p>
      </div>
    );

  // Render error state
  if (error)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg font-bold">{error}</p>
      </div>
    );

  // Render service details
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="border border-gray-200  shadow-md p-6">
        <img
          src={service.service_img || "https://via.placeholder.com/400"}
          alt={service.name}
          className="w-full h-64 object-cover  mb-6"
        />
        <h1 className="lg:text-3xl font-extrabold text-gray-900 mb-4">
          {service.name}
        </h1>

        <p className="text-gray-800 text-lg text-xs mb-4">{service.description || "No description available."}</p>
        <p className="text-gray-600 text-sm text-md mb-4">
          <strong>Category:</strong> {service.category_name || "Uncategorized"}
        </p>
        <p className="text-gray-600 text-sm text-md mb-4">
          <strong>Subcategory:</strong> {service.subcategory_name || "No subcategory"}
        </p>
        <p className="text-blue-600 text-sm font-semibold lg:text-xl mb-4">
          Ksh {service.price.toFixed(2)}
        </p>

        {/* Book Now Button */}
        <Link
          to={`/services/${service.id}/book`}
          className="inline-block bg-gradient-to-r from-green-400 to-green-500 text-white text-base font-semibold py-3 px-6 rounded-lg shadow-md hover:from-green-500 hover:to-green-600 hover:shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          <i className="bi bi-whatsapp text-sm"></i>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
