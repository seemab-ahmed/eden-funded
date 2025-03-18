import React from 'react'
import Banner from '../components/Banner'
import SharePaidRepeat from '../components/SharePaidRepeat'
import WhyWeBest from '../components/WhyWeBest'
import FastSupport from '../components/FastSupport'
import DiscordCommunity from '../components/DiscordCommunity'
import EdenFx from '../components/EdenFx'
import Partner from '../components/Partner'
import ProfileCard from '../components/ProfileCard'

const ReferEarn = () => {
  return (
    <main>
      <Banner
        preheader="Trade forex, Build Wealth, Simplified"
        heading="Our Proud Partner Program!"
        description="Help Eden-FX  grow and earn up to 20% commission – There’s no limit on how much you can earn profit!"
        btnText="Start Earning Now"
        ParaWidth= "max-w-[647px]"
      />
      <SharePaidRepeat />
      <WhyWeBest />
      <ProfileCard />
      <Partner/>
      <EdenFx />
      <FastSupport />
      <DiscordCommunity/>
    </main>
  )
}

export default ReferEarn