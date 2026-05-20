import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform, useMotionValue, useMotionTemplate } from 'motion/react';

interface HoverTileProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: number;
  perspective?: number;
}

export function HoverTile({ 
  children, 
  className = '', 
  glowColor = 'rgba(255,255,255,0.2)', 
  intensity = 15,
  perspective = 1000 
}: HoverTileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 400, damping: 30, mass: 0.5 };
  
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [intensity, -intensity]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-intensity, intensity]), springConfig);
  
  const glareX = useSpring(useTransform(mouseX, [0, 1], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(mouseY, [0, 1], [0, 100]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        perspective,
        transformStyle: 'preserve-3d',
      }}
      className={`relative group cursor-pointer ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          z: isHovered ? 40 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={springConfig}
        className="w-full h-full relative rounded-[inherit]"
      >
        {/* Soft Shadow behind tile */}
        <motion.div 
          className="absolute inset-0 -z-10 pointer-events-none rounded-[inherit]"
          animate={{
            opacity: isHovered ? 1 : 0,
            boxShadow: isHovered 
              ? '0 30px 60px -15px rgba(0,0,0,0.3)' 
              : '0 10px 30px -10px rgba(0,0,0,0.05)',
          }}
          transition={{ duration: 0.4 }}
        />

        <div style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }} className="w-full h-full rounded-[inherit]">
          {children}
        </div>

        {/* Cinematic Glare/Glass Reflection Overlay */}
        <motion.div 
          className="absolute inset-0 z-50 pointer-events-none rounded-[inherit] overflow-hidden mix-blend-overlay"
          style={{
            opacity: isHovered ? 1 : 0,
            background: useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, ${glowColor} 0%, transparent 60%)`,
            transform: 'translateZ(1px)',
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Subtle Edge Glow for 3D depth */}
        <motion.div 
          className="absolute inset-0 z-40 pointer-events-none rounded-[inherit] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)',
            transform: 'translateZ(1px)',
          }}
        />
      </motion.div>
    </motion.div>
  );
}
