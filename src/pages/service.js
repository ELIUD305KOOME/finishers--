import React, { useEffect, useState } from "react";

const ServiceList = ({ searchQuery }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg font-bold">{error}</p>
      </div>
    );
  }

  // Filter services based on the search query
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-cyan-300 rounded-b-none rounded-xl py-4 px-2">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-10">
        {filteredServices.length ? " " : " "}
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({ service }) => {
  const imageUrl =
    service.service_image ||
    "https://via.placeholder.com/400x200?text=Service+Image";

  return (
    <div className="relative flex w-full max-w-sm flex-col rounded-none bg-blue-100 text-gray-700 shadow-md border-2 border-rose-200">
      <div
        className="relative mx-4 -mt-6 h-40 overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="p-6">
        <h5 className="mb-2 text-sm font-semibold text-pink-900">
          {service.name}
        </h5>
        <p className="text-xs font-light text-cyan-600">
          {service.description?.slice(0, 150) ||
            "Premium service at your convenience..."}
        </p>
        <p className="text-sm font-semibold text-green-600">
          From Ksh {service.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ServiceList;
