import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent" id="hero">
      {/* Abstract Background Element */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute right-[10%] top-[20%] w-[40vw] h-[60vh] max-w-md hidden md:block"
      >
        <div className={`w-full h-full relative z-0 grayscale contrast-125 mix-blend-screen scale-x-[-1] transition-all duration-[400ms] ease-in-out ${isHovered ? 'opacity-20 blur-xl scale-95' : 'opacity-40 blur-0 scale-100'}`}>
          <img 
            src="/martini.png" 
            alt="moody portrait"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center md:items-start text-center md:text-left">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
           className="flex flex-col gap-2"
        >
          <div className={`transition-all duration-[400ms] ease-in-out origin-left ${isHovered ? 'opacity-20 blur-md -translate-x-2' : 'opacity-100 blur-0 translate-x-0'}`}>
            <span className="text-[12px] uppercase tracking-[0.3em] text-[#7B61FF] mb-2 inline-block font-semibold">
              Senior UI/UX Designer
            </span>
          </div>
          
          <h1 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`font-display text-[9vw] md:text-[6vw] xl:text-[6vw] leading-[0.85] tracking-tight uppercase text-[#F0EEF8] whitespace-nowrap cursor-default relative z-50 origin-center md:origin-left transition-all duration-[400ms] ease-in-out ${isHovered ? 'scale-105 font-black drop-shadow-[0_0_20px_rgba(123,97,255,0.25)]' : 'scale-100 font-bold drop-shadow-none'}`}
          >
            NAFIS <br />
            <span className={`text-transparent bg-clip-text transition-all duration-[400ms] ease-in-out ${isHovered ? 'bg-gradient-to-r from-white via-[#9B85FF] to-[#7B61FF]' : 'bg-gradient-to-r from-white via-white/50 to-white/20'}`}>AHMED ROKTIM</span>
          </h1>
          
          <div className={`transition-all duration-[400ms] ease-in-out origin-left ${isHovered ? 'opacity-20 blur-md translate-x-2' : 'opacity-100 blur-0 translate-x-0'}`}>
            <h2 className="font-display font-medium text-[6vw] md:text-[4vw] leading-none tracking-tight text-[#8C8A99] mt-6 md:mt-10 uppercase">
              Visual Identity Specialist
            </h2>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 md:mt-24 max-w-md"
        >
          <div className={`transition-all duration-[400ms] ease-in-out origin-left ${isHovered ? 'opacity-20 blur-md translate-y-2' : 'opacity-100 blur-0 translate-y-0'}`}>
            <p className="font-sans text-[#8C8A99] text-base md:text-lg leading-relaxed font-light">
              Designing memorable physical and digital products that exist at the intersection of strict editorial grids and fluid physics.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 mt-8">
              <a href="#projects" className="px-8 py-4 bg-[#7B61FF] hover:bg-[#9B85FF] text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm transition-colors text-center" data-cursor="hover">See My Work</a>
              <a href="#contact" className="px-8 py-4 border border-[#2A2A35] text-[#F0EEF8] text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm backdrop-blur-sm hover:bg-[#141418] transition-colors text-center" data-cursor="hover">Get In Touch</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Violet Accent Tagline */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-[10%] right-[10%] z-20 pointer-events-none hidden md:block"
      >
        <div className={`transition-all duration-[400ms] ease-in-out origin-center ${isHovered ? 'opacity-0 blur-xl scale-95' : 'opacity-100 blur-0 scale-100'}`}>
          <span className="font-display font-bold text-[#7B61FF]/10 text-8xl md:text-9xl whitespace-nowrap blur-[2px] select-none">
            MY TIME
          </span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className={`flex flex-col items-center gap-2 transition-all duration-[400ms] ease-in-out ${isHovered ? 'opacity-0 blur-md translate-y-4' : 'opacity-100 blur-0 translate-y-0'}`}>
          <span className="text-xs tracking-widest text-[#8C8A99] uppercase font-sans">Scroll</span>
          <div className="w-[1px] h-12 bg-[#2A2A35] overflow-hidden">
            <motion.div 
              className="w-full h-full bg-[#7B61FF] origin-top"
              animate={{ scaleY: [0, 1, 0], translateY: ['-100%', '0%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
