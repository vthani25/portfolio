'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'home', href: '#home' },
    { name: 'projects', href: '#projects' },
    { name: 'experiences', href: '#experiences' },
    { name: 'blog', href: '#blog' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="text-2xl font-mono font-bold text-white">
                Thanishkka
            </div>
            <span className="w-[2px] h-6 bg-blue-400 animate-blink ml-1"></span>

            <style jsx>{`
            @keyframes blink {
                0%, 50%, 100% { opacity: 1; }
                25%, 75% { opacity: 0; }
            }
            .animate-blink {
                animation: blink 2s step-start infinite;
            }
            `}</style>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.name)}
                className="relative group px-4 py-2"
              >
                {/* Bracket decorations */}
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-600 group-hover:text-blue-400 transition-colors font-mono text-sm opacity-0 group-hover:opacity-100">
                  [
                </span>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-600 group-hover:text-blue-400 transition-colors font-mono text-sm opacity-0 group-hover:opacity-100">
                  ]
                </span>

                {/* Link text */}
                <span
                  className={`font-mono text-sm tracking-wide transition-all duration-300 ${
                    activeSection === item.name
                      ? 'text-blue-400'
                      : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                >
                  {item.name}
                </span>

                {/* Underline animation */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                    activeSection === item.name
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                ></span>

              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Command line decoration */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      )}
    </nav>
  );
};

export default Navbar;