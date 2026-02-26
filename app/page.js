'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/herosection';
import BentoGrid from '@/components/bentogrid';
import TechStack from '@/components/techstack';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: '#04071d' }} />,
});

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  // Skip Spline on mobile entirely — GPU can't handle it
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  // Defer Spline init until browser is idle, so the rest of the
  // page paints first. Falls back to a 2s timeout if requestIdleCallback isn't supported (Safari).
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(() => setMounted(true), { timeout: 2000 });
      return () => cancelIdleCallback(id);
    } else {
      // Fallback for Safari
      const id = setTimeout(() => setMounted(true), 200);
      return () => clearTimeout(id);
    }
  }, []);

  // Unmount Spline when it scrolls out of view so it stops
  // consuming GPU while the user is reading the rest of the page
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const showSpline = mounted && inView && !isMobile;

  return (
    <div className="min-h-screen bg-[#04071d]" suppressHydrationWarning>
      <Navbar />

      <section
        ref={sectionRef}
        id="home"
        className="relative w-full h-screen overflow-hidden mt-0"
      >
        {/* Static dark background so there's never a white flash */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: '#04071d',
            zIndex: 0,
          }}
        />

        {showSpline && (
          <div style={{ position: 'relative', width: '100%', height: '100%', zIndex: 1 }}>
            <Spline scene="https://prod.spline.design/WUCjPC1jNmp79Mf6/scene.splinecode" />
          </div>
        )}

        {/* Mobile fallback — subtle gradient so the section isn't just black */}
        {isMobile && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at 60% 40%, rgba(168,85,247,0.12) 0%, #04071d 70%)',
              zIndex: 1,
            }}
          />
        )}
      </section>

      <HeroSection />
      <TechStack />
      <BentoGrid />
      <Footer />
    </div>
  );
}