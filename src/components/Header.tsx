import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6 md:py-10'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex flex-col group" data-cursor="hover">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-white/40 mb-1">Portfolio / {new Date().getFullYear()}</span>
          <span className="font-display font-light text-xl tracking-tighter text-[#ededed] uppercase">
            R<span className="text-red-500 font-bold">O</span>KTIM
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-12">
          {['Projects', 'Expertise', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 hover:text-[#ededed] transition-colors"
              data-cursor="hover"
            >
              {item}
            </a>
          ))}
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-1 h-1 bg-[#ededed] rounded-full"></div>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none" data-cursor="hover">
          <div className="w-6 h-[1px] bg-white" />
          <div className="w-4 h-[1px] bg-white ml-auto" />
          <div className="w-6 h-[1px] bg-white" />
        </button>
      </div>
    </motion.header>
  );
}
