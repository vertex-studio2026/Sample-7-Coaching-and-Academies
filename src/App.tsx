import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Courses from './components/Courses';
import Results from './components/Results';
import Faculty from './components/Faculty';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-white focus:text-navy focus:font-semibold focus:px-4 focus:py-2.5 focus:rounded-lg focus:shadow-lg"
      >
        Skip to content
      </a>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navbar />
        <main id="main">
          <Hero />
          <WhyChooseUs />
          <Courses />
          <Results />
          <Faculty />
          <Testimonials />
          <HowItWorks />
          <Gallery />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </MotionConfig>
  );
}
