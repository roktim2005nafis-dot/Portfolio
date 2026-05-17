import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isNameHovered, setIsNameHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Determine if it's the first visit to sync with the preloader
  const isFirstVisit = !sessionStorage.getItem('preloaderPlayed');
  const baseDelay = isFirstVisit ? 2.5 : 0.2;

  // Framer Motion entrance variants
  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: baseDelay
      }
    }
  };

  const textItem = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent">
      {/* Abstract Background Element */}
      <motion.div 
        style={{ y: y1, opacity: scrollOpacity }}
        className="absolute right-[10%] top-[20%] w-[40vw] h-[60vh] max-w-md hidden md:block"
      >
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: baseDelay + 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <div className={`w-full h-full relative z-0 grayscale contrast-125 mix-blend-screen scale-x-[-1] transition-all duration-[400ms] ease-in-out ${isNameHovered ? 'opacity-10 blur-xl' : 'opacity-40 blur-0'}`}>
            <img 
              src="/martini.png" 
              alt="moody portrait"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center md:items-start text-center md:text-left">
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-2 relative z-10"
        >
          <motion.div variants={textItem} className="flex flex-col gap-2">
            <span className={`text-[12px] uppercase tracking-[0.3em] mb-2 block transition-all duration-[400ms] ease-in-out ${isNameHovered ? 'text-white/20 blur-sm' : 'text-[#888]'}`}>
              Graphic Designer
            </span>
            
            <div 
              onMouseEnter={() => setIsNameHovered(true)}
              onMouseLeave={() => setIsNameHovered(false)}
              className={`relative flex flex-col self-start transition-all duration-[400ms] ease-in-out cursor-default ${isNameHovered ? 'scale-105 drop-shadow-2xl' : 'scale-100'}`}
              style={{ transformOrigin: 'left center' }}
            >
              <h1 className={`font-display font-bold text-[14vw] md:text-[10vw] leading-[0.85] tracking-tighter uppercase transition-all duration-[400ms] ease-in-out ${isNameHovered ? 'text-white font-black' : 'text-white'}`}>
                Nafis
              </h1>
              <span className={`font-sans font-semibold text-[5vw] md:text-[3vw] leading-none tracking-[0.15em] md:tracking-[0.2em] uppercase text-transparent bg-clip-text transition-all duration-[400ms] ease-in-out mt-1 md:mt-2 ${isNameHovered ? 'bg-gradient-to-r from-white via-white/80 to-white/60' : 'bg-gradient-to-r from-white via-white/40 to-white/10'}`}>
                Ahmed Roktim.
              </span>
            </div>
            
            <h2 className={`font-display font-medium text-[6vw] md:text-[4vw] leading-none tracking-tight mt-6 md:mt-10 uppercase transition-all duration-[400ms] ease-in-out ${isNameHovered ? 'text-white/20 blur-sm' : 'text-neutral-400'}`}>
              Visual Identity Specialist
            </h2>
          </motion.div>

          <motion.div variants={textItem} className={`mt-12 md:mt-24 max-w-md transition-all duration-[400ms] ease-in-out ${isNameHovered ? 'opacity-20 blur-sm' : 'opacity-100'}`}>
            <p className="font-sans text-white/50 text-base md:text-lg leading-relaxed font-light">
              Crafting striking visual identities that live at the intersection of cinematic storytelling and bold graphic design.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 mt-8">
              <button className="px-8 py-4 bg-[#ededed] text-[#0a0a0a] text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-white transition-colors" data-cursor="hover">Start a Project</button>
              <button className="px-8 py-4 border border-white/20 text-[#ededed] text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm backdrop-blur-sm hover:bg-white/5 transition-colors" data-cursor="hover">View Showreel</button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Red Accent Tagline */}
      <motion.div 
        style={{ y: y2 }}
        className={`absolute bottom-[10%] right-[10%] z-20 pointer-events-none hidden md:block transition-all duration-[400ms] ease-in-out ${isNameHovered ? 'opacity-0 blur-xl' : 'opacity-100 blur-0'}`}
      >
        <span className="font-display font-bold text-red-600/30 text-8xl md:text-9xl whitespace-nowrap blur-[2px] select-none">
          MY TIME
        </span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-all duration-[400ms] ease-in-out ${isNameHovered ? 'opacity-0 blur-sm' : 'opacity-100'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs tracking-widest text-neutral-500 uppercase font-sans">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
          <motion.div 
            className="w-full h-full bg-white origin-top"
            animate={{ scaleY: [0, 1, 0], translateY: ['-100%', '0%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
