import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams(); // Extract the service ID from the URL
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

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
        setSelectedImage(data.before_service_image || data.after_service_image);
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
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mb-4"></div>
          <p className="text-xl font-semibold text-gray-600">
            Loading service details...
          </p>
        </div>
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
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="p-6">
          {/* Large Main Image with Zoom */}
          <div className="relative group">
            <img
              src={selectedImage || "https://via.placeholder.com/400"}
              alt="Service"
              className="w-full h-full max-h-[400px] object-cover rounded-lg shadow-md transform transition-transform duration-300 group-hover:scale-105 cursor-zoom-in"
            />
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex gap-4 mt-4 justify-center">
            {/* Before Thumbnail */}
            {service.before_service_image && (
              <img
                src={service.before_service_image}
                alt="Before"
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                  selectedImage === service.before_service_image
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(service.before_service_image)}
              />
            )}

            {/* After Thumbnail */}
            {service.after_service_image && (
              <img
                src={service.after_service_image}
                alt="After"
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                  selectedImage === service.after_service_image
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(service.after_service_image)}
              />
            )}
          </div>
        </div>

        {/* Details Section */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-teal-900 mb-4">
              {service.name}
            </h1>
            <p className="text-cyan-500 text-base lg:text-xm mb-6">
              {service.description || "No description available."}
            </p>
            <div className="mb-4">
              <p className="text-xs text-teal-500">
                <strong>Category:</strong> {service.category_name || "Uncategorized"}
              </p>
              <p className="text-xs text-teal-500">
                <strong>Subcategory:</strong> {service.subcategory_name || "No subcategory"}
              </p>
            </div>
            <p className="text-xm font-bold text-pink-600 mb-6">
              Starts From - Ksh {service.price.toFixed(2)}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              to={`/services/${service.id}/book`}
              className="bg-green-500 text-white text-base font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
               <i className="bi bi-whatsapp text-sm"> </i>
              Book Now
            </Link>
            <Link
              to="/services"
              className="text-blue-600 font-semibold text-base underline hover:text-blue-800 transition"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
