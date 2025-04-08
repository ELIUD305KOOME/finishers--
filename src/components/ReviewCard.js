// src/components/ReviewCard.js
import React from "react";

const ReviewCard = ({ name, review, rating, backgroundImage }) => {
  return (
    <div
      className="relative w-64 h-96 transform-style-preserve-3d animate-spin-slow"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Front Face */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg backface-hidden">
        <h2 className="text-2xl font-bold text-white">{name}</h2>
        <p className="text-xl text-yellow-500">{rating}</p>
        <p className="text-white text-center">{review}</p>
      </div>

      {/* Back Face
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 rounded-lg backface-hidden transform rotate-y-180">
        <p className="text-white">Behind the card content (optional).</p>
      </div> */}
    </div>
  );
};

export default ReviewCard;