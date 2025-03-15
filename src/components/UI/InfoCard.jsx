import React from 'react'

const EvalutionCard = ({ title, percentage, description }) => {
    return (
      <div className="flex flex-col items-start gap-6 bg-[#334b3b] text-white pt-12 pr-16 pb-16 pl-[30px] rounded-2xl shadow-lg w-full max-w-[470px] h-[431px] border border-green-800">
          <div className="bg-green-600 w-8 h-8 rounded-full flex items-start">
            {/* <Icon className="text-white w-6 h-6" /> */}
          </div>
          <h2 className="text-[32px] font-semibold pt-2">
            {title}: <span className="text-gray-300">{percentage}</span>
          </h2>
        
        <p className="text-start text-[16px] leading-relaxed text-gray-300">
          {description}
        </p>
      </div>
    );
  };

export default EvalutionCard;
