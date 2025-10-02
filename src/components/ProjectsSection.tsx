import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

import HacksphereImg from '../assets/Hacksphere.jpg';
import BlissfullImg from '../assets/Blissfull.png';
import TrivanaImg from '../assets/Trivana.jpg';
import NyvoraImg from '../assets/Nyvora.png';
import NexvisiImg from '../assets/NEXVISI.jpg';
import EduWorldImg from '../assets/EDU World.png';

const projects = [
  {
    title: 'Hacksphere',
    description: 'A cybersecurity platform providing learning resources, interactive challenges, and competitions to sharpen ethical hacking skills effectively.',
    tags: ['HTML', 'CSS', 'JAVASCRIPT ', 'Figma'],
    image: HacksphereImg,
    demoLink: 'https://www.figma.com/proto/oV7xvta1zHeeFVYioggiHR/Hack-Spehere?node-id=2-2&t=xWjvWaT1WO1yXXtP-1',
    githubLink: ''
  },
  {
    title: 'Blissfull Trader',
    description: 'A textile wholesale platform offering a seamless shopping experience with curated collections, easy ordering, and reliable delivery for businesses..',
    tags: ['HTML', 'CSS', 'JAVASCRIPT ', 'Figma'],
    image: BlissfullImg,
    demoLink: 'https://blissfultraders.pages.dev/',
    githubLink: ''
  },
  {
    title: 'Trivana Hospitality',
    description: 'An online booking platform simplifying hotel, apartment, and restaurant reservations, ensuring quick and convenient travel planning.',
    tags: [ 'Figma', 'Animation', 'Prototyping', 'User Flows'],
    image: TrivanaImg,
    demoLink: '',
    githubLink: ''
  },
  {
    title: 'Nyvora',
    description: 'Nyvora Gifts: An e-commerce platform offering personalized gifts like mugs, keychains, and bottles, making every occasion memorable.',
    tags: ['React.js', 'Vue.js', 'Express'],
    image: NyvoraImg,
    demoLink: 'https://nyvoragifts.netlify.app/',
    githubLink: ''
  },
  {
    title: 'NEXVISI',
    description: 'A fully animated Figma-designed landing page delivering an engaging and visually dynamic user experience.',
    tags: ['Figma', 'Landing Page', 'Animated Design', 'Interactive', 'Web Design'],
    image: NexvisiImg,
    demoLink: 'https://www.figma.com/proto/dpo0084hMdh31EjrLNeKpt/AI-Technology-Business-Website-%E2%80%93-Modern---Sleek-Design--Community-?node-id=2054-903&t=Qx2NELjx5k3JakHS-1e',
    githubLink: ''
  } ,
  {
    title: 'EDU WORLD AFFAIR',
    description: 'A global education platform offering resources, guidance, and tools to empower students and lifelong learners.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: EduWorldImg,
    demoLink: 'https://demo.ashwanitanwar.dev/collab-suite',
    githubLink: 'https://github.com/ashwanitanwar/collaboration-suite'
  }
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentProject, setCurrentProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const nextProject = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
      setIsTransitioning(false);
    }, 150);
  };

  const prevProject = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
      setIsTransitioning(false);
    }, 150);
  };

  const goToProject = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProject(index);
      setIsTransitioning(false);
    }, 150);
  };

  const project = projects[currentProject];

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
          <div className="section-heading-container">
            <div className="section-heading-side-line"></div>
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="section-heading-side-line"></div>
          </div>
          <div className="section-heading-line"></div>
        </div>

        <div 
          className={`relative transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`} 
          style={{ transitionDelay: '500ms' }}
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          {/* Main Project Card */}
          <div className="cyber-glass-card rounded-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 lg:h-full overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-left transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: 'left center' }}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/src/assets/profile.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Project Details */}
              <div className={`p-8 transition-all duration-300 transform ${
                isTransitioning ? 'opacity-0 rotate-y-12 scale-95' : 'opacity-100 rotate-y-0 scale-100'
              }`}>
                <h3 className="text-2xl md:text-3xl mb-4 text-white">{project.title}</h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 rounded-full text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 rounded-lg transition-all duration-300 neon-glow-green"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 cyber-glass-card rounded-lg hover:neon-glow-blue transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={prevProject}
              className="p-3 cyber-glass-card rounded-full hover:neon-glow-blue transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Project Indicators */}
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? 'bg-gradient-to-r from-cyan-400 to-teal-400 neon-glow-green'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="p-3 cyber-glass-card rounded-full hover:neon-glow-blue transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}