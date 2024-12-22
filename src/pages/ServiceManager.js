import React, { useState, useEffect } from 'react';

const ServiceManager = () => {
  const [services, setServices] = useState([]);
  const [editService, setEditService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category_name: '',
    subcategory_name: '',
    description: '',
    price: '',
    service_img: '',
  });
  const [searchTerm, setSearchTerm] = useState(''); // New state for the search term

  const fetchServices = async () => {
    try {
      const response = await fetch('/services'); // Proxy will prepend the backend URL
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      } else {
        console.error('Failed to fetch services');
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update the search term state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = editService ? 'PUT' : 'POST';
      const url = editService ? `/services/${editService.id}` : '/services';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(editService ? 'Service updated successfully!' : 'Service added successfully!');
        fetchServices();
        setEditService(null);
        setFormData({
          name: '',
          category_name: '',
          subcategory_name: '',
          description: '',
          price: '',
          service_img: '',
        });
      } else {
        alert('Failed to save service');
      }
    } catch (error) {
      console.error('Error saving service:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        const response = await fetch(`/services/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          alert('Service deleted successfully!');
          fetchServices();
        } else {
          console.error('Failed to delete service');
        }
      } catch (error) {
        console.error('Error deleting service:', error);
      }
    }
  };

  const handleEdit = (service) => {
    setEditService(service);
    setFormData({
      name: service.name,
      category_name: service.category_name,
      subcategory_name: service.subcategory_name,
      description: service.description,
      price: service.price,
      service_img: service.service_img || '',
    });
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Filter services based on the search term
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.subcategory_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full  mx-auto p-4 bg-gray-100 rounded-lg h-auto  sm:h-[85vh] flex flex-col">
      <h1 className="text-sm font-bold text-gray-800 mb-4">Service Manager</h1>

      

      {/* Two-Column Layout */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Service Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded shadow w-full sm:w-80 md:w-96 mx-auto sm:mx-0"
        >
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            {editService ? 'Edit Service' : 'Add New Service'}
          </h2>
          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Service Name"
              className="p-2 border rounded w-full text-sm"
              required
            />
            <input
              type="text"
              name="category_name"
              value={formData.category_name}
              onChange={handleInputChange}
              placeholder="Category Name"
              className="p-2 border rounded w-full text-sm"
              required
            />
            <input
              type="text"
              name="subcategory_name"
              value={formData.subcategory_name}
              onChange={handleInputChange}
              placeholder="Subcategory Name"
              className="p-2 border rounded w-full text-sm"
              required
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Price"
              className="p-2 border rounded w-full text-sm"
              required
            />
            <input
              type="text"
              name="service_img"
              value={formData.service_img}
              onChange={handleInputChange}
              placeholder="Service Image URL (optional)"
              className="p-2 border rounded w-full text-sm"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="p-2 border rounded w-full text-sm"
              rows="3"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-sm text-white px-4 py-2 mt-4 rounded hover:bg-blue-700 text-sm w-full"
          >
            {editService ? 'Update Service' : 'Add Service'}
          </button>
        </form>

        {/* Service List */}
        <div className="flex-1 bg-gray-100 p-4 rounded overflow-y-auto max-h-[70vh] sm:max-h-[60vh]">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Service List</h2>
          {/* Search Bar */}
          <div className="mb-4 w-full">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search services..."
              className="p-2 border rounded w-full sm:w-80 text-sm"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="relative bg-gray-50 rounded shadow overflow-hidden"
              >
                {/* Service Image */}
                {service.service_img && (
                  <img
                    src={service.service_img}
                    alt={service.name}
                    className="w-full h-48 object-cover" // Image fills the card
                  />
                )}

                {/* Service Content */}
                <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black to-transparent p-4 rounded">
                  <h3 className="text-lg font-bold text-white">{service.name}</h3>
                  <p className="text-sm text-gray-300">{service.category_name} / {service.subcategory_name}</p>
                  <p className="text-gray-200 mt-2 text-sm line-clamp-3">
                    {service.description.length > 100
                      ? `${service.description.substring(0, 100)}...`
                      : service.description}
                  </p>
                  <p className="text-gray-200 font-semibold mt-2">
                    Ksh{service.price.toFixed(2)}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => handleEdit(service)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceManager;
