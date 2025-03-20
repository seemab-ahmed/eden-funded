import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import StarImg from "../assets/images/star.svg";
import ArrowLeft from "../assets/images/arrow-left.svg";
import ArrowRight from "../assets/images/arrow-right.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactCountryFlag from "react-country-flag";

const Reviews = () => {
  const sliderRef = useRef(null);
  const [activeButton, setActiveButton] = useState(null);

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
    setActiveButton("prev");
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
    setActiveButton("next");
  };

  // Note: The flag for Australia has been updated to use the ISO code "AU"
  const reviewsData = [
    {
      review:
        "I received my funds in just two days, which was impressive. The customer support team was helpful and responsive throughout the process. I had to complete the KYC process again, but that was okay. I would recommend Eden Funding to others",
      name: "Hafiz Muhammad",
      flag: "PK",
    },
    {
      review:
        "Received my second payout today fast… Received my second payout today fast delivery to my crypto wallet Can't wait to keep getting more payouts let's go!!",
      name: "Z K",
      flag: "GB",
    },
    {
      review:
        "Excellent prop firm. First payout received First payout received same day as requested. After getting Payout approved it arrived within the same few minutes in my wallet. Great trading conditions. Awesome experience and would recommend them",
      name: "Jade Arendse",
      flag: "ZA",
    },
    {
      review:
        "Best funded prop firm Eden funding is the best funded prop firm. I got my withdrawal 1400 USD very quickly. but BTC pair is not available. anyway good prop firm and good customer support",
      name: "hakeem kdvr",
      flag: "IN",
    },
    {
      review:
        "Received the payouts today for both of my accounts , thanks for making me happy. I was stressed a little bit because Eden Funding it's a new propfirm but I'm glad i chose EdenFunding. They may be new, but they’re the best in my opinion !",
      name: "Omar Ali",
      flag: "AE",
    },
    {
      review:
        "Got the payout🔥 I was requested for the payout previous working day and i got it just now.... Thank you eden-funding such a great opportunity to grow together. Thank you so much",
      name: "Mohammed Niyas",
      flag: "IN",
    },
    {
      review:
        "Eden Funding is good platform.I got my second payout within one week. Iam very glad with Eden Funding.",
      name: "Riyas P A",
      flag: "AE",
    },
    {
      review:
        "Customer service is 10/10, the moment you put a ticket in you get a reply immediately. Their spreads are amazing. The prices are very affordable. This is hands down the best prop firm I have ever stumbled across!",
      name: "John S.",
      flag: "AU",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "80px",
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  // Fade in and move up variant
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="reviews py-20 max-md:py-12" id="reviews">
      <div className="container">
        {/* Title + Arrows with move up animation */}
        <motion.div
          className="mb-20 flex justify-between items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariant}
        >
          <motion.h2
            className="heading-2 text-customWhite max-md:text-[24px]"
            variants={fadeInUpVariant}
          >
            What Traders Say <br /> About Eden-funding
          </motion.h2>
          <div className="arrows flex gap-4">
            <button
              onClick={handlePrevClick}
              className={`w-[72px] h-[72px] flex items-center justify-center 
                max-md:w-14 max-md:h-14 ${
                  activeButton === "prev"
                    ? "bg-customGreen"
                    : "bg-customTransparentWhite"
                } hover:bg-customGreen transition-all text-white rounded-full`}
            >
              <img src={ArrowLeft} alt="arrow-left" />
            </button>
            <button
              onClick={handleNextClick}
              className={`w-[72px] h-[72px] flex items-center justify-center 
                max-md:w-14 max-md:h-14 ${
                  activeButton === "next"
                    ? "bg-customGreen"
                    : "bg-customTransparentWhite"
                } hover:bg-customGreen transition-all text-white rounded-full`}
            >
              <img src={ArrowRight} alt="arrow-right" />
            </button>
          </div>
        </motion.div>

        {/* Slider */}
        <Slider ref={sliderRef} {...sliderSettings}>
          {reviewsData.map((review, index) => (
            <div key={index} className="px-2">
              <div className="reviews-card p-8 min-h-[335px] bg-primaryLight border border-darkGray rounded-3xl max-md:p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <img src={StarImg} alt="star-img" />
                    <img src={StarImg} alt="star-img" />
                    <img src={StarImg} alt="star-img" />
                    <img src={StarImg} alt="star-img" />
                    <img src={StarImg} alt="star-img" />
                  </div>
                  <p className="para-1 text-customGray mb-6">"{review.review}"</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-medium leading-none text-[#9EA3A1] max-md:text-lg">
                    – {review.name}
                  </span>
                  <ReactCountryFlag
                    countryCode={review.flag}
                    svg
                    style={{ width: "2em", height: "2em" }}
                    title={review.flag}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
