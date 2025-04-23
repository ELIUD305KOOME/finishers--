import React from 'react';

const Card = () => {
  const services = ['Support', 'Tech', 'Sales', 'Billing'];

  return (
    <div className="flex items-center justify-center px-4 py-10 md:py-20 bg-cyan-200">
      <div className="relative bg-white rounded-2xl shadow-xl border-4 border-black max-w-3xl w-full p-8">
        {/* Top Black Strip */}
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 border border-black bg-black w-20 h-2 rounded-br-xl rounded-bl-xl" />

        {/* Right-Side Extensions */}
        <span className="absolute -right-2 top-14 border-4 border-black h-7 w-3 rounded-md" />
        <span className="absolute -right-2 bottom-36 border-4 border-black h-10 w-3 rounded-md" />

        {/* Content */}
        <div>
          <h1 className="text-sm md:text-5xl font-bold text-rose-800 leading-tight mb-4">
            Your Partner in Exceptional Customer Service
          </h1>
          <p className="text-xs md:text-lg text-gray-600 mb-6">
            At <span className="font-semibold text-blue-700">emur</span>, we specialize in delivering top-notch customer service
            assistance. Whether you need help with inquiries, technical
            support, or resolving issues, our team is here to ensure your
            satisfaction.
          </p>

          {/* Inner Mini Cards */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((item, i) => (
              <MiniServiceCard key={i} title={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MiniServiceCard = ({ title }) => {
  return (
    <div
      className="flex items-center justify-center h-14 w-full bg-white border border-gray-300 rounded-lg shadow-md"
    >
      <span className="text-sm font-medium text-cyan-700">{title}</span>
    </div>
  );
};

export default Card;
