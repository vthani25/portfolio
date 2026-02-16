'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/herosection';
import BentoGrid from '@/components/bentogrid';
import TechStack from '@/components/techstack';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    //setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#04071d]">
      {/* Navbar */}
      <Navbar />

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

        {/* Scrolling Tech Stack */}
      <TechStack />

      {/* Bento Grid */}
      <BentoGrid />

      {/* Footer */}
      <Footer />

    </div>
  );
}