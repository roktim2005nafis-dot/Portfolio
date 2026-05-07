import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 w-full bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Image Reveal Column */}
          <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden group">
            <motion.div 
              style={{ y: imgY }}
              className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" 
                alt="Portrait"
                className="w-full h-full object-cover object-center grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
            </motion.div>
            
            {/* Red accent overlay text simulating the user's uploaded image style */}
            <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-10 p-8">
               <motion.span 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 0.8, scale: 1 }}
                 transition={{ duration: 1 }}
                 viewport={{ once: true }}
                 className="font-display font-bold text-red-600 tracking-tighter text-4xl md:text-6xl text-center leading-none mixed-blend-difference"
               >
                 MY TIME HAS<br/>COME
               </motion.span>
               <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 0.5 }}
                 transition={{ delay: 0.5, duration: 1 }}
                 viewport={{ once: true }}
                 className="mt-4 text-xs font-sans tracking-[0.2em] uppercase text-white/50 w-full flex justify-between"
               >
                 <span>You have to face it</span>
                 <span>Create by Roktim</span>
               </motion.div>
            </div>
          </div>

          {/* Text Column */}
          <motion.div style={{ y: textY }} className="flex flex-col justify-center relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-red-500" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-red-500">The Architect</span>
            </div>

            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 text-white uppercase tracking-tight">
              Designing <span className="font-bold italic">Intentional</span> <br/>
              Futures.
            </h2>

            <div className="font-sans text-neutral-400 space-y-6 text-sm md:text-base leading-relaxed max-w-lg">
              <p>
                I am Nafis Ahmed Roktim, a highly motivated and detail-oriented creative professional. I don't just design interfaces; I sculpt cinematic digital experiences.
              </p>
              <p>
                My philosophy merges brutalist minimalism with high-end luxury aesthetics. Every pixel is intentional, every motion is purposeful, and every layout tells a compelling story.
              </p>
              <p>
                Specializing in Brand Identity, Flat & Line Art Illustration, and Web Layout Design, my work transcends traditional boundaries to forge profound emotional connections between brands and their audiences.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <a href="#contact" className="group relative inline-flex items-center gap-3 overflow-hidden cursor-pointer" data-cursor="hover">
                <span className="font-display uppercase tracking-widest text-sm font-semibold relative z-10">Discover More</span>
                <span className="w-10 h-[1px] bg-white transition-all duration-300 group-hover:w-16 group-hover:bg-red-500" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
