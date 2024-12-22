import { useState } from 'react';

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-yellow-500 text-black text-center py-4 lg:w-full px-6 fixed top-0 left-0  z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span role="img" aria-label="celebration" className="text-xl">🎉</span>
          <p className="text-lg font-semibold">
            Special Offer! Get 20% Off on all services this holiday season!
          </p>
        </div>
        <button onClick={handleClose} className="text-black font-bold text-lg hover:text-gray-700">
          ✖
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
