import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { FiExternalLink, FiVideo, FiAward } from 'react-icons/fi';
import { 
  SiReact, SiNodedotjs, SiPython, SiJavascript, SiTypescript, 
  SiMongodb, SiPostgresql, SiTailwindcss, SiNextdotjs, SiExpress,
  SiFlask, SiDjango, SiDocker, SiAmazon, SiFirebase, SiGit,
  SiAndroid, SiExpo, SiTableau, SiYoutube, SiOpenai,
  SiHtml5, SiCss3, SiSocketdotio, SiTensorflow, SiGooglemaps,
  SiPandas, SiPlotly, SiStreamlit, SiScikitlearn, SiChartdotjs,
} from 'react-icons/si';
import { DiAndroid } from 'react-icons/di';

// ── Text badge fallback for tools with no icon ─────────────────
const TextBadge = ({ label, color = '#9d7bea' }) => (
  <div
    title={label}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 34,
      height: 34,
      background: '#16162a',
      border: '1px solid #252540',
      borderRadius: 7,
      fontSize: 8,
      fontWeight: 700,
      letterSpacing: '0.04em',
      color,
      fontFamily: "'Courier New', monospace",
      textAlign: 'center',
      lineHeight: 1.1,
      padding: '0 2px',
      userSelect: 'none',
    }}
  >
    {label}
  </div>
);

const ProjectCard = ({ title, description, image, link, linkType, index, isLeft, techStack, award }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const techIcons = {
    // ── Already existing ───────────────────────────────────────
    'React':        SiReact,
    'React Native': SiReact,
    'Node.js':      SiNodedotjs,
    'Python':       SiPython,
    'JavaScript':   SiJavascript,
    'TypeScript':   SiTypescript,
    'MongoDB':      SiMongodb,
    'PostgreSQL':   SiPostgresql,
    'Tailwind':     SiTailwindcss,
    'Next.js':      SiNextdotjs,
    'Express':      SiExpress,
    'Flask':        SiFlask,
    'Django':       SiDjango,
    'Docker':       SiDocker,
    'AWS':          SiAmazon,
    'Firebase':     SiFirebase,
    'Git':          SiGit,
    // ── New additions ─────────────────────────────────────────
    'HTML':         SiHtml5,
    'CSS':          SiCss3,
    'Socket.io':    SiSocketdotio,
    'TensorFlow':   SiTensorflow,
    'Google Maps API': SiGooglemaps,
    'Pandas':       SiPandas,
    'Plotly':       SiPlotly,
    'Streamlit':    SiStreamlit,
    'scikit-learn': SiScikitlearn,
    'Matplotlib':   SiScikitlearn,   
    'Chart.js':     SiChartdotjs,
    'OpenAI API':   SiOpenai,
    'YouTube':      SiYoutube,
    'Tableau':      SiTableau,
    'Expo':         SiExpo,
    'Android Studio': SiAndroid,   
  };

  // ── Tools with no suitable icon → text badge ─────────────────
  const textBadges = {
    'Scratch':          { label: 'SCR',  color: '#FF6680' },   // Scratch brand pink-orange
    'MIT App Inventor': { label: 'APP\nINV', color: '#45C8F1' }, // MIT teal
    'Pygame':           { label: 'PYG',  color: '#3db849' },   // game-ish green
    'Tkinter':          { label: 'TK',   color: '#9d7bea' },   // python purple
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || isMobile) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = ((x - centerX) / centerX) * 8;
      const rotateX = -((y - centerY) / centerY) * 12;
      gsap.to(card, {
        rotateX, rotateY, scale: 1.04,
        transformPerspective: 900,
        transformOrigin: 'center',
        duration: 0.3, ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.5, ease: 'power3.out' });
    };

    const handleMouseEnter = () => {
      gsap.to(card, {
        rotateX: -15, rotateY: 0, scale: 1.04,
        transformPerspective: 900, transformOrigin: 'center', duration: 0.4,
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);

  const getLinkIcon = () => {
    switch (linkType) {
      case 'video': return <FiVideo size={18} />;
      case 'award': return <FiAward size={18} />;
      default:      return <FiExternalLink size={18} />;
    }
  };

  const getLinkText = () => {
    switch (linkType) {
      case 'video': return 'Watch Demo';
      case 'award': return 'View Award';
      default:      return 'View Project';
    }
  };

  return (
    <div
      className={`project-card-wrapper ${isLeft ? 'left' : 'right'}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div ref={cardRef} className="project-card">
        <div ref={glowRef} className="card-glow" />
        <div className="card-inner">

          {award && !link && (
            <div className="award-badge">
              <FiAward size={16} />
              <span>{award}</span>
            </div>
          )}

          <div className="image-container">
            <div ref={imageRef} className="image-wrapper">
              <img src={image} alt={title} />
            </div>
            <div className="image-overlay" />
          </div>

          <div className="content">
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>

            <div className="bottom-row">
              {techStack && techStack.length > 0 && (
                <div className="tech-stack">
                  {techStack.map((tech, idx) => {
                    const Icon = techIcons[tech];
                    if (Icon) {
                      return (
                        <div key={idx} className="tech-item" title={tech}>
                          <Icon size={20} />
                        </div>
                      );
                    }
                    const badge = textBadges[tech];
                    if (badge) {
                      return (
                        <div key={idx} className="tech-item" title={tech}>
                          <TextBadge label={badge.label} color={badge.color} />
                        </div>
                      );
                    }
                    // Last resort — plain text badge with the first 3 chars
                    return (
                      <div key={idx} className="tech-item" title={tech}>
                        <TextBadge label={tech.slice(0, 3).toUpperCase()} />
                      </div>
                    );
                  })}
                </div>
              )}

              {link && (
                <a href={link} className="link" target="_blank" rel="noopener noreferrer">
                  <span>{getLinkText()}</span>
                  {getLinkIcon()}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-card-wrapper {
          width: 50%;
          opacity: 0;
          animation: fadeInUp 1s ease forwards;
          margin-bottom: -110px;
        }
        .project-card-wrapper.left { align-self: flex-start; padding-right: 30px; }
        .project-card-wrapper.right { align-self: flex-end; padding-left: 30px; }
        @keyframes fadeInUp {
          to   { opacity: 1; transform: translateY(0); }
          from { opacity: 0; transform: translateY(50px); }
        }
        .project-card {
          perspective: 1500px;
          position: relative;
          width: 100%;
          max-width: 580px;
        }
        .project-card-wrapper.left .project-card  { margin-left: auto; }
        .project-card-wrapper.right .project-card { margin-right: auto; }
        .card-glow {
          position: absolute;
          top: -3px; left: -3px; right: -3px; bottom: -3px;
          background: rgba(140, 0, 255, 0.12);
          border-radius: 12px;
          opacity: 0;
          filter: blur(24px);
          z-index: -1;
          transition: opacity 0.4s ease;
        }
        .card-inner {
          background: #0f0f1e;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid #1a1a2e;
          transform-style: preserve-3d;
          position: relative;
          box-shadow: 0 4px 24px rgba(0,0,0,0.4);
        }
        .award-badge {
          position: absolute;
          top: 16px; right: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(255,200,0,0.12);
          border: 1px solid rgba(255,200,0,0.3);
          border-radius: 6px;
          color: #ffb800;
          font-size: 12px;
          font-weight: 600;
          z-index: 11;
          letter-spacing: 0.3px;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          background: #0a0a15;
        }
        .image-wrapper { width: 100%; height: 100%; }
        .image-wrapper img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          filter: brightness(0.85) contrast(1.05);
        }
        .image-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 40%;
          background: linear-gradient(to top, #0f0f1e 0%, transparent 100%);
          pointer-events: none;
        }
        .content { padding: 24px 26px 22px; }
        .title {
          font-size: 22px; font-weight: 700;
          color: #ffffff; margin-bottom: 10px; letter-spacing: -0.3px;
        }
        .description {
          font-size: 14px; line-height: 1.65;
          color: #a8a8b8; margin-bottom: 16px;
        }
        .bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid #1f1f2e;
        }
        .tech-stack { display: flex; gap: 10px; flex-wrap: wrap; }
        .tech-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px; height: 34px;
          background: #16162a;
          border: 1px solid #252540;
          border-radius: 7px;
          color: #9d7bea;
          transition: all 0.25s ease;
        }
        .tech-item:hover {
          background: #1d1d36;
          border-color: #7c5ce0;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(124,92,224,0.2);
        }
        .link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #1a2332;
          color: #5fd4f4;
          text-decoration: none;
          border-radius: 7px;
          font-size: 13px; font-weight: 600;
          border: 1px solid #2a3b4f;
          position: relative; overflow: hidden;
          transition: all 0.25s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .link:hover {
          background: #1f2938;
          border-color: #3d5570;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(95,212,244,0.15);
        }
        @media (max-width: 768px) {
          .project-card-wrapper {
            width: 100%; margin-bottom: 40px; perspective: 1200px;
          }
          .project-card-wrapper.left,
          .project-card-wrapper.right { padding: 0; align-self: stretch; }
          .project-card { max-width: 100%; }
          .project-card-wrapper.left .project-card,
          .project-card-wrapper.right .project-card { margin: 0; }
          .award-badge { top: 14px; right: 14px; font-size: 11px; padding: 5px 10px; }
          .image-container { height: 220px; }
          .content { padding: 20px 22px 18px; }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;