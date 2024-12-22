import React, { useState, useEffect } from 'react';

const LargeScreenContent = () => {
  // Array of random ads or content with images
  const ads = [
    {
      id: 1,
      title: "Buy One Get One Free!",
      description: "Limited time offer on all products!",
      image: "https://media.glamour.com/photos/63fcd6a282c1c3ecc0c5595b/4:3/w_2664,h_1998,c_limit/best%20hyperpigmentation%20products.jpg", // Example image
      link: "#"
    },
    {
      id: 2,
      title: "50% Off All Items!",
      description: "Hurry, don't miss out on amazing discounts.",
      image: "https://hips.hearstapps.com/hmg-prod/images/gh-best-dark-spot-correctors-65f9b34b0e908.png?crop=0.468xw:0.936xh;0.269xw,0.0192xh&resize=640:*", // Example image
      link: "#"
    },
    {
      id: 3,
      title: "Free Shipping on Orders Over $50",
      description: "Shop now and get free shipping on orders above $50.",
      image: "https://media.glamour.com/photos/63fcd6a282c1c3ecc0c5595b/4:3/w_2664,h_1998,c_limit/best%20hyperpigmentation%20products.jpg", // Example image
      link: "#"
    },
    {
      id: 4,
      title: "New Arrivals!",
      description: "Check out the latest products in our store.",
      image: "https://hips.hearstapps.com/hmg-prod/images/dark-spot-corrector-1675460513.png", // Example image
      link: "#"
    }
  ];

  // State for randomly selected ad
  const [randomAd, setRandomAd] = useState(null);

  // Function to get a random ad
  const getRandomAd = () => {
    const randomIndex = Math.floor(Math.random() * ads.length);
    setRandomAd(ads[randomIndex]);
  };

  // Use useEffect to select a random ad every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      getRandomAd(); // Change the ad every second
    }, 1000);

    // Cleanup interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this only runs once when the component mounts

  return (
    <div className="flex items-center bg-transparent lg:flex-row lg:space-x-8">
      {/* 3D content (always visible, fixed position) */}
      <div className="absolute top-0 left-0 w-40 h-full bg-transparent  transform transition-all lg:w-80 lg:h-full lg:top-10 lg:left-10">
        {/* <p className="text-center">3D Content</p> */}
        <div className="hidden lg:block lg:ml-0 lg:relative lg:mt-10">
          {randomAd ? (
            <div className="bg-gray-100 p-4  flex items-center space-x-4">
              <img 
                src={randomAd.image} 
                alt={randomAd.title} 
                className="w-24 h-16 object-cover rounded" 
              />
              <div>
                <h1 className="text-xl font-bold">{randomAd.title}</h1>
                <p className="mt-2">{randomAd.description}</p>
                <a
                  href={randomAd.link}
                  className="mt-4 inline-block text-blue-600 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <p className="hidden lg:block text-indigo-100">Laser treatments provide more immediate and targeted solutions for skin concerns like pigmentation, scars, and wrinkles. Procedures like fractional laser and IPL stimulate collagen production and can offer faster, more noticeable results. Many people combine skincare products with laser treatments for a comprehensive approach to skin rejuvenation.</p>
      </div>

      <div className="absolute top-0 right-0 w-40 h-full bg-transparent transform transition-all lg:w-80 lg:h-full lg:top-10 lg:right-10">
        <p className="hidden lg:block text-indigo-100">Skincare products are essential for maintaining healthy skin by addressing concerns like acne, dryness, and aging. Ingredients such as retinol, vitamin C, and hyaluronic acid help improve texture, hydration, and brightness over time. While these products offer gradual results, they may not be enough for more stubborn issues.</p>
        <div className="hidden lg:block lg:ml-0 lg:relative lg:mt-10">
          {randomAd ? (
            <div className="bg-gray-100 p-4   flex items-center space-x-4">
              <img 
                src={randomAd.image} 
                alt={randomAd.title} 
                className="w-24 h-16 object-cover rounded" 
              />
              <div>
                <h1 className="text-xl font-bold">{randomAd.title}</h1>
                <p className="mt-2">{randomAd.description}</p>
                <a
                  href={randomAd.link}
                  className="mt-4 inline-block text-blue-600 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LargeScreenContent;
