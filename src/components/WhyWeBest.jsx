import React from "react";
import { motion } from "framer-motion";
import WhyWeBestImg from "../assets/images/whywebest.png";
import { Link } from "react-router-dom";

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

const WhyWeBest = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-[180px] max-lg:py-20 max-md:py-12"
    >
      <div className="max-w-[1620px] w-[90%] mx-auto">
        <motion.div
          variants={containerVariants}
          className="rounded-[80px] p-10 max-xl:px-[3%] grid grid-cols-1 md:grid-cols-2 gap-[90px] max-2xl:gap-12 max-xl:gap-9 items-center bg-sec-radial backdrop-blur-[25px] border-2 border-[#B6D3FF] border-opacity-10 text-white max-lg:rounded-[40px]"
        >
          {/* Image Section */}
          <motion.div
            variants={fadeInUpVariant}
            className="max-md:order-2"
          >
            <img
              src={WhyWeBestImg}
              alt="Why We Best"
              className="w-full"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            variants={containerVariants}
            className="max-md:order-1 max-md:text-center"
          >
            <motion.h3
              variants={textLoadVariant}
              className="font-medium text-5xl max-lg:text-4xl max-md:text-3xl leading-[1.2] max-w-[470px] max-md:mx-auto"
            >
              Learn Why We're The Best
            </motion.h3>
            <motion.p
              variants={fadeInUpVariant}
              className="text-[18px] leading-[1.4] font-normal mt-[20px] max-w-[488px] font-syne text-[rgba(216,218,255,0.60)] max-md:mx-auto"
            >
              We at UnionWealthsManagement are offering the highest commission
              percentage for every trader you refer us to, simply share your
              unique link with your audience and get paid when a trader joins on
              any of our trader programs.
            </motion.p>

            <motion.div
              variants={fadeInUpVariant}
            >
              <Link
                to="/"
                className="btn max-w-[170px] max-lg:mx-auto h-14 bg-customGreen font-semibold text-[16px] text-black mt-5"
              >
                Start Now
              </Link>
            </motion.div>
          </motion.div>

          {/* Horizontal Line */}
          <motion.div
            variants={fadeInUpVariant}
            className="absolute inset-[-2px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"
          ></motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyWeBest;