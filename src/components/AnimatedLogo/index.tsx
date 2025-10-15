import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './AnimatedLogo.module.css';

interface AnimatedLogoProps {
  onComplete?: () => void;
  isScrolled?: boolean;
}

const AnimatedLogo = ({ onComplete, isScrolled = false }: AnimatedLogoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Reset animation state on mount (for dev mode hot reloads)
  useEffect(() => {
    setHasAnimated(false);
    setIsMounted(true);
  }, []);

  // If user scrolls during animation, immediately complete it
  useEffect(() => {
    if (isScrolled && !hasAnimated) {
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
      setHasAnimated(true);
    }
  }, [isScrolled, hasAnimated]);

  // Animate when component mounts
  useEffect(() => {
    console.log('AnimatedLogo effect running', { hasAnimated, isMounted, hasContainer: !!containerRef.current, hasTimeline: !!timelineRef.current });

    if (!containerRef.current || !isMounted || hasAnimated || timelineRef.current) return;

    // Wait for DOM to be fully ready and other animations to initialize
    const startDelay = setTimeout(() => {
      if (!containerRef.current || hasAnimated || timelineRef.current) return;

    const svg = containerRef.current.querySelector('svg');
    if (!svg) {
      console.error('SVG not found in container');
      return;
    }

    const paths = svg.querySelectorAll('path');

    if (paths.length === 0) {
      console.error('No paths found in SVG');
      return;
    }

    console.log('Starting logo animation with', paths.length, 'paths');

    // Set up paths for stroke animation - immediately hide them first
    paths.forEach((path) => {
      const length = path.getTotalLength();

      // Set initial state - completely hidden, stroke only, no fill
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        fill: 'none',
        stroke: '#e7e9e4',
        strokeWidth: 2,
        opacity: 0,
        visibility: 'visible'
      });
    });

    // Create animation timeline with smoother easing - NO DELAY
    const tl = gsap.timeline({
      onStart: () => {
        console.log('Animation started');
      },
      onComplete: () => {
        console.log('Animation completed');
        setTimeout(() => {
          setHasAnimated(true);
          timelineRef.current = null;
          if (onComplete) onComplete();
        }, 100);
      }
    });

    timelineRef.current = tl;

    // First fade in all paths quickly
    tl.to(paths, {
      opacity: 1,
      duration: 0.01
    });

    // Then animate each path drawing with smooth easing
    paths.forEach((path, index) => {
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: 'power1.inOut',
      }, index === 0 ? 0.01 : '-=1.2');
    });

    // After all paths are drawn, fill them and remove stroke
    tl.to(paths, {
      fill: '#e7e9e4',
      stroke: 'none',
      strokeWidth: 0,
      duration: 0.8,
      ease: 'power1.out',
      stagger: 0.05
    }, '-=0.4');

    console.log('Timeline created, duration:', tl.duration(), 'playing:', tl.isActive());

    // Force play the timeline
    tl.play();
    console.log('Timeline play() called');

    }, 150); // Wait 150ms after initAnimations runs (which has 80ms delay)

    // Cleanup function
    return () => {
      clearTimeout(startDelay);
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
    };
  }, [hasAnimated, isMounted, onComplete]);

  console.log('=== AnimatedLogo RENDER ===');
  console.log('hasAnimated:', hasAnimated);
  console.log('isScrolled:', isScrolled);
  console.log('SVG opacity:', hasAnimated ? 0 : 1);
  console.log('Full logo opacity:', !isScrolled && hasAnimated ? 1 : 0);
  console.log('Boxed logo opacity:', isScrolled && hasAnimated ? 1 : 0);
  console.log('========================');

  // Render both logos with crossfade
  return (
    <div className={styles.logoContainer}>
      {/* Animated SVG - always render but hide after animation */}
      <div
        ref={containerRef}
        data-preserve-animation
        className={styles.logoWrapper}
      >
          {/* Animated SVG */}
          <svg
            className={styles.animatedLogo}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 269.1 79.9"
            style={{
              opacity: hasAnimated ? 0 : 1,
              transition: 'opacity 0.5s ease'
            }}
          >
            <path fill="none" d="M10.9,33.2h0c7.4,0,12.6,6,11.1,12.9l-6.3,29.3h0c-7.4,0-12.6-6-11.2-12.9,0,0,6.3-29.3,6.3-29.3ZM13.1,21.1c.4-4.5,4.8-8.2,9.4-8.2s6.6,2.9,6.3,6.4c-.3,4.4-4.9,8.1-9.6,8.1s-6.3-2.9-6.1-6.3h0Z"/>
            <path fill="none" d="M33.5,33.2h2.5c3.3,0,5.9,2.2,6.2,5.2h0c2.3-1.8,8.2-6.2,15.8-6.2,12.4,0,16.5,10,14,21l-4.8,22.2h-4.9c-4.6,0-7.8-3.8-6.9-8l3.3-14.9c1.2-5.5-.5-9-5.1-9s-3.2.5-4.6,1.2c-3.3,1.7-5.6,4.7-6.3,8.1l-4.9,22.6h-4.8c-4.6,0-7.8-3.7-6.9-7.9l7.4-34.2h0Z"/>
            <path fill="none" d="M79,66c1-1.2,2.7-1.8,4.2-1.3,1.6.5,3.7,1.1,5.6,1.1s3.7-.9,3.8-2.4c.2-2.1-.9-3.2-5.7-5.9-5.4-2.9-8.7-6.2-8.2-12.2.5-6.8,5.3-13.2,18.1-13.2s12.7,3.5,12.7,3.5l-5.2,6.6c-1,1.2-2.6,1.8-4.1,1.4s-3.3-.8-5.1-.8-3.7.8-3.8,2.4,1.2,2.5,4.2,4.1c6.5,3.5,11.4,6.6,10.8,13.4-.6,7.3-7.1,13.7-19,13.7s-13.6-4.1-13.6-4.1l5.1-6.2h0Z"/>
            <path fill="none" d="M112.8,55.6l4.9-22.5h6.9c3.5,0,6.1,2.9,5.3,6.2l-3.6,16.6c-1.2,5.6.4,9.1,4.3,9.1s3.7-.8,5.1-1.8c2.4-1.7,3.9-4.2,4.5-6.8l5-23.3h6.2c3.8,0,6.5,3.1,5.8,6.6l-7.6,35.5h-2.9c-3.1,0-5.7-2.2-5.9-5.1h0c-2.6,2.4-7.2,6.1-15.2,6.1-12.3,0-15.4-10-12.9-20.8h0Z"/>
            <path fill="none" d="M174.1,3.5h0c7.4,0,11,6.1,9.5,12.9l-13.3,59h.7c-7.4,0-11.8-6.1-10.2-12.9l13.3-59h0Z"/>
            <path fill="none" d="M218.9,75.3h-3.1c-3.1,0-5.5-2.1-5.6-5h0c-1.8,1.5-7,6-15.1,6s-16-8.6-15.1-19.4c1.1-13.6,12.1-24.9,25.3-24.9s10.8,3.8,12.2,5.8l2.4-4.7h1.1c3.7,0,6.3,3,5.5,6.4l-7.6,35.8h0ZM210.7,51.5c.6-2.6-.2-5.2-2.3-6.7-1-.8-2.4-1.3-4.1-1.3-5.2,0-11,5-11.7,13.3-.4,4.5,2.2,8.2,6.8,8.2s7.1-3,8.7-5.2c.6-.8,1-1.7,1.2-2.7l1.3-5.6h0Z"/>
            <path fill="none" d="M243.9,33.2h0l.6,5.5c2.9-4.1,7.5-6.3,12.1-6.3,11.9,0,7.3,11,7.3,11,0,0-4.6-2.1-10.6,0-4,1.4-7.3,4.4-7.3,4.4l-4.2,19c-1.1,5-5.5,8.5-10.5,8.5h-4.8l7.5-34.5c.9-4.4,5.2-7.6,9.9-7.6h0Z"/>
          </svg>

          {/* Full logo - positioned exactly over the SVG in the SAME container */}
          <img
            src="/logos/insular-logo-header.svg"
            alt="Insular Casa de Cambio"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: 'auto',
              display: 'block',
              opacity: !isScrolled && hasAnimated ? 1 : 0,
              transition: 'opacity 0.5s ease',
              pointerEvents: !isScrolled && hasAnimated ? 'auto' : 'none',
              zIndex: !isScrolled && hasAnimated ? 2 : 1,
              visibility: !isScrolled && hasAnimated ? 'visible' : 'hidden'
            }}
            loading="eager"
          />
        </div>

      {/* Boxed logo - visible when scrolled */}
      <img
        src="/logos/isologo_boxed.svg"
        alt="Insular Casa de Cambio"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: 'auto',
          minWidth: '60px',
          display: 'block',
          opacity: isScrolled && hasAnimated ? 1 : 0,
          transition: 'opacity 0.5s ease',
          pointerEvents: isScrolled && hasAnimated ? 'auto' : 'none',
          zIndex: isScrolled && hasAnimated ? 2 : 1,
          visibility: isScrolled && hasAnimated ? 'visible' : 'hidden'
        }}
        loading="eager"
      />
    </div>
  );
};

export default AnimatedLogo;

