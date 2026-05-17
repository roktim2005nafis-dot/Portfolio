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

    // Hide preloader completely after 4.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] text-[#ededed] overflow-hidden"
        >
          {/* 1. LOADING EFFECT (0s - 1.2s) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ 
              opacity: [0, 1, 1, 0], 
              scale: [0.95, 1, 1, 1.05], 
              filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"] 
            }}
            transition={{ duration: 1.2, times: [0, 0.3, 0.7, 1], ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none"
          >
            <div className="flex flex-col items-center gap-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-400">
                Initializing Experience
              </span>
              <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0 bg-white"
                />
              </div>
            </div>
          </motion.div>

          {/* 2. TITLE REVEAL CARD TYPE INTRO (1 SECOND DELAY) */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.76, 0, 0.24, 1] }}
            exit={{ scale: 0.95, opacity: 0, filter: "blur(10px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="w-[95vw] md:w-[85vw] h-[80vh] md:h-[85vh] bg-[#0f0f0f] border border-white/5 flex flex-col items-center justify-center relative z-10 overflow-hidden"
          >
            
            {/* Cinematic Noise/Gradient Overlay inside Card */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none" />

            {/* Corner Details */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8 overflow-hidden pointer-events-none">
              <motion.span 
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
                className="block font-mono text-[9px] uppercase tracking-widest text-neutral-500"
              >
                Vol. 1
              </motion.span>
            </div>
            <div className="absolute top-6 right-6 md:top-8 md:right-8 overflow-hidden pointer-events-none">
              <motion.span 
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
                className="block font-mono text-[9px] uppercase tracking-widest text-neutral-500"
              >
                Creative Portfolio
              </motion.span>
            </div>
            
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 overflow-hidden pointer-events-none">
              <motion.span 
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="block font-mono text-[9px] uppercase tracking-widest text-neutral-500"
              >
                Est. 2024
              </motion.span>
            </div>

            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 overflow-hidden pointer-events-none">
              <motion.span 
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
                className="block font-mono text-[9px] uppercase tracking-widest text-neutral-500"
              >
                Global
              </motion.span>
            </div>

            {/* 3. NAME POPUP */}
            <div className="overflow-hidden py-10 flex flex-col items-center justify-center w-full px-4 text-center">
              <motion.div
                initial={{ y: "120%", opacity: 0, scale: 0.9, filter: "blur(15px)" }}
                animate={{ y: "0%", opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.4, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-display flex flex-col items-center justify-center relative"
              >
                <h1 className="text-[14vw] md:text-[9vw] xl:text-[8vw] font-bold uppercase tracking-tight leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/10 m-0 p-0">
                  NAFIS
                </h1>
                <h2 className="text-[4vw] md:text-[2vw] xl:text-[1.8vw] uppercase tracking-[0.3em] md:tracking-[0.5em] text-white/50 mt-4 md:mt-6 m-0 p-0 font-medium">
                  AHMED ROKTIM
                </h2>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
