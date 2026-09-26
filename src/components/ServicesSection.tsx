import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/projectsData';
import { ArrowUpRight, Check, Compass } from 'lucide-react';

interface ServicesSectionProps {
  onStartProjectWithService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onStartProjectWithService }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(STUDIO_INFO.services[0].id);

  const activeService = STUDIO_INFO.services.find((s) => s.id === activeServiceId) || STUDIO_INFO.services[0];

  return (
    <section id="services" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#faf9f6] border-t border-stone-200/90 select-none scroll-mt-28">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-terracotta-500 rounded-full" />
            <span className="font-mono text-[11px] tracking-ultra-wide uppercase text-stone-500 font-semibold">
              DISCIPLINES & EXPERTISE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-light tracking-tight">
            INTEGRATED PRACTICE
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-sans leading-relaxed">
            From the first pencil stroke to structural calculation, monolithic masonry, and bespoke interior millwork. A unified atelier ensuring zero dilution of design intent.
          </p>
        </div>

        {/* Editorial Split Layout: Typography List on Left, Active Discipline Hero on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Typographic Service List */}
          <div className="lg:col-span-6 divide-y divide-stone-200 border-y border-stone-200">
            {STUDIO_INFO.services.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group py-6 sm:py-8 cursor-pointer transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-55 hover:opacity-85'
                  }`}
                  data-cursor="SELECT"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-xs text-terracotta-600 font-bold">
                        {service.number}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-900 font-light group-hover:text-terracotta-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                      isActive
                        ? 'border-terracotta-500 bg-terracotta-500 text-white rotate-45 shadow-sm'
                        : 'border-stone-300 text-stone-400 group-hover:border-stone-400 group-hover:text-stone-700'
                    }`}>
                      <ArrowUpRight className="w-4 h-4 transition-transform" />
                    </div>
                  </div>

                  {/* Mobile expansion content */}
                  {isActive && (
                    <div className="lg:hidden mt-4 pt-4 border-t border-stone-200 space-y-4 animate-in fade-in duration-200">
                      <p className="text-sm text-stone-600 leading-relaxed">
                        {service.description}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onStartProjectWithService(service.title);
                        }}
                        className="py-2.5 px-5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-mono uppercase tracking-wider shadow-sm font-semibold flex items-center gap-2"
                        aria-label={`Start Your Project with ${service.title}`}
                      >
                        <span>START YOUR PROJECT</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Hero Visual & Deliverables Showcase */}
          <div className="hidden lg:block lg:col-span-6 sticky top-28 space-y-8">
            <div className="relative rounded-3xl overflow-hidden border border-stone-200 bg-white shadow-xl group">
              <div className="relative h-[340px] w-full overflow-hidden bg-stone-100">
                <img
                  src={activeService.image}
                  alt={`${activeService.title} - Architectural Service by Replica Architects`}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                    activeService.id === 'architecture'
                      ? 'object-[center_82%] scale-[1.18]'
                      : 'object-center'
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-mono tracking-widest text-terracotta-300 uppercase block font-semibold">
                    CHAPTER {activeService.number}
                  </span>
                  <h4 className="font-serif text-3xl text-white font-light">
                    {activeService.title}
                  </h4>
                  <p className="text-xs font-sans text-stone-200 mt-1">
                    {activeService.subtitle}
                  </p>
                </div>
              </div>

              {/* Service Details & Deliverables */}
              <div className="p-8 space-y-6 bg-white border-t border-stone-100">
                <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed">
                  {activeService.description}
                </p>

                <div className="space-y-3">
                  <span className="font-mono text-xs tracking-wider text-stone-400 uppercase block font-semibold">
                    KEY SCOPE DELIVERABLES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.deliverables.map((del, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-stone-700">
                        <Check className="w-3.5 h-3.5 text-terracotta-600 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
                    <Compass className="w-4 h-4 text-amber-600" />
                    <span>Pattukkottai Studio Lead</span>
                  </div>

                  <button
                    onClick={() => onStartProjectWithService(activeService.title)}
                    className="px-6 py-2.5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-mono font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-lg hover:scale-105 flex items-center gap-2"
                    aria-label={`Start Your Project with ${activeService.title}`}
                  >
                    <span>START YOUR PROJECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
