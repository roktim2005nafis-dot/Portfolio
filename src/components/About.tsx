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
    <section ref={containerRef} className="relative py-32 md:py-48 w-full bg-transparent overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Image Reveal Column */}
          <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden group border border-[#2A2A35] rounded-2xl">
            <motion.div 
              style={{ y: imgY }}
              className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
              <img 
                src="/my-time-has-come.jpg" 
                alt="Portrait"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0D0D0F]/40 group-hover:bg-transparent transition-colors duration-700" />
            </motion.div>
          </div>

          {/* Text Column */}
          <motion.div style={{ y: textY }} className="flex flex-col justify-center relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#7B61FF]" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#7B61FF] font-semibold">The Visual Artist</span>
            </div>

            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 text-[#F0EEF8] uppercase tracking-tight">
              Designing <span className="font-bold italic">Intentional</span> <br/>
              Futures.
            </h2>

            <div className="font-sans text-[#8C8A99] space-y-6 text-sm md:text-base leading-relaxed max-w-lg">
              <p>
                I am Nafis Ahmed Roktim, a highly motivated and detail-oriented creative professional. I don't just design interfaces; I sculpt high-impact, cinematic digital ecosystems.
              </p>
              <p>
                My philosophy merges brutalist structural layouts with quiet, high-end luxury aesthetics. Every pixel is intentional, every hover transition is physics-guided, and every layout tells an authentic brand story.
              </p>
              <p>
                Specializing in User Experience Design, brand system construction, and high-fidelity layouts, my work bridges raw visual architecture and simple intuitive accessibility.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <a href="#projects" className="group relative inline-flex items-center gap-3 overflow-hidden cursor-pointer" data-cursor="hover">
                <span className="font-display uppercase tracking-widest text-sm font-semibold relative z-10 text-[#F0EEF8] group-hover:text-[#7B61FF] transition-colors">Explore Projects</span>
                <span className="w-10 h-[1px] bg-[#F0EEF8] transition-all duration-300 group-hover:w-16 group-hover:bg-[#7B61FF]" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
