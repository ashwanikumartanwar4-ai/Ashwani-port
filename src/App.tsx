import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ThreeBackground from './components/ThreeBackground';
import ParticlesBackground from './components/ParticlesBackground';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 0,
    });
  }, []);

  return (
    <div className="min-h-screen text-white relative">
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Three.js Background */}
      <ThreeBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <div data-aos="fade-up">
          <AboutSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <SkillsSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <ExperienceSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <ProjectsSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <ServicesSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="500">
          <ContactSection />
        </div>
        
        {/* Footer */}
        <footer className="py-8 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">
              © 2025 Ashwani Tanwar. Crafted with passion and cutting-edge technology.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}