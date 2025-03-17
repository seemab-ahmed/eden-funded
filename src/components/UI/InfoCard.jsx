import React from 'react'

const EvalutionCard = ({ title, percentage, description }) => {
    return (
      <div className="flex flex-col gap-6 bg-[rgba(255,255,255,0.10)] text-left 
      text-white p-[48px_30px_64px]  rounded-[24px] border relative
      border-[#0EF3A5] border-opacity-5 max-xl:p-[30px_20px_40px]">
          <div className="bg-green-600 w-8 h-8 rounded-full flex items-start">
            {/* <Icon className="text-white w-6 h-6" /> */}
          </div>
          <h4 className="text-[32px] font-medium mb-2 max-xl:text-[28px] max-lg:text-2xl max-xl:mb-0">
            {title}: <span className="text-white">{percentage}</span>
          </h4>
        
        <p className="text-[16px] leading-relaxed text-white font-syne max-w-[376px]">
          {description}
        </p>
        <div className="absolute inset-[-1px_0_auto] w-[80%] h-[1px] bg-divider mx-auto block "></div>
        <div className="absolute inset-[auto_0_-1px] w-[80%] h-[1px] bg-divider mx-auto block "></div>
      </div>
    );
  };

export default EvalutionCard;
