import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Project, PROJECTS } from '../data/projectsData';
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, Maximize2, Layers, MapPin, Eye } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface SpatialStageProps {
  onSelectProject: (project: Project) => void;
  onStartProject?: () => void;
}

export const SpatialStage: React.FC<SpatialStageProps> = ({ onSelectProject, onStartProject }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionState, setTransitionState] = useState<'idle' | 'exiting' | 'entering'>('idle');
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isExploded, setIsExploded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // References for 60fps GPU RAF lerp transforms
  const stageRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null); // Background
  const layer2Ref = useRef<HTMLDivElement>(null); // Architectural Hero Frame
  const layer3Ref = useRef<HTMLDivElement>(null); // Foreground Detail Badges
  const layer4Ref = useRef<HTMLDivElement>(null); // Project Editorial Typography
  const layer5Ref = useRef<HTMLDivElement>(null); // Dynamic Specular Light
  const stageRigidRef = useRef<HTMLDivElement>(null); // 3D Tilt Anchor

  // Coordinates & target interpolation
  const targetXRef = useRef(0);
  const targetYRef = useRef(0);
  const currentXRef = useRef(0);
  const currentYRef = useRef(0);
  const mouseScreenXRef = useRef(50);
  const mouseScreenYRef = useRef(50);
  const currentSpecXRef = useRef(50);
  const currentSpecYRef = useRef(50);

  const currentProject = PROJECTS[currentIndex];

  // Mobile & reduced-motion check
  useEffect(() => {
    const checkViewport = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      const isSmall = window.innerWidth < 768;
      setIsMobile(isTouch || isSmall);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Smooth 60fps RAF lerp loop for restrained architectural mouse parallax
  useEffect(() => {
    if (isMobile) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId: number;

    const animateSpatialStage = () => {
      const lerp = 0.075;
      currentXRef.current += (targetXRef.current - currentXRef.current) * lerp;
      currentYRef.current += (targetYRef.current - currentYRef.current) * lerp;
      currentSpecXRef.current += (mouseScreenXRef.current - currentSpecXRef.current) * 0.1;
      currentSpecYRef.current += (mouseScreenYRef.current - currentSpecYRef.current) * 0.1;

      const normX = currentXRef.current;
      const normY = currentYRef.current;

      // Gyroscopic Perspective Tilt: max ±1.8° to ±2.0°
      const rotX = -normY * 1.8;
      const rotY = normX * 1.8;

      if (stageRigidRef.current) {
        stageRigidRef.current.style.transform = `rotateX(${rotX.toFixed(3)}deg) rotateY(${rotY.toFixed(3)}deg)`;
      }

      // LAYER 1: Background Plane (-2.5px)
      if (layer1Ref.current) {
        const bgShiftX = -normX * 2.5;
        const bgShiftY = -normY * 2.5;
        const zDepth = isExploded ? -75 : -25;
        layer1Ref.current.style.transform = `translate3d(${bgShiftX.toFixed(2)}px, ${bgShiftY.toFixed(2)}px, ${zDepth}px)`;
      }

      // LAYER 2: Architecture Frame (+4.5px)
      if (layer2Ref.current) {
        const imgShiftX = normX * 4.5;
        const imgShiftY = normY * 4.5;
        const zDepth = isExploded ? 35 : 12;
        layer2Ref.current.style.transform = `translate3d(${imgShiftX.toFixed(2)}px, ${imgShiftY.toFixed(2)}px, ${zDepth}px)`;
      }

      // LAYER 3: Foreground Architectural Badges (+9px)
      if (layer3Ref.current) {
        const badgeShiftX = normX * 9.0;
        const badgeShiftY = normY * 9.0;
        const zDepth = isExploded ? 85 : 42;
        layer3Ref.current.style.transform = `translate3d(${badgeShiftX.toFixed(2)}px, ${badgeShiftY.toFixed(2)}px, ${zDepth}px)`;
      }

      // LAYER 4: Project Editorial Information (+3.5px)
      if (layer4Ref.current) {
        const textShiftX = normX * 3.5;
        const textShiftY = normY * 3.5;
        const zDepth = isExploded ? 60 : 25;
        layer4Ref.current.style.transform = `translate3d(${textShiftX.toFixed(2)}px, ${textShiftY.toFixed(2)}px, ${zDepth}px)`;
      }

      // LAYER 5: Dynamic Specular Lighting Optics (Warm daylight sheen)
      if (layer5Ref.current) {
        const specX = currentSpecXRef.current;
        const specY = currentSpecYRef.current;
        layer5Ref.current.style.background = `radial-gradient(circle 520px at ${specX.toFixed(1)}% ${specY.toFixed(1)}%, rgba(255, 255, 255, 0.45) 0%, rgba(217, 107, 67, 0.08) 35%, transparent 75%)`;
      }

      rafId = requestAnimationFrame(animateSpatialStage);
    };

    rafId = requestAnimationFrame(animateSpatialStage);
    return () => cancelAnimationFrame(rafId);
  }, [isExploded, isMobile]);

  // Mouse move handler over stage
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const stage = stageRef.current;
    if (!stage) return;

    const rect = stage.getBoundingClientRect();
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

  // Cinematic 3D Scroll & Step Transition
  const triggerProjectChange = useCallback((nextIndex: number, dir: 'next' | 'prev') => {
    if (transitionState !== 'idle') return;
    setDirection(dir);
    setTransitionState('exiting');

    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setTransitionState('entering');

      setTimeout(() => {
        setTransitionState('idle');
      }, 500);
    }, 350);
  }, [transitionState]);

  const handleNext = useCallback(() => {
    const next = (currentIndex + 1) % PROJECTS.length;
    triggerProjectChange(next, 'next');
  }, [currentIndex, triggerProjectChange]);

  const handlePrev = useCallback(() => {
    const prev = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    triggerProjectChange(prev, 'prev');
  }, [currentIndex, triggerProjectChange]);

  // Subtle Trackpad/Wheel gesture support over stage with cooldown
  const lastScrollTime = useRef(0);
  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 650) return;

    if (Math.abs(e.deltaY) > 45 && Math.abs(e.deltaX) < 30) {
      if (e.deltaY > 0) {
        lastScrollTime.current = now;
        handleNext();
      } else if (e.deltaY < 0) {
        lastScrollTime.current = now;
        handlePrev();
      }
    }
  }, [handleNext, handlePrev]);

  // Touch Swipe for Mobile
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  return (
    <section
      id="work"
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full bg-[#f8f7f4] border-t border-stone-200/90 pt-28 pb-16 px-4 sm:px-8 lg:px-12 overflow-hidden select-none"
    >
      {/* Blueprint Grid Ambient Background */}
      <div className="absolute inset-0 architectural-grid opacity-40 pointer-events-none" />

      {/* Top Header & Integrated Project Filter Bar */}
      <div className="relative z-20 max-w-7xl w-full mx-auto space-y-6 pb-6 border-b border-stone-200">
        
        {/* Row 1: Section Title & 3D Stage Mode Switcher */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 bg-terracotta-500 rounded-full" />
              <span className="font-mono text-[11px] tracking-ultra-wide uppercase text-stone-500 font-semibold">
                KINETIC SPATIAL STAGE • 01 — 06
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-light tracking-tight">
              FEATURED ARCHITECTURE
            </h2>
          </div>

          {/* Spatial Stage Controls: Explode Layers Toggle & Navigation */}
          <div className="flex items-center gap-3">
            <MagneticButton
              onClick={() => setIsExploded(!isExploded)}
              className={`hidden sm:flex items-center gap-2 py-2 px-4 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 border shadow-xs ${
                isExploded
                  ? 'bg-terracotta-600 border-terracotta-500 text-white shadow-md'
                  : 'bg-white border-stone-200 text-stone-700 hover:text-stone-950 hover:border-stone-300'
              }`}
              dataCursor={isExploded ? 'COLLAPSE' : 'EXPLODE'}
              aria-label="Toggle Exploded Architectural Layers"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{isExploded ? 'LAYERS EXPLODED' : 'EXPLODE 3D LAYERS'}</span>
            </MagneticButton>

            <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border border-stone-200 shadow-xs">
              <MagneticButton
                onClick={handlePrev}
                className="w-9 h-9 rounded-full flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                aria-label="Previous Architectural Project"
                dataCursor="PREV"
              >
                <ArrowLeft className="w-4 h-4" />
              </MagneticButton>

              <div className="font-mono text-xs text-stone-600 px-3 tracking-widest flex items-center gap-1">
                <span className="text-stone-950 font-bold">0{currentIndex + 1}</span>
                <span className="text-stone-400">/</span>
                <span>0{PROJECTS.length}</span>
              </div>

              <MagneticButton
                onClick={handleNext}
                className="w-9 h-9 rounded-full flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                aria-label="Next Architectural Project"
                dataCursor="NEXT"
              >
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Row 2: Elevated Project Switcher Bar (Placed directly up here so it's NEVER hidden or cut off!) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {PROJECTS.map((proj, idx) => (
            <MagneticButton
              key={proj.id}
              onClick={() => triggerProjectChange(idx, idx > currentIndex ? 'next' : 'prev')}
              className={`group flex items-center gap-2.5 py-2 px-3 sm:px-4 rounded-xl transition-all duration-300 text-left whitespace-nowrap border shrink-0 ${
                idx === currentIndex
                  ? 'bg-white border-stone-300 text-stone-950 shadow-md ring-1 ring-terracotta-500/20'
                  : 'bg-stone-100/70 border-stone-200/80 hover:bg-white text-stone-500 hover:text-stone-900'
              }`}
              dataCursor={`0${idx + 1}`}
              aria-label={`Select architectural project 0${idx + 1}: ${proj.title}`}
              aria-pressed={idx === currentIndex}
            >
              <div className="w-6 h-6 rounded-md overflow-hidden bg-stone-200 border border-stone-200 shrink-0">
                <img
                  src={proj.coverImage}
                  alt={`${proj.title} thumbnail`}
                  className={`w-full h-full object-cover ${
                    proj.id === 'brick-house' ? 'object-[center_82%] scale-125' : 'object-center'
                  }`}
                  width="24"
                  height="24"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="block font-mono text-[8.5px] text-stone-400 uppercase tracking-widest leading-none">
                  0{idx + 1} • {proj.category}
                </span>
                <span className="font-display text-xs font-semibold tracking-wide text-stone-900 mt-0.5 block">
                  {proj.title}
                </span>
              </div>
            </MagneticButton>
          ))}
        </div>

      </div>

      {/* Main 3D Spatial Canvas (Perspective ~1200px) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-6 sm:my-8 perspective-stage">
        
        {/* Rigid Spatial Stage Anchor with 3D Preservation */}
        <div
          ref={stageRigidRef}
          className="relative w-full min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] preserve-3d transition-transform duration-200 ease-out grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >

          {/* =========================================================================
              LAYER 1: BACKGROUND BLUEPRINT DATUM PLANE (Depth: -25px to -75px)
              ========================================================================= */}
          <div
            ref={layer1Ref}
            className="absolute inset-0 rounded-2xl pointer-events-none border border-stone-200/80 bg-white/60 backdrop-blur-[3px] shadow-sm transition-all duration-500 ease-out preserve-3d"
          >
            {/* Elevation Datum Lines */}
            <div className="absolute top-5 left-6 text-stone-500 font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
              DATUM: {currentProject.location} • ELEV +42.50M
            </div>
            <div className="absolute bottom-5 right-6 text-stone-500 font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
              <span>PATTUKKOTTAI ATELIER ARCHIVE</span>
              <span className="text-terracotta-600 font-semibold">REF #{currentProject.id.toUpperCase()}</span>
            </div>

            {/* Architectural Layer Dimension Lines in Exploded Mode */}
            {isExploded && (
              <div className="hidden sm:block absolute inset-x-8 top-1/2 -translate-y-1/2 pointer-events-none">
                <div className="border-t border-dashed border-terracotta-500/40 flex justify-between text-[9px] font-mono text-terracotta-700 font-medium pt-1">
                  <span>LAYER 01: BLUEPRINT DATUM (-75MM)</span>
                  <span>LAYER 02: THERMAL MASS (+35MM)</span>
                  <span>LAYER 03: FOREGROUND DETAILS (+85MM)</span>
                </div>
              </div>
            )}
          </div>

          {/* =========================================================================
              LAYER 2 & 5: ARCHITECTURAL PHOTOGRAPHY & DYNAMIC SPECULAR OPTICS (Cols 7-12)
              ========================================================================= */}
          <div
            ref={layer2Ref}
            className={`lg:col-span-7 relative h-[380px] sm:h-[460px] lg:h-[540px] w-full preserve-3d transition-all duration-500 ease-out ${
              transitionState === 'exiting'
                ? direction === 'next'
                  ? 'scale-[0.96] translate-z-[-60px] -rotate-y-2 opacity-30 blur-[1px]'
                  : 'scale-[0.96] translate-z-[-60px] rotate-y-2 opacity-30 blur-[1px]'
                : transitionState === 'entering'
                ? 'scale-[0.98] translate-z-[25px] opacity-90 architectural-mask-enter'
                : 'scale-100 translate-z-[0px] opacity-100'
            }`}
          >
            {/* The Precision Architectural Image Frame */}
            <div
              onClick={() => onSelectProject(currentProject)}
              className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer group shadow-xl border border-stone-200/90 transition-all duration-500 hover:border-terracotta-500/80 preserve-3d bg-stone-100"
              data-cursor="VIEW"
            >
              {/* Primary Architectural Image */}
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src={currentProject.coverImage}
                  alt={currentProject.title}
                  className={`w-full h-full object-cover filter contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
                    currentProject.id === 'brick-house'
                      ? 'object-[center_82%] scale-[1.18]'
                      : 'object-center'
                  }`}
                  loading="eager"
                />
              </div>

              {/* LAYER 5: Dynamic Specular Lighting Optics (Warm daylight sheen) */}
              <div
                ref={layer5Ref}
                className="specular-highlight opacity-75"
              />

              {/* Architectural Shadow Vignettes for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent pointer-events-none" />

              {/* Bottom Inset Project Tag & Quick Dossier Trigger */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10 pointer-events-none">
                <div className="max-w-md">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-stone-950/80 backdrop-blur-md border border-stone-700/80 text-[10px] font-mono tracking-widest text-terracotta-400 uppercase mb-2">
                    <span>{currentProject.category}</span>
                    <span className="w-1 h-1 rounded-full bg-stone-500" />
                    <span>{currentProject.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal drop-shadow-md">
                    {currentProject.title}
                  </h3>
                  <p className="text-xs font-sans text-stone-200 mt-1 max-w-sm line-clamp-1">
                    {currentProject.tagline}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center border border-white/60 text-stone-900 group-hover:bg-terracotta-600 group-hover:text-white group-hover:border-terracotta-500 transition-all shadow-xl pointer-events-auto">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* =========================================================================
                LAYER 3: FOREGROUND ARCHITECTURAL DETAIL BADGES (Depth: +42px to +85px)
                ========================================================================= */}
            <div
              ref={layer3Ref}
              className="absolute inset-0 pointer-events-none preserve-3d"
            >
              {/* Badge 01: Architectural Trait Callout (Top Left) */}
              <div className="absolute -top-3.5 -left-3 sm:-left-5 py-2 px-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-xl hidden sm:flex items-center gap-2.5 preserve-3d transition-transform duration-300">
                <div className="w-2 h-2 rounded-full bg-terracotta-500 animate-pulse" />
                <div className="text-left">
                  <span className="block font-mono text-[8.5px] tracking-widest text-stone-500 uppercase">
                    ARCHITECTURAL TRAIT
                  </span>
                  <span className="font-display text-xs font-semibold text-stone-900">
                    {currentProject.spatialLayers.architecturalTrait}
                  </span>
                </div>
              </div>

              {/* Badge 02: Materiality / Climate Note (Bottom Right) */}
              <div className="absolute -bottom-3.5 -right-3 sm:-right-5 py-2 px-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-xl hidden sm:flex items-center gap-2.5 preserve-3d transition-transform duration-300">
                <div className="w-6 h-6 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center text-amber-600">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="block font-mono text-[8.5px] tracking-widest text-stone-500 uppercase">
                    MATERIALITY NOTE
                  </span>
                  <span className="font-display text-xs font-medium text-stone-900 max-w-[210px] truncate block">
                    {currentProject.spatialLayers.materialNote}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* =========================================================================
              LAYER 4: INDEPENDENT PROJECT INFORMATION & EDITORIAL METRICS (Cols 1-5)
              ========================================================================= */}
          <div
            ref={layer4Ref}
            className="lg:col-span-5 flex flex-col justify-center space-y-5 preserve-3d"
          >
            {/* 1. PROJECT NUMBER & CATEGORY */}
            <div
              className={`flex items-center gap-3 transition-all duration-500 ${
                transitionState === 'exiting' ? 'opacity-0 -translate-x-3' : 'opacity-100 translate-x-0'
              }`}
            >
              <span className="px-2.5 py-0.5 rounded border border-stone-200 bg-white text-stone-700 font-mono text-xs font-semibold shadow-xs">
                0{currentIndex + 1}
              </span>
              <span className="font-mono text-xs tracking-architectural uppercase text-terracotta-600 font-bold">
                {currentProject.category.toUpperCase()}
              </span>
              <span className="w-1 h-1 rounded-full bg-stone-300" />
              <span className="font-mono text-xs tracking-wider text-stone-500">
                {currentProject.status}
              </span>
            </div>

            {/* 2. PROJECT NAME & SUBTITLE */}
            <div
              className={`space-y-1 transition-all duration-500 delay-75 ${
                transitionState === 'exiting' ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'
              }`}
            >
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight leading-[1.05]">
                {currentProject.title}
              </h3>
              <p className="font-display text-base sm:text-lg text-stone-600 font-normal">
                {currentProject.subtitle}
              </p>
            </div>

            {/* 3. LOCATION & YEAR */}
            <div
              className={`flex items-center gap-4 text-xs font-mono text-stone-500 transition-all duration-500 delay-100 ${
                transitionState === 'exiting' ? 'opacity-0 -translate-x-3' : 'opacity-100 translate-x-0'
              }`}
            >
              <div className="flex items-center gap-1.5 text-stone-800 font-medium">
                <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
                <span>{currentProject.location}</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-stone-300" />
              <span>COMPLETED {currentProject.year}</span>
              <span className="w-1 h-1 rounded-full bg-stone-300" />
              <span>{currentProject.area}</span>
            </div>

            {/* 4. OVERVIEW EXCERPT */}
            <p
              className={`text-sm sm:text-base text-stone-600 font-sans leading-relaxed line-clamp-3 transition-all duration-500 delay-150 ${
                transitionState === 'exiting' ? 'opacity-0 -translate-x-3' : 'opacity-100 translate-x-0'
              }`}
            >
              {currentProject.overview}
            </p>

            {/* 5. ARCHITECTURAL METRICS GRID */}
            <div
              className={`grid grid-cols-2 gap-3 py-4 border-y border-stone-200 transition-all duration-500 delay-200 ${
                transitionState === 'exiting' ? 'opacity-0 -translate-x-2' : 'opacity-100 translate-x-0'
              }`}
            >
              {currentProject.metrics.slice(0, 4).map((metric, i) => (
                <div key={i} className="space-y-0.5">
                  <span className="font-mono text-[9.5px] tracking-wider text-stone-400 uppercase block">
                    {metric.label}
                  </span>
                  <span className="font-display text-xs sm:text-sm font-semibold text-stone-800">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* 6. MAGNETIC ACTION BUTTONS */}
            <div
              className={`flex flex-wrap items-center gap-3 pt-1 transition-all duration-500 delay-200 ${
                transitionState === 'exiting' ? 'opacity-0 -translate-x-2' : 'opacity-100 translate-x-0'
              }`}
            >
              <MagneticButton
                onClick={() => onSelectProject(currentProject)}
                className="group flex-1 sm:flex-none px-6 py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-mono text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all"
                dataCursor="DOSSIER"
                aria-label={`Explore architectural dossier for ${currentProject.title}`}
              >
                <span>EXPLORE DOSSIER</span>
                <Eye className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
              </MagneticButton>

              {onStartProject && (
                <MagneticButton
                  onClick={onStartProject}
                  className="group px-6 py-3.5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white font-mono text-xs tracking-widest uppercase font-semibold hidden sm:flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                  dataCursor="START"
                  aria-label="Start Your Project - Architectural Consultation"
                >
                  <span>START YOUR PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </MagneticButton>
              )}

              <button
                onClick={() => setIsExploded(!isExploded)}
                className="sm:hidden px-4 py-3.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-mono uppercase shadow-xs"
                aria-label="Toggle Exploded View"
              >
                {isExploded ? 'COLLAPSE' : 'EXPLODE'}
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
