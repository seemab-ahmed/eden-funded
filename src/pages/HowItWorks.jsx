import Banner from '../components/Banner'
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
        <Banner />
        <HowWeHelp />
        <PrimeChallenge />
        <EvaluationRules />
        <ExpressRules />
        <StartChallenge />
        <ScaleUp />
        <CustomerSupport/>
        <DiscordCommunity />
    </main>
  )
}

export default HowItWorks