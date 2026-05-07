import { motion } from 'motion/react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Void Identity',
    category: 'Brand Identity',
    year: '2023',
    image: '/selfie-suit.png',
  },
  {
    id: 2,
    title: 'Aura Digital',
    category: 'Print & Editorial Design',
    year: '2024',
    image: '/profile-suit-left.jpg',
  },
  {
    id: 3,
    title: 'Noir Fashion',
    category: 'Rebranding & Stationary',
    year: '2023',
    image: '/martini.png',
  },
  {
    id: 4,
    title: 'Echoes Framework',
    category: 'Packaging & Illustration',
    year: '2024',
    image: '/my-time-has-come.jpg',
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-32 w-full bg-transparent relative" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-20">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-neutral-500">Selected Work</span>
          <div className="flex-1 h-[1px] bg-neutral-800" />
        </div>

        <div className="relative w-full border-t border-neutral-800 flex flex-col" onMouseLeave={() => setHoveredProject(null)}>
          {projects.map((project, index) => (
            <motion.a
              href={`#project-${project.id}`}
              key={project.id}
              className="group relative w-full border-b border-neutral-800 py-10 flex flex-col md:flex-row md:items-center justify-between cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              data-cursor="hover"
            >
              {/* Text Content */}
              <div className="relative z-20 flex flex-col md:flex-row md:items-center gap-4 md:gap-16 mix-blend-difference text-white">
                <span className="font-sans text-xs text-neutral-500 w-12 hidden md:block">0{index + 1}</span>
                <h3 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter transition-all duration-500 group-hover:text-transparent group-hover:-webkit-text-stroke group-hover:italic">
                  {project.title}
                </h3>
              </div>
              
              <div className="relative z-20 mt-4 md:mt-0 flex flex-col md:text-right mix-blend-difference text-white">
                <span className="font-sans text-sm tracking-widest uppercase">{project.category}</span>
                <span className="font-sans text-xs text-neutral-500 mt-1">{project.year}</span>
              </div>

              {/* Hover Image Reveal */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[200px] md:h-[280px] pointer-events-none z-10 overflow-hidden opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out hidden md:block">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>

              {/* Mobile Image (Visible inline on small screens) */}
              <div className="w-full h-48 mt-6 overflow-hidden md:hidden block">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
