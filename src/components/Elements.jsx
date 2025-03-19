import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AstronautImg from "../assets/images/element-img.png";

const Elements = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Stagger each child's animation by 0.3s
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5 } 
    },
  };

  return (
    <section className="overflow-hidden py-20 max-md:py-8" id="about">
      <div className="container">
        <div className="grid grid-cols-2 gap-20 items-end max-md:grid-cols-1">
          <div className="max-md:hidden max-md:max-w-[350px]">
            <img src={AstronautImg} alt="astronaut-img" />
          </div>
          {/* Animated Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className="heading-2 text-customWhite mb-5 max-md:text-[32px]"
              variants={itemVariants}
            >
              Program Elements
            </motion.h2>
            <motion.p
              className="para-1 text-customGray mb-4"
              variants={itemVariants}
            >
              Eden Funding by Blackridge is a prop trading firm offering a
              high-reward, simulated trading experience with virtual funds.
              As part of the Blackridge ecosystem
            </motion.p>
            <motion.p
              className="para-1 text-customGray mb-4"
              variants={itemVariants}
            >
              Traders can showcase their skills in a risk-free virtual
              environment and earn real rewards based on our performance
              commission of 70%.
            </motion.p>
            <motion.p
              className="para-1 text-customGray mb-4"
              variants={itemVariants}
            >
              After the 1-Step Challenge phase, successful traders unlock
              virtual funding ensuring a low-risk yet rewarding simulated trading
              experience up to 500k.
            </motion.p>
            <motion.p
              className="para-1 text-customGray mb-4"
              variants={itemVariants}
            >
              All accounts are accessible via MT5 on both PC and Mobile, so you
              can trade anytime, anywhere.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                to="/"
                className="btn bg-customTransparentWhite text-customLightGreen max-w-[263px] w-full h-[59px] max-md:max-w-[200px]"
              >
                Start Evaluation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Elements;
