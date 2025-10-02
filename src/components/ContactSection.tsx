import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ashwanitanwar000@gmail.com',
    href: 'mailto:ashwanitanwar000@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7976121794',
    href: 'tel:+917976121794'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bikaner, Rajasthan, India',
    href: '#'
  }
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formRef.current) {
      emailjs.sendForm(
        'service_b9jhtur', // Service ID
        'template_aa6vpbb', // Template ID
        formRef.current,
        'h6wv7k7g9vwOnZm4Z' // Public Key
      )
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          formRef.current?.reset();
        }, 3000);
      })
      .catch(() => {
        setIsSubmitting(false);
        alert('Failed to send message. Please try again later.');
      });
    }
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const input = e.target;
    input.style.boxShadow = '0 0 20px rgba(34, 211, 238, 0.5)';
    input.style.borderColor = 'rgba(34, 211, 238, 0.8)';
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const input = e.target;
    input.style.boxShadow = 'none';
    input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
          <div className="section-heading-container">
            <div className="section-heading-side-line"></div>
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <div className="section-heading-side-line"></div>
          </div>
          <div className="section-heading-line"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className={`cyber-glass-card p-8 rounded-2xl transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-24'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="text-2xl mb-6 text-white">Send a Message</h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none"
                  placeholder="Your full name"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none"
                  placeholder="your.email@example.com"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-2 text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none"
                  placeholder="Project inquiry, collaboration, etc."
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none resize-none"
                  placeholder="Tell me about your project or idea..."
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 neon-glow-green'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Contact Information */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
          }`} style={{ transitionDelay: '500ms' }}>
            <div className="cyber-glass-card p-8 rounded-2xl h-full flex flex-col justify-center">
              <h3 className="text-2xl mb-8 text-white">Get in Touch</h3>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to bring your vision to life? I'm always excited to work on 
                innovative projects and collaborate with creative minds. Let's discuss 
                how we can create something extraordinary together.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability Status */}
              <div className="mt-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}