import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products");
        console.log(response)
        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }
        const data = await response.json();
        setProducts(data); // Display all products
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to load products.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Render loading state
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

  // Render products list
  return (
    <div className="relative max-w-full mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-orange-500">
      {/* Black overlay with backdrop blur */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md z-0"></div>

      <h1 className="lg:text-2xl text-sm font-extrabold text-indigo-100 mb-6 z-10 relative">
        Featured Products
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 z-10 relative">
        console.log(product)
        {products.slice(0, 6).map((product) => (
          <div key={product.id} className="relative w-full h-48  shadow-lg shadow-black overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 z-10">
            {/* Image Cover */}
            <Link to={`/products/${product.id}`}>
              <img
                 src={`data:image/jpeg;base64,${product.image_url}` || "https://via.placeholder.com/300"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </Link>

            {/* Availability Banner */}
            <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md">
              Available
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-green-600 to-transparent p-2">
              <h2 className="text-blue-700 text-sm font-semibold truncate">{product.name}</h2>
              <p className="text-white text-xs mt-1">Ksh{product.price.toFixed(2)}</p>
            </div>

            {/* Book Now Button */}
            <Link
              to={`/products/${product.id}/book`}  // Redirects to the product booking page
              className="absolute bottom-2 right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded hover:bg-green-600 transition duration-200"
            >
              <i className="bi bi-whatsapp text-sm"></i>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-6 text-indigo-100 ">
        <Link
          to="/products"
          className="text-indigo-100 text-xs shadow-md shadow-blue-500 rounded bg-gradient-to-r from-blue-800 mb-6 z-10 relative md:text-2xl lg:text-2xl text-md underline-none hover:text-red-600"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
