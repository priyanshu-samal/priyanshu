import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollingText from './components/ScrollingText';
import MyProject from './components/MyProject';
import WhyMe from './components/WhyMe';
import Testimonial from './components/Testimonial';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
// import AnimatedPricingComponent from './components/AnimatedPricingComponent';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/mousewheel';


const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <ScrollingText />
      <MyProject />
      <WhyMe />
      <Testimonial />
      <Pricing />
      <FAQ />
      <Footer />
      {/* <AnimatedPricingComponent /> */}
    </div>
  );
};

export default App;
