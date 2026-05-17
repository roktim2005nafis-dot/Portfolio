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

    // Slide out after 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] text-[#ededed]"
        >
          <div className="overflow-hidden flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, filter: "blur(12px)", scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                filter: "blur(0px)",
                scale: 1,
                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
              }}
              exit={{ 
                opacity: 0,
                filter: "blur(10px)",
                scale: 1.05,
                transition: { duration: 0.6, ease: "easeInOut" }
              }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40"
            >
              NR
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
