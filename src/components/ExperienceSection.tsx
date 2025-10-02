import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';

const experiences = [
 {
    year: 'Sept 2024 - Present',
    title: 'Freelancing ',
    company: 'Cypherxelites',
    location: 'Remote',
    description:
      'I offer freelance Web Development and UI/UX Design services, creating responsive websites and intuitive interfaces that deliver seamless user experiences tailored to client goals..',
  },
  {
    year: ' June 2025 - July 2025',
    title: 'Agentic AI  ',
    company: 'IBM',
    location: 'Remote, Jaipur ',
    description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for enterprise clients.',
    
  },
  {
    year: 'Apr 2025 - May 2025',
    title: 'Web Designer ',
    company: 'Trivana Hospitality',
    location: 'Bikaner, Rajasthan India',
    description: 'I designed Trivana Hospitality, an online platform for seamless hotel and apartment bookings. I focused on intuitive interfaces, smooth navigation, responsive layouts, and engaging visuals to ensure a fast and user-friendly booking experience..',
   
  },
  {
    year: 'June 2024 - Aug 2024',
    title: ' Front-End Web Development',
    company: 'CSR-IBM',
    location: 'Remote, Jaipur ',
    description: 'Built responsive web pages using HTML, CSS, and JavaScript while exploring UI/UX concepts. Gained exposure to modern front-end practices and collaborated with Git/GitHub for efficient version control and teamwork',
    
  },
  {
    year: 'Jan 2023 - Feb 2023',
    title: 'Intern - Web Development',
    company: 'Starting Core ',
    location: 'Jaipur, Rajasthan India',
    description: 'Worked closely with teammates to create a supportive and collaborative environment. Built websites using front-end technologies and took on a leadership role, guiding the team through a training-based internship project to ensure its successful execution.',
    
  },
];

export default function ExperienceSection() {
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

  const handleCardHover = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    
    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.className = 'absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/30 to-transparent rounded-xl pointer-events-none animate-pulse';
    ripple.style.transform = 'translateX(-100%)';
    ripple.style.animation = 'slideAcross 0.8s ease-out forwards';
    card.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 800);
  };

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
          <div className="section-heading-container">
            <div className="section-heading-side-line"></div>
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <div className="section-heading-side-line"></div>
          </div>
          <div className="section-heading-line"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 via-teal-400 to-cyan-400 overflow-hidden transition-all duration-2000 ${
            isVisible ? 'h-full' : 'h-0'
          }`} style={{ transitionDelay: '500ms' }}>
            {/* Flowing effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full z-10 neon-glow-green"></div>

                {/* Card */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div
                    className={`cyber-glass-card p-6 rounded-xl hover:neon-glow-blue transition-all duration-300 group relative overflow-hidden transform ${
                      isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-24' : 'translate-x-24'}`
                    }`}
                    style={{ transitionDelay: `${800 + index * 300}ms` }}
                    onMouseEnter={handleCardHover}
                  >
                    <div className="flex items-center mb-3 text-sm text-cyan-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.year}
                    </div>

                    <h3 className="text-xl mb-2 text-white">{exp.title}</h3>
                    
                    <div className="flex items-center mb-3 text-teal-400">
                      <span className="mr-3">{exp.company}</span>
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{exp.location}</span>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}