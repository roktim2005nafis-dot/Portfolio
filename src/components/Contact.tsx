import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section className="relative w-full min-h-screen bg-transparent flex flex-col justify-between overflow-hidden" id="contact">
      
      {/* Background large text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.01] z-0">
        <span className="font-display font-bold text-[30vw] leading-none whitespace-nowrap text-[#7B61FF]">
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
          <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-[#7B61FF] uppercase mb-4 block font-semibold">
            Open for opportunities & collaborations
          </span>
          <h2 className="font-display font-bold text-5xl md:text-8xl xl:text-9xl text-[#F0EEF8] tracking-tighter uppercase leading-[0.9]">
            Let's build <br/><span className="italic animate-color-blink text-[#7B61FF]">The Future</span>
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
                className="w-full bg-transparent border-b border-[#2A2A35] py-4 font-sans text-sm text-[#F0EEF8] focus:outline-none focus:border-[#7B61FF] transition-colors uppercase tracking-widest placeholder:text-neutral-600" 
              />
            </div>
            <div className="relative group">
              <input 
                type="email" 
                name="email"
                required
                placeholder="YOUR EMAIL" 
                className="w-full bg-transparent border-b border-[#2A2A35] py-4 font-sans text-sm text-[#F0EEF8] focus:outline-none focus:border-[#7B61FF] transition-colors uppercase tracking-widest placeholder:text-neutral-600" 
              />
            </div>
            <div className="relative group">
              <textarea 
                name="message"
                required
                placeholder="PROJECT DETAILS" 
                rows={4}
                className="w-full bg-transparent border-b border-[#2A2A35] py-4 font-sans text-sm text-[#F0EEF8] focus:outline-none focus:border-[#7B61FF] transition-colors uppercase tracking-widest resize-none placeholder:text-neutral-600" 
              />
            </div>
            
            <button 
              type="submit"
              className="mt-8 relative overflow-hidden group border border-[#2A2A35] hover:border-[#7B61FF] py-4 px-8 w-full uppercase tracking-widest font-sans text-sm text-white transition-colors duration-300"
              data-cursor="hover"
            >
              <div className="absolute inset-0 bg-[#7B61FF] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-500 font-bold">
                Send Transmission
              </span>
            </button>
          </form>
        </motion.div>
      </div>

      <footer className="w-full border-t border-[#2A2A35] py-8 px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#0D0D0F] mt-24">
        <div className="flex flex-col gap-2">
          <p className="font-sans text-[10px] md:text-xs tracking-widest uppercase text-[#8C8A99] text-center md:text-left">
            © {new Date().getFullYear()} Nafis Ahmed Roktim. All Rights Reserved.
          </p>
          <p className="font-sans text-[10px] md:text-xs tracking-widest text-[#8C8A99] text-center md:text-left">
            Site created by <a href="http://afrainkabirrafid.ami.bd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-[#7B61FF] font-medium">Afrain Kabir Rafid</a> (Founder - Rubiecorp)
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
              className="font-sans text-xs tracking-widest text-[#8C8A99] hover:text-[#7B61FF] transition-colors uppercase"
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
