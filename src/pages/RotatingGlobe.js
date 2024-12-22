import React, { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "Laser Hair Removal",
    review: "Safe and effective treatment to remove unwanted hair, leaving your skin smooth and hair-free",
    rating: 5,
    backgroundImage:
      "https://vader-prod.s3.amazonaws.com/1680800282-mismon-ipl-642efa0788216.png",
  },
  {
    id: 2,
    name: "Fractional CO2 Laser",
    review: "Reduces wrinkles, fine lines, acne scars, and sun damage, rejuvenating your skin for a fresh look.",
    rating: 4.5,
    backgroundImage:
      "https://www.superlaser.com.cn/repository/image/418a603c-28dd-4e64-9bb2-11eb7a365ea3.png",
  },
  {
    id: 3,
    name: "Laser Tattoo Removal",
    review: "Breaks down tattoo ink pigments safely, gradually removing tattoos with each session.",
    rating: 4,
    backgroundImage:
      "https://images-cdn.ubuy.co.in/633b32328d95e412e1311228-inked-up-tattoo-removal-cream.jpg",
  },
  {
    id: 4,
    name: "Intense Pulsed Light (IPL)",
    review: "Improves skin tone by targeting sunspots, age spots, and redness, providing clearer skin.",
    rating: 5,
    backgroundImage:
      "https://silhouettebeauty.co.uk/wp-content/uploads/2021/12//IPL-400x400.png",
  },
  {
    id: 5,
    name: "Post-Treatment Soothing Gel",
    review: "Calms and cools your skin after laser treatments to reduce redness and irritation.",
    rating: 4.5,
    backgroundImage: "https://synergieskin.com/cdn/shop/files/Untitleddesign_17.webp?v=1712530464",
  },
  {
    id: 6,
    name: "SPF Protection Cream",
    review: "Provides daily UV protection to prevent pigmentation after laser skin treatments.",
    rating: 5,
    backgroundImage: "https://www.nbc.lk/storage/uploads/image/1_60cb0133d2ba7.png/medium/1_60cb0133d2ba7.png",
  },
  {
    id: 7,
    name: "Hydrating Serum",
    review: "Replenishes moisture and promotes healing after laser treatments.",
    rating: 4,
    backgroundImage: "https://www.barefaced.com/cdn/shop/files/HydratingSerum_Revision_PDP_df303650-72a5-4376-85d2-2409bbb51655.jpg?v=1706902300",
  },
  {
    id: 8,
    name: "Anti-Aging Night Cream",
    review: "Stimulates collagen production overnight, reducing fine lines and wrinkles.",
    rating: 5,
    backgroundImage: "https://suntribesunscreen.com/wp-content/uploads/2023/11/Anti-Aging-Night-Cream-Product-shots-Suntribe-Reef-safe-mineral-sunscreen-2.jpg",
  },
];

const Reviews = () => {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleReviewClick = (index) => {
    setActiveReview(index);
  };

  return (
    <div className="flex items-center justify-center bg-white-500 py-10">
      <div className="relative overflow-hidden w-full max-w-6xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${activeReview * 100}%)`,
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-full px-4 sm:px-6 lg:px-8"
            >
              <div
                className="relative rounded-md shadow-lg overflow-hidden h-48 sm:h-56 lg:h-64 flex items-end justify-center"
                style={{
                  backgroundImage: `url(${review.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="bg-white/70 w-full p-4 text-center rounded-b-md">
                  <h3 className="text-orange-800 font-semibold text-lg">
                    {review.name}
                  </h3>
                  <p className="text-gray-700 text-sm mt-1">{review.review}</p>
                  <div className="flex justify-center mt-2 text-yellow-400">
                    {Array.from({ length: Math.floor(review.rating) }).map(
                      (_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118L10 13.011l-3.376 2.455c-.784.57-1.84-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L3.63 9.397c-.783-.57-.381-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
                        </svg>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Dots */}
        <div className="flex justify-center mt-4">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => handleReviewClick(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === activeReview ? "bg-orange-700" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
