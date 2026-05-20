import React, { useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';
import { HoverTile } from './HoverTile';

const IMAGES = [
  '/screenshot_0.webp',
  '/screenshot_1.webp',
  '/screenshot_2.webp',
  '/screenshot_3.webp',
  '/screenshot_4.webp',
  '/screenshot_5.webp',
  '/screenshot_6.webp',
  '/screenshot_7.png',
  '/my-time-has-come.jpg',
];

export default function CinematicGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth cinematic physics for entire grid wrapper
  const springConfig = { stiffness: 40, damping: 20, mass: 1 };
  
  // Parallax constraints for entire grid
  const panX = useSpring(useTransform(mouseX, [0, 1], [30, -30]), springConfig);
  const panY = useSpring(useTransform(mouseY, [0, 1], [30, -30]), springConfig);
  const rotateXGlobal = useSpring(useTransform(mouseY, [0, 1], [3, -3]), springConfig);
  const rotateYGlobal = useSpring(useTransform(mouseX, [0, 1], [-3, 3]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const GRID_ITEMS = IMAGES; // 9 items for 3x3 grid

  return (
    <section className="relative w-full h-[120vh] md:h-[150vh] overflow-hidden bg-[#e5e5dd] flex items-center justify-center border-t border-neutral-300">
      
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(229,229,221,0.9)_80%,#e5e5dd_100%)] mix-blend-multiply opacity-50" />
      
      <div className="absolute top-16 left-6 md:left-12 z-30 pointer-events-none">
        <span className="font-mono text-xs tracking-widest uppercase text-neutral-500">Interactive Grid Surface</span>
        <h2 className="font-display text-5xl mt-2 font-bold text-[#111111] uppercase tracking-tight">Cinematic Vault</h2>
      </div>

      <motion.div
        ref={containerRef}
        style={{
          perspective: '2000px',
        }}
        className="absolute inset-0 w-full h-full flex items-center justify-center pt-20 pointer-events-none"
      >
        <motion.div
          style={{
            x: panX,
            y: panY,
            rotateX: 45, // Tilted grid
            rotateZ: -20, // Tilted orientation
            scale: 1.2, // Make sure it covers space
            transformStyle: 'preserve-3d',
            rotateX: useTransform(rotateXGlobal, (v) => v + 45), // Base rotation + dynamic
            rotateZ: useTransform(rotateYGlobal, (v) => v - 20)
          }}
          className="grid grid-cols-3 gap-8 md:gap-14 p-12 origin-center pointer-events-auto"
        >
          {GRID_ITEMS.map((src, i) => (
            <HoverTile 
              key={i} 
              className="w-[180px] h-[250px] md:w-[240px] md:h-[340px] rounded-2xl bg-black/5"
              glowColor="rgba(255,255,255,0.4)"
              intensity={25}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative border border-black/5">
                <img 
                  src={src} 
                  alt={`Collection item ${i}`} 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 contrast-125 object-top"
                />
              </div>
            </HoverTile>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
