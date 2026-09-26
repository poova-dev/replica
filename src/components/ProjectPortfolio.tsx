import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/projectsData';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface ProjectPortfolioProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = [
  'All',
  'Residential',
  'Architecture',
  'Construction',
  'Interiors',
  'Landscape',
  'Renovation'
] as const;

export const ProjectPortfolio: React.FC<ProjectPortfolioProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-white border-t border-stone-200/90 select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Heading & Category Filter Strip */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-amber-600 rounded-full" />
              <span className="font-mono text-[11px] tracking-ultra-wide uppercase text-stone-500 font-semibold">
                CURATED CATALOGUE • {PROJECTS.length} BUILT WORKS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-stone-900 font-light tracking-tight">
              CURATED PROJECTS
            </h2>
          </div>

          {/* Prominent Category Filter Pills with Smooth Magnetic Response */}
          <div
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-stone-100/90 border border-stone-200/90 max-w-full shadow-xs"
            role="tablist"
            aria-label="Filter projects by architectural discipline"
          >
            {CATEGORIES.map((cat) => {
              const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;
              return (
                <MagneticButton
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? 'bg-stone-900 text-white font-semibold shadow-sm'
                      : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/70'
                  }`}
                  dataCursor="CAT"
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  aria-label={`Filter by ${cat} (${count} projects)`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] ${selectedCategory === cat ? 'text-stone-300' : 'text-stone-400'}`}>
                    ({count})
                  </span>
                </MagneticButton>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Architectural Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {filteredProjects.map((project, index) => {
            const isWide = index % 3 === 0;
            const colSpan = isWide ? 'md:col-span-8' : 'md:col-span-4';

            return (
              <article
                key={project.id}
                tabIndex={0}
                role="button"
                onClick={() => onSelectProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProject(project);
                  }
                }}
                className={`${colSpan} group relative rounded-2xl overflow-hidden border border-stone-200/90 bg-[#faf9f6] cursor-pointer transition-all duration-500 hover:border-terracotta-500 hover:shadow-xl hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:outline-none`}
                data-cursor="EXP"
                aria-label={`Open project dossier for ${project.title}, ${project.subtitle} in ${project.location}`}
              >
                {/* Image Container with Architectural Mask Reveal */}
                <div className={`w-full overflow-hidden relative ${isWide ? 'aspect-[16/10]' : 'aspect-[4/5]'} bg-stone-100`}>
                  <img
                    src={project.coverImage}
                    alt={`${project.title} - ${project.subtitle} by Replica Architects`}
                    className={`w-full h-full object-cover filter contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-[1.03] will-change-transform ${
                      project.id === 'brick-house'
                        ? 'object-[center_82%] scale-[1.18]'
                        : 'object-center'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/15 to-transparent opacity-80 group-hover:opacity-65 transition-opacity" />

                  {/* Top Badge: Category & Year */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono tracking-widest text-stone-800 uppercase border border-white/60 shadow-xs">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono tracking-widest text-stone-800 border border-white/60 shadow-xs">
                      {project.year}
                    </span>
                  </div>

                  {/* Floating Action Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    <div className="w-10 h-10 rounded-full bg-white text-stone-950 flex items-center justify-center shadow-lg">
                      <ArrowUpRight className="w-4 h-4 text-terracotta-600" />
                    </div>
                  </div>
                </div>

                {/* Card Editorial Footer */}
                <div className="p-6 space-y-3 bg-white border-t border-stone-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-terracotta-600 font-semibold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>
                    <span className="font-mono text-[10px] text-stone-500 font-medium">
                      {project.area}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-stone-900 font-light group-hover:text-terracotta-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-stone-600 font-sans line-clamp-2 leading-relaxed">
                    {project.overview}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-stone-100 text-[10px] font-mono text-stone-500">
                    <span className="truncate max-w-[200px] text-stone-600">{project.spatialLayers.architecturalTrait}</span>
                    <span className="text-stone-900 group-hover:text-terracotta-600 flex items-center gap-1 font-bold">
                      VIEW DOSSIER <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
