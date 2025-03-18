import Banner from '../components/Banner'
import CareerTrading from '../components/CareerTrading'
import CustomerSupport from '../components/CustomerSupport'
import DiscordCommunity from '../components/DiscordCommunity'
import EvaluationRules from '../components/EvaluationRules'
import ExpressRules from '../components/ExpressRules'
import HowWeHelp from '../components/HowWeHelp'
import PrimeChallenge from '../components/PrimeChallenge'
import ScaleUp from '../components/ScaleUp'
import StartChallenge from '../components/StartChallenge'

const HowItWorks = () => {
  return (
    <main>
        <Banner
        preheader="Trade forex, Build Wealth, Simplified"
        heading="How It Works"
        description="Systems to help you grow, as you scale up with Eden-FX "
        btnText="Get Started"

      />
        <HowWeHelp />
        <PrimeChallenge />
        <EvaluationRules />
        <ExpressRules />
        <CareerTrading />
        <StartChallenge />
        <ScaleUp />
        <CustomerSupport/>
        
        <DiscordCommunity />
    </main>
  )
}

export default HowItWorks