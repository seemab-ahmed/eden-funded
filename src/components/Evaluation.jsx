import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AstronautImg from "../assets/images/evaluation-astronaut.svg";
import EvaluationImg from "../assets/images/evaluation-step.webp";
import starImage from "../assets/images/dots-bg.webp";

const Evaluation = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
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
    <section className="overflow-hidden pb-20 max-md:pb-32 relative bg-[#091612] lg:-mt-24">
      <div className="container relative">
        <div className="grid grid-cols-2 gap-20 items-end max-md:grid-cols-1 max-lg:items-center max-md:gap-0">
          {/* Animated Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="relative z-[2]"
          >
            <motion.h2
              className="heading-2 mb-5 max-md:text-[32px]"
              variants={itemVariants}
            >
              1- Step Evaluation
            </motion.h2>
            <motion.p className="para-1 mb-4" variants={itemVariants}>
              Pass The Challenge, Unlock Virtual Funding. Complete the 10%
              profit goal while managing 4% daily and 8% total drawdown during
              the training stages.
            </motion.p>
            <motion.p className="para-1 mb-4" variants={itemVariants}>
              Funded accounts are a monetized demo account with a 70% lifetime
              profit split.
            </motion.p>
            <motion.p className="para-1 mb-4" variants={itemVariants}>
              Commission-eligible simulated funds are unlocked the same-day
              after passing your challenge.
            </motion.p>
            <motion.p className="para-1 mb-4" variants={itemVariants}>
              HFT passing is allowed, for a limited time.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                to="https://dashboard.eden-fx.com/auth/sign-in"
                  target="_blank"
                className="btn bg-customTransparentWhite text-customLightGreen max-w-[263px] w-full max-md:max-w-[200px]"
              >
                Start Evaluation
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <div className="-mr-[45%] max-md:mx-auto max-md:max-w-[350px] relative">
            <img src={EvaluationImg} alt="evaluation-img" />
            <img
              src={AstronautImg}
              alt="evaluation-img"
              className="absolute left-0 right-0 top-1/4 -translate-y-1/2 mx-auto float-animation z-[2]"
            />
          </div>
        </div>
      </div>
      <div
        className="w-full h-full inset-0 absolute z-1"
        style={{
          backgroundImage: `url(${starImage})`,
          backgroundSize: "25%",
          backgroundRepeat: "repeat",
        }}
      ></div>
    </section>
  );
};

export default Evaluation;
