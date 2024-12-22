import React, { useState, useEffect } from 'react';
import LargeScreenContent from './LargeScreenContent';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    review: 'Fantastic service! Highly recommend.',
    rating: 5,
    backgroundImage: 'https://source.boomplaymusic.com/buzzgroup2/M00/3A/E6/rBEeJGL1bkuAYXL3AAIapW6ip3E165.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'Loved the atmosphere and professionalism.',
    rating: 4.5,
    backgroundImage: 'https://media6.ppl-media.com/mediafiles/blogs/beauty_112562aa86.jpg',
  },
  {
    id: 3,
    name: 'Michael Lee',
    review: 'Great experience! The results were amazing.',
    rating: 4,
    backgroundImage: 'https://dermavue.com/wp-content/uploads/2023/12/Laser-carbon-peel-2.jpg.webp',
  },
  {
    id: 4,
    name: 'Alice Brown',
    review: 'Top-notch experience. My hair has never looked better!',
    rating: 5,
    backgroundImage: 'https://tcbnaturals.com/kenya/blog/wp-content/uploads/2019/09/how_to_style_your_new_natural_hair_look.jpg',
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

  const getTranslateZ = () => {
    if (window.innerWidth >= 1024) return 300;
    if (window.innerWidth >= 640) return 200;
    return 150;
  };

  return (
    <div className="flex items-center justify-center relative lg:h-[70vh] bg-orange-500">
      {/* Black overlay with backdrop blur */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm z-0"></div>

      {/* LargeScreenContent */}
      <LargeScreenContent />

      {/* 3D Review Carousel */}
      <div className="relative w-48 h-48 perspective-1000 sm:w-64 sm:h-64 lg:w-96 lg:h-96 z-10">
        {reviews.map((review, index) => {
          const isActive = index === activeReview;
          const angle = (360 / reviews.length) * (index - activeReview);

          return (
            <div
              key={review.id}
              className={`absolute w-full h-full p-4 rounded-md shadow-md transform transition-transform duration-700 ease-in-out ${isActive ? 'z-20 scale-105' : 'z-10 scale-90'}`}
              style={{
                transform: `rotateY(${angle}deg) translateZ(${getTranslateZ()}px)`,
                backgroundImage: `url(${review.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              onClick={() => handleReviewClick(index)}
            >
              <div className="text-center bg-white/70 p-4 rounded-md">
                <h3 className="text-sm font-semibold text-orange-800 sm:text-base lg:text-lg">
                  {review.name}
                </h3>
                <p className="mt-1 text-xs text-gray-600 sm:text-sm lg:text-base">
                  {review.review}
                </p>
                <div className="mt-2 flex justify-center text-yellow-400">
                  {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118L10 13.011l-3.376 2.455c-.784.57-1.84-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L3.63 9.397c-.783-.57-.381-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
