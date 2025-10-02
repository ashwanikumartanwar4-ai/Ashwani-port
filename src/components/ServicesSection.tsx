import React, { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Palette, 
  Zap, 
  Globe, 
  Smartphone, 
  Layers3,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Full-stack web applications using modern technologies like React, Node.js, and cloud platforms.',
      features: ['Responsive Design', 'API Integration', 'Database Design', 'Performance Optimization'],
      color: 'from-cyan-400 to-teal-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive user interfaces that provide exceptional user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications for iOS and Android using React Native and Flutter.',
      features: ['Native Performance', 'App Store Deployment', 'Push Notifications', 'Offline Support'],
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Improving website speed, SEO rankings, and overall performance for better user engagement.',
      features: ['Speed Optimization', 'SEO Improvement', 'Code Splitting', 'Caching Strategies'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics.',
      features: ['Payment Processing', 'Inventory Management', 'Order Tracking', 'Analytics Dashboard'],
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Layers3,
      title: 'Consulting & Training',
      description: 'Technical consulting and team training to help your organization adopt modern development practices.',
      features: ['Technical Audits', 'Team Training', 'Code Reviews', 'Best Practices'],
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="section-heading-container">
            <div className="section-heading-side-line"></div>
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
              Services
            </h2>
            <div className="section-heading-side-line"></div>
          </div>
          <div className="section-heading-line"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group cyber-glass-card p-8 rounded-2xl hover:neon-glow-blue transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              data-aos="slide-cyber"
              data-aos-delay={index * 200}
              data-aos-duration="700"
            >
              {/* Service Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={feature}
                      className="flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ transitionDelay: `${featureIndex * 50}ms` }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400"></div>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              </div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400/50 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 transform delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="cyber-glass-card p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Let's discuss how we can bring your vision to life with innovative design and cutting-edge technology.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="cyber-glass-card px-8 py-4 rounded-lg hover:neon-glow-green transition-all duration-300 group"
            >
              <span className="flex items-center justify-center gap-2 text-cyan-400 group-hover:text-white">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-3/4 right-20 w-3 h-3 bg-teal-400 rounded-full animate-pulse opacity-40 delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-80 delay-500"></div>
    </section>
  );
}