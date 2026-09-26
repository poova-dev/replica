import React from 'react';
import { STUDIO_INFO } from '../data/projectsData';
import { ArrowUpRight, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  onStartProject: () => void;
}

const COMMISSION_VIDEO_URL = 'https://res.cloudinary.com/dv1capz6x/video/upload/v1790442652/gemini_generated_video_70ec3914_gwr_video_mvp_zb55cj.mp4';

export const ContactSection: React.FC<ContactSectionProps> = ({ onStartProject }) => {
  return (
    <section id="contact" className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-white border-t border-stone-200 select-none scroll-mt-28">
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Upper Commission Project Container with Background Video (No Overlay Effects) */}
        <div className="relative rounded-3xl overflow-hidden border border-stone-300 shadow-2xl min-h-[460px] sm:min-h-[520px] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          
          {/* Background Video - Zero darkening overlay effects */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              src={COMMISSION_VIDEO_URL}
            />
          </div>

          {/* Text & Actions Appearing Clearly on Top */}
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-stone-950/75 backdrop-blur-md border border-white/20 text-white w-fit shadow-md">
              <span className="w-2 h-2 bg-terracotta-500 rounded-full animate-pulse" />
              <span className="font-mono text-[11px] tracking-ultra-wide uppercase text-stone-200 font-semibold">
                COMMISSION YOUR PROJECT
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.02] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              LET'S BUILD SOMETHING
              <span className="block text-stone-200 font-light italic">WORTH REMEMBERING.</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-stone-100 font-sans max-w-2xl font-normal leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
              Whether you envision a column-free exposed brick residence, a contemporary villa, bespoke interior millwork, or turnkey construction in Pattukkottai and Tamil Nadu.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onStartProject}
                className="group px-8 py-4 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white font-mono text-xs tracking-widest uppercase font-semibold transition-all duration-300 shadow-xl shadow-terracotta-600/40 hover:scale-105 flex items-center gap-3"
                data-cursor="START"
                aria-label="Start Your Project - Submit Architectural Brief"
              >
                <span>START YOUR PROJECT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=Hello%20Replica%20Architects%2C%20I%20would%20like%20to%20discuss%20a%20project%20in%20Pattukkottai`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-full bg-stone-950/75 hover:bg-stone-900 border border-white/25 hover:border-emerald-500 text-white font-mono text-xs tracking-widest uppercase transition-all shadow-md hover:shadow-xl flex items-center gap-2 backdrop-blur-md"
                data-cursor="CHAT"
                aria-label="Chat with Replica Studio on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WHATSAPP STUDIO</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lower Contact Details Grid - Original White / Light Background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Phone */}
          <div className="p-6 rounded-2xl bg-[#faf9f6] border border-stone-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-terracotta-600 shadow-xs">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-widest text-stone-500 uppercase block font-semibold">PHONE INQUIRIES</span>
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="font-display text-base font-semibold text-stone-900 hover:text-terracotta-600 transition-colors block mt-1"
              >
                {STUDIO_INFO.phoneDisplay}
              </a>
              <span className="text-[11px] text-stone-500 font-mono mt-0.5 block">Direct Line: Er. Vikash Quaid</span>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="p-6 rounded-2xl bg-[#faf9f6] border border-stone-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-emerald-600 shadow-xs">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-widest text-stone-500 uppercase block font-semibold">WHATSAPP CONSULTATION</span>
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=Hello%20Replica%20Architects`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-base font-semibold text-stone-900 hover:text-emerald-600 transition-colors block mt-1"
              >
                +91 99943 99933
              </a>
              <span className="text-[11px] text-stone-500 font-mono mt-0.5 block">Instant Project Briefing</span>
            </div>
          </div>

          {/* Email */}
          <div className="p-6 rounded-2xl bg-[#faf9f6] border border-stone-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-amber-600 shadow-xs">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-widest text-stone-500 uppercase block font-semibold">OFFICIAL EMAIL</span>
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="font-display text-base font-semibold text-stone-900 hover:text-amber-600 transition-colors block mt-1 break-all"
              >
                {STUDIO_INFO.email}
              </a>
              <span className="text-[11px] text-stone-500 font-mono mt-0.5 block">Plans & BOQ Submissions</span>
            </div>
          </div>

          {/* Location */}
          <div className="p-6 rounded-2xl bg-[#faf9f6] border border-stone-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-terracotta-600 shadow-xs">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-widest text-stone-500 uppercase block font-semibold">STUDIO & ATELIER</span>
              <p className="font-display text-sm font-semibold text-stone-900 mt-1">
                Manikund Junction
              </p>
              <p className="text-[11px] text-stone-500 font-mono mt-0.5">
                Pattukkottai, Tamil Nadu 614601
              </p>
            </div>
          </div>

        </div>

        {/* Experience Centre Banner - Original Light Background */}
        <div className="p-8 rounded-3xl border border-stone-200 bg-[#f5f4f0] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2">
            <span className="font-mono text-[10px] tracking-widest text-terracotta-600 uppercase block font-bold">
              VISIT OUR EXPERIENCE ATELIER
            </span>
            <h4 className="font-serif text-2xl text-stone-900 font-light">
              Experience Real Materials Before Breaking Ground
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 font-sans max-w-2xl leading-relaxed">
              Touch genuine wire-cut red bricks, review 1:1 scale joinery details, explore yellow oxide and Italian stone textures at our Manikund Junction atelier in Pattukkottai.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right hidden sm:block">
              <span className="block font-mono text-[10px] text-stone-400 uppercase">STUDIO HOURS</span>
              <span className="font-display text-xs text-stone-800 font-medium">Mon — Sat: 9:30 AM — 8:00 PM</span>
            </div>
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=Hi%20Replica%20Team%2C%20I%20would%20like%20to%20schedule%20a%20visit%20to%20your%20Pattukkottai%20Atelier`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-md hover:shadow-lg"
            >
              BOOK ATELIER VISIT
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
