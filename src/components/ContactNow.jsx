import React from "react";
import { motion } from "framer-motion";
import EmailIcon from "../assets/images/email-icon.svg";
import LocationIcon from "../assets/images/location-icon.svg";
import ContactImg from "../assets/images/contact-img.png";
import { Link } from "react-router-dom"; 

// Fade in and move up variant
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

// Text load variant: blurred-to-clear effect
const textLoadVariant = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)", 
    transition: { duration: 2, ease: "easeOut" }
  },
};

const ContactNow = () => {
  return (
    <motion.section
      className="py-20 max-md:py-12"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUpVariant}
    >
      <div className="container">
        <div className="rounded-[20px] bg-primaryLight grid grid-cols-2 max-md:grid-cols-1 overflow-hidden">
          {/* Left Column: Form */}
          <motion.div className="p-[60px] max-md:p-6" variants={fadeInUpVariant}>
            <div className="mb-[60px] max-md:mb-10">
              <motion.h3
                className="text-[44px] font-semibold leading-none text-customWhite mb-5 max-md:text-[30px]"
                variants={textLoadVariant}
              >
                Contact Now
              </motion.h3>
              <motion.p
                className="text-lg font-normal leading-[150%] text-customGray max-md:text-base"
                variants={fadeInUpVariant}
              >
                Reach out to us for more information or to start the acquisition process.
              </motion.p>
            </div>
            <motion.form
              className="grid grid-cols-12 gap-x-6 gap-y-12 max-md:gap-7 max-md:grid-cols-1"
              variants={fadeInUpVariant}
            >
              <div className="col-span-6 max-md:col-span-1">
                <label className="text-lg font-medium leading-[1] text-customWhite mb-1">
                  Your name*
                </label>
                <input
                  type="text"
                  placeholder="jane Cooper"
                  className="block w-full py-4 bg-transparent text-base leading-none font-normal text-customLightGreen placeholder:text-[#485751] outline-none border-b border-[rgba(49,60,56,0.60)] max-md:py-2"
                />
              </div>
              <div className="col-span-6 max-md:col-span-1">
                <label className="text-lg font-medium leading-none text-customWhite mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  placeholder="You@example.co"
                  className="block w-full py-4 bg-transparent text-base leading-none font-normal text-customLightGreen placeholder:text-[#485751] outline-none border-b border-[rgba(49,60,56,0.60)] max-md:py-2"
                />
              </div>
              <div className="col-span-12 max-md:col-span-1">
                <label className="text-lg font-medium leading-none text-customWhite mb-1">
                  Your massage*
                </label>
                <input
                  type="text"
                  placeholder="Your massage"
                  className="block w-full py-4 bg-transparent text-base leading-none font-normal text-customLightGreen placeholder:text-[#485751] outline-none border-b border-[rgba(49,60,56,0.60)] max-md:py-2"
                />
              </div>
              <div className="col-span-12 max-md:col-span-1">
                <input
                  type="submit"
                  className="btn bg-customGreen text-customDark block w-full cursor-pointer"
                  value="Submit"
                />
              </div>
            </motion.form>
          </motion.div>
          {/* Right Column: Contact Info */}
          <motion.div
            className="p-[60px] flex flex-col justify-between max-md:p-6 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${ContactImg})` }}
            variants={fadeInUpVariant}
          >
            <motion.div
              className="grid grid-cols-1 gap-8 max-md:gap-4"
              variants={fadeInUpVariant}
            >
              <motion.div
                className="flex items-center gap-5 max-md:flex-col max-md:items-start"
                variants={fadeInUpVariant}
              >
                <figure className="w-16 h-16 rounded-full bg-customTransparentWhite border border-darkGray flex items-center justify-center max-md:w-10 max-md:h-10 max-md:p-1">
                  <img src={EmailIcon} alt="icon" />
                </figure>
                <div>
                  <motion.span
                    className="block text-xl font-medium leading-none text-[#9FA5A2] mb-2"
                    variants={textLoadVariant}
                  >
                    Email
                  </motion.span>
                  <motion.div variants={fadeInUpVariant}>
                    <Link
                      to="mailto:support@eden-funding.com"
                      className="text-base font-normal leading-none text-customWhite"
                    >
                      support@eden-funding.com
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-5 max-md:flex-col max-md:items-start"
                variants={fadeInUpVariant}
              >
                <figure className="w-16 h-16 rounded-full bg-customTransparentWhite border border-darkGray flex items-center justify-center max-md:w-10 max-md:h-10 max-md:p-1">
                  <img src={LocationIcon} alt="icon" />
                </figure>
                <div>
                  <motion.span
                    className="block text-xl font-medium leading-none text-[#9FA5A2] mb-2"
                    variants={textLoadVariant}
                  >
                    Locations
                  </motion.span>
                  <motion.span
                    className="block text-base font-normal leading-[140%] text-customWhite"
                    variants={fadeInUpVariant}
                  >
                    Agiou Pavlou, 115A <br />
                    Agios Dometios, 2362, Nicosia, Cyprus
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUpVariant}>
              <p className="para-1 text-customGray max-md:mt-4">
                Eden Funding by Blackridge is a trade name of Navastro Ltd (HE
                457547) and not a Registered Investment Advisor. All content is
                for informational purposes only—seek professional advice before
                making decisions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactNow;
