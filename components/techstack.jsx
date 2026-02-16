'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TechStack = () => {
  const techStacks = {
    frontend: {
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/50',
      items: [
        { name: 'HTML/CSS', logo: '/logos/html-css.png' },
        { name: 'Tailwind CSS', logo: '/logos/tailwind.png' },
        { name: 'Vanilla JS', logo: '/logos/javascript.png' },
        { name: 'React JS', logo: '/logos/react.png' },
        { name: 'React Native', logo: '/logos/react-native.png' },
        { name: 'Streamlit', logo: '/logos/streamlit.png' },
        { name: 'MIT App Inventor', logo: '/logos/mit-app-inventor.png' },
        { name: 'Expo', logo: '/logos/expo.png' },
        { name: 'Scratch', logo: '/logos/scratch.png' },
        { name: 'Plotly', logo: '/logos/plotly.png' },
    ]},
    backend: {
      color: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500/50',
      items: [
        { name: 'Node.js', logo: '/logos/nodejs.png' },
        { name: 'Django', logo: '/logos/django.png' },
        { name: 'Express.js', logo: '/logos/express.png' },
        { name: 'Firebase', logo: '/logos/firebase.png' },
        { name: 'MongoDB', logo: '/logos/mongodb.png' },
        { name: 'Vercel', logo: '/logos/vercel.png' },
      ],
    },
    tools: {
      color: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-500/50',
      items: [
        { name: 'Git/GitHub', logo: '/logos/github.png' },
        { name: 'VS Code', logo: '/logos/vscode.png' },
        { name: 'Figma', logo: '/logos/figma.png' },
        { name: 'Canva', logo: '/logos/canva.png' },
        { name: 'Google/MS Suite', logo: '/logos/google-suite.png' },
        { name: 'Tableau', logo: '/logos/tableau.png' },
        { name: 'Matplotlib', logo: '/logos/matplotlib.png' },
        { name: 'LaTeX', logo: '/logos/latex.png' },
      ],
    },
  };

  const TechCard = ({ tech, borderColor }) => (
    <div 
      className={`group flex items-center gap-3 bg-slate-900/50 backdrop-blur-sm rounded-lg px-4 py-2.5 min-w-[200px] cursor-pointer
        border-2 ${borderColor} hover:border-4 
        transition-all duration-300 hover:scale-105`}
    >
      <div className="relative w-8 h-8 flex-shrink-0">
        <Image
          src={tech.logo}
          alt={tech.name}
          fill
          className="object-contain"
        />
      </div>
      <div className="font-mono text-sm font-medium text-slate-200 tracking-wide">
        {tech.name}
      </div>
    </div>
  );

  const ScrollingRow = ({ items, reverse = false, borderColor, sectionKey }) => {
    const scrollRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer) return;

      const scrollWidth = scrollContainer.scrollWidth / 3; // Divide by 3 since we duplicate 3 times
      
      // Set initial position for reverse animation
      if (reverse) {
        gsap.set(scrollContainer, { x: -scrollWidth });
      }

      animationRef.current = gsap.to(scrollContainer, {
        x: reverse ? 0 : -scrollWidth,
        duration: 25,
        ease: 'none',
        repeat: -1,
      });

      return () => {
        if (animationRef.current) {
          animationRef.current.kill();
        }
      };
    }, [reverse]);

    const handleMouseEnter = () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };

    const handleMouseLeave = () => {
      if (animationRef.current) {
        animationRef.current.resume();
      }
    };

    // Duplicate items for seamless loop
    const duplicatedItems = [...items, ...items, ...items];

    return (
      <div className="relative overflow-hidden py-2">
        <div
          ref={scrollRef}
          className="flex gap-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {duplicatedItems.map((tech, index) => (
            <TechCard key={`${tech.name}-${index}`} tech={tech} borderColor={borderColor} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen bg-gradient-to-b from-slate-950 to-slate-900 py-8 px-4 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-center mb-13 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-mono">
          &lt;Tech Stack /&gt;
        </h1>

        <div className="space-y-10">
          {Object.entries(techStacks).map(([category, { color, borderColor, items }], index) => (
            <div key={category} className="relative ">
              <div className="flex items-center gap-3 mb-3 pl-2">
                <span className={`text-slate-600 font-mono text-sm`}>&lt;</span>
                <h2 className={`text-lg font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent font-mono`}>
                  {category}
                </h2>
                <span className={`text-slate-600 font-mono text-sm`}>/&gt;</span>
                <div className={`h-px flex-grow bg-gradient-to-r ${color} opacity-20`}></div>
              </div>
              <ScrollingRow 
                items={items} 
                reverse={index % 2 !== 0} 
                borderColor={borderColor}
                sectionKey={category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;