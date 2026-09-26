import React from 'react';
import { Compass, ShieldCheck, MapPin } from 'lucide-react';

export const AboutStudio: React.FC = () => {
  return (
    <section id="studio" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#faf9f6] border-t border-stone-200/90 select-none">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Studio Story Section: Concept → Detail → Built Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-terracotta-500 rounded-full" />
              <span className="font-mono text-[11px] tracking-ultra-wide uppercase text-stone-500 font-semibold">
                OUR PHILOSOPHY • PATTUKKOTTAI
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-light tracking-tight leading-[1.05]">
              CONCEPT → DETAIL → BUILT FORM.
            </h2>

            <p className="text-base sm:text-lg text-stone-700 font-sans leading-relaxed">
              Founded in Pattukkottai, Replica Architects & Builders was created to bridge the critical divide between abstract architectural drawings and rugged construction site execution.
            </p>

            <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
              We do not treat architecture as a skin pasted over concrete cages. In a tropical climate like Tamil Nadu, true spatial excellence comes from honoring gravity, designing for cross-ventilation, and letting authentic wire-cut terracotta bricks, natural stone, and timber breathe without unnecessary artificial coats.
            </p>

            {/* Triad Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-200">
              <div className="space-y-1">
                <span className="font-mono text-xs text-terracotta-600 font-bold">01 CONCEPT</span>
                <p className="text-xs font-sans text-stone-600">Climatic orientation & human ritual zoning</p>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-xs text-amber-600 font-bold">02 DETAIL</span>
                <p className="text-xs font-sans text-stone-600">Millimeter-accurate joinery & load analysis</p>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-xs text-stone-800 font-bold">03 BUILT FORM</span>
                <p className="text-xs font-sans text-stone-600">Monolithic masonry & turnkey civil delivery</p>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Experience & Founders Feature Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-stone-200 bg-white shadow-xl group">
              <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <img
                  src="/images/774282118_18328014520272222_3521361176383016745_n.jpg"
                  alt="Replica Architects Atelier Entrance in Pattukkottai"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
              </div>

              <div className="p-6 sm:p-8 bg-white border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-terracotta-600 uppercase block font-semibold">
                    PHYSICAL DESIGN ATELIER
                  </span>
                  <h4 className="font-serif text-2xl text-stone-900 font-normal">
                    Manikund Junction, Pattukkottai
                  </h4>
                  <p className="text-xs font-sans text-stone-500 mt-1">
                    An interactive space where clients touch materials and explore real brick bonds.
                  </p>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-stone-700 shrink-0 font-medium">
                  <MapPin className="w-4 h-4 text-terracotta-500" />
                  <span>Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Leadership Cards: Er. Vikash Quaid & Ar. Sanjana */}
        <div className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="font-mono text-[11px] tracking-ultra-wide uppercase text-stone-500 font-semibold">
              STUDIO LEADERSHIP
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-stone-900 font-light mt-1">
              THE MINDS BEHIND REPLICA
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Founder 1: Er. Vikash Quaid */}
            <div className="rounded-3xl p-6 sm:p-8 border border-stone-200 bg-white shadow-xl space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-stone-200 shrink-0 bg-stone-100">
                    <img
                      src="/images/808450719_18630347656034393_7430457252501023653_n.jpg"
                      alt="Er. Vikash Quaid, Founder"
                      className="w-full h-full object-cover object-[65%_25%] scale-[1.35]"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-terracotta-600 block font-bold">
                      FOUNDER & MANAGING DIRECTOR
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl text-stone-900 font-light">
                      Er. Vikash Quaid
                    </h4>
                    <p className="font-mono text-xs text-stone-500 mt-0.5">
                      B.E. Civil Engineering • Structural Construction Lead
                    </p>
                  </div>
                </div>

                <p className="text-sm text-stone-600 font-sans leading-relaxed">
                  Leading on-site civil execution, Er. Vikash Quaid brings structural clarity to complex architectural visions. From sub-structure raft excavations to high-precision load calculations for unreinforced brick masonry, his on-site discipline guarantees lifetime structural safety and milestone adherence.
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
                <span>Civil Quality & Turnkey Handover</span>
                <ShieldCheck className="w-4 h-4 text-amber-600" />
              </div>
            </div>

            {/* Founder 2: Ar. Sanjana */}
            <div className="rounded-3xl p-6 sm:p-8 border border-stone-200 bg-white shadow-xl space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-stone-200 shrink-0 bg-stone-100">
                    <img
                      src="/images/806473580_18098747981139857_8608575887677638433_n.jpg"
                      alt="Ar. Sanjana, Principal Architect"
                      className="w-full h-full object-cover object-[25%_65%] scale-[1.65]"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-terracotta-600 block font-bold">
                      PRINCIPAL ARCHITECT
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl text-stone-900 font-light">
                      Ar. Sanjana
                    </h4>
                    <p className="font-mono text-xs text-stone-500 mt-0.5">
                      B.Arch • Registered Architect (Council of Architecture)
                    </p>
                  </div>
                </div>

                <p className="text-sm text-stone-600 font-sans leading-relaxed">
                  Steering the creative studio, Ar. Sanjana pioneers climate-responsive exposed brick architecture that elevates everyday living. Her work focuses on thermal cavity bonds, daylight penetration, and artisanal wood joinery, crafting homes that feel inherently grounded in regional soil.
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
                <span>Spatial Design & Material Research</span>
                <Compass className="w-4 h-4 text-terracotta-600" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
