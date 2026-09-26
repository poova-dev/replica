import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/projectsData';
import { X, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    service: initialService || 'Architecture',
    area: '',
    budget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c25332', '#dfa86a', '#1c1917', '#e2ded7'],
      });
    } catch {
      // fallback
    }
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `*New Project Consultation - Replica Architects*\n` +
      `Name: ${formData.name || 'Prospective Client'}\n` +
      `Phone: ${formData.phone}\n` +
      `Service: ${formData.service}\n` +
      `Site Location: ${formData.location || 'Pattukkottai / TN'}\n` +
      `Approx Area: ${formData.area || 'TBD'}\n` +
      `Project Notes: ${formData.message || 'Looking to discuss architecture/construction.'}`
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200 select-none">
      <div className="relative w-full max-w-2xl bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 text-stone-900">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-stone-200 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-terracotta-500" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-stone-500 font-semibold">
                REPLICA ARCHITECTS & BUILDERS • PATTUKKOTTAI
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-light">
              Start Your Project
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 font-sans mt-0.5">
              Direct review by Er. Vikash Quaid & Ar. Sanjana within 24 hours.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-600 hover:text-stone-900 transition-colors"
            aria-label="Close consultation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Submission Success State */
          <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-terracotta-50 border border-terracotta-200 flex items-center justify-center mx-auto text-terracotta-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-3xl text-stone-900">
                Inquiry Received
              </h4>
              <p className="text-sm text-stone-600 font-sans max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name || 'Friend'}. Er. Vikash Quaid and Ar. Sanjana will review your site details and connect with you shortly.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-[#f5f4f0] max-w-md mx-auto text-left text-xs font-mono space-y-1.5 text-stone-800">
              <div><span className="text-stone-500">Service:</span> {formData.service}</div>
              <div><span className="text-stone-500">Location:</span> {formData.location || 'Pattukkottai'}</div>
              <div><span className="text-stone-500">Direct Office:</span> +91 99943 99933</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>CONTINUE ON WHATSAPP</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-700 font-mono text-xs uppercase tracking-wider transition-colors"
              >
                CLOSE WINDOW
              </button>
            </div>
          </div>
        ) : (
          /* Input Form */
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="client-name" className="block text-[11px] font-mono tracking-wider text-stone-600 uppercase font-semibold">
                  YOUR NAME *
                </label>
                <input
                  id="client-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Anandha Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-terracotta-500 focus:bg-white focus:outline-none text-sm text-stone-900 placeholder:text-stone-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="client-phone" className="block text-[11px] font-mono tracking-wider text-stone-600 uppercase font-semibold">
                  PHONE / WHATSAPP *
                </label>
                <input
                  id="client-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-terracotta-500 focus:bg-white focus:outline-none text-sm text-stone-900 placeholder:text-stone-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="client-service" className="block text-[11px] font-mono tracking-wider text-stone-600 uppercase font-semibold">
                  PRIMARY SERVICE
                </label>
                <select
                  id="client-service"
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-terracotta-500 focus:bg-white focus:outline-none text-sm text-stone-900 transition-colors"
                >
                  <option value="Architecture">Residential Architecture</option>
                  <option value="Turnkey Construction">Turnkey Civil Construction</option>
                  <option value="Load-Bearing Masonry">Load-Bearing Brick Villa</option>
                  <option value="Interior Design">Interior Architecture & Millwork</option>
                  <option value="Landscape Design">Landscape & Courtyard Design</option>
                  <option value="Renovation">Structural Renovation</option>
                  <option value="Consultation">Site Due Diligence & Feasibility</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="client-location" className="block text-[11px] font-mono tracking-wider text-stone-600 uppercase font-semibold">
                  SITE LOCATION
                </label>
                <input
                  id="client-location"
                  name="location"
                  type="text"
                  placeholder="e.g. Pattukkottai, Thanjavur, Trichy"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-terracotta-500 focus:bg-white focus:outline-none text-sm text-stone-900 placeholder:text-stone-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="client-area" className="block text-[11px] font-mono tracking-wider text-stone-600 uppercase font-semibold">
                  APPROX PLOT / BUILT-UP AREA
                </label>
                <input
                  id="client-area"
                  name="area"
                  type="text"
                  placeholder="e.g. 2,400 sq.ft or 30x40 site"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-terracotta-500 focus:bg-white focus:outline-none text-sm text-stone-900 placeholder:text-stone-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="client-email" className="block text-[11px] font-mono tracking-wider text-stone-600 uppercase font-semibold">
                  EMAIL ADDRESS
                </label>
                <input
                  id="client-email"
                  name="email"
                  type="email"
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-terracotta-500 focus:bg-white focus:outline-none text-sm text-stone-900 placeholder:text-stone-400 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="client-message" className="block text-[11px] font-mono tracking-wider text-stone-600 uppercase font-semibold">
                BRIEF PROJECT VISION OR TIMELINE
              </label>
              <textarea
                id="client-message"
                name="message"
                rows={3}
                placeholder="Tell us about your spatial aspirations, family requirements, or intended start date..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-terracotta-500 focus:bg-white focus:outline-none text-sm text-stone-900 placeholder:text-stone-400 resize-none transition-colors"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-200">
              <span className="text-[11px] font-mono text-stone-500">
                Manikund Junction, Pattukkottai • +91 99943 99933
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>TRANSMIT PROJECT BRIEF</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
