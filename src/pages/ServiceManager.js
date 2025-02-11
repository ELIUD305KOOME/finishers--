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
    before_service_image: '',
    after_service_image: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [imageInputType, setImageInputType] = useState('url');

  const fetchServices = async () => {
    try {
      const response = await fetch('/services');
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
    setSearchTerm(e.target.value);
  };

  const handleImageInputChange = (e) => {
    const { name } = e.target;
    if (imageInputType === 'url') {
      setFormData({ ...formData, [name]: e.target.value });
    } else if (imageInputType === 'file') {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setFormData({ ...formData, [name]: reader.result });
        };
        reader.readAsDataURL(file);
      }
    }
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
          before_service_image: '',
          after_service_image: '',
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
      before_service_image: service.before_service_image || '',
      after_service_image: service.after_service_image || '',
    });
    setImageInputType(service.before_service_image || service.after_service_image ? 'url' : 'file');
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.subcategory_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full mx-auto p-4 bg-gray-100 rounded-lg h-auto sm:h-[85vh] flex flex-col">
      <h1 className="text-sm font-bold text-gray-800 mb-4">Service Manager</h1>

      <div className="flex flex-col sm:flex-row gap-6">
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
            <div className="flex items-center gap-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="imageInputType"
                  value="url"
                  checked={imageInputType === 'url'}
                  onChange={() => setImageInputType('url')}
                />
                <span className="ml-2 text-sm">URL</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="imageInputType"
                  value="file"
                  checked={imageInputType === 'file'}
                  onChange={() => setImageInputType('file')}
                />
                <span className="ml-2 text-sm">File</span>
              </label>
            </div>
            {imageInputType === 'url' ? (
              <>
                <input
                  type="text"
                  name="before_service_image"
                  value={formData.before_service_image}
                  onChange={handleImageInputChange}
                  placeholder="Before Service Image URL"
                  className="p-2 border rounded w-full text-sm"
                />
                <input
                  type="text"
                  name="after_service_image"
                  value={formData.after_service_image}
                  onChange={handleImageInputChange}
                  placeholder="After Service Image URL"
                  className="p-2 border rounded w-full text-sm"
                />
              </>
            ) : (
              <>
                <input
                  type="file"
                  name="before_service_image"
                  onChange={handleImageInputChange}
                  className="p-2 border rounded w-full text-sm"
                />
                <input
                  type="file"
                  name="after_service_image"
                  onChange={handleImageInputChange}
                  className="p-2 border rounded w-full text-sm"
                />
              </>
            )}
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
        <div className="flex-1 bg-gray-100 p-4 rounded overflow-y-auto max-h-[70vh] sm:max-h-[60vh]">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Service List</h2>
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
                className="relative bg-gray-50 rounded shadow overflow-hidden group"
              >
                <div className="w-full h-48 relative">
                  {/* Before Image */}
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${service.before_service_image || ''})`,
                    }}
                  ></div>
                  {/* After Image */}
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundImage: `url(${service.after_service_image || ''})`,
                    }}
                  ></div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black to-transparent p-4 rounded">
                  <h3 className="text-lg font-bold text-white">{service.name}</h3>
                  <p className="text-sm text-gray-300">
                    {service.category_name} / {service.subcategory_name}
                  </p>
                  <p className="text-gray-200 mt-2 text-sm line-clamp-3">
                    {service.description.length > 100
                      ? `${service.description.substring(0, 100)}...`
                      : service.description}
                  </p>
                  <p className="text-gray-200 font-semibold mt-2">
                    Ksh {service.price.toFixed(2)}
                  </p>
                </div>
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


