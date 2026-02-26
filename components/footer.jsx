'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: false 
      }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const contactInfo = {
    email: 'vthanish25@gmail.com',
    location: 'Cumming, GA'
  };

  const motto = '"Every bug leads to better code."';
  
  const availability = 'Currently open to opportunities';

  return (
    <footer className="bg-slate-950">
  <div className="max-w-7xl mx-auto pt-12 pb-6 px-6">
    
    {/* Terminal */}
    <div className="bg-slate-900 rounded-lg shadow-2xl overflow-hidden border border-slate-800 mb-8 font-mono text-sm w-full">
      
      {/* Terminal Header */}
      <div className="bg-slate-800 px-4 py-2.5 flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-slate-400 text-xs ml-2">contact.sh</span>
        </div>
        <div className="text-slate-500 text-xs">{currentTime}</div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 space-y-3 text-slate-300">
        
        {/* Contact */}
        <div className="flex items-center gap-2">
          <span className="text-green-400">➜</span>
          <span className="text-blue-400">~</span>
          <span className="text-slate-400 ml-2">cat contact.txt</span>
        </div>

        <div className="pl-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-purple-400">email:</span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-cyan-400 hover:text-cyan-300 underline decoration-dotted"
            >
              {contactInfo.email}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-purple-400">location:</span>
            <span>{contactInfo.location}</span>
          </div>
        </div>

        {/* Motto */}
        <div className="flex items-center mt-4 gap-2">
          <span className="text-green-400">➜</span>
          <span className="text-blue-400">~</span>
          <span className="text-slate-400 ml-2">cat motto.txt</span>
        </div>
        <div className="pl-4 text-yellow-300 italic">{motto}</div>

        
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="flex items-center justify-between text-slate-500 text-sm font-mono border-t border-slate-800 pt-6">
      
      {/* Left */}
      <div>
        © 2026 Thanishkka Vijayabaskar
      </div>

      {/* Right */}
      <div className="flex gap-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-300 transition-colors"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-300 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </div>

  </div>
</footer>
  );
};

export default Footer;