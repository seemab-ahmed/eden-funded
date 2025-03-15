import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsNumberSpeak = () => {
  const statsDataOne = [
    {
      id: 1,
      end: 2811,
      duration: 2.5,
      description: "No. of Funded Traders",
    },
    {
      id: 2,
      end: 465123,
      duration: 2.5,
      description: "Total Trades",
    },
  ]



  const statsDataTwo = [
    {
      id: 3,
      end: 223322,
      duration: 2.5,
      description: "Total Lot Size",
    },
    {
      id: 3,
      end: "GBPJPY",
      duration: 2.5,
      description: "Most Traded Paiir",
    },
    {
      id: 3,
      end: 150,
      prefix: "+",
      duration: 2.5,
      description: "Total Payouts",
    },
  ];
  // Use the Intersection Observer hook to check if the section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
    threshold: 0.3, // Trigger when 30% of the section is visible
  });
  return (
    <section ref={ref} className=" text-white py-28 max-md:py-12">
      <h2 className='text-white text-center text-[48px] font-semibold leading-[62px] pb-[88px]'>
    Let The Numbers Speak.
       </h2>
      <div className="flex flex-col justify-center items-center max-w-full w-[90%] mx-auto pt-[87px] pb-[78px] text-center rounded-[80px] border-2 border-[#B6D3FF] border-opacity-5 bg-[rgba(157,255,222,0.04)] backdrop-blur-[25px]">

        {/* Stats Cards one*/}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mb-[15px]">
          {statsDataOne.map(
            ({ id, end, prefix, suffix, duration, description }) => (
              <div
                key={id}
                className="bg-[rgba(121,255,150,0.04)] border border-[#C3FFCD] border-opacity-5 rounded-[48px] px-6 py-10 min-h-[169px] w-[466px] max-w-full flex flex-col items-center justify-center"
              >
                <h3 className="text-[32px] font-bold max-xl:text-4xl max-md:text-3xl">
                  {inView ? (
                    <CountUp
                      end={end}
                      separator=","
                      suffix={suffix}
                      duration={duration}
                      prefix={prefix}
                    />
                  ) : (
                    "GBPJPY"
                  )}
                </h3>
                <p className="mt-2 text-white text-opacity-50 text-[24px] max-md:text-base">
                  {description}
                </p>
              </div>
            )
          )}
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {statsDataTwo.map(
            ({ id, end, prefix, suffix, duration, description }) => (
              <div
                key={id}
                className="bg-[rgba(121,255,150,0.04)] border border-[#C3FFCD] border-opacity-5 rounded-[48px] px-6 py-10 min-h-[170px] w-[356px] max-w-full flex flex-col items-center justify-center"
              >
                <h3 className="text-[32px] font-bold max-xl:text-4xl max-md:text-3xl">
                  {inView ? (
                    <CountUp
                      end={end}
                      separator=","
                      suffix={suffix}
                      duration={duration}
                      prefix={prefix}
                    />
                  ) : (
                    "GBPJPY"
                  )}
                </h3>
                <p className="mt-2 text-white text-opacity-50 text-[24px] max-md:text-base">
                  {description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default StatsNumberSpeak;
