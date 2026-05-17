import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasPreloaderPlayed = sessionStorage.getItem('preloaderPlayed');
    
    if (hasPreloaderPlayed) {
      setIsVisible(false);
      return;
    }

    sessionStorage.setItem('preloaderPlayed', 'true');

    // Slide out after ~2 seconds so animation has time to show and then slide up (1s after)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  const name = "NAFIS AHMED ROKTIM";
  const letters = name.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
    exit: {
      opacity: 0,
      filter: "blur(10px)",
      scale: 1.05,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] text-[#ededed]"
        >
          <div className="overflow-hidden flex items-center justify-center w-full px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="font-display text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 flex flex-wrap justify-center"
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className={letter === " " ? "w-3 md:w-6" : "inline-block"}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
