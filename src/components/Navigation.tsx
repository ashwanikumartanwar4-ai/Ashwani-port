import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let timeout: number | undefined;

    const getActiveSectionByViewport = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const viewportMid = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        if (viewportMid >= top && viewportMid < bottom) {
          return section;
        }
      }
      return sections[0];
    };

    const handler = () => {
      // debounce to avoid too many updates
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        const active = getActiveSectionByViewport();
        setActiveSection(active);
      }, 50) as unknown as number;
    };

    // Run on mount
    handler();

    window.addEventListener('scroll', handler);
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
      window.clearTimeout(timeout);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center">
          <div className="cyber-glass-card px-8 py-4 rounded-full">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`group relative px-4 py-2 transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'text-cyan-400'
                        : 'text-white hover:text-cyan-400'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {/* Hover / active underline */}
                    <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-300 transform ${
                      activeSection === item.href.substring(1) ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    } origin-left neon-glow-green`} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cyber-glass-card p-3 rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isOpen && (
            <div className="absolute top-16 left-4 right-4 cyber-glass-card rounded-lg p-4">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`block w-full text-left px-4 py-2 rounded transition-all duration-300 group ${
                        activeSection === item.href.substring(1)
                          ? 'text-cyan-400 bg-cyan-400/10'
                          : 'text-white hover:text-cyan-400'
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span className={`block h-0.5 mt-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-300 transform ${
                        activeSection === item.href.substring(1) ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                      } origin-left neon-glow-green`} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}