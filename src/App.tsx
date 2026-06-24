import { useEffect, useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

const Projects = lazy(() => import('./components/Projects'));
const Services = lazy(() => import('./components/Services'));
const Experience = lazy(() => import('./components/Experience'));
const Certificates = lazy(() => import('./components/Certificates'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="bg-[#0D0D0F] min-h-screen text-[#F0EEF8] font-sans selection:bg-[#7B61FF] selection:text-white relative border-x border-[#2A2A35]">
      <Header />
      
      {/* Cinematic Ambient Glow Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-40 z-0 hidden md:block">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] rounded-full bg-gradient-to-br from-[#7B61FF]/15 to-transparent blur-[140px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vh] rounded-full bg-gradient-to-tl from-[#7B61FF]/10 to-transparent blur-[120px]"></div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#2A2A35]/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#2A2A35]/10 rounded-full"></div>
      </div>

      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        
        <Suspense fallback={<div className="h-20 bg-transparent" />}>
          <Projects />
          <Services />
          <Certificates />
          <Experience />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}
