"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ProjectCard from '@/components/projectcard';
import styles from './ProjectsCategorized.module.css';

gsap.registerPlugin(ScrollTrigger);

const ProjectsCategorized = () => {
  const cursorRef = useRef(null);
  const timelineRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = {
    'Web Apps': [
      {
        title: 'Find Your Future',
        description: 'AI-powered career and internship platform with job search, recruiter/admin portal, and AI chatbot guidance. National award-winning project built with React.js and Node.js.',
        image: '/images/find-future.png',
        link: 'https://youtu.be/Cy8G1WveIJY',
        // Full-stack web app with AI chatbot
        techStack: ['React', 'Node.js', 'Express', 'OpenAI API'],
        award: 'FBLA National Award',
      },
      {
        title: 'Arkire Website',
        description: 'Responsive website designed with HTML/CSS and Figma, focused on visual storytelling and UX design principles.',
        image: '/images/arkire.png',
        link: 'https://www.arkirehq.com/',
        // Design-led static site, no backend
        techStack: ['HTML', 'CSS', 'JavaScript', 'Figma'],
      },
      {
        title: 'Live Local',
        description: 'Community-focused web platform connecting local events, volunteering opportunities, and student engagement initiatives.',
        image: '/images/live-local.png',
        link: 'https://youtu.be/eb5cBPb9fcQ',
        // MERN stack
        techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      },
      {
        title: 'Asteroid Dashboard',
        description: 'Interactive dashboard built with Python, Streamlit, Plotly, and ML models to visualize asteroid data. Developed at an international all-girls hackathon (Ascend, LA).',
        image: '/images/asteroid.png',
        link: 'https://asteroid-ascend.streamlit.app/',
        // Pure Python data viz — Streamlit deploy confirms no JS frontend
        techStack: ['Python', 'Streamlit', 'Plotly', 'Pandas'],
      },
      {
        title: 'Nutriscan',
        description: 'Nutrition tracking web app that analyzes food intake and suggests improvements using interactive charts and visualizations.',
        image: '/images/nutriscan.png',
        link: 'https://nutriscan-flax.vercel.app/',
        // Vercel deploy = React frontend, charting library
        techStack: ['React', 'JavaScript', 'Chart.js', 'CSS'],
      },
      {
        title: 'Chat App',
        description: 'Real-time messaging web application integrating React.js and Node.js with authentication and dynamic chat features.',
        image: '/images/chat_app_1.png',
        link: 'https://quickchatfrontend.vercel.app/',
        // Real-time — Socket.io is the core technology
        techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      },
      {
        title: 'AI Career Coach',
        description: 'Web-based AI assistant providing career guidance, resume tips, and learning path suggestions for high school students.',
        image: '/images/ai-coach.png',
        link: 'https://sensai-f3f2tclt7-vthani25s-projects.vercel.app/',
        // Vercel deploy, AI-powered — Next.js is standard for this pattern
        techStack: ['Next.js', 'OpenAI API', 'JavaScript', 'CSS'],
      },
      {
        title: 'Tamil Learning',
        description: 'Interactive web app for learning Tamil language fundamentals through structured lessons and exercises.',
        image: '/images/tamil-learning.png',
        link: 'https://tamil-learning.vercel.app/',
        // Frontend only
        techStack: ['React', 'JavaScript', 'CSS'],
      },
    ],
    'Mobile Apps': [
      {
        title: 'Lunaguard',
        description: 'Safety-focused app integrating AI threat detection, ML self-defense tutorials, silent evidence collection, and instant crisis support via Google Maps.',
        image: '/images/lunaguard.jpg',
        link: 'https://www.youtube.com/watch?app=desktop&v=lOvUDMHvn6c',
        techStack: ['React Native', 'Firebase', 'Android Studio'],
      },
      {
        title: 'LockedIn',
        description: 'Productivity app built with MIT App Inventor featuring calendar management, group chat, and OpenAI-powered tools to boost focus.',
        image: '/images/lockedin.png',
        link: 'https://www.canva.com/design/DAGc-BQWORY/QTH1l7QZQIST1CEbNSZjcQ/view?utm_content=DAGc-BQWORY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdef5c23794',
        techStack: ['MIT App Inventor', 'OpenAI API', 'Firebase'],
        award: 'GA Tech Fair Winner',
      },
      {
        title: 'AidMate',
        description: 'React Native app that helps users with first-aid and emergency response. Includes ML symptom detection, CPR animations, multilingual support, and location sharing. National Technovation Semifinalist.',
        image: '/images/aidmate.png',
        link: 'https://snack.expo.dev/@vthani25/github.com-vthani25-technovation-girls_personal',
        techStack: ['React Native', 'Expo'],
        award: 'Technovation Semifinalist',
      },
    ],
    'Security Projects': [
      {
        title: 'Cryptography Toolkit',
        description: 'Interactive toolkit teaching hashing, encryption, and salting techniques. Published on FreeCodeCamp with 50k+ views. Includes step-by-step tutorials and example code.',
        image: '/images/crypto-toolkit.png',
        link: 'https://youtu.be/kb_scuDUHls?si=3wOLTeK0YkSQqpv-',
        techStack: ['Python', 'YouTube'],
      },
      {
        title: 'SecuriTV',
        description: 'Educational platform combining cybersecurity concepts with live video lessons and interactive exercises. Helps beginners understand digital threats in a hands-on way.',
        image: '/images/securitv.png',
        link: 'https://vthani25.github.io/securitv/',
        techStack: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        title: 'KWK Project',
        description: 'A practical project focusing on implementing cryptography algorithms in Python, allowing users to experiment with real-world security techniques.',
        image: '/images/kwk.png',
        link: 'https://vthani25.github.io/kwk_cybersecurity',
        techStack: ['Python', 'Tableau', 'HTML', 'CSS'],
      },
      {
        title: 'Cyber Game (CyberLearn)',
        description: 'Gamified cybersecurity experience teaching encryption, malware defense, and network security concepts. Recognized with a $1,500 award.',
        image: '/images/cyberlearn.png',
        techStack: ['Pygame', 'Tkinter'],
        award: '$1,500 Award',
      },
    ],
    'Creative Coding': [
      {
        title: 'Python ML',
        description: 'A collection of Python projects experimenting with machine learning algorithms, including classification, prediction, and data visualization.',
        image: '/images/python-ml.png',
        link: 'https://colab.research.google.com/drive/1dk0i3AB6RTd4zBZFo_fy5AFW3Qj9b7Ln?usp=sharing',
        techStack: ['Python', 'Pandas', 'Matplotlib'],
      },
      {
        title: 'Scratch NASA App',
        description: 'Interactive educational game introducing NASA missions, space exploration, and science concepts through Scratch programming.',
        image: '/images/nasa-scratch.png',
        link: 'https://scratch.mit.edu/projects/1075072242/',
        techStack: ['Scratch'],
      },
      {
        title: 'Scratch Games',
        description: 'Beginner-friendly games created in Scratch to teach programming fundamentals and game design principles.',
        image: '/images/scratch-games.png',
        link: 'https://scratch.mit.edu/projects/401739781',
        techStack: ['Scratch'],
      },
    ],
  };

  const getAllProjects = () => {
    return Object.values(categories).flat();
  };

  const getDisplayProjects = () => {
    if (activeCategory === 'All') {
      return getAllProjects();
    }
    return categories[activeCategory] || [];
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', moveCursor);

    const interactiveElements = document.querySelectorAll('a, .project-card, .category-btn');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => setIsHovering(true));
      el.addEventListener('mouseleave', () => setIsHovering(false));
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    if (isHovering) {
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        ease: 'power2.out',
      });
    } else {
      gsap.to(cursorRef.current, {
        scale: 0.8,
        duration: 0.2,
        ease: 'power2.out',
      });
    }
  }, [isHovering, isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const timeline = timelineRef.current;
    if (timeline) {
      gsap.to(timeline, {
        scrollTrigger: {
          trigger: `.${styles.projectsTimeline}`,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
        scaleY: 1,
        ease: 'none',
      });
    }
  }, [isMobile, activeCategory]);

  const displayProjects = getDisplayProjects();

  return (
    <div className={styles.projectsPage}>
      {!isMobile && (
        <div ref={cursorRef} className={styles.customCursor} />
      )}

      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <h1 className={styles.mainTitle}>
            <span className={styles.titleAccent}>&lt;</span>
            Projects
            <span className={styles.titleAccent}>/&gt;</span>
          </h1>
          <p className={styles.subtitle}>A collection of work spanning cybersecurity, AI, web development, and more</p>

          <div className={styles.categories}>
            <button
              className={`${styles.categoryBtn} ${activeCategory === 'All' ? styles.active : ''}`}
              onClick={() => setActiveCategory('All')}
            >
              All Projects
            </button>
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                className={`${styles.categoryBtn} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </header>

        <div className={styles.projectsTimeline}>
          <div ref={timelineRef} className={styles.timelineLine} />

          <div className={styles.projectsContainer}>
            {displayProjects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                {...project}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        ::selection {
          background: rgba(168, 85, 247, 0.3);
          color: #ffffff;
        }

        @media (max-width: 768px) {
          body {
            cursor: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsCategorized;