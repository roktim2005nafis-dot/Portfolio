import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Roktim doesn't just deliver design; he architects visual experiences. His ability to fuse modern brutalism with high-end luxury is unmatched.",
    author: "Elena Rostov",
    role: "Creative Director, VANGUARD"
  },
  {
    quote: "Our brand identity was completely transformed. The layouts felt alive, and the attention to typography brought a cinematic quality we didn't know we needed.",
    author: "James Chen",
    role: "Founder, AURA DIGITAL"
  },
  {
    quote: "A true visionary in digital layout and art direction. Roktim's work is the intersection of art and digital engineering.",
    author: "Sarah V.",
    role: "Marketing Lead, NOIR"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-48 w-full bg-transparent text-[#F5F5F5] border-t border-[#222] relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[500px] blur-[100px] bg-red-900/10 pointer-events-none rounded-full" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="font-sans text-xs tracking-[0.3em] uppercase text-neutral-500 mb-16 md:mb-24">
          Client Voices
        </h2>

        <div className="relative h-[250px] md:h-[200px] flex items-center justify-center">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              className="absolute inset-x-0 mx-auto"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ 
                opacity: index === currentIndex ? 1 : 0, 
                y: index === currentIndex ? 0 : 20,
                scale: index === currentIndex ? 1 : 0.95,
                zIndex: index === currentIndex ? 10 : 0,
                pointerEvents: index === currentIndex ? 'auto' : 'none'
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-2xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-8">
                "{test.quote}"
              </p>
              <div className="flex flex-col items-center gap-1">
                <h4 className="font-sans text-sm md:text-base font-bold uppercase tracking-widest text-red-500">
                  {test.author}
                </h4>
                <span className="font-sans text-xs text-neutral-500 uppercase tracking-widest">
                  {test.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="w-12 h-12 flex items-center justify-center group"
              data-cursor="hover"
            >
              <span 
                className={`block h-[1px] transition-all duration-300 ${index === currentIndex ? 'w-8 bg-red-500' : 'w-4 bg-neutral-700 group-hover:bg-neutral-400 group-hover:w-6'}`} 
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
