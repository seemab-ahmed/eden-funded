import React from 'react'

const InfoCard = ({ title, percentage, description }) => {
    return (
      <div className="flex flex-wrap bg-[#334b3b] text-white p-6 rounded-2xl shadow-lg w-full max-w-[400px] h-[410px] border border-green-800">
        <div className="flex flex-col items-start gap-8">
          <div className="bg-green-600 p-8 rounded-full flex items-start">
            {/* <Icon className="text-white w-6 h-6" /> */}
          </div>
          <h2 className="text-xl font-semibold">
            {title}: <span className="text-gray-300">{percentage}</span>
          </h2>
        </div>
        <p className="mt-3 text-start text-sm leading-relaxed text-gray-300">
          {description}
        </p>
      </div>
    );
  };

export default InfoCard
