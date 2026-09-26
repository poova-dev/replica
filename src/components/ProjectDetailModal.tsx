import React, { useEffect } from 'react';
import { Project, PROJECTS } from '../data/projectsData';
import { X, ArrowRight, ArrowDown, MapPin, Calendar, Ruler, CheckCircle2, Hammer } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onStartProject: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onStartProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#faf9f6] text-stone-900 animate-in fade-in duration-300 select-none">
      
      {/* Top Floating Control Bar */}
      <div className="fixed top-6 left-6 right-6 z-50 flex items-center justify-between max-w-7xl mx-auto pointer-events-none">
        <div className="pointer-events-auto py-1.5 px-4 rounded-full bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-md flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-terracotta-500" />
          <span className="font-mono text-xs text-stone-800 uppercase tracking-widest font-semibold">
            DOSSIER: {project.title}
          </span>
        </div>

        <button
          onClick={onClose}
          className="pointer-events-auto p-2.5 rounded-full bg-white/95 backdrop-blur-md border border-stone-200 hover:border-terracotta-500 text-stone-700 hover:text-stone-950 transition-all hover:scale-105 shadow-md"
          aria-label="Close Project View"
          data-cursor="CLOSE"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* 01 — HERO: Full-screen project image */}
      <section className="relative w-full h-[85vh] sm:h-screen flex items-end p-6 sm:p-12 lg:p-16 overflow-hidden bg-stone-900">
        <div className="absolute inset-0">
          <img
            src={project.coverImage}
            alt={project.title}
            className={`w-full h-full object-cover filter contrast-[1.03] ${
              project.id === 'brick-house'
                ? 'object-[center_82%] scale-[1.18]'
                : 'object-center'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-stone-950/20" />
        </div>

        {/* Hero Overlay Content */}
        <div className="relative z-10 max-w-6xl w-full mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-mono tracking-widest text-terracotta-700 uppercase font-semibold">
            <span>01 — HERO</span>
            <span>•</span>
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[0.95]">
            {project.title}
          </h1>

          <p className="font-display text-lg sm:text-2xl text-stone-200 max-w-2xl font-light">
            {project.subtitle}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-6 text-stone-300 font-mono text-xs">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-terracotta-400" />
              {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Ruler className="w-4 h-4 text-amber-400" />
              {project.area}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-stone-300" />
              {project.year}
            </span>
          </div>

          <div className="pt-3">
            <button
              onClick={onStartProject}
              className="px-6 py-3 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-lg flex items-center gap-2"
              aria-label={`Start Your Project based on ${project.title}`}
            >
              <span>START YOUR PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Scroll down prompt */}
        <div className="absolute bottom-6 right-8 sm:right-16 hidden sm:flex items-center gap-2 font-mono text-xs text-stone-300">
          <span>EXPLORE DOSSIER</span>
          <ArrowDown className="w-4 h-4 text-terracotta-400 animate-bounce" />
        </div>
      </section>

      {/* Main Dossier Content Wrapper */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-24 space-y-24 sm:space-y-32">

        {/* 02 — PROJECT INFORMATION */}
        <section className="space-y-8 border-b border-stone-200 pb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-ultra-wide uppercase text-terracotta-600 font-bold">
              02 — PROJECT INFORMATION
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-2">
              <span className="font-mono text-[10px] tracking-widest text-stone-500 uppercase block font-semibold">PROJECT</span>
              <h4 className="font-display text-lg font-semibold text-stone-900">{project.title}</h4>
              <p className="text-xs text-stone-500 font-sans">{project.tagline}</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-2">
              <span className="font-mono text-[10px] tracking-widest text-stone-500 uppercase block font-semibold">LOCATION</span>
              <h4 className="font-display text-lg font-semibold text-stone-900">{project.location}</h4>
              <p className="text-xs text-stone-500 font-sans">Tamil Nadu, India</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-2">
              <span className="font-mono text-[10px] tracking-widest text-stone-500 uppercase block font-semibold">CATEGORY</span>
              <h4 className="font-display text-lg font-semibold text-stone-900">{project.category}</h4>
              <p className="text-xs text-stone-500 font-sans">Status: {project.status}</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-2">
              <span className="font-mono text-[10px] tracking-widest text-stone-500 uppercase block font-semibold">BUILT AREA</span>
              <h4 className="font-display text-lg font-semibold text-stone-900">{project.area}</h4>
              <p className="text-xs text-stone-500 font-sans">Delivered by Replica</p>
            </div>
          </div>

          {/* Scope of Work Pills */}
          <div className="p-6 rounded-2xl border border-stone-200 bg-[#f5f4f0] space-y-4">
            <span className="font-mono text-xs tracking-wider text-stone-500 uppercase block font-semibold">
              COMPREHENSIVE PROJECT SCOPE
            </span>
            <div className="flex flex-wrap gap-2.5">
              {project.scope.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-xs font-mono text-stone-800 flex items-center gap-2 shadow-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-terracotta-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Structural Engineering & Climatic Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.metrics.map((m, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
                <span className="text-[10px] font-mono text-stone-500 uppercase block font-semibold">{m.label}</span>
                <span className="text-xs sm:text-sm font-display font-semibold text-stone-900 mt-1 block">{m.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 03 — DESIGN STORY */}
        <section className="space-y-8 border-b border-stone-200 pb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-ultra-wide uppercase text-terracotta-600 font-bold">
              03 — DESIGN STORY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-serif text-3xl sm:text-4xl text-stone-900 font-light leading-tight">
                {project.designStory.heading}
              </h3>
              
              {project.designStory.quote && (
                <blockquote className="p-6 rounded-2xl border-l-4 border-terracotta-500 bg-[#f5f4f0] text-stone-800 font-serif italic text-lg sm:text-xl leading-relaxed">
                  "{project.designStory.quote}"
                  <footer className="mt-3 text-xs font-mono not-italic text-terracotta-600 font-bold uppercase">
                    — Ar. Sanjana, Principal Architect
                  </footer>
                </blockquote>
              )}
            </div>

            <div className="lg:col-span-7 space-y-6 text-stone-700 font-sans text-base sm:text-lg leading-relaxed">
              {project.designStory.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-terracotta-600' : ''}>
                  {p}
                </p>
              ))}

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-xs">
                  <span className="text-[10px] font-mono tracking-widest text-stone-500 uppercase block font-semibold">SPATIAL CONCEPT</span>
                  <p className="text-xs text-stone-800 font-medium mt-1">{project.spatialLayers.architecturalTrait}</p>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-xs">
                  <span className="text-[10px] font-mono tracking-widest text-stone-500 uppercase block font-semibold">MATERIAL PURITY</span>
                  <p className="text-xs text-stone-800 font-medium mt-1">{project.spatialLayers.materialNote}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — IMAGE SEQUENCE */}
        <section className="space-y-8 border-b border-stone-200 pb-16">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs tracking-ultra-wide uppercase text-terracotta-600 font-bold">
              04 — IMAGE SEQUENCE
            </span>
            <span className="font-mono text-xs text-stone-500 font-medium">
              {project.imageSequence.length} CAPTURED PERSPECTIVES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {project.imageSequence.map((img, idx) => {
              const isFull = idx === 0 || img.aspect === 'landscape';
              const colSpan = isFull ? 'md:col-span-12' : 'md:col-span-6';

              return (
                <div
                  key={idx}
                  className={`${colSpan} group relative rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-xl`}
                >
                  <div className={`w-full overflow-hidden ${img.aspect === 'portrait' ? 'aspect-[4/5]' : img.aspect === 'square' ? 'aspect-square' : 'aspect-[16/9]'}`}>
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 flex items-center justify-between bg-white border-t border-stone-100">
                    <div>
                      <span className="font-mono text-[9px] tracking-widest text-terracotta-600 uppercase block font-bold">
                        {img.tag}
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-stone-800 font-medium mt-0.5">
                        {img.caption}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-stone-400 shrink-0 ml-4 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 05 — CONSTRUCTION STAGE ARTIFACTS */}
        <section className="space-y-8 border-b border-stone-200 pb-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Hammer className="w-4 h-4 text-amber-600" />
              <span className="font-mono text-xs tracking-ultra-wide uppercase text-terracotta-600 font-bold">
                05 — CONSTRUCTION STAGE ARTIFACTS
              </span>
            </div>
            <span className="font-mono text-xs text-stone-500 font-semibold">
              LED BY ER. VIKASH QUAID
            </span>
          </div>

          <div className="p-6 rounded-2xl border border-stone-200 bg-[#f5f4f0]">
            <h4 className="font-serif text-2xl text-stone-900 mb-2">Monolithic Structural Discipline</h4>
            <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
              Every building by Replica is backed by rigorous on-site civil execution. Below are direct, unedited construction photographs documenting the excavation, rebar reinforcement grids, masonry water ponding, and precision corbeling executed by our in-house civil engineering crew.
            </p>
          </div>

          {project.constructionImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.constructionImages.map((cImg, cIdx) => (
                <div
                  key={cIdx}
                  className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-xl group"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-stone-100">
                    <img
                      src={cImg.url}
                      alt={cImg.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 space-y-2 border-t border-stone-100 bg-white">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase bg-amber-50 text-amber-700 border border-amber-200 font-bold">
                      {cImg.phase}
                    </span>
                    <h5 className="font-display text-base font-semibold text-stone-900">{cImg.title}</h5>
                    <p className="text-xs text-stone-600 font-sans leading-relaxed">{cImg.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-xl border border-dashed border-stone-300 text-center font-mono text-xs text-stone-500">
              [ SITE LOGS: Detailed civil engineering dossiers available upon consultation ]
            </div>
          )}
        </section>

        {/* 06 — FINAL RESULT */}
        <section className="space-y-8 border-b border-stone-200 pb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-ultra-wide uppercase text-terracotta-600 font-bold">
              06 — FINAL RESULT
            </span>
          </div>

          <div className="space-y-8">
            {project.finalImages.map((fImg, fIdx) => (
              <div
                key={fIdx}
                className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-xl group"
              >
                <div className="w-full max-h-[680px] overflow-hidden bg-stone-100">
                  <img
                    src={fImg.url}
                    alt={fImg.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border-t border-stone-100">
                  <div>
                    <h5 className="font-serif text-2xl text-stone-900">{fImg.title}</h5>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans mt-1">{fImg.description}</p>
                  </div>
                  <button
                    onClick={onStartProject}
                    className="px-6 py-2.5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white font-mono text-xs uppercase tracking-wider font-semibold shrink-0 transition-colors shadow-sm flex items-center gap-2"
                    aria-label={`Start Your Project with ${fImg.title}`}
                  >
                    <span>START YOUR PROJECT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 07 — NEXT PROJECT */}
        <section className="space-y-8 pt-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-ultra-wide uppercase text-stone-500 font-bold">
              07 — NEXT PROJECT
            </span>
          </div>

          <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onSelectProject(nextProject);
            }}
            className="group relative rounded-3xl overflow-hidden border border-stone-200 bg-white cursor-pointer shadow-xl transition-all duration-500 hover:border-terracotta-500"
            data-cursor="NEXT"
          >
            <div className="relative h-[340px] sm:h-[420px] w-full overflow-hidden bg-stone-100">
              <img
                src={nextProject.coverImage}
                alt={nextProject.title}
                className="w-full h-full object-cover filter contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-mono tracking-widest text-terracotta-300 uppercase block mb-1 font-bold">
                    UP NEXT • {nextProject.category}
                  </span>
                  <h3 className="font-serif text-4xl sm:text-5xl text-white font-light group-hover:text-terracotta-200 transition-colors">
                    {nextProject.title}
                  </h3>
                  <p className="text-sm font-sans text-stone-200 mt-1">
                    {nextProject.location} • {nextProject.year}
                  </p>
                </div>

                <div className="w-14 h-14 rounded-full bg-white group-hover:bg-terracotta-600 text-stone-950 group-hover:text-white flex items-center justify-center transition-all shadow-xl shrink-0">
                  <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
