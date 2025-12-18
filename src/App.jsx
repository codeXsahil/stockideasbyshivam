import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Audience from './components/Audience';
import Features from './components/Features';
import PremiumGroup from './components/PremiumGroup';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import Disclaimer from './components/Disclaimer';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-trading-bg text-white font-body selection:bg-trading-main selection:text-black">
      <Hero />
      <TrustStrip />
      <Audience />
      <Features />
      <PremiumGroup />
      <HowItWorks />
      <SocialProof />
      <CTA />
      <Disclaimer />
      <Footer />
      <StickyCTA />
    </div>
  )
}

export default App
