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
      <Banner />
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