import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import LightBg from "../assets/images/BG.png";
import Planet from "../assets/images/planet.webp"

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
  ];

  const statsDataTwo = [
    {
      id: 3,
      end: 223322,
      duration: 2.5,
      description: "Total Lot Size",
    },
  ];

  const statsDataThree = [
    {
      id: 3,
      text: "GBPJPY",
      description: "Most Traded Paiir",
    },
  ];

  const statsDataFour = [
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
    <section
      ref={ref}
      className=" text-white mb-[60px] md:mb-[140px] lg:mb-[242px] relative"
    >
       <div className="max-w-[1620px] w-[90%] mx-auto">
      <h2 className="text-white text-center mx-2 sm:text-[28px] md:text-[32px] lg:text-[48px] font-semibold leading-[29px] lg:leading-[62px] mb-[30px] md:mb-[50px] lg:mb-[88px]">
        Let The Numbers Speak.
      </h2>
      </div>
      
      <div className="relative flex flex-col justify-center items-center max-w-full w-[90%] mx-auto max-md:px-2 pt-[87px] pb-[78px] text-center rounded-[80px] border-2 border-[#B6D3FF] border-opacity-5 bg-[rgba(157,255,222,0.04)] backdrop-blur-[25px]">
    
        {/* Stats Cards one*/}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mb-[15px]">
          {statsDataOne.map(
            ({ id, end, prefix, suffix, duration, description }) => (
              <div
                key={id}
                className="relative bg-[rgba(121,255,150,0.04)] border border-[#C3FFCD] border-opacity-5 rounded-[24px] px-6 py-10 min-h-[169px] w-[466px] max-w-full flex flex-col items-center justify-center "
              >
                <h3 className="text-[32px] font-bold max-xl:text-4xl max-md:text-3xl max-sm:text-2xl">
                  {inView ? (
                    <CountUp
                      end={end}
                      separator=","
                      suffix={suffix}
                      duration={duration}
                      prefix={prefix}
                    />
                  ) : (
                    "0"
                  )}
                </h3>
                <p className="mt-2 text-white text-opacity-50 text-[24px] max-md:text-base">
                  {description}
                </p>
                <div className="absolute inset-[-2px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
                <div className="absolute inset-x-0 bottom-[-2px] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
              </div>
            )
          )}
        </div>
        {/* Stats Cards two*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          <div className="">
            {statsDataTwo.map(
              ({ id, end, prefix, suffix, duration, description }) => (
                <div
                  key={id}
                  className="relative bg-[rgba(121,255,150,0.04)] border border-[#C3FFCD] border-opacity-5 rounded-[24px] px-6 py-10 min-h-[169px]  max-w-[466px] lg:w-[356px] flex flex-col items-center justify-center"
                >
                  <h3 className="text-[32px] font-bold max-xl:text-4xl max-md:text-3xl max-sm:text-2xl">
                    {inView ? (
                      <CountUp
                        end={end}
                        separator=","
                        suffix={suffix}
                        duration={duration}
                        prefix={prefix}
                      />
                    ) : (
                      "0"
                    )}
                  </h3>
                  <p className="mt-2 text-white text-opacity-50 text-[24px] max-md:text-base">
                    {description}
                  </p>
                  <div className="absolute inset-[-2px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
                  <div className="absolute inset-x-0 bottom-[-2px] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
                </div>
              )
            )}
          </div>
          {/* Stats Cards two*/}
          <div className="">
            {statsDataThree.map(({ id, text, description }) => (
              <div
                key={id}
                className="relative bg-[rgba(121,255,150,0.04)] border border-[#C3FFCD] border-opacity-5 rounded-[24px] px-6 py-10 min-h-[170px] w-full max-w-[466px] lg:w-[356px] flex flex-col items-center justify-center"
              >
                <h3 className="text-[32px] font-bold max-xl:text-4xl max-md:text-3xl max-sm:text-2xl">
                  {text}
                </h3>
                <p className="mt-2 text-white text-opacity-50 text-[24px] max-md:text-base">
                  {description}
                </p>
                <div className="absolute inset-[-2px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
                <div className="absolute inset-x-0 bottom-[-2px] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
              </div>
            ))}
          </div>
          {/* Stats Cards two*/}
          <div className="">
            {statsDataFour.map(
              ({ id, end, prefix, suffix, duration, description }) => (
                <div
                  key={id}
                  className="relative bg-[rgba(121,255,150,0.04)] border border-[#C3FFCD] border-opacity-5 rounded-[24px] px-6 py-10 min-h-[170px] max-w-[466px] lg:w-[356px] flex flex-col items-center justify-center"
                >
                  <h3 className="text-[32px] font-bold max-xl:text-4xl max-md:text-3xl max-sm:text-2xl">
                    {inView ? (
                      <CountUp
                        end={end}
                        separator=","
                        suffix={suffix}
                        duration={duration}
                        prefix={prefix}
                      />
                    ) : (
                      "0"
                    )}
                  </h3>
                  <p className="mt-2 text-white text-opacity-50 text-[24px] max-md:text-base">
                    {description}
                  </p>
                  <div className="absolute inset-[-2px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
                  <div className="absolute inset-x-0 bottom-[-2px] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
                </div>
              )
            )}
          </div>
        </div>
        <img
          src={LightBg}
          alt="background-image"
          className="w-[] h-[] absolute top-0 left-0"
        />
         <div className="absolute inset-[-2px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
      </div>
      <div className="w-[50%] max-w-[700px] bottom-[-40%] inset-[auto_auto_-10%_0] absolute z-[-1]
      max-xl:inset-[auto_auto_-10%_0] max-lg:inset-[auto_auto_-6%_0]">
        <img src={Planet} alt="Planet" />
      </div>
    </section>
  );
};

export default StatsNumberSpeak;
