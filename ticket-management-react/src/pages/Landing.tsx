import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import PricingSection from '../components/landing/PricingSection';
import FAQSection from '../components/landing/FAQSection';
import FooterCTA from '../components/landing/FooterCTA';

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className='mt-20 px-5 w-full'>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <FAQSection />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
}