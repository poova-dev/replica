import React, { useRef, useEffect, useCallback, useState } from 'react';
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck, MapPin } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface HeroProps {
  onExploreWork: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onStartProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const specularRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Target and current interpolated coordinates
  const targetXRef = useRef(0);
  const targetYRef = useRef(0);
  const currentXRef = useRef(0);
  const currentYRef = useRef(0);
  const mouseScreenXRef = useRef(50);
  const mouseScreenYRef = useRef(50);
  const currentSpecXRef = useRef(50);
  const currentSpecYRef = useRef(50);

  useEffect(() => {
    const checkMobile = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      const isSmall = window.innerWidth < 768;
      setIsMobile(isTouch || isSmall);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 60fps RAF lerp loop for subtle, calm architectural rotation
  useEffect(() => {
    if (isMobile) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId: number;

    const animateHero = () => {
      currentXRef.current += (targetXRef.current - currentXRef.current) * 0.08;
      currentYRef.current += (targetYRef.current - currentYRef.current) * 0.08;
      currentSpecXRef.current += (mouseScreenXRef.current - currentSpecXRef.current) * 0.1;
      currentSpecYRef.current += (mouseScreenYRef.current - currentSpecYRef.current) * 0.1;

      // Restrained perspective tilt: 50% reduced intensity (max ±1.8°)
      const rotX = -currentYRef.current * 1.8;
      const rotY = currentXRef.current * 1.8;

      if (cardRef.current) {
        cardRef.current.style.transform = `rotateX(${rotX.toFixed(3)}deg) rotateY(${rotY.toFixed(3)}deg)`;
      }

      if (specularRef.current) {
        specularRef.current.style.background = `radial-gradient(circle 440px at ${currentSpecXRef.current.toFixed(1)}% ${currentSpecYRef.current.toFixed(1)}%, rgba(255, 255, 255, 0.4) 0%, rgba(217, 107, 67, 0.08) 35%, transparent 70%)`;
      }

      rafId = requestAnimationFrame(animateHero);
    };

    rafId = requestAnimationFrame(animateHero);
    return () => cancelAnimationFrame(rafId);
  }, [isMobile]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    targetXRef.current = Math.max(-1, Math.min(1, (x - centerX) / centerX));
    targetYRef.current = Math.max(-1, Math.min(1, (y - centerY) / centerY));

    mouseScreenXRef.current = (x / rect.width) * 100;
    mouseScreenYRef.current = (y / rect.height) * 100;
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    targetXRef.current = 0;
    targetYRef.current = 0;
    mouseScreenXRef.current = 50;
    mouseScreenYRef.current = 50;
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-8 bg-[#faf9f6] architectural-grid select-none"
    >
      {/* Background Soft Atmospheric Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-terracotta-500/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Main Hero Container with 1200px Perspective */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Architectural Editorial Typography */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          
          {/* Top Label */}
          <div className="inline-flex items-center gap-2.5 py-1 px-3.5 rounded-full border border-stone-200 bg-white/90 backdrop-blur-md shadow-xs w-fit">
            <span className="w-2 h-2 rounded-full bg-terracotta-500 animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs tracking-architectural uppercase text-stone-700 font-medium">
              REPLICA ARCHITECTS & BUILDERS
            </span>
          </div>

          {/* Large Headline */}
          <div className="space-y-1">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-tight text-stone-900 leading-[1.02]">
              SPACES
              <span className="block text-stone-500 font-light italic">THAT DEFINE</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-stone-800 to-terracotta-600">
                THE WAY WE LIVE.
              </span>
            </h1>
          </div>

          {/* Supporting Text */}
          <p className="max-w-xl text-base sm:text-lg text-stone-600 font-sans leading-relaxed">
            Architecture, construction and interiors shaped around people, place and purpose.
            Specializing in climate-responsive load-bearing exposed brickwork, bespoke residential villas, and turnkey civil execution in Pattukkottai.
          </p>

          {/* CTAs with Magnetic Pull Micro-Interaction */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton
              onClick={onStartProject}
              className="group px-7 py-3.5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-mono tracking-widest uppercase font-semibold transition-all duration-300 shadow-md shadow-terracotta-600/25 hover:shadow-xl flex items-center gap-2"
              dataCursor="START"
            >
              <span>START YOUR PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>

            <MagneticButton
              onClick={onExploreWork}
              className="group px-7 py-3.5 rounded-full border border-stone-300 hover:border-stone-400 bg-white/90 hover:bg-white text-stone-800 hover:text-stone-950 text-xs font-mono tracking-widest uppercase font-medium transition-all duration-300 shadow-xs flex items-center gap-2.5"
              dataCursor="EXPLORE"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5 text-stone-600" />
            </MagneticButton>
          </div>

          {/* Architectural Metadata Badges */}
          <div className="pt-6 border-t border-stone-200 grid grid-cols-3 gap-4 text-left">
            <div>
              <span className="block font-mono text-[10px] tracking-wider text-stone-500 uppercase">LOCATION</span>
              <span className="font-display text-xs sm:text-sm font-semibold text-stone-800 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-terracotta-500" />
                Pattukkottai, TN
              </span>
            </div>
            <div>
              <span className="block font-mono text-[10px] tracking-wider text-stone-500 uppercase">PRACTICE</span>
              <span className="font-display text-xs sm:text-sm font-semibold text-stone-800 mt-0.5 block">
                Studio & Turnkey
              </span>
            </div>
            <div>
              <span className="block font-mono text-[10px] tracking-wider text-stone-500 uppercase">LEADERSHIP</span>
              <span className="font-display text-xs sm:text-sm font-semibold text-stone-800 mt-0.5 block">
                Er. Vikash & Ar. Sanjana
              </span>
            </div>
          </div>

        </div>

        {/* Right Column: 3D Spatial Architectural Visual Stage */}
        <div className="lg:col-span-6 perspective-stage relative flex items-center justify-center py-6">
          <div
            ref={cardRef}
            className="relative w-full max-w-[480px] aspect-[4/5] preserve-3d transition-transform duration-100 ease-out will-change-transform"
          >
            {/* Background Layer: Soft Limestone Plinth Offset (-30px) */}
            <div
              className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-stone-200/60 via-stone-100 to-white border border-stone-200/90 shadow-xl transition-all duration-300"
              style={{
                transform: 'translateZ(-30px)',
              }}
            >
              {/* Subtle Blueprint Grid Lines inside frame */}
              <div className="absolute inset-0 architectural-grid opacity-50 rounded-2xl" />
              
              {/* Coordinates Datum */}
              <div className="absolute top-4 left-5 text-[10px] font-mono tracking-widest text-stone-500 uppercase">
                LAT 10°25'42"N • LONG 79°19'11"E
              </div>
              <div className="absolute bottom-4 right-5 text-[10px] font-mono tracking-widest text-stone-500 uppercase">
                MASONRY TOLERANCE: ±1.5MM
              </div>
            </div>

            {/* Core Project Visual Layer (+10px) */}
            <div
              className="relative w-full h-full rounded-xl overflow-hidden border border-stone-200 shadow-2xl preserve-3d group bg-stone-100"
              style={{
                transform: 'translateZ(10px)',
              }}
            >
              {/* Primary Architectural Image */}
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src="/images/809386357_18099514082139857_4228897007025567517_n.jpg"
                  alt="The Brick Residence by Replica Architects in Pattukkottai"
                  className="w-full h-full object-cover object-[center_82%] scale-[1.18] filter contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-[1.22]"
                  loading="eager"
                />
              </div>

              {/* Dynamic Specular Lighting Gradient */}
              <div
                ref={specularRef}
                className="specular-highlight opacity-60"
              />

              {/* Architectural Framing Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none" />

              {/* Inset Badge: Project Title */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-terracotta-300 uppercase block font-semibold">
                    FEATURED RESIDENCE • PATTUKKOTTAI
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white drop-shadow-md">
                    The Brick House
                  </h3>
                  <p className="text-xs font-sans text-stone-200 mt-0.5">
                    Load-Bearing Wire-Cut Brick • Zero Concrete Columns
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center border border-white/60 text-stone-900 shadow-md">
                  <Compass className="w-4 h-4 text-terracotta-600" />
                </div>
              </div>
            </div>

            {/* Exploded Floating Spatial Detail Badge 01 (Upper Right, +45px) */}
            <div
              className="absolute -top-4 -right-6 py-2 px-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-xl hidden sm:flex items-center gap-2.5 preserve-3d"
              style={{
                transform: 'translateZ(45px)',
              }}
            >
              <div className="w-2 h-2 rounded-full bg-terracotta-500 animate-pulse" />
              <div className="text-left">
                <span className="block font-mono text-[8.5px] tracking-widest text-stone-500 uppercase">FACADE BOND</span>
                <span className="font-display text-xs font-semibold text-stone-900">Rat-Trap Cavity Wall</span>
              </div>
            </div>

            {/* Exploded Floating Spatial Detail Badge 02 (Left Elevation, +55px) */}
            <div
              className="absolute top-2/3 -left-8 -translate-y-1/2 py-2 px-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-xl hidden sm:flex items-center gap-2.5 preserve-3d"
              style={{
                transform: 'translateZ(55px)',
              }}
            >
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <div className="text-left">
                <span className="block font-mono text-[8.5px] tracking-widest text-stone-500 uppercase">MICROCLIMATE</span>
                <span className="font-display text-xs font-semibold text-stone-900">-4.5°C Passive Cooling</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[9px] font-mono tracking-ultra-wide uppercase text-stone-500 font-semibold">
          SCROLL TO EXPLORE
        </span>
        <div className="w-4 h-7 rounded-full border border-stone-300 flex items-start justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-terracotta-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
