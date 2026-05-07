import { useEffect, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="bg-[#050505] min-h-screen text-[#F5F5F5] font-sans selection:bg-white selection:text-black relative border-x border-[#222]">
      <CustomCursor />
      <Header />
      
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0 hidden md:block">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] rounded-full bg-gradient-to-br from-[#333] to-transparent blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vh] rounded-full bg-gradient-to-tl from-[#1a1a1a] to-transparent blur-[100px]"></div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.03] rounded-full"></div>
      </div>

      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
