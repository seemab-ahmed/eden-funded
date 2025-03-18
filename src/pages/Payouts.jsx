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
        <Banner/>
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
