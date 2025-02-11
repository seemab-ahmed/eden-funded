import React from "react";
import Banner from "../components/Banner";
import Evaluation from "../components/Evaluation";
import Elements from "../components/Elements";
import HowItsWork from "../components/HowItsWork";
import Products from "../components/Products";
import Reviews from "../components/Reviews";
import Faqs from "../components/Faqs";
import ContactNow from "../components/ContactNow";
import Trade from "../components/Trade";

const Home = () => {
  return (
    <main>
      <Banner />
      <Evaluation />
      <Elements />
      <HowItsWork />
      <Products />
      <Reviews />
      <Faqs />
      <ContactNow />
      <Trade />
    </main>
  );
};

export default Home;
