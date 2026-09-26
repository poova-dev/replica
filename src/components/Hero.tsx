import React, { useRef } from 'react';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface HeroProps {
  onExploreWork: () => void;
  onStartProject: () => void;
}

const HERO_VIDEO_URL = 'https://res.cloudinary.com/dv1capz6x/video/upload/v1790442703/Untitled_design_hugpbi.mp4';

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onStartProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-8 select-none"
    >
      {/* 4K Cinematic Background Video - ZERO Overlay Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          src={HERO_VIDEO_URL}
        />
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="max-w-4xl space-y-6">
          
          {/* Top Label */}
          <div className="inline-flex items-center gap-2.5 py-1 px-3.5 rounded-full border border-white/30 bg-stone-950/65 backdrop-blur-md shadow-md w-fit">
            <span className="w-2 h-2 rounded-full bg-terracotta-500 animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs tracking-architectural uppercase text-stone-100 font-medium">
              REPLICA ARCHITECTS & BUILDERS
            </span>
          </div>

          {/* Large Headline */}
          <div className="space-y-1">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-normal tracking-tight text-white leading-[1.02] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              SPACES
              <span className="block text-stone-200 font-light italic">THAT DEFINE</span>
              <span className="block text-white">
                THE WAY WE LIVE.
              </span>
            </h1>
          </div>

          {/* Supporting Text */}
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-stone-100 font-sans font-normal leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
            Architecture, construction and interiors shaped around people, place and purpose.
            Specializing in climate-responsive load-bearing exposed brickwork, bespoke residential villas, and turnkey civil execution in Pattukkottai.
          </p>

          {/* CTAs with Magnetic Pull Micro-Interaction */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <MagneticButton
              onClick={onStartProject}
              className="group px-8 py-4 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-mono tracking-widest uppercase font-semibold transition-all duration-300 shadow-xl shadow-terracotta-600/40 hover:scale-105 flex items-center gap-2"
              dataCursor="START"
            >
              <span>START YOUR PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>

            <MagneticButton
              onClick={onExploreWork}
              className="group px-8 py-4 rounded-full border border-white/30 hover:border-white bg-stone-950/65 hover:bg-stone-900 text-white text-xs font-mono tracking-widest uppercase font-medium transition-all duration-300 shadow-md backdrop-blur-md flex items-center gap-2.5"
              dataCursor="EXPLORE"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5 text-stone-200" />
            </MagneticButton>
          </div>

          {/* Architectural Metadata Badges */}
          <div className="pt-8 border-t border-white/20 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left max-w-2xl">
            <div className="p-3.5 rounded-xl bg-stone-950/60 backdrop-blur-md border border-white/15">
              <span className="block font-mono text-[10px] tracking-wider text-stone-300 uppercase font-semibold">LOCATION</span>
              <span className="font-display text-xs sm:text-sm font-semibold text-white flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5 text-terracotta-400" />
                Pattukkottai, TN
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-950/60 backdrop-blur-md border border-white/15">
              <span className="block font-mono text-[10px] tracking-wider text-stone-300 uppercase font-semibold">PRACTICE</span>
              <span className="font-display text-xs sm:text-sm font-semibold text-white mt-1 block">
                Studio & Turnkey
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-stone-950/60 backdrop-blur-md border border-white/15">
              <span className="block font-mono text-[10px] tracking-wider text-stone-300 uppercase font-semibold">LEADERSHIP</span>
              <span className="font-display text-xs sm:text-sm font-semibold text-white mt-1 block">
                Er. Vikash & Ar. Sanjana
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity z-10">
        <span className="text-[9px] font-mono tracking-ultra-wide uppercase text-white font-semibold drop-shadow-md">
          SCROLL TO EXPLORE
        </span>
        <div className="w-4 h-7 rounded-full border border-white/60 bg-stone-950/40 backdrop-blur-xs flex items-start justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-terracotta-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
