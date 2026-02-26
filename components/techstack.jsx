'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { FaHtml5, FaReact, FaMobileAlt, FaNodeJs, FaFire, FaGithub, FaFigma, FaGoogle } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiStreamlit, SiExpo, SiPlotly, SiDjango, SiExpress, SiMongodb, SiVercel, SiCanva, SiTableau, SiLatex } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { VscVscode } from 'react-icons/vsc';
import { AiOutlineLineChart } from 'react-icons/ai';

const techStacks = {
  frontend: {
    label: 'Frontend',
    accentColor: '#06b6d4',
    accentRgb: '6,182,212',
    items: [
      { name: 'HTML/CSS',         Icon: FaHtml5,            iconColor: '#E34F26' },
      { name: 'Tailwind CSS',     Icon: SiTailwindcss,      iconColor: '#06B6D4' },
      { name: 'Vanilla JS',       Icon: SiJavascript,       iconColor: '#F7DF1E' },
      { name: 'React JS',         Icon: FaReact,            iconColor: '#61DAFB' },
      { name: 'React Native',     Icon: TbBrandReactNative, iconColor: '#61DAFB' },
      { name: 'Streamlit',        Icon: SiStreamlit,        iconColor: '#FF4B4B' },
      { name: 'MIT App Inventor', Icon: FaMobileAlt,        iconColor: '#a855f7' },
      { name: 'Expo',             Icon: SiExpo,             iconColor: '#ffffff' },
      { name: 'Scratch',          Icon: BsGrid3X3GapFill,   iconColor: '#FF6D00' },
      { name: 'Plotly',           Icon: SiPlotly,           iconColor: '#818cf8' },
    ],
  },
  backend: {
    label: 'Backend',
    accentColor: '#a855f7',
    accentRgb: '168,85,247',
    items: [
      { name: 'Node.js',    Icon: FaNodeJs,  iconColor: '#339933' },
      { name: 'Django',     Icon: SiDjango,  iconColor: '#44B78B' },
      { name: 'Express.js', Icon: SiExpress, iconColor: '#ffffff' },
      { name: 'Firebase',   Icon: FaFire,    iconColor: '#FFCA28' },
      { name: 'MongoDB',    Icon: SiMongodb, iconColor: '#47A248' },
      { name: 'Vercel',     Icon: SiVercel,  iconColor: '#ffffff' },
    ],
  },
  tools: {
    label: 'Tools',
    accentColor: '#818cf8',
    accentRgb: '129,140,248',
    items: [
      { name: 'Git/GitHub',      Icon: FaGithub,           iconColor: '#ffffff' },
      { name: 'VS Code',         Icon: VscVscode,          iconColor: '#007ACC' },
      { name: 'Figma',           Icon: FaFigma,            iconColor: '#F24E1E' },
      { name: 'Canva',           Icon: SiCanva,            iconColor: '#00C4CC' },
      { name: 'Google/MS Suite', Icon: FaGoogle,           iconColor: '#4285F4' },
      { name: 'Tableau',         Icon: SiTableau,          iconColor: '#E97627' },
      { name: 'Matplotlib',      Icon: AiOutlineLineChart, iconColor: '#11557C' },
      { name: 'LaTeX',           Icon: SiLatex,            iconColor: '#008080' },
    ],
  },
};

const TechCard = ({ tech, accentRgb }) => {
  const { Icon, iconColor, name } = tech;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        padding: '20px 65px',
        border: '1px solid rgba(255,255,255,0.07)',
        background: '#0d0d24',
        minWidth: 140,
        marginRight: 35,
        flexShrink: 0,
        transition: 'border-color 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = `rgba(${accentRgb},0.45)`}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
    >
      <Icon size={32} color={iconColor} />
      <span style={{
        fontSize: 13,
        color: '#b9b9bd',
        whiteSpace: 'nowrap',
        fontFamily: 'var(--font-geist-sans)',
        fontWeight: 400,
      }}>
        {name}
      </span>
    </div>
  );
};

const ScrollingRow = ({ items, reverse = false, accentRgb, sectionKey }) => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth / 3;

    if (reverse) {
      gsap.set(scrollContainer, { x: -scrollWidth });
    }

    animationRef.current = gsap.to(scrollContainer, {
      x: reverse ? 0 : -scrollWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      if (animationRef.current) animationRef.current.kill();
    };
  }, [reverse]);

  const handleMouseEnter = () => animationRef.current?.pause();
  const handleMouseLeave = () => animationRef.current?.resume();

  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div
      style={{ overflow: 'hidden', width: '100%' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={scrollRef} style={{ display: 'flex', width: 'max-content' }}>
        {duplicatedItems.map((tech, index) => (
          <TechCard key={`${sectionKey}-${index}`} tech={tech} accentRgb={accentRgb} />
        ))}
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <section style={{
      background: '#050510',
      padding: '72px 0',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 48px', boxSizing: 'border-box' }}>

        <h2 style={{
          fontSize: 'clamp(28px, 3vw, 42px)',
          fontWeight: 800,
          color: '#ffffff',
          margin: '0 0 36px',
          letterSpacing: '-1.5px',
          lineHeight: 1.05,
          fontFamily: 'var(--font-geist-sans)',
        }}>
          <span style={{ color: '#a855f7' }}>&lt;</span>
          Tech Stack
          <span style={{ color: '#a855f7' }}>/&gt;</span>
        </h2>

      </div>

      {/* Full-width scrolling rows — no horizontal padding clipping */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {Object.entries(techStacks).map(([category, { label, accentColor, accentRgb, items }], index) => (
          <div key={category} style={{ width: '100%' }}>

            {/* Label pinned to content width */}
            <div style={{
              maxWidth: 1320,
              margin: '0 auto',
              padding: '0 48px',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginBottom: 10,
            }}>
              <span style={{
                fontSize: 13,
                color: accentColor,
                fontFamily: 'var(--font-geist-sans)',
                fontWeight: 500,
              }}>
                {label}
              </span>
              <div style={{
                flex: 1,
                height: 1,
                background: `linear-gradient(to right, rgba(${accentRgb},0.25), transparent)`,
              }} />
            </div>

            <ScrollingRow
              items={items}
              reverse={index % 2 !== 0}
              accentRgb={accentRgb}
              sectionKey={category}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;