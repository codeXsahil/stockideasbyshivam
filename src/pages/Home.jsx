import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import WinWall from '../components/WinWall';
import Audience from '../components/Audience';
import Features from '../components/Features';
import PremiumGroup from '../components/PremiumGroup';
import HowItWorks from '../components/HowItWorks';
import SocialProof from '../components/SocialProof';
import FAQ from '../components/FAQ';
import Mentor from '../components/Mentor';
import CTA from '../components/CTA';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';
import StickyCTA from '../components/StickyCTA';
import LiveNotifications from '../components/LiveNotifications';

const Home = () => {
    return (
        <>
            <LiveNotifications />
            <Hero />
            <TrustStrip />
            <WinWall />
            <Audience />
            <Features />
            <PremiumGroup />
            <HowItWorks />
            <SocialProof />
            <FAQ />
            <Mentor />
            <CTA />
            <Disclaimer />
            <Footer />
            <StickyCTA />
        </>
    );
};

export default Home;
