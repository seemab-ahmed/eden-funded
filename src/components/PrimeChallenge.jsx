import React from 'react'
import Logo from "../assets/images/eden-funding-logo.svg";

const PrimeChallenge = () => {
    const instantFunding = [
        "Profit Target",
        "Drawdown Type",
        "Free Education",
        "Min Trading Days",
        "Scaling Plan",
        "Payouts",
        "100k Evolution",
      ];
    const withEden = [
        "6-8%",
        "Balance Based",
        "✓",
        "0 Min Trading Days",
        "95% Profit Split",
        "Every 8 Days (Prime)",
        "$399",
      ];
    const withOther = [
        "10%",
        "Equity Based",
        "X",
        "5 Min Trading Days",
        "80% Profit Split",
        "30 Days",
        "$599",
      ];



  return (
    <section className=" text-white py-28 max-md:py-12 ">
    <div
      className="flex flex-col items-center max-w-full w-[95%] mx-auto px-4 text-center border-opacity-5  p-10
      max-md:px-5"
    >
      <h2 className="text-5xl font-medium my-4 max-md:text-4xl w-full max-w-[850px] leading-[62px] pb-[88px]">
      How Does Our Prime Challenge Compare With Other Companies?
      </h2>
      <div className='flex flex-wrap justify-center gap-6 items-center max-w-full pt-[73px] pb-[80px] w-[95%] mx-auto px-4 text-center rounded-[30px] border-2 border-[#B6FFB9] border-opacity-5 bg-op bg-[rgba(11,172,117,0.04)]'>
      <div className="bg-gradient-to-b from-green-950 to-green-700 p-6 rounded-2xl shadow-lg w-full max-w-[424px] h-[556px] text-white text-center">
      <h2 className="text-[31px] font-[500px]  mb-[60px]">Unlock Instant Funding</h2>
      <ul className="space-y-4">
        {instantFunding.map((item, index) => (
          <li
            key={index}
            className="border-t border-green-500 pb-1 pt-2 text-[20px] font-thin"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
      <div className="bg-gradient-to-b from-green-950 to-green-700 p-6 rounded-2xl shadow-lg w-full max-w-[424px] h-[556px] text-white text-center">
      <h2 className="text-[20px] ">When You Trade With</h2>
      <img src={Logo} alt="Eden Funding Logo" className="w-32 mx-auto pt-2 pb-3" />
      <ul className="space-y-4">
        {withEden.map((item, index) => (
          <li
            key={index}
            className="border-t border-green-500 pb-1 pt-2 text-[20px] font-thin"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
      <div className="bg-gradient-to-b from-green-950 to-green-700 p-6 rounded-2xl shadow-lg w-full max-w-[424px] h-[556px] text-white text-center">
      <h2 className="text-xl mb-4">When You Trade With</h2>
      <h1 className='text-center text-[31px] font-[500] pb-4' >Other</h1>
      <ul className="space-y-4">
        {withOther.map((item, index) => (
          <li
            key={index}
            className="border-t border-green-500 pb-1 pt-2 text-[20px] font-thin"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
      </div>
      
      </div>
      </section>
  )
}

export default PrimeChallenge
