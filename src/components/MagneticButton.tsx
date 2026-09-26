import React, { useRef, useState, useEffect } from 'react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  strength?: number; // Distance multiplier (default: 0.25)
  className?: string;
  dataCursor?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  strength = 0.25,
  className = '',
  dataCursor,
  onClick,
  ...rest
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only enable magnetic effect on desktop devices with fine pointer
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const button = buttonRef.current;
    if (!button) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from center
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      // Pull within bounds
      targetX = distX * strength;
      targetY = distY * strength;
    };

    const onMouseEnter = () => {
      setIsHovered(true);
    };

    const onMouseLeave = () => {
      setIsHovered(false);
      targetX = 0;
      targetY = 0;
    };

    // Smooth lerp loop
    const animate = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (Math.abs(currentX) > 0.01 || Math.abs(currentY) > 0.01 || isHovered) {
        setOffset({ x: currentX, y: currentY });
      } else {
        setOffset({ x: 0, y: 0 });
      }

      rafId = requestAnimationFrame(animate);
    };

    button.addEventListener('mousemove', onMouseMove);
    button.addEventListener('mouseenter', onMouseEnter);
    button.addEventListener('mouseleave', onMouseLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      button.removeEventListener('mousemove', onMouseMove);
      button.removeEventListener('mouseenter', onMouseEnter);
      button.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [strength, isHovered]);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center transition-transform duration-100 ease-out will-change-transform ${className}`}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      }}
      data-cursor={dataCursor}
      {...rest}
    >
      {children}
    </button>
  );
};
