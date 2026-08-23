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
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
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
      <Footer />
      <StickyCTA />
    </div>
  );
}
