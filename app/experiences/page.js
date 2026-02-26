"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Navbar from '@/components/navbar';
import styles from './Experiences.module.css';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 'hack-forsyth',
    index: '01',
    role: 'Co-Founder & Organizer',
    title: 'Hack Forsyth',
    date: 'Sept 2025 – Present',
    accent: '#a855f7',
    body: [
      "Forsyth County didn't have a student-led hackathon. So we built one.",
      "Co-founded Hack Forsyth with a GHP alum, and it became the county's largest — 100+ participants across 8 schools showing up to build something in a single day. I led the branding, ran the opening presentation, and designed and taught an applied machine learning workshop from scratch.",
      "Getting to watch students who've never shipped anything go from blank screen to working project in a few hours — that part never gets old.",
    ],
    links: [{ label: 'Read the coverage →', href: 'https://www.forsythnews.com/news/education/over-100-high-schoolers-compete-in-inaugural-hackforsyth-coding-competition/' }],
    photos: [
      { src: '/images/hack_forsyth.jpeg', alt: 'Opening session' },
      { src: '/images/hack_forsyth1.jpeg', alt: 'Helping with Projects' },
      { src: '/images/hack_forsyth2.jpeg', alt: 'ML workshop' },
      { src: '/images/hack_forsyth3.jpg', alt: 'Teams at Work' },
    ],
    hasTicker: true,
    ticker: 'Hack Forsyth — Featured in Forsyth County News',
  },
  {
    id: 'cascade',
    index: '02',
    role: 'Co-Founder & Website Lead',
    title: 'Cascade',
    date: 'Feb 2025 – Present',
    accent: '#06b6d4',
    body: [
      "Atlanta's largest all-girls hackathon. We built it because we wanted to.",
      "Co-founded Cascade through the All Girls Hackathon initiative and paired it with a Women in STEM networking dinner — because a competition alone isn't a community. I led the website and all the visual branding, and designed and taught web development workshops for participants.",
      "The room full of girls pitching projects they built themselves in a day made every late planning call worth it.",
    ],
    links: [{ label: 'View the website here →', href: 'https://cascade-9p82qmvwo-vthani25s-projects.vercel.app/' }],
    photos: [
      { src: '/images/cascade1.JPG', alt: 'Workshop Presentation' },
      { src: '/images/cascade2.JPG', alt: 'Helping with Workshop' },
      { src: '/images/cascade3.jpg', alt: 'Workshop Presentation' },
      { src: '/images/cascade4.jpg', alt: 'Group Photo' },
      { src: '/images/cascade5.jpg', alt: 'Music Workshop Code' },
      { src: '/images/cascade_dinner_1.jpg', alt: 'Women in STEM dinner' },
    ],
  },
  {
    id: 'cybersec-workshops',
    index: '03',
    role: 'Workshop Facilitator',
    title: 'Cybersec Workshops',
    date: 'Summer 2025',
    accent: '#10b981',
    body: [
      "Ran a series of cybersecurity workshops through the Athena Initiative with Hack Club for Girls — reached people nationally, which still feels kind of wild to say.",
      "Covered real stuff: encryption, threat detection, digital safety — hands-on, not lecture-style. I designed the slides and curriculum myself, because there's a big difference between a slide deck that teaches and one that just talks at people.",
      "It's one thing to know how to do something. Teaching it is a whole different skill.",
    ],
    links: [{ label: 'View the workshop slides →', href: 'https://www.canva.com/design/DAGuYLhGUYo/YQAtV3NuO7GxcNFTtuvqHA/view?utm_content=DAGuYLhGUYo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hceaf5c738f' }],
    photos: [],
  },
  {
    id: 'ma4g',
    index: '04',
    role: 'National Problem Set Writer',
    title: 'Math & AI For Girls',
    date: 'Nov 2024 – Present',
    accent: '#f59e0b',
    body: [
      "I write the problems for a national math and CS competition — in LaTeX, which is its own kind of puzzle.",
      "Beyond writing, I evaluate 300+ submissions per cycle, help organize the awards, and lead outreach to grow participation. There's something satisfying about crafting a problem that's genuinely hard but fair, where the aha-moment is built right into the structure.",
      "Good problems don't just test knowledge. They change how you think.",
    ],
    links: [{ label: "See last year's problem set →", href: 'https://www.mathandai4girls.org/_files/ugd/2d4825_f8046bb8ca8548beb955af81e57600e3.pdf' }],
    photos: [],
  },
  {
    id: 'women-in-stem',
    index: '05',
    role: 'National Program Manager — Resources',
    title: 'Women in STEM',
    date: 'June 2025 – Present',
    accent: '#ec4899',
    body: [
      "Less visible than running a hackathon, but probably higher-leverage.",
      "I design onboarding resources for ambassadors, write quarterly newsletters, and build out an international resource hub. Collaborating with industry professionals to develop CS curricula that student clubs can actually use.",
      "Building systems other people can grow their own communities with — that's the kind of work I want to be doing.",
    ],
    pullQuote: "A community grows fastest when everyone can see a place for themselves in it.",
    links: [],
    photos: [],
  },
  {
    id: 'technovation',
    index: '06',
    role: 'National Ambassador',
    title: 'Technovation Challenge',
    date: 'Oct 2025 – Present',
    accent: '#818cf8',
    body: [
      "I recruit students nationwide and support them through the full arc of Technovation — from first idea to international competition.",
      "I give technical guidance, review projects, and offer leadership support to help teams actually advance. Having gone through it myself as a Semifinalist with AidMate, I know exactly what teams need to hear at each stage. And what they don't.",
    ],
    pullQuote: "National Semifinalist with AidMate, so I know exactly what it takes to get there.",
    links: [],
    photos: [],
  },
  {
    id: 'hack-club',
    index: '07',
    role: 'Chapter President',
    title: 'Hack Club',
    date: 'Aug 2025 – Present',
    accent: '#ef4444',
    body: [
      "Running our school's Hack Club chapter: which mostly means convincing people that building things is more fun than watching other people build things.",
      "I run monthly hands-on workshops, got 50+ students to submit projects, and launched a points system to actually make showing up feel rewarding. We also have a bi-weekly newsletter now with updates from the national Hack Club org, which I write and send out myself.",
      "It's a different kind of organizing than running a hackathon. This one's about showing up every week and keeping the momentum going.",
    ],
    links: [
      { label: 'Follow us on Instagram →', href: 'https://www.instagram.com/sfhs_hackclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    ],
    photos: [
      { src: '/images/hackclub1.jpg', alt: 'Monthly workshop' },
      { src: '/images/hackclub2.png', alt: 'Boba Drops YSWS' },
    ],
  },
];

// ── Ticker ──────────────────────────────────────────────────────
const Ticker = ({ text, accent }) => {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Wait for layout
    requestAnimationFrame(() => {
      const halfWidth = track.scrollWidth / 2;
      tweenRef.current = gsap.fromTo(
        track,
        { x: 0 },
        { x: -halfWidth, duration: halfWidth / 55, ease: 'none', repeat: -1 }
      );
    });

    return () => tweenRef.current?.kill();
  }, []);

  const repeated = Array(16).fill(text);

  return (
    <div className={styles.ticker} style={{ borderColor: `${accent}25` }}>
      <div ref={trackRef} className={styles.tickerTrack}>
        {repeated.map((t, i) => (
          <span key={i} className={styles.tickerItem}>
            {t}
            <span className={styles.tickerDot} style={{ color: accent }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

// ── Polaroid Stack ───────────────────────────────────────────────
const PolaroidStack = ({ photos, accent }) => {
  const [current, setCurrent] = useState(0);
  const stackRef = useRef(null);
  const currentRef = useRef(0);
  const intervalRef = useRef(null);
  const isAnimating = useRef(false);

  const getCards = () => stackRef.current?.querySelectorAll('[data-card]') ?? [];

  const scatterCard = (card, i, total) => {
    const rotations = [-9, 6, -5, 8];
    const xOffsets = [-12, 14, -8, 10];
    const yOffsets = [16, 22, 12, 18];
    gsap.set(card, {
      rotateZ: rotations[i % rotations.length],
      x: xOffsets[i % xOffsets.length],
      y: yOffsets[i % yOffsets.length],
      scale: 0.9,
      zIndex: total - i,
    });
  };

  const advance = (targetIdx) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const cards = getCards();
    const prev = currentRef.current;

    // Send current card to back with a toss
    gsap.to(cards[prev], {
      rotateZ: gsap.utils.random(-12, 12),
      x: gsap.utils.random(-20, 20),
      y: gsap.utils.random(14, 28),
      scale: 0.88,
      zIndex: 1,
      duration: 0.42,
      ease: 'power2.inOut',
    });

    // Bring target card to front
    gsap.to(cards[targetIdx], {
      rotateZ: 0,
      x: 0,
      y: 0,
      scale: 1,
      zIndex: photos.length + 1,
      duration: 0.52,
      ease: 'back.out(1.2)',
      delay: 0.06,
      onComplete: () => { isAnimating.current = false; },
    });

    currentRef.current = targetIdx;
    setCurrent(targetIdx);
  };

  const next = () => advance((currentRef.current + 1) % photos.length);

  // Scatter on mount via ScrollTrigger
  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    const cards = getCards();

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.85 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger: 0.07,
        ease: 'back.out(1.3)',
        scrollTrigger: { trigger: stack, start: 'top 82%' },
        onComplete: () => {
          cards.forEach((card, i) => {
            if (i === 0) {
              gsap.set(card, { rotateZ: 0, x: 0, y: 0, scale: 1, zIndex: photos.length + 1 });
            } else {
              scatterCard(card, i, photos.length);
            }
          });
        },
      }
    );
  }, []);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(next, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClick = () => {
    clearInterval(intervalRef.current);
    next();
    intervalRef.current = setInterval(next, 3000);
  };

  return (
    <div className={styles.polaroidWrap}>
      <div ref={stackRef} className={styles.polaroidStack} onClick={handleClick}>
        {photos.map((photo, i) => (
          <div key={i} data-card className={styles.polaroid} style={{ '--accent': accent }}>
            <div className={styles.polaroidImg}>
              <img src={photo.src} alt={photo.alt} />
            </div>
            <p className={styles.polaroidCaption}>{photo.alt}</p>
          </div>
        ))}
      </div>
      <p className={styles.polaroidHint}>click to flip through</p>
      <div className={styles.polaroidDots}>
        {photos.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            style={i === current ? { background: accent } : {}}
            onClick={(e) => { e.stopPropagation(); advance(i); }}
            aria-label={`Photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// ── Entry Section ─────────────────────────────────────────────────
const EntrySection = ({ exp, index }) => {
  const entryRef = useRef(null);
  const isEven = index % 2 === 0;
  const hasPhotos = exp.photos?.length > 0;

  useEffect(() => {
    const el = entryRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll('[data-reveal]'),
      { opacity: 0, y: 26 },
      {
        opacity: 1,
        y: 0,
        duration: 0.72,
        stagger: 0.09,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      }
    );
  }, []);

  return (
    <article ref={entryRef} className={styles.entry} id={exp.id}>
      {exp.hasTicker && <Ticker text={exp.ticker} accent={exp.accent} />}

      <div className={`${hasPhotos ? styles.entryInner : styles.entryInnerFull} ${hasPhotos && !isEven ? styles.entryFlipped : ''}`}>
        {/* Text */}
        <div className={styles.textBlock}>
          <div className={styles.entryMeta} data-reveal>
            <span className={styles.entryIndex} style={{ color: exp.accent }}>{exp.index} —</span>
            <span className={styles.entryRole}>{exp.role}</span>
            <span className={styles.entryDate}>{exp.date}</span>
          </div>

          <h2 className={styles.entryTitle} data-reveal>
            <span style={{ color: exp.accent }}>/</span>{exp.title}
          </h2>

          {exp.body.map((para, i) => (
            <p key={i} className={`${styles.para} ${i === 0 ? styles.leadPara : ''}`} data-reveal>
              {para}
            </p>
          ))}

          {/* Pull quote for full-width entries */}
          {exp.pullQuote && (
            <div
              className={styles.pullQuote}
              data-reveal
              style={{ borderColor: exp.accent }}
            >
              <p style={{ color: exp.accent }}>{exp.pullQuote}</p>
            </div>
          )}

          {exp.links?.length > 0 && (
            <div className={styles.entryLinks} data-reveal>
              {exp.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.entryLink}
                  style={{ color: exp.accent }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Photos */}
        {hasPhotos && (
          <div className={styles.photoBlock}>
            <PolaroidStack photos={exp.photos} accent={exp.accent} />
          </div>
        )}
      </div>

      <div className={styles.entryRule} style={{ background: `linear-gradient(90deg, ${exp.accent}45, transparent)` }} />
    </article>
  );
};

// ── Page ──────────────────────────────────────────────────────────
const ExperiencesPage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll('[data-anim]'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.11, ease: 'power3.out', delay: 0.15 }
    );
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />

      <header ref={heroRef} className={styles.hero}>
        <p className={styles.heroEyebrow} data-anim>field notes</p>
        <h1 className={styles.heroTitle} data-anim>
          <span className={styles.heroAccent}>&lt;</span>Experiences<span className={styles.heroAccent}>/&gt;</span>
        </h1>
        <p className={styles.heroSub} data-anim>
          The programs I've built, the workshops I've taught,
          the rooms I've tried to make bigger for other people.
        </p>
        <div className={styles.heroRule} data-anim />
      </header>

      <main className={styles.main}>
        {experiences.map((exp, i) => (
          <EntrySection key={exp.id} exp={exp} index={i} />
        ))}
      </main>

      <footer className={styles.footer}>
        <span>// more always in progress</span>
      </footer>

      <style jsx global>{`
        ::selection { background: rgba(168,85,247,0.3); color:#fff; }
      `}</style>
    </div>
  );
};

export default ExperiencesPage;