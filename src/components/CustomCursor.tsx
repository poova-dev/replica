import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let trailingX = -100;
    let trailingY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, input, select, textarea, [data-cursor]');
      if (interactive) {
        setIsHovering(true);
        const customText = interactive.getAttribute('data-cursor') || '';
        setCursorText(customText);
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const animateRing = () => {
      trailingX += (mouseX - trailingX) * 0.18;
      trailingY += (mouseY - trailingY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${trailingX.toFixed(2)}px, ${trailingY.toFixed(2)}px, 0)`;
      }

      rafId = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Primary Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-terracotta-600 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 ease-out will-change-transform shadow-xs"
        style={{
          opacity: isHovering ? 0 : 1,
        }}
      />

      {/* Trailing Architectural Ring with Spring Damping */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out backdrop-blur-[1px] will-change-transform ${
          isHovering
            ? 'w-16 h-16 border-2 border-terracotta-600 bg-terracotta-500/15 shadow-sm'
            : 'w-8 h-8 border border-stone-800/40 bg-stone-900/5'
        }`}
      >
        {cursorText && (
          <span className="text-[9px] font-mono tracking-widest uppercase font-bold text-terracotta-700">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
