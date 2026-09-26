import React, { useState, useEffect } from 'react';
import { Project } from './data/projectsData';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SpatialStage } from './components/SpatialStage';
import { ProjectPortfolio } from './components/ProjectPortfolio';
import { ServicesSection } from './components/ServicesSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { AboutStudio } from './components/AboutStudio';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ConsultationModal } from './components/ConsultationModal';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Architecture');
  const [activeSection, setActiveSection] = useState('work');

  // Intersection observer for section tracking
  useEffect(() => {
    const sectionIds = ['work', 'services', 'studio', 'process', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setConsultationOpen(true);
  };

  const handleExploreWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#faf9f6] text-stone-900 selection:bg-terracotta-500 selection:text-white">
      {/* Precision Architectural Custom Cursor */}
      <CustomCursor />

      {/* Floating Navigation */}
      <Navigation
        onOpenConsultation={() => handleOpenConsultation()}
        activeSection={activeSection}
      />

      <main>
        {/* 01 — Fullscreen Multi-Layer Hero */}
        <Hero
          onExploreWork={handleExploreWork}
          onStartProject={() => handleOpenConsultation()}
        />

        {/* 02 — Kinetic 3D Exploded-Layer Spatial Project Stage */}
        <SpatialStage
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* 03 — Curated Project Portfolio Catalogue */}
        <ProjectPortfolio
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* 04 — Editorial Disciplines & Services */}
        <ServicesSection
          onStartProjectWithService={(serviceName) => handleOpenConsultation(serviceName)}
        />

        {/* 05 — 6-Stage Architectural Process Timeline */}
        <ProcessTimeline />

        {/* 06 — Studio Leadership & Philosophy */}
        <AboutStudio />

        {/* 07 — Conversion & Contact Section */}
        <ContactSection
          onStartProject={() => handleOpenConsultation()}
        />
      </main>

      {/* Studio Footer */}
      <Footer />

      {/* Cinematic 7-Stage Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onStartProject={() => {
          setSelectedProject(null);
          handleOpenConsultation(selectedProject?.category);
        }}
      />

      {/* Interactive Project Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}

export default App;
