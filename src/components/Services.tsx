import { motion } from 'motion/react';

const expertises = [
  {
    title: 'Brand Identity',
    items: ['Logo Design', 'Rebranding & Brand Refresh', 'Letterhead & Stationery', 'Business Cards']
  },
  {
    title: 'Print & Publication',
    items: ['Editorial Layouts', 'Poster & Flyer Design', 'Packaging Design', 'Print-Ready Assets']
  },
  {
    title: 'Visual Arts',
    items: ['Graphic Design', 'Flat & Line Art Illustration', 'Social Media Thumbnails (FB, IG, YT)', 'Custom Vectors']
  },
  {
    title: 'Tool Stack',
    items: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'CorelDRAW', 'Canva']
  }
];

export default function Services() {
  return (
    <section className="py-24 md:py-48 w-full bg-transparent text-[#ededed] border-t border-neutral-800 relative overflow-hidden" id="expertise">
      
      {/* Background typographic element */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none -translate-y-1/4 translate-x-1/4">
        <span className="font-display font-bold text-[20vw] leading-none uppercase select-none">
          Skills
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:justify-between items-start md:items-end mb-24">
          <h2 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter">
            Core <br />
            <span className="text-red-500 italic">Expertise</span>
          </h2>
          <p className="font-sans text-neutral-400 max-w-sm text-sm">
            Fusing tactical application of industry-standard tools with an unrelenting drive for aesthetic perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24">
          {expertises.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-6">
                 <span className="font-mono text-xs text-red-500">0{index + 1} //</span>
                 <h3 className="font-display text-2xl uppercase tracking-tight">{group.title}</h3>
              </div>
              <div className="w-full h-[1px] bg-neutral-800 mb-6 group-hover:bg-red-500/50 transition-colors duration-500" />
              <ul className="space-y-4">
                {group.items.map((item, i) => (
                  <li key={i} className="font-sans text-neutral-400 flex justify-between items-center group-hover:text-neutral-300 transition-colors">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
