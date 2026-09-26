import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

interface NavigationProps {
  onOpenConsultation: () => void;
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenConsultation, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 30);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#work', id: 'work' },
    { name: 'SERVICES', href: '#services', id: 'services' },
    { name: 'STUDIO', href: '#studio', id: 'studio' },
    { name: 'PROCESS', href: '#process', id: 'process' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Hairline Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-stone-200/60">
        <div
          className="h-full bg-gradient-to-r from-terracotta-600 via-terracotta-500 to-amber-600 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Frosted Header Backdrop on Scroll to prevent underlying content collision */}
      <div
        className={`fixed top-0 left-0 right-0 h-24 z-30 transition-opacity duration-300 pointer-events-none ${
          isScrolled
            ? 'opacity-100 bg-[#faf8f5]/85 backdrop-blur-md border-b border-stone-200/60 shadow-xs'
            : 'opacity-0'
        }`}
      />

      {/* Floating Header */}
      <header
        className={`fixed top-4 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-8 max-w-7xl mx-auto flex items-center justify-between ${
          isScrolled ? 'translate-y-0' : 'translate-y-1'
        }`}
        role="banner"
      >
        {/* Brand Container */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-3 py-2 px-3 sm:px-4 rounded-full bg-white/90 backdrop-blur-md border border-stone-200/90 shadow-sm hover:border-terracotta-500/50 hover:shadow-md transition-all duration-300"
          data-cursor="TOP"
          aria-label="Replica Architects & Builders Homepage"
        >
          {/* Logo Mark */}
          <div className="w-8 h-8 rounded-full overflow-hidden bg-stone-100 border border-stone-200 flex items-center justify-center p-0.5 group-hover:border-terracotta-500 transition-colors">
            <img
              src="/images/logo.jpg"
              alt="Replica Architects Studio Logo"
              className="w-full h-full object-cover scale-110"
              width="32"
              height="32"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-widest text-stone-900 group-hover:text-terracotta-600 transition-colors">
              REPLICA
            </span>
            <span className="font-mono text-[9px] tracking-widest uppercase text-stone-500 -mt-0.5 hidden sm:inline">
              ARCHITECTS & BUILDERS
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Pill */}
        <nav
          className="hidden md:flex items-center gap-1 py-1.5 px-3 rounded-full bg-white/90 backdrop-blur-md border border-stone-200/90 shadow-sm"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative px-3.5 py-1.5 text-xs font-mono tracking-widest uppercase rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-stone-950 bg-stone-100 font-semibold shadow-xs'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-50'
                }`}
                data-cursor="NAV"
                aria-current={isActive ? 'page' : undefined}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-terracotta-500" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2">
          {/* Call Quick Link */}
          <a
            href="tel:+919994399933"
            className="hidden lg:flex items-center gap-1.5 py-2 px-3.5 rounded-full bg-white/90 backdrop-blur-md border border-stone-200/90 shadow-sm text-xs font-mono text-stone-700 hover:text-stone-950 hover:border-stone-300 transition-colors"
            title="Call Replica Studio directly at +91 99943 99933"
            aria-label="Call Replica Architects at +91 99943 99933"
          >
            <Phone className="w-3.5 h-3.5 text-terracotta-500" />
            <span>+91 99943 99933</span>
          </a>

          {/* Start a Project CTA Button */}
          {!mobileMenuOpen && (
            <button
              onClick={onOpenConsultation}
              className="group relative overflow-hidden flex items-center gap-2 py-2 px-4 sm:px-5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-display font-semibold tracking-wider uppercase transition-all duration-300 shadow-md shadow-terracotta-600/20 hover:shadow-lg"
              data-cursor="INQUIRE"
              aria-label="Start Your Project - Request Architectural Consultation"
            >
              <span className="relative z-10 hidden sm:inline">START YOUR PROJECT</span>
              <span className="relative z-10 sm:hidden">INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/90 border border-stone-200 text-stone-700 hover:text-stone-950 shadow-sm"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white/98 backdrop-blur-xl md:hidden flex flex-col justify-between p-6 pt-24 animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-3">
              <span className="text-[10px] font-mono tracking-widest text-stone-500 uppercase">
                Pattukkottai, Tamil Nadu
              </span>
            </div>

            <nav className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="group flex items-center justify-between py-2.5 text-2xl font-serif text-stone-900 hover:text-terracotta-600 transition-colors border-b border-stone-100"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-stone-400">0{idx + 1}</span>
                    {link.name}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-terracotta-600 transition-colors" />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 border-t border-stone-200 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 px-6 rounded-full bg-terracotta-600 text-white text-xs font-mono tracking-widest uppercase font-semibold flex items-center justify-center gap-2 shadow-lg shadow-terracotta-600/25"
            >
              <span>START YOUR PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between text-xs font-mono text-stone-500">
              <a href="tel:+919994399933" className="hover:text-stone-900">
                +91 99943 99933
              </a>
              <span className="text-stone-300">•</span>
              <a href="mailto:planbyreplica@gmail.com" className="hover:text-stone-900">
                planbyreplica@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
