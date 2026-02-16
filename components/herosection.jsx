'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
  const typingRef = useRef(null);
  const cursorRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Typing animation
    const words = [
      'Computer Science Student',
      'Software Developer',
      'Technical Leader',
      'Hackathon Organizer'
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typingRef.current.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingRef.current.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      let typingSpeed = isDeleting ? 50 : 150;

      if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    }

    type();

    // Cursor blinking
    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // Fade in content
    gsap.from('.hero-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    });

    // Canvas animation
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const gridSize = 60;
    const backgroundColor = 'rgb(4, 7, 29)';
    const trailColor = 'rgba(96,165,250,0.6)';
    const glowColor = 'rgba(96,165,250,0.4)';

    let cols, rows;
    let x, y;
    let direction = 'right';
    let trail = [];
    let animationFrameId;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.floor(canvas.width / gridSize);
      rows = Math.floor(canvas.height / gridSize);

      // Start one step in from top-left
      x = gridSize;
      y = gridSize;
      direction = 'right';
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function step() {
      switch (direction) {
        case 'right': x += gridSize; break;
        case 'down': y += gridSize; break;
        case 'left': x -= gridSize; break;
        case 'up': y -= gridSize; break;
      }

      // Turn at edges (one step in from border)
      if (x >= (cols - 1) * gridSize && direction === 'right') direction = 'down';
      if (y >= (rows - 1) * gridSize && direction === 'down') direction = 'left';
      if (x <= gridSize && direction === 'left') direction = 'up';
      if (y <= gridSize && direction === 'up') direction = 'right';
    }

    const stepInterval = 120; // slower for subtle effect
    let lastStepTime = 0;

    function animate(timestamp) {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (timestamp - lastStepTime > stepInterval) {
        step();
        trail.push({ x, y, life: 1 });

        if (trail.length > 40) trail.shift(); // subtle longer trail

        lastStepTime = timestamp;
      }

      // Draw trail
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';

      for (let i = 0; i < trail.length - 1; i++) {
        const p1 = trail[i];
        const p2 = trail[i + 1];

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(96,165,250,${p1.life})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = glowColor;
        ctx.stroke();

        p1.life -= 0.02;
      }

      trail = trail.filter(p => p.life > 0);
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'rgb(4,7,29)' }}
      />

      <div className="hero-content relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm Thanishkka
            </h1>

            <div className="text-2xl md:text-4xl font-bold text-purple-400 mb-8 min-h-[3rem]">
              <span ref={typingRef}></span>
              <span ref={cursorRef} className="text-purple-300">|</span>
            </div>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Computer science student and technical leader building software, apps, and hackathons. Advocate for women in computing.
            </p>
          </div>

          {/* Right side - Profile picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-purple-400/30 rounded-2xl">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-purple-400 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-purple-400 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-purple-400 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-purple-400 rounded-br-2xl"></div>
              </div>

              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-400/20 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <svg className="w-24 h-24 mx-auto mb-4 text-purple-400/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <p className="text-purple-400/60 text-sm">Your Photo Here</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}