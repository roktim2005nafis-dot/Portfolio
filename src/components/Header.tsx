import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { HoverTile } from './HoverTile';

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Close mobile menu on hash/route change
  useEffect(() => {
    const handleHashChange = () => {
      setIsMobileMenuOpen(false);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-[#f2f2eb]/90 backdrop-blur-md border-b border-black/5 py-4' : 'bg-transparent py-6 md:py-10'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <HoverTile intensity={3} glowColor="rgba(0,0,0,0.05)" className="max-w-7xl mx-auto px-6 md:px-12 h-full">
        <div className="flex justify-between items-center w-full h-full py-2">
          <a href="#" className="flex flex-col group relative z-10" data-cursor="hover">
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-black/40 mb-1">Portfolio / {new Date().getFullYear()}</span>
            <span className="font-display font-light text-xl tracking-tighter text-[#111111] uppercase">
              R<span className="text-red-500 font-bold">O</span>KTIM
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-12 relative z-10">
            {['Expertise', 'Certificates', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[11px] uppercase tracking-[0.2em] text-neutral-600 hover:text-[#111111] transition-colors"
                data-cursor="hover"
              >
                {item}
              </a>
            ))}
            <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center">
              <div className="w-1 h-1 bg-[#111111] rounded-full"></div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none relative z-50 cursor-pointer" 
            data-cursor="hover"
          >
            <motion.div 
              animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 7 : 0 }}
              className="w-6 h-[1.5px] bg-black origin-center" 
            />
            <motion.div 
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className="w-4 h-[1.5px] bg-black ml-auto" 
            />
            <motion.div 
              animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -7 : 0 }}
              className="w-6 h-[1.5px] bg-black origin-center" 
            />
          </button>
        </div>
      </HoverTile>

      {/* Mobile Menu Dropdown overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#f2f2eb] border-b border-black/10 flex flex-col py-8 px-6 md:hidden z-40 space-y-6"
          >
            {[
              { name: 'Expertise', href: '#expertise' },
              { name: 'Certificates', href: '#certificates' },
              { name: 'Contact', href: '#contact' },
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className={`text-sm uppercase tracking-[0.2em] transition-colors py-2 border-b border-neutral-300 ${
                  (window.location.hash === item.href) 
                    ? 'text-red-500 font-semibold' 
                    : 'text-neutral-700'
                }`}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
