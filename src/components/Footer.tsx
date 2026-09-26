import React from 'react';
import { STUDIO_INFO } from '../data/projectsData';
import { ArrowUp, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#f4f3ef] text-stone-700 border-t border-stone-200/90 px-4 sm:px-8 lg:px-12 pt-16 pb-12 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Col 1: Brand Mark & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white border border-stone-200 p-0.5 shadow-xs">
                <img
                  src="/images/logo.jpg"
                  alt="Replica Architects Logo"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-stone-900 tracking-wider block">
                  REPLICA
                </span>
                <span className="font-mono text-[10px] tracking-architectural uppercase text-stone-500 block -mt-1 font-medium">
                  ARCHITECTS & BUILDERS
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 font-sans max-w-sm leading-relaxed">
              Architecture • Construction • Interiors • Landscape.
              Shaped around people, place and purpose in Pattukkottai and Tamil Nadu.
            </p>

            <div className="pt-2 text-xs font-mono text-terracotta-600 font-semibold">
              ESTABLISHED 2014 • PATTUKKOTTAI, TAMIL NADU
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-[11px] tracking-ultra-wide uppercase text-stone-500 font-semibold block">
              STUDIO PORTAL
            </span>
            <ul className="space-y-2.5 text-xs font-mono text-stone-600">
              <li><a href="#work" className="hover:text-terracotta-600 transition-colors">SELECTED WORK</a></li>
              <li><a href="#portfolio" className="hover:text-terracotta-600 transition-colors">CURATED PORTFOLIO</a></li>
              <li><a href="#services" className="hover:text-terracotta-600 transition-colors">PRACTICE & DISCIPLINES</a></li>
              <li><a href="#studio" className="hover:text-terracotta-600 transition-colors">FOUNDERS & PHILOSOPHY</a></li>
              <li><a href="#process" className="hover:text-terracotta-600 transition-colors">6-STAGE METHODOLOGY</a></li>
              <li><a href="#contact" className="hover:text-terracotta-600 transition-colors">CONTACT & ATELIER</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-[11px] tracking-ultra-wide uppercase text-stone-500 font-semibold block">
              DIRECT DESK
            </span>
            <div className="space-y-2.5 text-xs font-mono text-stone-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-terracotta-500 shrink-0" />
                <span>Manikund Junction, Pattukkottai 614601</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-terracotta-500 shrink-0" />
                <a href={`tel:${STUDIO_INFO.phone}`} className="hover:text-stone-950 transition-colors">{STUDIO_INFO.phoneDisplay}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-stone-950 transition-colors">{STUDIO_INFO.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <a href={`https://wa.me/${STUDIO_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">
                  WhatsApp Direct Line
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-stone-500">
          <div>
            © {new Date().getFullYear()} REPLICA ARCHITECTS & BUILDERS. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Leadership: Er. Vikash Quaid & Ar. Sanjana</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-stone-700 hover:text-stone-950 font-medium transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
