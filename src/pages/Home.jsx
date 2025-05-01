import React from "react";
import Banner from "../components/Banner";
import Evaluation from "../components/Evaluation";
import Elements from "../components/Elements";
import HowItsWork from "../components/HowItsWork";
// import Products from "../components/Products";
import Reviews from "../components/Reviews";
import Faqs from "../components/Faqs";
import ContactNow from "../components/ContactNow";
import Trade from "../components/Trade";
import StatsSection from "../components/StatsSection";
import TradingPlatforms from "../components/TradingPlatforms";
import InstantFunding from "../components/InstantFunding";
import TradingViewTickerTape from "../components/TradingViewTickerTape";
import CareerTrading from "../components/CareerTrading";
import OffCode from "../components/OffCode";
import TrustBoxWidget from "../components/TrustBoxWidget";

const Home = () => {
  return (
    <main >
      <Banner
        preheader="Welcome to Eden Funding"
        heading="Unlock Up To 600k"
        description="In Simulated Funding, Powered By MT5"
        btnText="Start"
        isHome={true}
      />
      {/* <TradingViewTickerTape /> */}
      <TradingViewTickerTape />
      <Evaluation />
      <Elements />
      <CareerTrading />
      <StatsSection />
      <HowItsWork />
      <TradingPlatforms />
      <TrustBoxWidget />
      {/* <Products /> */}
      <InstantFunding/>

      <Reviews />
      <Faqs />
      <ContactNow />
      <Trade />
      <OffCode />


    </main>
  );
};

export default Home;
