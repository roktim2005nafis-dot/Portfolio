import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent">
      {/* Abstract Background Element */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute right-[10%] top-[20%] w-[40vw] h-[60vh] max-w-md hidden md:block"
      >
        <div className="w-full h-full relative z-0 grayscale contrast-125 opacity-40 mix-blend-screen scale-x-[-1]">
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
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[12px] uppercase tracking-[0.3em] text-[#888] mb-2"
          >
            Creative Director & Designer
          </motion.span>
          
          <h1 className="font-display font-bold text-[12vw] md:text-[8vw] leading-[0.85] tracking-tight uppercase text-white">
            Nafis <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/40 to-white/10">Roktim.</span>
          </h1>
          
          <h2 className="font-display font-medium text-[6vw] md:text-[4vw] leading-none tracking-tight text-neutral-400 mt-2 md:mt-4 uppercase">
            Web Layout Specialist
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 md:mt-24 max-w-md"
        >
          <p className="font-sans text-white/50 text-base md:text-lg leading-relaxed font-light">
            Crafting immersive digital experiences that live at the intersection of cinematic storytelling and advanced creative engineering.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 mt-8">
            <button className="px-8 py-4 bg-[#F5F5F5] text-[#050505] text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-white transition-colors" data-cursor="hover">Start a Project</button>
            <button className="px-8 py-4 border border-white/20 text-[#F5F5F5] text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm backdrop-blur-sm hover:bg-white/5 transition-colors" data-cursor="hover">View Showreel</button>
          </div>
        </motion.div>
      </div>

      {/* Floating Red Accent Tagline */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-[10%] right-[10%] z-20 pointer-events-none hidden md:block"
      >
        <span className="font-display font-bold text-red-600/30 text-8xl md:text-9xl whitespace-nowrap blur-[2px] select-none">
          MY TIME
        </span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
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
