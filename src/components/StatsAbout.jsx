import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const StatsAbout = () => {
  const statsData = [
    {
      id: 1,
      end: 2811,
      duration: 2.5,
      description: "Total Funded Traders",
    },
    {
      id: 2,
      end: 15144.54,
      prefix: "$",
      duration: 2.5,
      description: "Highest Payout Ever",
    },
    {
      id: 3,
      end: 532889.17,
      prefix: "$",
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
    <section ref={ref} className=" text-white mb-[60px] md:mb-[100px] lg:mb-[167px] max-md:py-12">
      <div className="max-w-[90%] mx-auto  w-full px-4 text-center">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statsData.map(
            ({ id, end, prefix, suffix, duration, description }) => (
              <div
                key={id}
                className="bg-[rgba(121,255,150,0.04)] border border-[#C3FFCD] border-opacity-5 rounded-[48px] px-6 py-10 md:min-h-[240px] min-h-[180px] flex flex-col items-center justify-center"
              >
                <h3 className="text-5xl font-bold max-xl:text-4xl max-md:text-3xl max-sm:text-2xl">
                  {inView ? (
                    <CountUp
                      end={end}
                      separator=","
                      prefix={prefix}
                      suffix={suffix}
                      duration={duration}
                    />
                  ) : (
                    "0"
                  )}
                </h3>
                <p className="mt-2 text-white text-opacity-50 text-lg max-md:text-base max-sm:text-sm">
                  {description}
                </p>
              </div>
            )
          )}
        </div>
        <Link to="/" className="btn max-w-[230px] mx-auto h-14 font-bold text-black max-sm:text-sm bg-customGreen mt-10">
          Get Funded
        </Link>
      </div>
    </section>
  );
};

export default StatsAbout;
