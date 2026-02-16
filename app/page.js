'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/herosection';
import BentoGrid from '@/components/bentogrid';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    //setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#04071d]">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#04071d]/95 backdrop-blur-md z-50 border-b border-purple-400/20">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-yellow-400">
            Thanishkka
          </div>
          <div className="flex gap-8">
            {['Home', 'Projects', 'About', 'Contact'].map(item => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-purple-400 transition-colors duration-300 text-lg"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Spline Hero Section */}
      <section 
        id="home"
        className="relative w-full h-screen overflow-hidden mt-0"
      >
        {mounted && (
          <Spline scene="https://prod.spline.design/WUCjPC1jNmp79Mf6/scene.splinecode" />
        )}
      </section>

      {/* Hero Section with Typing */}
      <HeroSection />

      {/* Bento Grid */}
      <BentoGrid />

      {/* Footer */}
      <footer className="bg-[#02040f] py-8 border-t border-purple-400/20">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center flex-wrap gap-4">
          <div className="text-gray-500 text-sm">
            © 2024 Thanishkka. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}