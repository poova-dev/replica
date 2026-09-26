import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/projectsData';
import { Clock, CheckCircle2 } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-white border-t border-stone-200/90 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-600 rounded-full" />
              <span className="font-mono text-[11px] tracking-ultra-wide uppercase text-stone-500 font-semibold">
                METHODOLOGY & EXECUTION
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-stone-900 font-light tracking-tight">
              ARCHITECTURAL TIMELINE
            </h2>
          </div>

          <p className="max-w-md text-sm text-stone-600 font-sans leading-relaxed">
            Our structured 6-stage lifecycle bridges abstract creative imagination with uncompromising structural engineering on the construction site.
          </p>
        </div>

        {/* Timeline Grid (6 Stages) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDIO_INFO.process.map((item, index) => {
            const isSelected = activeStep === index;
            return (
              <div
                key={item.step}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
                className={`relative rounded-2xl p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 ${
                  isSelected
                    ? 'border-terracotta-500 bg-white shadow-xl -translate-y-1 ring-1 ring-terracotta-500/20'
                    : 'border-stone-200/90 bg-[#faf9f6] hover:border-stone-300 hover:bg-white hover:shadow-md'
                }`}
                data-cursor="STEP"
              >
                {/* Step Top Bar */}
                <div className="flex items-center justify-between border-b border-stone-200/80 pb-4">
                  <span className={`font-mono text-3xl font-light transition-colors ${
                    isSelected ? 'text-terracotta-600 font-normal' : 'text-stone-400'
                  }`}>
                    {item.step}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-stone-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-terracotta-500" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Step Name & Subtitle */}
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-stone-900 font-normal">
                    {item.name}
                  </h3>
                  <p className="font-mono text-xs text-terracotta-600 uppercase tracking-wider font-semibold">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-stone-600 font-sans leading-relaxed pt-2">
                    {item.detail}
                  </p>
                </div>

                {/* Milestone Deliverable */}
                <div className="pt-4 border-t border-stone-200/80 flex items-center gap-2 text-xs font-mono text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span className="truncate font-medium">{item.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Bar */}
        <div className="p-6 rounded-2xl border border-stone-200 bg-[#f5f4f0] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div className="space-y-1">
            <span className="font-mono text-[10px] tracking-widest text-stone-500 uppercase font-semibold">
              QUALITY ASSURANCE
            </span>
            <p className="font-display text-sm text-stone-800 font-medium">
              120-Point Civil Quality Audit & Structural Compliance Check Before Handover.
            </p>
          </div>
          <div className="font-mono text-xs text-terracotta-700 font-bold tracking-wider">
            ZERO COST OVERRUN PROTOCOL
          </div>
        </div>

      </div>
    </section>
  );
};
