import React from 'react';

const Map = () => {
  return (
    <div className="relative lg:mt-15 bg-orange-500 py-12">
      {/* Black overlay with backdrop blur */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="lg:text-3xl text-sm font-bold text-indigo-100 relative mb-6">Find Us</h2>
  <p className="lg:text-sm text-gray-200 relative text-xs mb-6">
    We are located in the heart of the city, making it easy for you to visit us. Check the map below for our exact location.
  </p>
  
  <div className="flex flex-row-reverse items-start">
    <div className="relative h-96 w-full lg:w-2/3 border rounded-lg shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.9245862417855!2d36.82137908504353!3d-1.285420035455788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3b8b9c8de45b%3A0x5b4298882e053edb!2sUganda+House%2C+Kenyatta+Avenue%2C+Nairobi!5e0!3m2!1sen!2ske!4v1688598174454!5m2!1sen!2ske"
        className="absolute inset-0 w-full h-full border-0 rounded-lg"
        allowFullScreen=""
        loading="lazy"
        title="Uganda House Location"
      ></iframe>
    </div>

    <div className="relative flex flex-col justify-start hidden lg:block lg:w-1/3 pl-6 mt-6">
  <h2 className="text-xl font-semibold">Business Contact Information</h2>
  <ul className="list-none space-y-2 mt-4">
    <li><strong>Business Name:</strong> <span className="text-green-400">[SOLOMON BEAUTY SERVICES]</span></li>
    <li><strong>Location:</strong> <span className="text-green-100">[Uganda House, Kenyatta Avenue, Nairobi]</span></li>
    <li><strong>Phone Number:</strong><span className="text-indigo-100">+254 722 669 912</span> </li>
    <li><strong>Country:</strong><span className="text-indigo-100">[Kenya]</span> </li>
    <li><strong>County:</strong> <span className="text-indigo-100">[Nairobi]</span></li>
    <li><strong>WhatsApp Link:</strong> <a href="https://wa.me/0722669912" className="text-blue-500">Chat on WhatsApp</a></li>
    <li><strong>Email:</strong> <a href="mailto:example@example.com" className="text-blue-500">Email Us</a></li>
    <li><strong>Facebook Page:</strong> <a href="https://www.facebook.com/solomon.rukaria.5" className="text-blue-500">Visit our Facebook Page</a></li>
    <li><strong>Instagram Page:</strong> <a href="https://www.instagram.com/solorukaria/" className="text-blue-500">Visit our Instagram Page</a></li>
    <li><strong>TikTok Page:</strong> <a href="https://www.tiktok.com/@solomonrukaria?is_from_webapp=1&sender_device=pc" className="text-blue-500">Visit our TikTok Page</a></li>
    <li><strong>YouTube Channel:</strong> <a href="https://www.youtube.com/@solomonrukaria2056" className="text-blue-500">Visit our YouTube Channel</a></li>
    <li><strong>Twitter Page:</strong> <a href="https://twitter.com/SolomonRukaria2056" className="text-blue-500">Visit our Twitter Page</a></li>
  </ul>
</div>
        </div>
      </div>

      <div className="absolute  w-40  bg-gray-200 transform ">
        <p className="text-center text-sm font-bold text-indigo-500">
          Uganda House, Kenyatta Avenue, Nairobi
        </p>
          </div>
    </div>
  );
};

export default Map;
