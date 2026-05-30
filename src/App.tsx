import { useEffect, useState, Suspense, lazy } from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CinematicGrid from './components/CinematicGrid';

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
    <div className="bg-[#f2f2eb] min-h-screen text-[#111111] font-sans selection:bg-black selection:text-[#f2f2eb] relative border-x border-neutral-300">
      <CustomCursor />
      <Header />
      
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0 hidden md:block">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] rounded-full bg-gradient-to-br from-[#d9d9d0] to-transparent blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vh] rounded-full bg-gradient-to-tl from-[#e5e5dd] to-transparent blur-[100px]"></div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-black/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-black/[0.03] rounded-full"></div>
      </div>

      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <CinematicGrid />
        <Suspense fallback={<div className="h-20" />}>
          <Services />
          <Experience />
          <Certificates />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}
