import React from "react";
import { motion } from "framer-motion";
import AccomplishmentImg from "../assets/images/ASAP Trade (3).png";

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

const Accomplishment = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className=""
    >
      <div className="max-w-[1620px] w-[90%] mx-auto">
        <motion.h2
          variants={fadeInUpVariant}
          className="text-white text-center text-5xl max-lg:text-4xl max-md:text-3xl font-medium leading-[1.3] mb-20"
        >
          Eden-FX Trader Certificates
        </motion.h2>

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
              src={AccomplishmentImg}
              alt="accomplishment"
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
              className="font-medium text-5xl max-lg:text-4xl max-md:text-3xl leading-[1.2] max-w-[488px] max-md:mx-auto"
            >
              Here is our traders accomplishment
            </motion.h3>
            <motion.p
              variants={fadeInUpVariant}
              className="text-[18px] leading-[1.4] font-normal mt-[20px] max-w-[488px] font-syne text-[rgba(216,218,255,0.60)] max-md:mx-auto"
            >
              Take a look at the incredible accomplishments of our thriving
              traders and celebrate their success with us.
            </motion.p>
          </motion.div>

          {/* Divider Line */}
          <motion.div
            variants={fadeInUpVariant}
            className="absolute inset-[-2px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"
          ></motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Accomplishment;