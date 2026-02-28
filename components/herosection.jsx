'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
  const typingRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    // ----------------------
    // Typing Animation
    // ----------------------
    const words = [
      'Computer Science Student',
      'Software Developer',
      'Technical Leader',
      'Hackathon Organizer'
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
    if (!typingRef.current) return;
      const currentWord = words[wordIndex];
      if (isDeleting) {
        charIndex--;
        typingRef.current.textContent = currentWord.substring(0, charIndex);
      } else {
        charIndex++;
        typingRef.current.textContent = currentWord.substring(0, charIndex);
      }

      let typingSpeed = isDeleting ? 50 : 150;

      if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    }

    type();

    // Cursor blinking
    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // Fade in content
    gsap.from('.hero-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    });
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgb(4,7,29)',
          backgroundImage:
            'repeating-linear-gradient(to right, rgba(139,92,246,0.15) 0 1px, transparent 1px 60px),' +
            'repeating-linear-gradient(to bottom, rgba(139,92,246,0.15) 0 1px, transparent 1px 60px)',
        }}
      />

      {/* Content */}
      <div className="hero-content relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm Thanishkka
            </h1>
            <div className="text-2xl md:text-4xl font-bold text-purple-400 mb-8 min-h-[3rem]">
              <span ref={typingRef}></span>
              <span ref={cursorRef} className="text-purple-300">|</span>
            </div>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Computer science student and technical leader. Web and mobile developer, hackathon organizer, and advocate for girls in computing.
            </p>
          </div>

          {/* Right side - Profile */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 border-2 border-purple-400/30 rounded-2xl">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-purple-400 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-purple-400 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-purple-400 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-purple-400 rounded-br-2xl"></div>
              </div>

              {/* Profile picture placeholder */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-400/20 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <svg className="w-24 h-24 mx-auto mb-4 text-purple-400/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <img src="/images/headshot.png" className="absolute inset-0 w-full h-full object-cover rounded-2xl"/>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-purple-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}