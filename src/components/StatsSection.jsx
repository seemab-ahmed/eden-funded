import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  // Define your stats data in an array
  const statsData = [
    {
      id: 1,
      end: 183000,
      prefix: '$',
      suffix: '+',
      duration: 2.5,
      description: 'Payouts Deployed',
    },
    {
      id: 2,
      end: 8300,
      prefix: '$',
      suffix: '+',
      duration: 2.5,
      description: "Top Trader's Earning",
    },
    {
      id: 3,
      end: 3000,
      prefix: '$',
      suffix: '+',
      duration: 2.5,
      description: 'Active Traders Worldwide',
    },
  ];

  // Use the Intersection Observer hook to check if the section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
    threshold: 0.3,    // Trigger when 30% of the section is visible
  });

  return (
    <section ref={ref} className=" text-white py-28 max-md:py-12">
      <div className="max-w-full w-[90%] mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-5xl font-medium mb-4 max-md:text-4xl">
          Eden Statistics Since Launch
        </h2>
        {/* Section Subtitle */}
        <p className="text-lg text-white text-opacity-50 mb-20 max-w-[585px] mx-auto max-md:text-base">
        Proven Track Record. Proven Model. Scale your trading with Eden.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statsData.map(({ id, end, prefix, suffix, duration, description }) => (
            <div key={id} className="bg-[rgba(121,255,150,0.04)] border border-[#C3FFCD] border-opacity-5 rounded-[48px] px-6 py-10 md:min-h-[240px] min-h-[180px] flex flex-col items-center justify-center">
              <h3 className="text-5xl font-bold max-xl:text-4xl max-md:text-3xl">
                {inView ? (
                  <CountUp 
                    end={end}
                    separator=","
                    prefix={prefix}
                    suffix={suffix}
                    duration={duration}
                  />
                ) : (
                  '0'
                )}
              </h3>
              <p className="mt-2 text-white text-opacity-50 text-lg max-md:text-base">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
