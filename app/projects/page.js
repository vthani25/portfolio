'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const timelineRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Cyberlearn',
      description: 'Interactive cybersecurity education platform with gamified learning modules and real-time threat simulations',
      type: 'demo',
      link: 'https://demo.cyberlearn.com',
      tags: ['React', 'Node.js', 'WebSockets'],
      gradient: 'from-cyan-500 via-blue-600 to-purple-600',
    },
    {
      id: 2,
      title: 'Lunaguard',
      description: 'AI-powered sleep tracking app with personalized recommendations and circadian rhythm analysis',
      type: 'video',
      link: 'https://youtube.com/lunaguard-demo',
      tags: ['React Native', 'Python', 'ML'],
      gradient: 'from-indigo-500 via-purple-600 to-pink-600',
    },
    {
      id: 3,
      title: 'Cryptography Toolkit',
      description: 'Comprehensive suite of encryption algorithms with visual demonstrations and educational resources',
      type: 'demo',
      link: 'https://crypto-toolkit.app',
      tags: ['TypeScript', 'WebCrypto', 'D3.js'],
      gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    },
    {
      id: 4,
      title: 'Arkire Website',
      description: 'Modern responsive portfolio site with dynamic content management and seamless animations',
      type: 'demo',
      link: 'https://arkire.dev',
      tags: ['Next.js', 'Tailwind', 'GSAP'],
      gradient: 'from-orange-500 via-red-600 to-pink-600',
    },
    {
      id: 5,
      title: 'Nutriscan',
      description: 'Computer vision app for instant nutritional analysis from food photos with dietary recommendations',
      type: 'award',
      link: '#',
      award: '🏆 Best Health App 2024',
      tags: ['Flutter', 'TensorFlow', 'Firebase'],
      gradient: 'from-lime-500 via-green-600 to-emerald-600',
    },
    {
      id: 6,
      title: 'Live Local',
      description: 'Community-driven platform connecting locals with authentic experiences and hidden gems',
      type: 'demo',
      link: 'https://livelocal.app',
      tags: ['React', 'MongoDB', 'Maps API'],
      gradient: 'from-amber-500 via-orange-600 to-red-600',
    },
    {
      id: 7,
      title: 'KWK Project',
      description: 'Educational mobile app empowering young women in tech through interactive coding challenges',
      type: 'video',
      link: 'https://youtube.com/kwk-demo',
      tags: ['Swift', 'iOS', 'Firebase'],
      gradient: 'from-pink-500 via-rose-600 to-red-600',
    },
    {
      id: 8,
      title: 'Find Your Future',
      description: 'AI career guidance platform matching students with opportunities based on skills and interests',
      type: 'demo',
      link: 'https://findyourfuture.io',
      tags: ['Vue.js', 'Python', 'PostgreSQL'],
      gradient: 'from-violet-500 via-purple-600 to-fuchsia-600',
    },
    {
      id: 9,
      title: 'Aidmate',
      description: 'Virtual medical assistant providing symptom analysis and connecting users with healthcare providers',
      type: 'award',
      link: '#',
      award: '🏆 Healthcare Innovation Award',
      tags: ['React Native', 'NLP', 'AWS'],
      gradient: 'from-blue-500 via-cyan-600 to-teal-600',
    },
    {
      id: 10,
      title: 'AI Career Coach',
      description: 'Personalized career development platform with AI-driven resume optimization and interview prep',
      type: 'demo',
      link: 'https://aicareercoach.com',
      tags: ['Next.js', 'OpenAI', 'Supabase'],
      gradient: 'from-sky-500 via-blue-600 to-indigo-600',
    },
    {
      id: 11,
      title: 'LockedIn',
      description: 'Social productivity app with focus sessions, goal tracking, and accountability partnerships',
      type: 'video',
      link: 'https://youtube.com/lockedin-demo',
      tags: ['React Native', 'Node.js', 'WebRTC'],
      gradient: 'from-teal-500 via-emerald-600 to-green-600',
    },
    {
      id: 12,
      title: 'Chat App',
      description: 'Real-time messaging platform with end-to-end encryption and rich media sharing',
      type: 'demo',
      link: 'https://chat.app',
      tags: ['React', 'Socket.io', 'MongoDB'],
      gradient: 'from-purple-500 via-violet-600 to-indigo-600',
    },
    {
      id: 13,
      title: 'Cascade',
      description: 'Project management tool with kanban boards, time tracking, and team collaboration features',
      type: 'demo',
      link: 'https://cascade.pm',
      tags: ['Angular', 'Express', 'MySQL'],
      gradient: 'from-rose-500 via-pink-600 to-fuchsia-600',
    },
    {
      id: 14,
      title: 'Asteroid Dashboard',
      description: 'Data visualization dashboard tracking near-Earth objects with real-time NASA API integration',
      type: 'demo',
      link: 'https://asteroid-dash.space',
      tags: ['React', 'D3.js', 'NASA API'],
      gradient: 'from-slate-500 via-gray-600 to-zinc-600',
    },
    {
      id: 15,
      title: 'Python Projects',
      description: 'Collection of data science and automation scripts including web scrapers and ML models',
      type: 'demo',
      link: 'https://github.com/yourname/python-projects',
      tags: ['Python', 'Pandas', 'Scikit-learn'],
      gradient: 'from-yellow-500 via-amber-600 to-orange-600',
    },
    {
      id: 16,
      title: 'Scratch NASA App',
      description: 'Educational space exploration game teaching orbital mechanics and mission planning',
      type: 'award',
      link: '#',
      award: '🏆 Best Educational Game',
      tags: ['Scratch', 'Game Design'],
      gradient: 'from-red-500 via-orange-600 to-yellow-600',
    },
    {
      id: 17,
      title: 'Scratch App',
      description: 'Interactive storytelling platform enabling kids to create and share animated adventures',
      type: 'demo',
      link: 'https://scratch.mit.edu/projects/yourproject',
      tags: ['Scratch', 'Animation'],
      gradient: 'from-green-500 via-lime-600 to-yellow-600',
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const getLinkIcon = (type) => {
    switch (type) {
      case 'demo':
        return '🚀';
      case 'video':
        return '🎥';
      case 'award':
        return '🏆';
      default:
        return '🔗';
    }
  };

  const getLinkText = (type) => {
    switch (type) {
      case 'demo':
        return 'View Demo';
      case 'video':
        return 'Watch Video';
      case 'award':
        return 'View Award';
      default:
        return 'View Project';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-4">
      hi
    </div>
  );
};

export default Projects;