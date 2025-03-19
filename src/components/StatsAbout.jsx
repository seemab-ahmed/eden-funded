import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  // Motion Variants
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textLoadVariant = {
    hidden: { opacity: 0, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="text-white mb-[60px] md:mb-[100px] lg:mb-[167px] max-md:py-12"
    >
      <div className="max-w-[1220px] w-[90%] mx-auto text-center">
        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {statsData.map(({ id, end, prefix, suffix, duration, description }) => (
            <motion.div
              key={id}
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative bg-[rgba(121,255,150,0.04)] border border-[#C3FFCD] border-opacity-5 
                         rounded-[24px] px-8 py-8 flex flex-col items-center justify-center"
            >
              <motion.h3
                variants={textLoadVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-[32px] font-bold max-xl:text-4xl max-md:text-3xl max-sm:text-2xl"
              >
                <CountUp end={end} separator="," prefix={prefix} suffix={suffix} duration={duration} />
              </motion.h3>
              <motion.p
                variants={fadeInUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="mt-2 text-white text-[24px] max-md:text-base max-sm:text-sm leading-[162.5%]"
              >
                {description}
              </motion.p>
              <motion.div
                variants={fadeInUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="absolute inset-[-2px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"
              ></motion.div>
              <motion.div
                variants={fadeInUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="absolute inset-x-0 bottom-[-2px] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link
            to="/"
            className="btn max-w-[230px] mx-auto h-14 font-bold text-black max-sm:text-sm 
                        bg-customGreen mt-10"
          >
            Get Funded
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StatsAbout;
