import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowDown } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/ashwanitanwar05', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/ashwanitanwar05', icon: Linkedin },
  { name: 'Email', href: 'mailto:hello@ashwanitanwar000@gmail.com', icon: Mail },
];

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [displayedText, setDisplayedText] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);
  const [showElements, setShowElements] = useState({
    subtitle: false,
    description: false,
    cta: false,
    social: false
  });

  useEffect(() => {
    // Typewriter effect for title
    const text = "Ashwani Tanwar";
    let i = 0;
    
    const typewriterInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        
        // Add glitch effect occasionally
        if (Math.random() > 0.8) {
          setIsGlitching(true);
          setTimeout(() => setIsGlitching(false), 100);
        }
      } else {
        clearInterval(typewriterInterval);
        // Start showing other elements
        setTimeout(() => setShowElements(prev => ({ ...prev, subtitle: true })), 500);
        setTimeout(() => setShowElements(prev => ({ ...prev, description: true })), 1000);
        setTimeout(() => setShowElements(prev => ({ ...prev, cta: true })), 1300);
        setTimeout(() => setShowElements(prev => ({ ...prev, social: true })), 1600);
      }
    }, 100);

    return () => clearInterval(typewriterInterval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Content Overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 
          ref={titleRef}
          className={`font-elegant font extrabold text-6xl md:text-8xl mb-6 bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 bg-clip-text text-transparent transition-all duration-100 ${
            isGlitching ? 'animate-pulse' : ''
          }`}
          style={{ 
            minHeight: '1.2em',
            textShadow: isGlitching ? '2px 0 #ff0040, -2px 0 #00ffbf' : 'none'
          }}
        >
          {displayedText}
        </h1>

        {/* Subtitle */}
        <p 
          className={`text-2xl md:text-3xl text-white mb-6 transition-all duration-800 transform ${
            showElements.subtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          Creative Developer & Designer
        </p>

        {/* Description */}
        <p 
          className={`text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-600 transform ${
            showElements.description ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
         Passionate Web Developer dedicated to crafting beautiful, functional web experiences that seamlessly blend creativity with cutting-edge technology. 
              With a strong focus on UI/UX, I design intuitive and engaging interfaces that elevate user experiences. Let's bring your ideas to life.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-500 transform ${
          showElements.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <button
            onClick={scrollToProjects}
            className="cyber-glass-card px-8 py-3 rounded-lg hover:neon-glow-blue transition-all duration-300 group"
          >
            <span className="flex items-center justify-center gap-2">
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 neon-glow-green"
          >
            Let's Collaborate
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 cyber-glass-card rounded-lg hover:neon-glow-blue transition-all duration-300 transform ${
                showElements.social ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              aria-label={social.name}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-transparent via-cyan-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}