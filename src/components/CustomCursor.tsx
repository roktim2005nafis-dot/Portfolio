import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  // useSpring for smooth physics-based cursor movement
  const cursorX = useSpring(-100, { stiffness: 800, damping: 28, mass: 0.5 });
  const cursorY = useSpring(-100, { stiffness: 800, damping: 28, mass: 0.5 });
  
  const outerCursorX = useSpring(-100, { stiffness: 150, damping: 20, mass: 0.5 });
  const outerCursorY = useSpring(-100, { stiffness: 150, damping: 20, mass: 0.5 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Center the inner dot (w-2 h-2 -> offset by 4)
      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);
      
      // Center the outer circle (w-12 h-12 -> offset by 24)
      outerCursorX.set(e.clientX - 24);
      outerCursorY.set(e.clientY - 24);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor="hover"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, outerCursorX, outerCursorY]);

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#e64a19] rounded-full pointer-events-none z-[100] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-[#e64a19]/40 rounded-full pointer-events-none z-[99] hidden md:flex items-center justify-center mix-blend-multiply"
        style={{
          x: outerCursorX,
          y: outerCursorY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(230, 74, 25, 0.05)' : 'rgba(230, 74, 25, 0)',
          borderColor: isHovering ? 'rgba(230, 74, 25, 0.6)' : 'rgba(230, 74, 25, 0.4)',
        }}
      >
        <motion.div 
          animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0.5 }}
          className="w-1.5 h-1.5 bg-[#e64a19] rounded-full"
        />
      </motion.div>
    </>
  );
}
