import React from 'react';

const Card = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-6 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Skewed Main Card */}
      <div className="transform -skewY(-20deg)">
        <div
          className="relative flex justify-center items-center h-[300px] w-[160px] border-4 border-black rounded-2xl bg-gray-50"
          style={{
            boxShadow: '5px 5px 2.5px 6px rgb(209, 218, 218)',
          }}
        >
          {/* Top Black Strip */}
          <span className="absolute top-0 border border-black bg-black w-20 h-2 rounded-br-xl rounded-bl-xl" />

          {/* Right-Side Extensions */}
          <span className="absolute -right-2 top-14 border-4 border-black h-7 w-3 rounded-md" />
          <span className="absolute -right-2 bottom-36 border-4 border-black h-10 w-3 rounded-md" />

          {/* Inner 3D Mini Cards */}
          <div className="grid grid-cols-2 gap-2 p-2">
            <MiniServiceCard title="Web" />
            <MiniServiceCard title="App" />
            <MiniServiceCard title="Design" />
            <MiniServiceCard title="SEO" />
          </div>
        </div>
      </div>
    </div>
  );
};

const MiniServiceCard = ({ title }) => {
  return (
    <div
      className="flex items-center justify-center h-14 w-14 bg-white border border-gray-300 rounded-lg shadow-lg transform hover:-rotate-x-6 hover:rotate-y-6 transition-transform duration-300"
      style={{
        perspective: '600px',
        boxShadow: '2px 4px 10px rgba(0,0,0,0.15)',
      }}
    >
      <span className="text-sm font-semibold text-gray-700">{title}</span>
    </div>
  );
};

export default Card;
