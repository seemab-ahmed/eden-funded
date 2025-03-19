import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

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

  // Intersection Observer hook to trigger animations when section is in view
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Variants for the heading and subtitle text
  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5 } 
    },
  };

  // Container variant to stagger the children animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  // Variants for each stat card (grow from 0.8 to 1, move up 30px)
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 1, ease: 'easeOut' } 
    },
  };

  // Define animation timing values for use in the CountUp delay calculation
  const cardAnimationDuration = 1; // seconds for card animation
  const cardStagger = 0.3; // stagger delay between cards

  return (
    <section ref={ref} className="text-white py-28 max-md:py-12">
      <div className="max-w-full w-[90%] mx-auto px-4 text-center">
        {/* Animated Section Title */}
        <motion.h2 
          className="text-5xl font-medium mb-4 max-md:text-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          Eden Statistics Since Launch
        </motion.h2>
        {/* Animated Section Subtitle */}
        <motion.p 
          className="text-lg text-white text-opacity-50 mb-20 max-w-[585px] mx-auto max-md:text-base"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          Proven Track Record. Proven Model. Scale your trading with Eden.
        </motion.p>

        {/* Animated Stats Cards Container */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {statsData.map(({ id, end, prefix, suffix, duration, description }, index) => (
            <motion.div 
              key={id} 
              className="bg-[rgba(121,255,150,0.04)] border border-[#C3FFCD] border-opacity-5 rounded-[48px] px-6 py-10 md:min-h-[240px] min-h-[180px] flex flex-col items-center justify-center"
              variants={cardVariants}
            >
              <h3 className="text-5xl font-bold max-xl:text-4xl max-md:text-3xl">
                {inView ? (
                  <CountUp 
                    end={end}
                    separator=","
                    prefix={prefix}
                    suffix={suffix}
                    // Start the counter after the card's animation (base + stagger delay)
                    delay={cardAnimationDuration + index * cardStagger}
                    duration={duration}
                  />
                ) : (
                  '0'
                )}
              </h3>
              <p className="mt-2 text-white text-opacity-50 text-lg max-md:text-base">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
