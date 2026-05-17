import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section className="relative w-full min-h-screen bg-transparent flex flex-col justify-between overflow-hidden" id="contact">
      
      {/* Background large text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <span className="font-display font-bold text-[30vw] leading-none whitespace-nowrap">
          HELLO
        </span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto w-full px-6 md:px-12 z-10 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm tracking-[0.3em] text-red-500 uppercase mb-4 block">
            Open for opportunities
          </span>
          <h2 className="font-display font-bold text-5xl md:text-8xl xl:text-9xl tracking-tighter uppercase leading-[0.9]">
            Let's build <br/><span className="italic animate-color-blink">The Future</span>
          </h2>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 0.5, duration: 1 }}
           viewport={{ once: true }}
           className="w-full max-w-md mx-auto"
        >
          <form className="flex flex-col gap-8" action="https://formspree.io/f/mgodzprl" method="POST">
            <div className="relative group">
              <input 
                type="text" 
                name="name"
                required
                placeholder="YOUR NAME" 
                className="w-full bg-transparent border-b border-neutral-800 py-4 font-sans text-sm focus:outline-none focus:border-white transition-colors uppercase tracking-widest placeholder:text-neutral-500" 
              />
            </div>
            <div className="relative group">
              <input 
                type="email" 
                name="email"
                required
                placeholder="YOUR EMAIL" 
                className="w-full bg-transparent border-b border-neutral-800 py-4 font-sans text-sm focus:outline-none focus:border-white transition-colors uppercase tracking-widest placeholder:text-neutral-500" 
              />
            </div>
            <div className="relative group">
              <textarea 
                name="message"
                required
                placeholder="PROJECT DETAILS" 
                rows={4}
                className="w-full bg-transparent border-b border-neutral-800 py-4 font-sans text-sm focus:outline-none focus:border-white transition-colors uppercase tracking-widest resize-none placeholder:text-neutral-500" 
              />
            </div>
            
            <button 
              type="submit"
              className="mt-8 relative overflow-hidden group border border-white/20 py-4 px-8 w-full uppercase tracking-widest font-sans text-sm"
              data-cursor="hover"
            >
              <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              <span className="relative z-10 group-hover:text-black transition-colors duration-500 font-bold">
                Send Transmission
              </span>
            </button>
          </form>
        </motion.div>
      </div>

      <footer className="w-full border-t border-neutral-800 py-8 px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 bg-transparent mt-24">
        <div className="flex flex-col gap-2">
          <p className="font-sans text-xs tracking-widest uppercase text-neutral-400 text-center md:text-left">
            © {new Date().getFullYear()} Nafis Ahmed Roktim. All Rights Reserved.
          </p>
          <p className="font-sans text-xs tracking-widest text-neutral-400 text-center md:text-left">
            Site created by <a href="http://afrainkabirrafid.ami.bd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-neutral-300 font-medium">Afrain Kabir Rafid</a> (Founder - Rubiecorp)
          </p>
        </div>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          {[
            { name: 'LinkedIn', url: '#' },
            { name: 'Instagram', url: 'https://www.instagram.com/_drag._.on._/' },
            { name: 'YouTube', url: 'https://www.youtube.com/@its-roktim-yoo' }
          ].map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              target={social.url !== '#' ? "_blank" : undefined}
              rel={social.url !== '#' ? "noopener noreferrer" : undefined}
              className="font-sans text-xs tracking-widest text-neutral-400 hover:text-white transition-colors uppercase"
              data-cursor="hover"
            >
              {social.name}
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
}
