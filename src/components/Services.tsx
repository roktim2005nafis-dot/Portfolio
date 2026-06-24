import { motion } from 'motion/react';
import { Layers, Palette, Terminal, Compass } from 'lucide-react';

const expertises = [
  {
    title: 'User Experience Design',
    icon: Compass,
    items: ['User Journey Mapping', 'Interactive Wireframes', 'Information Architecture', 'Usability Testing']
  },
  {
    title: 'User Interface Design',
    icon: Layers,
    items: ['Editorial Typography Scales', 'Responsive Web Layouts', 'Visual Design Systems', 'Frictionless Forms']
  },
  {
    title: 'Brand Architecture',
    icon: Palette,
    items: ['Logo & Geometry Guidelines', 'Rebranding & Identity Sets', 'Custom Vector Illustrations', 'Luxury Asset Design']
  },
  {
    title: 'Aesthetic Tool Stack',
    icon: Terminal,
    items: ['Figma Mastery', 'Adobe Illustrator & InDesign', 'Tailwind CSS & React Integration', 'Motion Physics (Framer)']
  }
];

export default function Services() {
  return (
    <section className="py-24 md:py-36 w-full bg-transparent text-[#F0EEF8] border-t border-[#2A2A35] relative overflow-hidden" id="expertise">
      
      {/* Background typographic element */}
      <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none -translate-y-1/4 translate-x-1/4">
        <span className="font-display font-bold text-[20vw] leading-none uppercase select-none text-[#7B61FF]">
          SKILLS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:justify-between items-start md:items-end mb-24">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[1px] bg-[#7B61FF]" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#7B61FF]">CAPABILITIES</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-7xl uppercase tracking-tighter">
              Core <br />
              <span className="text-[#7B61FF] italic font-normal">Expertise</span>
            </h2>
          </div>
          <p className="font-sans text-[#8C8A99] max-w-sm text-sm md:text-base leading-relaxed">
            Fusing strict logical grids and high-fidelity layouts with an relentless drive for visual and emotional impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {expertises.map((group, index) => {
            const IconComponent = group.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col group p-8 bg-[#141418] border border-[#2A2A35] hover:border-[#7B61FF] rounded-2xl transition-all duration-300"
                data-cursor="hover"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                     <span className="font-mono text-xs text-[#7B61FF]">0{index + 1} //</span>
                     <h3 className="font-display text-2xl uppercase tracking-tight font-semibold text-white">{group.title}</h3>
                  </div>
                  <IconComponent className="w-5 h-5 text-[#8C8A99] group-hover:text-[#7B61FF] transition-colors" />
                </div>
                
                <div className="w-full h-[1px] bg-[#2A2A35] mb-6 group-hover:bg-[#7B61FF]/40 transition-colors duration-500" />
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {group.items.map((item, i) => (
                    <li key={i} className="font-sans text-sm text-[#8C8A99] flex items-center gap-2 group-hover:text-neutral-200 transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#2A2A35] group-hover:bg-[#7B61FF] rounded-full transition-colors" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
