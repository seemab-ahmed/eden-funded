import React from 'react'
import Banner from '../components/Banner'
import StatsAbout from '../components/StatsAbout'
import SuccessStories from '../components/SuccessStories'
import Accomplishment from '../components/Accomplishment'
import ScaleUpAbout from '../components/ScaleUpAbout'
import DiscordCommunity from '../components/DiscordCommunity'
import StatsNumberSpeak from '../components/StatsNumberSpeak'
 
const Payouts = () => {
  return (
    
    <main>
        <Banner
        preheader="Trade Crypto, Build Wealth, Simplified"
        heading="Glimpse of Successful Eden-FX
        Trading Stories"
        description="Here at Eden-FX we love the transparency. That being said, we're here to showcase our success stories!"
        btnText="Start Earning Now"
        ParaWidth= "max-w-[647px]"

      />
        <StatsAbout /> 
      <SuccessStories />
      <StatsNumberSpeak/>
      <Accomplishment/>
      <ScaleUpAbout />
      <DiscordCommunity/>
    </main>
  )
}

export default Payouts;
