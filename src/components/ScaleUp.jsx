import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Planet from "../assets/images/2m-globe.webp";

const ScaleUp = () => {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
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
      className="relative"
    >
      <div className="py-[147px] max-lg:py-20 bg-[rgba(157,255,222,0.04)] backdrop-blur-[20px]">
        <div className="max-w-[1132px] w-[90%] mx-auto">
          <motion.div
            variants={fadeInUpVariant}
            className="rounded-[10px] relative bg-sec-radial backdrop-blur-[5px] bg-[rgba(157,255,222,0.04)]
              pt-[118px] pb-[87px] text-white max-md:py-12 px-[3%] text-center z-[1]"
          >
            <motion.h2
              variants={fadeInUpVariant}
              className="font-bold text-5xl max-lg:text-4xl max-md:text-3xl leading-[1.2]"
            >
              Scale Up To 2M
            </motion.h2>
            <motion.p
              variants={fadeInUpVariant}
              className="mt-5 mb-[50px] max-w-[713px] text-base text-center leading-tight font-medium mx-auto font-syne"
            >
              We help you build the skill, maximize your profits and become the asset.
              Trade our funds and receive up to 90% profit!
            </motion.p>
            <motion.div variants={fadeInUpVariant}>
              <Link
                to="/"
                className="btn text-white text-[16px] max-w-[158px] w-full border-[rgba(14,242,165,0.30)]
                           border mt-6 bg-btn-bg relative z-[5] mx-auto font-bold"
              >
                Get Funned
              </Link>
            </motion.div>
            <div 
              className="absolute inset-[0px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"
            ></div>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={fadeInUpVariant}
        className="w-[40%] max-w-[440px] inset-[auto_auto_-27%_0] absolute z-[-1]
          max-xl:inset-[auto_auto_-20%_0] max-lg:inset-[auto_auto_-15%_0]"
      >
        <motion.img src={Planet} alt="Planet" variants={fadeInUpVariant} />
      </motion.div>
    </motion.section>
  );
};

export default ScaleUp;
