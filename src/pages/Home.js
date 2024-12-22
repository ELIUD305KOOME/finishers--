import React from 'react';
import ServiceList from './ServiceList';
import ProductList from './ProductsList';
import Reviews from './Reviews';
import Map from './Map';
// import Rota from "./RotatingGlobe";
import Recovery from './recover';



const HomePage = () => {
  return (
    <div className="w-full bg-orange-500 ">
      {/* <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div> */}

      {/* Hero Section */}
      {/* Hero Section */}
<div className="relative w-full">
  <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[75vh]">

    {/* Content Section - Left Half with Background Image and Blur Effect */}
    <div 
      className="lg:w-1/2 w-full flex items-center justify-center px-4 py-8 sm:py-16 relative"
      style={{
        backgroundImage: "url('https://www.farrar-tanner.co.uk/media/catalog/product/p/p/ppss81m712crsrb_4pcsafety.jpg?width=700&height=700&store=default&image-type=image')", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover", 
        backgroundPosition: "center"
      }}
    >
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center lg:text-left">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl flex items-center justify-center lg:justify-start">
          <img
            src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t1.6435-9/135583426_2923445037871744_2962774849601885778_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFz5A0lDmkAPMLJwj8CBG_GdL_ZBrZpbjB0v9kGtmluMBnVRK-zJ1SOUKNWxyIuJu__bzcFpeVE-v17XSBu8gfh&_nc_ohc=a0u1xqlRKAMQ7kNvgESEa8l&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=AOr2CC_ALNUVbajzxDg_UgZ&oh=00_AYAk2uCH0UaBOb8Fxw1jboTG3lhLO2afFWCicg7MI2MThw&oe=6788EB8B"
            alt="Solomons"
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] rounded-full mr-4"
          />
          <span className="block text-indigo-100">Solomons</span>
        </h1>

        {/* Subheading */}
        <h2 className="text-sm sm:text-2xl font-semibold text-red-300 mt-4">
          Precision Laser Treatments for Radiant Skin
          <strong className="block font-bold text-red-500 mt-1">Advanced Skin Care with Lasting Results</strong>
        </h2>

        {/* Call-to-Action Button */}
        <a
          href="/services"
          className="mt-8 inline-block text-xs bg-red-600 hover:bg-red-500 text-white font-medium py-3 px-6 rounded-lg shadow-lg transform transition hover:scale-105"
        >
          Explore Our Services
        </a>
      </div>
    </div>

    {/* Reviews Section - Right Half */}
    <div className="lg:w-1/2 w-full flex items-center justify-center">
      <Recovery />  {/* Replace the video with the Reviews component */}
    </div>
  </div>
</div>


      {/* Social Links */}
      {/* <SocialLinks /> */}
      

      {/* Services Section */}
      <div
      className='w-full'>
      <ServiceList />
      </div>

      {/* Products Section */}
      <ProductList />
      {/* Reviews Section */}
      {/* <div
      className='relative '> */}
      
      <Reviews />
      {/* </div> */}
        

      {/* Map Section */}
      <Map />

      {/* Rotating Globe */}
      {/* <RotatingGlobe /> */}

      
    </div>
  );
};

export default HomePage;
