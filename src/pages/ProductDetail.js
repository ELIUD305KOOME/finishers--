import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/products/${id}`);
        console.log(response)
        if (!response.ok) {
          throw new Error("Failed to fetch product details.");
        }
        const data = await response.json();
        setProduct(data);
        setSelectedImage(data.image_url); // Set the default image
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to load product details.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold">Loading product...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg font-bold">{error}</p>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="flex flex-col">
          <div className="border rounded-lg overflow-hidden">
            <img
              src={selectedImage || "https://via.placeholder.com/400"}
              alt={product.name}
              className="w-100 h-96 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex space-x-2 mt-2">
            {product.additional_images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index}`}
                className="w-20 h-20 object-cover border rounded-lg cursor-pointer hover:ring-2 hover:ring-indigo-500"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-teal-900 mb-4">
            {product.name}
          </h1>
          <p className="text-sm text-cyan-700 mb-4">{product.description}</p>
          <p className="text-xs text-teal-500 mb-4">
            <span className="font-semibold">Category:</span> {product.category_name}
            {product.subcategory_name && ` - ${product.subcategory_name}`}
          </p>
          <p className="text-xm font-bold text-pink-600 mb-6">
            Starts from -Ksh {product.price.toFixed(2)}
          </p>

          {/* Purchase Options */}
          <Link
            to={`/products/${product.id}/book`}
            className="w-full md:w-auto inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            <i className="bi bi-whatsapp text-sm"> </i>
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
