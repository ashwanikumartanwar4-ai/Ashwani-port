import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import profile from '../assets/profile.jpg';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code,
      text: "5+ Years of crafting pixel-perfect web experiences"
    },
    {
      icon: Palette,
      text: "Design-driven development with user-centric approach"
    },
    {
      icon: Zap,
      text: "Expertise in React, Three.js, and modern web technologies"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-20 px-4 flex flex-col items-center justify-center"
    >
  <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <div className="section-heading-container">
            <div className="section-heading-side-line"></div>
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="section-heading-side-line"></div>
          </div>
          <div className="section-heading-line"></div>
        </div>

        {/* Main Content */}
  <div className="grid lg:grid-cols-2 gap-12 items-center w-full text-center lg:text-left">
          {/* Left Side - Image */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          } flex justify-center items-center w-full`}> 
            <div className="relative w-full flex justify-center">
              <div className="cyber-glass-card p-8 rounded-2xl flex flex-col items-center">
                <div className="relative overflow-hidden rounded-xl w-full flex justify-center">
                  <img
                    src={profile}
                    alt="Ashwani Tanwar - Creative Developer"
                    className="w-full h-80 object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: 'center top' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                {/* Floating decoration */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-teal-400 to-green-500 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`transition-all duration-1000 transform delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          } w-full flex flex-col items-center justify-center text-center`}>


            {/* Three Paragraphs */}
            <div className="space-y-6">
              <div className={`transition-all duration-700 transform delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <p className="text-gray-300 leading-relaxed">
                 I'm a passionate full-stack developer with over 3 years of experience creating digital experiences that are not only beautiful but also functional, 
                  user-friendly, and rooted in strong UI/UX principles.
                </p>
              </div>

              <div className={`transition-all duration-700 transform delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <p className="text-gray-300 leading-relaxed">
                  My journey began with a curiosity about how things work on the web, and it has evolved into a deep love for crafting solutions 
                 that not only work seamlessly but also provide intuitive and engaging user experiences.
                </p>
              </div>

              <div className={`transition-all duration-700 transform delay-900 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <p className="text-gray-300 leading-relaxed">
                   When I'm not coding, you can find me exploring nature trails, experimenting with new design trends,
                  or contributing to open-source projects.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className={`mt-8 transition-all duration-500 transform delay-1100 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="cyber-glass-card px-6 py-3 rounded-lg hover:neon-glow-green transition-all duration-300 group"
              >
                <span className="flex items-center gap-2 text-cyan-400 group-hover:text-white">
                  Let's Create Something Amazing
                  <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}