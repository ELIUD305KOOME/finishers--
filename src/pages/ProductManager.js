import React, { useState, useEffect } from 'react';

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category_name: '',
    subcategory_name: '',
    description: '',
    price: '',
    image_url: '',
  });
  const [searchQuery, setSearchQuery] = useState('');  // New state for search query

  const fetchProducts = async () => {
    try {
      const response = await fetch('/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = editProduct ? 'PUT' : 'POST';
      const url = editProduct ? `/products/${editProduct.id}` : '/products';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(editProduct ? 'Product updated successfully!' : 'Product added successfully!');
        fetchProducts();
        setEditProduct(null);
        setFormData({
          name: '',
          category_name: '',
          subcategory_name: '',
          description: '',
          price: '',
          image_url: '',
        });
      } else {
        alert('Failed to save product');
      }
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const response = await fetch(`/products/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          alert('Product deleted successfully!');
          fetchProducts();
        } else {
          console.error('Failed to delete product');
        }
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setFormData({
      name: product.name,
      category_name: product.category_name,
      subcategory_name: product.subcategory_name,
      description: product.description,
      price: product.price,
      image_url: product.image_url || '',
    });
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.subcategory_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-full mx-auto p-4 bg-gray-100 rounded-lg">
      <h1 className="text-sm sm:text-3xl font-bold text-gray-800 mb-6">Product Manager</h1>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Product Form */}
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow w-full sm:w-1/3">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            {editProduct ? 'Edit Product' : 'Add New Product'}
          </h2>
          <div className="space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Product Name"
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
              name="image_url"
              value={formData.image_url}
              onChange={handleInputChange}
              placeholder="Image URL (optional)"
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
            className="bg-blue-600 text-sm text-white px-4 py-2 mt-4 rounded hover:bg-blue-700 w-full"
          >
            {editProduct ? 'Update Product' : 'Add Product'}
          </button>
        </form>

        {/* Product List */}
        <div className="flex-1 bg-gray-100 p-4 rounded max-h-[70vh] overflow-y-auto">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Product List</h2>
          
          {/* Search Bar */}
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search Products"
            className="p-2 border rounded w-full mb-4 text-sm"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-200 p-4 rounded shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-sm text-gray-600">
                    {product.category_name} / {product.subcategory_name}
                  </p>
                  <p className="text-gray-700 mt-2 text-sm line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-gray-800 font-semibold mt-2">Ksh {product.price.toFixed(2)}</p>
                </div>
                {product.image_url && (
                  <div className="w-full h-40 mt-4">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                )}
                <div className="flex  text-sm justify-between mt-4">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
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

export default ProductManager;
