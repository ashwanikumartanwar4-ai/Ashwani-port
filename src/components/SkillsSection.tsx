import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Globe, Brain } from 'lucide-react';

const skillGroups = [
  {
    name: 'Programming Languages',
    icon: Code,
    tags: ['JavaScript', 'TypeScript', 'Python', 'Java'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Web Developer',
    icon: Globe,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'Tailwind'],
    color: 'from-green-500 to-teal-500'
  },
  {
    name: 'UI-UX Design',
    icon: Palette,
    tags: ['Figma',  'Wireframing', 'Prototyping', 'User Research', 'Responsive Design'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Core CS Concepts',
    icon: Brain,
    tags: ['Data Structures', 'Algorithms', 'OOP', 'Operating Systems'],
    color: 'from-orange-500 to-red-500'
  }
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
          <div className="section-heading-container">
            <div className="section-heading-side-line"></div>
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <div className="section-heading-side-line"></div>
          </div>
          <div className="section-heading-line"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((skill, index) => (
            <div
              key={skill.name}
              className={`cyber-glass-card p-6 rounded-xl hover:neon-glow-blue transition-all duration-300 group transform ${
                isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-24 rotate-x-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              data-aos="cyber-glow"
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-6 h-6 text-white skill-icon group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl text-white">{skill.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, tagIndex) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm rounded-full text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300"
                    style={{
                      animationDelay: `${tagIndex * 100}ms`
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover ripple effect */}
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}