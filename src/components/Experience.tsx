import { motion } from 'motion/react';

const experiences = [
  {
    role: 'Independent Graphic Designer',
    company: 'Freelance & Contracting',
    period: '2022 — Present',
    description: 'Leading end-to-end brand identity projects, editorial layouts, and visual experiences for boutique luxury brands and modern tech startups.'
  },
  {
    role: 'B.Sc. Professional (Honours)',
    company: 'National University',
    period: 'Current',
    description: 'Pursuing higher education while continuously refining technical and creative capabilities in digital art and graphic design.'
  },
  {
    role: 'Higher Secondary Certificate',
    company: 'Advance Residential Model Collage',
    period: 'Passed 2024',
    description: 'Graduated with a GPA of 4.33 out of 5.00, demonstrating strong academic foundation and discipline.'
  }
];

export default function Experience() {
  return (
    <section className="py-24 md:py-48 w-full bg-transparent text-[#F5F5F5] relative border-t border-[#222]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        <div className="mb-24 flex items-center justify-between">
          <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tighter">
            Path &<br/>
            <span className="text-neutral-500 italic">Evolution</span>
          </h2>
          <div className="hidden md:block">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="animate-[spin_10s_linear_infinite]">
              <path d="M30 0L32.6515 27.3485L60 30L32.6515 32.6515L30 60L27.3485 32.6515L0 30L27.3485 27.3485L30 0Z" fill="#ff3333"/>
            </svg>
          </div>
        </div>

        <div className="space-y-12 md:space-y-24">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
                
                {/* Mobile line indicator */}
                <div className="absolute left-0 top-2 w-[1px] h-full bg-neutral-800 md:hidden block" />
                <div className="absolute left-[-3px] top-2 w-[7px] h-[7px] bg-red-500 rounded-full md:hidden block" />

                <div className="col-span-3 mb-2 md:mb-0">
                  <span className="font-mono text-xs md:text-sm text-neutral-500">{exp.period}</span>
                </div>
                
                <div className="col-span-9 flex flex-col">
                  <h3 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight mb-2">
                    {exp.role}
                  </h3>
                  <h4 className="font-sans text-red-500 text-sm tracking-widest uppercase mb-4">
                    {exp.company}
                  </h4>
                  <p className="font-sans text-neutral-400 text-sm md:text-base leading-relaxed max-w-xl">
                    {exp.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
