import React from "react";
import EmailIcon from "../assets/images/email-icon.svg";
import LocationIcon from "../assets/images/location-icon.svg";
import ContactImg from "../assets/images/contact-img.png";
import { Link } from "react-router-dom"; 

const ContactNow = () => {
  return (
    <section className="py-20 max-md:py-12" id="contact">
      <div className="container">
        <div className="rounded-[20px] bg-primaryLight grid grid-cols-2 max-md:grid-cols-1 overflow-hidden">
          <div className="p-[60px] max-md:p-6">
            <div className="mb-[60px] max-md:mb-10">
              <h3 className="text-[44px] font-semibold leading-none text-customWhite mb-5 max-md:text-[30px]">
                Contact Now
              </h3>
              <p className="text-lg font-normal leading-[150%] text-customGray max-md:text-base">
                Reach out to us for more information or to start the acquisition
                process.
              </p>
            </div>
            <form className="grid grid-cols-12 gap-x-6 gap-y-12 max-md:gap-7  max-md:grid-cols-1">
              <div className="col-span-6 max-md:col-span-1">
                <label className="text-lg font-medium leading-none text-customWhite mb-1">
                  Your name*
                </label>
                <input
                  type="text"
                  placeholder="jane Cooper"
                  className="block w-full py-4 bg-transparent text-base leading-none font-normal text-customLightGreen placeholder:text-[#485751] outline-none border-b border-[rgba(49,60,56,0.60)]
                  max-md:py-2"
                />
              </div>
              <div className="col-span-6 max-md:col-span-1">
                <label className="text-lg font-medium leading-none text-customWhite mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  placeholder="You@example.co"
                  className="block w-full py-4 bg-transparent text-base leading-none font-normal text-customLightGreen placeholder:text-[#485751] outline-none border-b border-[rgba(49,60,56,0.60)]
                  max-md:py-2"
                />
              </div>
              <div className="col-span-12 max-md:col-span-1">
                <label className="text-lg font-medium leading-none text-customWhite mb-1">
                  Your massage*
                </label>
                <input
                  type="text"
                  placeholder="Your massage"
                  className="block w-full py-4 bg-transparent text-base leading-none font-normal text-customLightGreen placeholder:text-[#485751] outline-none border-b border-[rgba(49,60,56,0.60)]
                  max-md:py-2"
                />
              </div>
              <div className="col-span-12 max-md:col-span-1">
                <input
                  type="submit"
                  className="btn bg-customGreen text-customDark block w-full cursor-pointer"
                  value="Submit"
                />
              </div>
            </form>
          </div>
          <div
            className="p-[60px] flex flex-col justify-between max-md:p-6 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${ContactImg})` }}
          >
            <div className="grid grid-cols-1 gap-8 max-md:gap-4">
              <div className="flex items-center gap-5 max-md:flex-col max-md:items-start">
                <figure
                  className="w-16 h-16 rounded-full bg-customTransparentWhite border border-darkGray flex items-center justify-center
                max-md:w-10 max-md:h-10 max-md:p-1"
                >
                  <img src={EmailIcon} alt="icon" />
                </figure>
                <div>
                  <span className="block text-xl font-medium leading-none text-[#9FA5A2] mb-2">
                    Email
                  </span>
                  <Link
                    to="mailto:support@eden-funding.com"
                    className="text-base font-normal leading-none text-customWhite"
                  >
                    support@eden-funding.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-5 max-md:flex-col max-md:items-start">
                <figure
                  className="w-16 h-16 rounded-full bg-customTransparentWhite border border-darkGray flex items-center justify-center
                max-md:w-10 max-md:h-10 max-md:p-1"
                >
                  <img src={LocationIcon} alt="icon" />
                </figure>
                <div>
                  <span className="block text-xl font-medium leading-none text-[#9FA5A2] mb-2">
                    Locations
                  </span>
                  <span className="block text-base font-normal leading-[140%] text-customWhite">
                    Agiou Pavlou, 115A <br />
                    Agios Dometios, 2362, Nicosia, Cyprus
                  </span>
                </div>
              </div>
            </div>
            <div>
              <p className="para-1 text-customGray max-md:mt-4">
                Eden Funding by Blackridge is a trade name of Navastro Ltd (HE
                457547) and not a Registered Investment Advisor. All content is
                for informational purposes only—seek professional advice before
                making decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactNow;
