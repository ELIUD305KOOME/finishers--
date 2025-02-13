import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State to manage search query

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products");
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

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    <div className="relative max-w-full mx-auto   py-8 px-4 sm:px-6 lg:px-8"
    style={{
      backgroundImage: "url('https://img.freepik.com/premium-photo/grooming-salon-14_975681-234403.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  >
      {/* Black overlay with backdrop blur */}
      {/* <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md z-0"></div> */}

      <h1 className="lg:text-2xl lg:ml-[10%] lg:mr-[10%] text-sm font-extrabold text-indigo-100 mb-6 z-10 relative">
        Featured Products
      </h1>

      {/* Search bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className=" py-2 px-4   lg:ml-[10%] lg:mr-[10%] border-none bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-none focus:ring-none "
        />
      </div>

      {/* Display products in a responsive grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:ml-[10%] border-t border-green-700 pt-4 text-center lg:mr-[10%] lg:mt-[25vh] md:grid-cols-4 lg:grid-cols-6 gap-1 z-10 relative">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            
            <div
              key={product.id}
              className="relative w-full h-[30vh] rounded-lg  overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 z-10"
            >
              {/* Image Cover */}
              <Link to={`/products/${product.id}`}>
              

                <img
                  src={`data:image/jpeg;base64,${product.image_url}` || "https://via.placeholder.com/300"}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale-0 hover:grayscale-[100%]"
                />
              </Link>

              

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-green-400 to-transparent p-2">
                <h2 className="text-pink-800 text-sm font-semibold truncate">{product.name}</h2>
              </div>

              {/* Book Now Button */}
              <div className="absolute bottom-0.5 right-0.5 lg:top-0.5 lg:right-0.5 z-10">
                <Link
                  to={`/products/${product.id}/book`}
                  className="bg-green-500 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-green-600 transition duration-200 flex items-center gap-2"
                >
                  <i className="bi bi-whatsapp"></i>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-center col-span-8">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
