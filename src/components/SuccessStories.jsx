import React from "react";
import { motion } from "framer-motion";
import SuccessStorieImg from "../assets/images/succesgraph (3).png";
import globeBg from "../assets/images/earthAbout.webp";

const SuccessStories = () => {
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
    <section className="relative">
      {/* Globe Background */}
      <motion.div
        variants={fadeInUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="absolute w-[50%] max-w-[580px] inset-[-25%_0_auto_auto] right-0 top-[-50%] z-[-1] 
        max-xl:top-[-15%] max-lg:top-[-10%]"
      >
        <img src={globeBg} alt="globe background" className="w-full" />
      </motion.div>

      <div className="max-w-[1620px] w-[90%] mx-auto pb-[180px] relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[80px] p-10 max-xl:px-[3%] grid grid-cols-1 
                     md:grid-cols-2 gap-[90px] max-2xl:gap-12 max-xl:gap-9 items-center
                     bg-sec-radial backdrop-blur-[25px] border-2 border-[#B6D3FF] 
                     border-opacity-10 text-white max-lg:rounded-[40px]"
        >
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-md:order-2"
          >
            <img src={SuccessStorieImg} alt="Success graph" className="w-full" />
          </motion.div>
          <motion.div
            variants={textLoadVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-md:order-1 max-md:text-center"
          >
            <motion.h3
            variants={fadeInUpVariant}
             className="font-medium text-5xl max-lg:text-4xl max-md:text-3xl leading-[1.2] max-w-[488px] max-md:mx-auto">
              Many success stories.. Are you next?
            </motion.h3>
          </motion.div>
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="absolute top-[-2px] inset-x-0 w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
