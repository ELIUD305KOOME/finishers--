import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product details from the backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/products/${id}`); // Proxy will handle the base URL
        if (!response.ok) {
          throw new Error("Failed to fetch product details.");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to load product details.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Render loading state
  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold">Loading product...</p>
      </div>
    );

  // Render error state
  if (error)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg font-bold">{error}</p>
      </div>
    );

  // Render product details
  return (
    <div className="max-w-4xl  mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="lg:text-3xl font-extrabold text-gray-900 mb-6">
        {product.name}
      </h1>
      <img
        src={product.image_url || "https://via.placeholder.com/150"}
        alt={product.name}
        // style={{ backgroundSize: 'contain',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundPosition: 'center', // This will center the background image
        //  }} 
        className="  object-cover mb-6 rounded-lg"
      />
      <p className="text-lg text-xs text-gray-700">{product.description}</p>
      
      <p className="text-sm text-gray-500 mt-2">
        Category: {product.category_name} - {product.subcategory_name}
      </p>
      <p className="text-blue-600 text-sm font-semibold mt-4 lg:text-xl">
        Ksh {product.price.toFixed(2)}
      </p>
      <Link
        to={`/products/${product.id}/book`}
        className="inline-block bg-green-500 text-white text-sm font-bold px-4 py-2 mt-6 rounded hover:bg-green-600 transition duration-200 text-center"
        aria-label="Book this product"
      >
       <i className="bi bi-whatsapp text-sm"></i>
      </Link>
    </div>
  );
};

export default ProductDetail;
