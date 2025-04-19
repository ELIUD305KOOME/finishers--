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
    service_image: '',
   
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [imageInputType, setImageInputType] = useState('url');

  const fetchServices = async () => {
    try {
      const response = await fetch(`/services`);
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
      const url = editService ? `/services/${editService.id}` : `/services`;

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
          service_image: '',
         
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
      service_image: service.service_image || '',
      
    });
    setImageInputType(service.service_image  ? 'url' : 'file');
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
    <div className="w-full mx-auto p-4 bg-cyan-100 rounded-lg h-auto sm:h-[85vh] flex flex-col">
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
                  value={formData.service_image}
                  onChange={handleImageInputChange}
                  placeholder="Before Service Image URL"
                  className="p-2 border rounded w-full text-sm"
                />
              </>
            ) : (
              <>
                <input
                  type="file"
                  name="service_image"
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
        <div className="flex-1 bg-cyan-100 p-4 rounded overflow-y-auto max-h-[70vh] sm:max-h-[60vh]">
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
          <div className="grid grid-cols-1 gap-6">
  {filteredServices.map((service) => (
    <div
      key={service.id}
      className="flex bg-cyan-200  shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image Left Side */}
      <div className="w-1/3 min-w-[150px] relative">
        <div
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${service.service_image || ''})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition duration-300"></div>
        </div>
      </div>

      {/* Content Right Side */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
          <p className="text-sm text-gray-500 mt-1">
            {service.category_name} / {service.subcategory_name}
          </p>
          <p className="text-gray-600 mt-2 text-sm line-clamp-3">
            {service.description.length > 100
              ? `${service.description.substring(0, 100)}...`
              : service.description}
          </p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold text-green-600">
            Ksh {service.price.toFixed(2)}
          </p>

          <div className="flex space-x-2">
            <button
              onClick={() => handleEdit(service)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm transition"
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => handleDelete(service.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
            >
              🗑️ Delete
            </button>
          </div>
        </div>
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