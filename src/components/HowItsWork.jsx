import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WorkImg from "../assets/images/work-astronut.svg";
import SmileIcon from "../assets/images/smile.svg";
import ShareIcon from "../assets/images/share.svg";
import TradeIcon from "../assets/images/trade.svg";
import WorkVideo from "../assets/video/work.webm";

const HowItsWork = () => {
  const workCards = [
    {
      icon: SmileIcon,
      title: "Take a Challenge",
      para: "Take a challenge and push your limits beyond expectations.",
    },
    {
      icon: ShareIcon,
      title: "Unlock Capital",
      para: "Unlock capital and seize new opportunities for growth and success.",
    },
    {
      icon: TradeIcon,
      title: "Trade & Get Paid",
      para: "Trade & Get Paid—turn your skills into earnings with every transaction.",
    },
  ];

  // Variants for left content (heading, paragraph, and links)
  const leftContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const leftItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Variants for the work cards container and each card
  const cardsContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 max-md:py-12 relative" id="how-it-works">
      <div className="container">
        <div className="grid grid-cols-2 gap-24 max-md:grid-cols-1 max-md:gap-0">
          <div className="max-md:flex max-md:flex-col">
            {/* Left Content: Animated text and links */}
            <motion.div
              className="max-md:order-2 relative z-[3]"
              variants={leftContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2
                className="heading-2 mb-4 max-md:text-[32px]"
                variants={leftItemVariants}
              >
                How It Works
              </motion.h2>
              <motion.p
                className="para-1 text-customGray mb-8"
                variants={leftItemVariants}
              >
                Your Skills with Our Risk. You're not liable for any losses.
              </motion.p>
              <motion.ul
                className="grid grid-cols-2 max-w-[365px] gap-3 mb-16"
                variants={leftItemVariants}
              >
                <li>
                  <Link
                    to="/"
                    className="btn text-customDark bg-customGreen px-10"
                  >
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="btn text-customLightGreen bg-customTransparentWhite px-10"
                  >
                    Learn More
                  </Link>
                </li>
              </motion.ul>
            </motion.div>

            {/* Left Side Image (static) */}
            <img
              src={WorkImg}
              className="max-md:order-1 max-md:mb-6 max-md:max-w-[350px] float-animation"
              style={{ transform: "rotateY(-180deg)" }}
              alt="work-img"
            />
          </div>

          {/* Right Content: Work Cards Animated */}
          <motion.div
            className="grid gap-4"
            variants={cardsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {workCards.map((item, index) => (
              <motion.div
                key={index}
                className="p-10 bg-primaryLight border border-darkGray rounded-[32px] max-w-[485px] ml-auto w-full max-md:p-6 max-md:ml-0"
                variants={cardVariants}
              >
                <figure
                  className="w-16 h-16 rounded-full bg-customGreen flex items-center justify-center shadow-custom mb-12 max-md:mb-4 max-md:w-12 max-md:h-12"
                >
                  <img src={item.icon} alt="icon" />
                </figure>
                <h3 className="text-4xl font-medium text-customWhite leading-tight mb-4 max-md:mb-2 max-md:text-2xl">
                  {item.title}
                </h3>
                <p className="para-1 text-customGray">{item.para}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
     <div className="absolute inset-0 w-full h-full z-[1] max-xl:hidden">
     <video autoPlay loop muted playsInline className="w-full h-full object-cover block">
            <source src={WorkVideo} type="video/webm" />
            <source src={WorkVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
     </div>
    </section>
  );
};

export default HowItsWork;