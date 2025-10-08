import { Helmet } from 'react-helmet-async';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../../components/Section';
import CTAButton from '../../components/CTAButton';
import styles from './Home.module.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const revealTextRef = useRef<HTMLParagraphElement>(null);
  const usdRateRef = useRef<HTMLParagraphElement>(null);
  const eurRateRef = useRef<HTMLParagraphElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    // Fetch the SVG content
    fetch('/logos/isologo_naked.svg')
      .then(response => response.text())
      .then(svg => setSvgContent(svg));
  }, []);

  useEffect(() => {
    if (!logoRef.current || !svgContent || !imageWrapperRef.current) return;

    const svg = logoRef.current.querySelector('svg');
    if (!svg) return;

    const paths = svg.querySelectorAll('path');

    paths.forEach((path) => {
      const length = (path as SVGPathElement).getTotalLength();

      // Set up the starting state
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      // Animate based on scroll
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: logoRef.current,
          start: 'top bottom',
          end: 'center center',
          scrub: 1,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [svgContent]);

  const heroRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const baseColorRef = useRef<{ r: number; g: number; b: number } | null>(null);
  const brandColorsRef = useRef<Array<{ r: number; g: number; b: number }>>([]);
  type Particle = { x: number; y: number; vx: number; vy: number; radius: number; life: number; color: { r: number; g: number; b: number } };
  const particlesRef = useRef<Particle[]>([]);
  // frameRef retained for potential debugging; currently not used
  const lastTimeRef = useRef<number | null>(null);
  const colorPhaseRef = useRef(0);
  const prevPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastAngleRef = useRef(0);
  const lastMoveTimeRef = useRef<number>(performance.now());
  const SECONDARY_GLOW_ENABLED = false; // toggleable guard for testing
  const PARTICLES_ENABLED = false; // keep only main brush trail (no extra blobs)
  const TRAIL_ENABLED = true; // enable stamped trail for main brush
  const trailRef = useRef<Array<{ x: number; y: number; angle: number; speed: number; color: { r: number; g: number; b: number } }>>([]);
  const rafRef = useRef<number | null>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  const animate = (ts?: number) => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;
    const now = typeof ts === 'number' ? ts : performance.now();
    const last = lastTimeRef.current ?? now;
    const dt = Math.max(0, Math.min(1, (now - last) / 1000));
    lastTimeRef.current = now;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, 0.06);
    currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, 0.06);

    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // If idle for a while, drive a gentle autonomous drift for the target
    const idleMs = now - lastMoveTimeRef.current;
    if (idleMs > 1200) {
      const t = now * 0.00025;
      const driftX = width * (0.5 + Math.cos(t) * 0.18);
      const driftY = height * (0.45 + Math.sin(t * 1.3) * 0.14);
      targetPos.current.x = driftX;
      targetPos.current.y = driftY;
    }

    // Dissipate previous frame for a smooth trail using body bg color
    const base = baseColorRef.current || { r: 16, g: 16, b: 33 };
    // Ensure base clear uses normal composition, preventing gray veil buildup
    ctx.globalCompositeOperation = 'source-over';
    // Faster trail fade when scrolling for performance
    const trailFade = isScrollingRef.current ? 0.25 : 0.012;
    ctx.fillStyle = `rgba(${base.r},${base.g},${base.b},${trailFade})`;
    ctx.fillRect(0, 0, width, height);

    const x = currentPos.current.x;
    const y = currentPos.current.y;
    const vx = x - prevPosRef.current.x;
    const vy = y - prevPosRef.current.y;
    const speed = Math.hypot(vx, vy); // px per frame in CSS pixels
    prevPosRef.current = { x, y };
    const angle = speed > 0.1 ? Math.atan2(vy, vx) : lastAngleRef.current;
    lastAngleRef.current = angle;

    // Prepare additive blending for color mixing
    ctx.globalCompositeOperation = 'lighter';

    // Cycle brand colors and mix (time + movement)
    const colors = brandColorsRef.current.length
      ? brandColorsRef.current
      : [
          { r: 66, g: 43, b: 226 },
          { r: 249, g: 50, b: 67 },
          { r: 155, g: 209, b: 184 },
        ];
    const mix = (a: { r: number; g: number; b: number }, b: { r: number; g: number; b: number }, t: number) => ({
      r: Math.round(a.r + (b.r - a.r) * t),
      g: Math.round(a.g + (b.g - a.g) * t),
      b: Math.round(a.b + (b.b - a.b) * t),
    });
    // Update phase: base time-driven plus velocity contribution
    const baseSpeed = 0.35; // cycles per second
    const moveFactor = 0.012; // extra cycles per px of movement
    colorPhaseRef.current += dt * baseSpeed + speed * moveFactor * dt;
    const n = colors.length;
    const phase = colorPhaseRef.current;
    const idx = Math.floor(phase) % n;
    const t = phase - Math.floor(phase);
    const cA = colors[idx];
    const cB = colors[(idx + 1) % n];
    const c1 = mix(cA, cB, t);
    const phase2 = phase + 0.5; // offset second color
    const idx2 = Math.floor(phase2) % n;
    const t2 = phase2 - Math.floor(phase2);
    const dA = colors[idx2];
    const dB = colors[(idx2 + 1) % n];
    const c2 = mix(dA, dB, t2);

    // Primary glow at cursor with motion-based shaping
    const speedNorm = Math.min(1, speed / 60);
    const scaleX = 1 + speedNorm * 0.9;   // stronger elongation along motion
    const scaleY = 1 - speedNorm * 0.85;  // thinner across motion
    const shrink = 1 - speedNorm * 0.45;  // more shrink when fast
    const r1 = Math.max(width, height) * 0.14 * shrink;

    // Core tint
    ctx.globalCompositeOperation = 'source-over';
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.scale(scaleX, scaleY);
    const coreRadius = r1 * 0.18;
    const coreAlpha = 0.05 + 0.18 * speedNorm; // dim when static, slightly brighter on fast moves
    ctx.fillStyle = `rgba(${c1.r},${c1.g},${c1.b},${coreAlpha})`;
    ctx.beginPath();
    ctx.arc(0, 0, coreRadius, 0, Math.PI * 2);
    ctx.fill();

    // Additive bloom
    const gr1 = ctx.createRadialGradient(0, 0, 0, 0, 0, r1);
    const bloomAlpha = 0.08 + 0.14 * speedNorm; // responsive brightness
    gr1.addColorStop(0, `rgba(${c1.r},${c1.g},${c1.b},${bloomAlpha})`);
    gr1.addColorStop(1, `rgba(${c1.r},${c1.g},${c1.b},0)`);
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = gr1;
    ctx.beginPath();
    ctx.arc(0, 0, r1 * 1.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Main brush trail (stamped ellipses along recent motion)
    if (TRAIL_ENABLED) {
      // Reduce trail count during scroll for performance
      const maxTrail = isScrollingRef.current ? 6 : 24;
      const speedNorm = Math.min(1, Math.hypot(vx, vy) / 60);
      const trailColor = c1;
      trailRef.current.push({ x, y, angle, speed: speedNorm, color: trailColor });
      if (trailRef.current.length > maxTrail) trailRef.current.shift();

      for (let i = 0; i < trailRef.current.length; i += 1) {
        const node = trailRef.current[i];
        const t = i / (trailRef.current.length - 1 || 1);
        // Older nodes: larger radius but lower alpha, gently elongated by their recorded speed
        const baseR = Math.max(width, height) * 0.11;
        const rr = baseR * (0.3 + t * 0.8);
        const sx = 1 + node.speed * 0.7 * (0.25 + t);
        const sy = 1 - node.speed * 0.75 * (0.25 + t);
        const alpha = 0.16 * Math.pow(t, 1.4);

        ctx.save();
        ctx.translate(node.x, node.y);
        ctx.rotate(node.angle);
        ctx.scale(sx, sy);
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, rr);
        g.addColorStop(0, `rgba(${node.color.r},${node.color.g},${node.color.b},${alpha * 0.5})`);
        g.addColorStop(1, `rgba(${node.color.r},${node.color.g},${node.color.b},0)`);
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(0, 0, rr, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Secondary offset glow
    if (SECONDARY_GLOW_ENABLED) {
      const trailingOffset = 18 + speedNorm * 30;
      const sx = x - Math.cos(angle) * trailingOffset + 8;
      const sy = y - Math.sin(angle) * trailingOffset - 8;
      const r2 = Math.max(width, height) * 0.1;
      ctx.save();
      ctx.translate(sx, sy);
      ctx.rotate(angle);
      ctx.scale(1 + speedNorm * 0.3, 1 - speedNorm * 0.4);
      const gr2 = ctx.createRadialGradient(0, 0, 0, 0, 0, r2);
      gr2.addColorStop(0, `rgba(${c2.r},${c2.g},${c2.b},0.22)`);
      gr2.addColorStop(1, `rgba(${c2.r},${c2.g},${c2.b},0)`);
      ctx.fillStyle = gr2;
      ctx.beginPath();
      ctx.arc(0, 0, r2 * 1.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // Particle-based trail (optional)
    if (PARTICLES_ENABLED) {
      const spawn = Math.min(6, 2 + Math.floor(speed * 0.035));
      for (let i = 0; i < spawn; i += 1) {
        const angleJitter = (Math.random() - 0.5) * 0.25;
        const mag = 0.12 + Math.random() * 0.12; // gentle initial push
        const pvx = vx * mag;
        const pvy = vy * mag;
        const colMixT = Math.random();
        const col = mix(c1, c2, colMixT);
        const lagDist = 8 + Math.min(40, speed * 0.15);
        const px = x - (vx === 0 && vy === 0 ? 0 : (vx / (Math.hypot(vx, vy) || 1)) * lagDist) + (Math.random() - 0.5) * 6;
        const py = y - (vx === 0 && vy === 0 ? 0 : (vy / (Math.hypot(vx, vy) || 1)) * lagDist) + (Math.random() - 0.5) * 6;
        particlesRef.current.push({
          x: px,
          y: py,
          vx: pvx * Math.cos(angleJitter) - pvy * Math.sin(angleJitter),
          vy: pvx * Math.sin(angleJitter) + pvy * Math.cos(angleJitter),
          radius: Math.max(width, height) * (0.035 + Math.random() * 0.015),
          life: 1,
          color: col,
        });
      }
      const curl = 0.03;           // subtle curl
      const advect = 0.0018;       // gentle attraction for interaction
      const grow = 1.006;          // slow expansion
      const drag = 0.965;          // more damping -> slower motion, longer presence
      const particles = particlesRef.current;
      const interactionRadius = Math.max(width, height) * 0.12; // cursor influence radius
      const splitRadius = interactionRadius * 0.45;
      const additions: typeof particles = [];
      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const p = particles[i];
        const rot = curl * Math.sin((now * 0.002) + (p.x + p.y) * 0.002);
        const rvx = p.vx * Math.cos(rot) - p.vy * Math.sin(rot);
        const rvy = p.vx * Math.sin(rot) + p.vy * Math.cos(rot);
        // Base advection toward cursor
        p.vx = rvx * drag + (x - p.x) * advect;
        p.vy = rvy * drag + (y - p.y) * advect;

        // Cursor interaction: if close, swirl, push, and color-mix
        const dx = p.x - x;
        const dy = p.y - y;
        const dist = Math.hypot(dx, dy) || 0.0001;
        if (dist < interactionRadius) {
          const influence = 1 - dist / interactionRadius;
          // Tangential swirl (perpendicular to cursor vector)
          const tx = -dy / dist;
          const ty = dx / dist;
          p.vx += tx * influence * 0.6;
          p.vy += ty * influence * 0.6;
          // Soft push away to avoid clumping
          p.vx += (dx / dist) * influence * 0.15;
          p.vy += (dy / dist) * influence * 0.15;
          // Blend color toward current brush mix
          const brushMix = mix(c1, c2, 0.5);
          p.color = mix(p.color, brushMix, 0.25 * influence);
          // Occasionally split into a child for “paint break-up”
          if (dist < splitRadius && p.radius > Math.max(width, height) * 0.02 && Math.random() < 0.08) {
            const child: typeof p = {
              x: p.x + (Math.random() - 0.5) * 6,
              y: p.y + (Math.random() - 0.5) * 6,
              vx: -p.vx * 0.3 + (Math.random() - 0.5) * 0.5,
              vy: -p.vy * 0.3 + (Math.random() - 0.5) * 0.5,
              radius: p.radius * 0.6,
              life: p.life,
              color: p.color,
            };
            additions.push(child);
            // Shrink parent a bit
            p.radius *= 0.85;
          }
        }
        p.x += p.vx;
        p.y += p.vy;
        p.radius *= grow;
        p.life *= 0.997; // slower fade -> longer trails

        const alpha = 0.25 * p.life;
        if (alpha > 0.002) {
          const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
          grd.addColorStop(0, `rgba(${p.color.r},${p.color.g},${p.color.b},${alpha})`);
          grd.addColorStop(1, `rgba(${p.color.r},${p.color.g},${p.color.b},0)`);
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        if (p.life < 0.03 || p.x < -100 || p.y < -100 || p.x > width + 100 || p.y > height + 100) {
          particles.splice(i, 1);
        }
      }
      if (additions.length) particles.push(...additions);
    } else if (particlesRef.current.length) {
      particlesRef.current = [];
    }

    // Reset composition for next frame base clear
    ctx.globalCompositeOperation = 'source-over';
    rafRef.current = requestAnimationFrame(animate);
  };

  const updateTargetFromClient = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    targetPos.current = { x, y };
    lastMoveTimeRef.current = performance.now();
  };

  const handleHeroPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    updateTargetFromClient(e.clientX, e.clientY);
  };

  const handleHeroPointerEnter = () => {
    if (rafRef.current == null) rafRef.current = requestAnimationFrame(animate);
  };

  const handleHeroPointerLeave = () => {
    // Keep animation running; switch to idle drift automatically
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const parseRgb = (input: string): { r: number; g: number; b: number } => {
      const m = input.match(/rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
      if (!m) return { r: 16, g: 16, b: 33 };
      return { r: parseInt(m[1], 10), g: parseInt(m[2], 10), b: parseInt(m[3], 10) };
    };
    const parseHex = (hex: string): { r: number; g: number; b: number } => {
      const clean = hex.trim().replace('#', '');
      if (clean.length === 3) {
        const r = parseInt(clean[0] + clean[0], 16);
        const g = parseInt(clean[1] + clean[1], 16);
        const b = parseInt(clean[2] + clean[2], 16);
        return { r, g, b };
      }
      if (clean.length === 6) {
        return {
          r: parseInt(clean.slice(0, 2), 16),
          g: parseInt(clean.slice(2, 4), 16),
          b: parseInt(clean.slice(4, 6), 16),
        };
      }
      return { r: 16, g: 16, b: 33 };
    };
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctxRef.current = ctx;
      // Prime position in view and paint base
      updateTargetFromClient(rect.left + rect.width / 2, rect.top + rect.height / 3);
      const computedBg = getComputedStyle(document.body).backgroundColor;
      baseColorRef.current = parseRgb(computedBg);
      // Pull brand colors from CSS variables
      const root = getComputedStyle(document.documentElement);
      const purple = root.getPropertyValue('--color-red-electrica') || '#422BE2';
      const red = root.getPropertyValue('--color-alerta') || '#f93243';
      const mint = root.getPropertyValue('--color-billete-nuevot') || '#9bd1b8';
      brandColorsRef.current = [parseHex(purple), parseHex(red), parseHex(mint)];
      const base = baseColorRef.current;
      ctx.fillStyle = `rgb(${base.r},${base.g},${base.b})`;
      ctx.fillRect(0, 0, rect.width, rect.height);
    };
    resize();
    window.addEventListener('resize', resize);
    const onMove = (e: MouseEvent) => updateTargetFromClient(e.clientX, e.clientY);
    window.addEventListener('mousemove', onMove);
    if (rafRef.current == null) rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, []);

  // Scroll detection for performance optimization
  useEffect(() => {
    const handleScroll = () => {
      isScrollingRef.current = true;

      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = window.setTimeout(() => {
        isScrollingRef.current = false;
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Scroll reveal text effect
  useEffect(() => {
    if (!revealTextRef.current) return;

    const text = revealTextRef.current.textContent || '';
    const words = text.split(' ');

    // Wrap each word in a span
    revealTextRef.current.innerHTML = words
      .map(word => `<span class="word" style="color: rgba(231, 233, 228, 0.15); transition: color 0.3s ease;">${word}</span>`)
      .join(' ');

    const spans = revealTextRef.current.querySelectorAll('span.word');

    // Create one ScrollTrigger for the whole paragraph
    ScrollTrigger.create({
      trigger: revealTextRef.current,
      start: 'top 90%',
      end: 'center 50%',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        spans.forEach((span, index) => {
          const wordProgress = index / (spans.length - 1);

          if (progress >= wordProgress) {
            (span as HTMLElement).style.color = 'rgb(231, 233, 228)';
          } else {
            (span as HTMLElement).style.color = 'rgba(231, 233, 228, 0.15)';
          }
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === revealTextRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Animate exchange rates numbers on load
  useEffect(() => {
    console.log('Starting rate animations...', { usdRateRef: usdRateRef.current, eurRateRef: eurRateRef.current });
    
    const animateNumber = (element: HTMLElement, targetValue: number, decimals: number = 4) => {
      console.log('Animating number for element:', element, 'target:', targetValue);
      const obj = { value: 0 };
      gsap.to(obj, {
        value: targetValue,
        duration: 4.5,
        delay: 0.5,
        ease: 'power4.out',
        onUpdate: () => {
          element.textContent = `Bs. ${obj.value.toFixed(decimals).replace('.', ',')}`;
        },
        onComplete: () => {
          console.log('Animation completed for:', targetValue);
        }
      });
    };

    // Add a small delay to ensure refs are ready
    const timer = setTimeout(() => {
      if (usdRateRef.current) {
        animateNumber(usdRateRef.current, 160.4479, 4);
      } else {
        console.warn('USD rate ref not found');
      }

      if (eurRateRef.current) {
        animateNumber(eurRateRef.current, 188.0289, 4);
      } else {
        console.warn('EUR rate ref not found');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Insular Casa de Cambio - Recibe dinero de otros países</title>
        <meta name="description" content="Casa de cambios autorizada por SUDEBAN, con más de 30 años de trayectoria. Conectamos familias con soluciones rápidas, seguras y sin complicaciones." />
      </Helmet>

      {/* Hero Section - Full width with rates inside */}
      <Section
        ref={heroRef}
        className={styles.hero}
        id="hero"
        onPointerMove={handleHeroPointerMove}
        onPointerEnter={handleHeroPointerEnter}
        onPointerLeave={handleHeroPointerLeave}
      >
        <div className={styles.fluidContainer} aria-hidden="true">
          <canvas ref={canvasRef} className={styles.fluidCanvas} />
          <div className={styles.grainOverlay} />
          <div className={styles.fluidNoise} />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 data-animate="fade-up">
                Casa de<br />
                Cambio
              </h1>
              <div className={styles.heroActions} data-animate="fade-up" data-delay="0.2">
                <div className="btn-wrapper">
                  <CTAButton text="¡Empieza ahora!" />
                </div>
                <div className={styles.heroSubtext}>
                  <span className={styles.subtextIcon}>↗</span>
                  <p className={styles.subtextText}>¡Ahora puedes realizar tus operaciones de manera sencilla!</p>
                </div>
              </div>
            </div>
            <div className={styles.heroImageWrapper} data-animate="fade-left">
              <img
                src="/images/hero/home-hero.webp"
                alt="Cliente feliz usando Insular"
                className={styles.heroImage}
              />
            </div>
          </div>

          {/* Exchange Rates - Inside Hero */}
          <div className={styles.ratesGrid}>
            <div className={`${styles.rateCard} ${styles.rateCardUsd}`} data-animate="fade-up">
              <div className={styles.rateHeader}>
                  <p className={styles.rateLabel}>Cambio US$</p>
                <span className={styles.rateIcon}>
                  <img src="/icons/arrow_top-right_naked.svg" alt="trending" />
                </span>
              </div>
              <p ref={usdRateRef} className={styles.rateValue}>Bs. 0,0000</p>
            </div>
            <div className={`${styles.rateCard} ${styles.rateCardEur}`} data-animate="fade-up" data-delay="0.1">
              <div className={styles.rateHeader}>
                  <p className={styles.rateLabel}>Cambio EUR€</p>
                <span className={styles.rateIcon}>
                  <img src="/icons/arrow_top-right_naked.svg" alt="trending" />
                </span>
              </div>
              <p ref={eurRateRef} className={styles.rateValue}>Bs. 0,0000</p>
            </div>
            <div className={`${styles.rateCard} ${styles.rateCardDate}`} data-animate="fade-up" data-delay="0.2">
              <div className={styles.rateHeader}>
                  <p className={styles.rateLabel}>Fecha</p>
                <span className={styles.rateIcon}>
                  <img src="/icons/arrow_top-right_naked.svg" alt="trending" />
                </span>
              </div>
              <p className={styles.rateValue}>19 / 09 / 2025</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Remittance Section */}
      <Section className={styles.remittanceSection} id="remittance">
        <div className="container">
          <div className={styles.remittanceGrid}>
            <div className={styles.remittanceTitle} data-animate="fade-up">
              <h2>
                Recibe dinero de otros países a través de nuestros aliados
              </h2>
            </div>
            <div className={styles.remittanceContent} data-animate="fade-up" data-delay="0.2">
              <p>
                Trabajamos de la mano con reconocidos aliados internacionales para asegurar que
                cada remesa llegue de forma rápida, legal y segura a su destino.
              </p>
              <div className="btn-wrapper">
                <CTAButton text="¡Ingresa aquí!" variant="secondary" />
              </div>
            </div>
          </div>

        </div>

        {/* Infinite Scroll Marquee - Full Width */}
        <div className={styles.marqueeWrapper}>
          <div className={styles.marquee}>
            <div className={styles.marqueeContent}>
              <img src="/logos/partners/moneygram-collab-logo.svg" alt="MoneyGram" className={styles.partnerLogo} />
              <img src="/logos/partners/ria-collab-logo.svg" alt="Ria" className={styles.partnerLogo} />
              <img src="/logos/partners/remitly-collab-logo.svg" alt="Remitly" className={styles.partnerLogo} />
              <img src="/logos/partners/papaya-collab-logo.svg" alt="Papaya" className={styles.partnerLogo} />
              <img src="/logos/partners/moneygram-collab-logo.svg" alt="MoneyGram" className={styles.partnerLogo} />
              <img src="/logos/partners/ria-collab-logo.svg" alt="Ria" className={styles.partnerLogo} />
              <img src="/logos/partners/remitly-collab-logo.svg" alt="Remitly" className={styles.partnerLogo} />
              <img src="/logos/partners/papaya-collab-logo.svg" alt="Papaya" className={styles.partnerLogo} />
            </div>
            <div className={styles.marqueeContent} aria-hidden="true">
              <img src="/logos/partners/moneygram-collab-logo.svg" alt="MoneyGram" className={styles.partnerLogo} />
              <img src="/logos/partners/ria-collab-logo.svg" alt="Ria" className={styles.partnerLogo} />
              <img src="/logos/partners/remitly-collab-logo.svg" alt="Remitly" className={styles.partnerLogo} />
              <img src="/logos/partners/papaya-collab-logo.svg" alt="Papaya" className={styles.partnerLogo} />
              <img src="/logos/partners/moneygram-collab-logo.svg" alt="MoneyGram" className={styles.partnerLogo} />
              <img src="/logos/partners/ria-collab-logo.svg" alt="Ria" className={styles.partnerLogo} />
              <img src="/logos/partners/remitly-collab-logo.svg" alt="Remitly" className={styles.partnerLogo} />
              <img src="/logos/partners/papaya-collab-logo.svg" alt="Papaya" className={styles.partnerLogo} />
            </div>
          </div>
        </div>
      </Section>

      {/* Global Presence Section */}
      <Section className={styles.globalSection} id="global">
        <div className="container">
          <div className={styles.globalContent}>
            <div className={styles.globeCard} data-animate="fade-right">
              <spline-viewer url="https://prod.spline.design/xF9sYjSjbot07mJD/scene.splinecode"></spline-viewer>
            </div>
            <div className={styles.globalCard} data-animate="fade-left">
              <p className={styles.globalIntro}>Presentes en más de</p>
              <h2 className={styles.globalNumber}>200 países</h2>
              <p className={styles.globalDescription}>
                Somos especialistas en recepción y dispersión de remesas.
              </p>
              <p className={styles.globalSubtext}>
                de dinero de forma segura y legal. Atendemos tanto a personas naturales como jurídicas.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Location Section */}
      <Section className={styles.locationSection} id="location">
        <div className="container">
          <div className={styles.locationContent} data-animate="fade-up">
            <h2>Retira tu dinero en nuestra sede en el Rosal</h2>
            <p>
              Avenida Francisco de Miranda, Torre Seguros Sudamerica, local PB-7 Urbanización El Rosal,
              municipio Chacao
            </p>
            <CTAButton text="Ver más" />
          </div>
        </div>
      </Section>

      {/* Payment Methods Section */}
      <Section className={styles.paymentSection} id="payment">
        <div className="container-fluid">
          <div ref={imageWrapperRef} className={styles.paymentImageWrapper} data-animate="fade-up">
            <img
              src="/images/sections/conexion.webp"
              alt="Recibe dinero a través de pago móvil y crédito inmediato"
              className={styles.paymentImage}
            />
            <div
              ref={logoRef}
              className={styles.paymentLogoWrapper}
              dangerouslySetInnerHTML={{ __html: svgContent }}
            />
          </div>

          <div className={styles.paymentGrid}>
            <div className={styles.paymentTitle} data-animate="fade-up">
              <h2>Recibe dinero a través de</h2>
            </div>
            <div className={`${styles.paymentCard} ${styles.paymentCardPagoMovil}`} data-animate="fade-up" data-delay="0.1">
              <p className={styles.paymentCardText}>Pago móvil</p>
              <span className={styles.paymentCardIcon}>↗</span>
            </div>
            <div className={`${styles.paymentCard} ${styles.paymentCardCredito}`} data-animate="fade-up" data-delay="0.2">
              <p className={styles.paymentCardText}>Crédito inmediato</p>
              <span className={styles.paymentCardIcon}>↗</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Scroll Reveal Text Section */}
      <Section className={styles.revealSection} id="reveal">
        <div className="container">
          <div className={styles.revealText}>
            <p ref={revealTextRef}>
              En Casa de Cambios Insular somos una remesadora autorizada por SUDEBAN, con más de 30 años de trayectoria en el sector cambiario. Conectamos familias con soluciones rápidas, seguras y sin complicaciones.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className={styles.faqSection} id="faq">
        <div className="container">
          <div className={styles.faqGrid}>
            <div data-animate="fade-right" className={styles.faqLeft}>
              <h2 className={styles.faqTitle}>Preguntas<br />Frecuentes</h2>
              <div className={styles.faqContent}>
            <div className={styles.faqList}>
              <div className={styles.faqItemWrapper} data-animate="fade-up">
                <button className={`${styles.faqItem} ${openFaqIndex === 0 ? styles.faqItemOpen : ''}`} onClick={() => toggleFaq(0)}>
                  <span>¿Qué necesito para recibir mi remesa?</span>
                  <span className={styles.faqIcon}>{openFaqIndex === 0 ? '−' : '+'}</span>
                </button>
                {openFaqIndex === 0 && (
                  <div className={styles.faqAnswer}>
                    <p>Necesitas tu cédula de identidad vigente y el código de seguimiento proporcionado por quien envía el dinero.</p>
                  </div>
                )}
              </div>
              <div className={styles.faqItemWrapper} data-animate="fade-up" data-delay="0.1">
                <button className={`${styles.faqItem} ${openFaqIndex === 1 ? styles.faqItemOpen : ''}`} onClick={() => toggleFaq(1)}>
                  <span>¿En cuánto tiempo la recibo?</span>
                  <span className={styles.faqIcon}>{openFaqIndex === 1 ? '−' : '+'}</span>
                </button>
                {openFaqIndex === 1 && (
                  <div className={styles.faqAnswer}>
                    <p>Las remesas están disponibles para retirar en minutos después de ser enviadas.</p>
                  </div>
                )}
              </div>
              <div className={styles.faqItemWrapper} data-animate="fade-up" data-delay="0.2">
                <button className={`${styles.faqItem} ${openFaqIndex === 2 ? styles.faqItemOpen : ''}`} onClick={() => toggleFaq(2)}>
                  <span>¿Dónde puedo retirar en dólares o en bolívares?</span>
                  <span className={styles.faqIcon}>{openFaqIndex === 2 ? '−' : '+'}</span>
                </button>
                {openFaqIndex === 2 && (
                  <div className={styles.faqAnswer}>
                    <p>Puedes retirar en nuestras oficinas ubicadas en Caracas y en todas las sucursales de nuestros aliados a nivel nacional.</p>
                  </div>
                )}
              </div>
              <div className={styles.faqItemWrapper} data-animate="fade-up" data-delay="0.3">
                <button className={`${styles.faqItem} ${openFaqIndex === 3 ? styles.faqItemOpen : ''}`} onClick={() => toggleFaq(3)}>
                  <span>¿Cuáles son los aliados disponibles en mi zona?</span>
                  <span className={styles.faqIcon}>{openFaqIndex === 3 ? '−' : '+'}</span>
                </button>
                {openFaqIndex === 3 && (
                  <div className={styles.faqAnswer}>
                    <p>Contamos con MoneyGram, Ria, Remitly y Papaya como aliados. Contáctanos para conocer la ubicación más cercana a ti.</p>
                  </div>
                )}
              </div>
              <div className={styles.faqItemWrapper} data-animate="fade-up" data-delay="0.4">
                <button className={`${styles.faqItem} ${openFaqIndex === 4 ? styles.faqItemOpen : ''}`} onClick={() => toggleFaq(4)}>
                  <span>¿Cuáles son las tarifas y comisiones por Remesa?</span>
                  <span className={styles.faqIcon}>{openFaqIndex === 4 ? '−' : '+'}</span>
                </button>
                {openFaqIndex === 4 && (
                  <div className={styles.faqAnswer}>
                    <p>Las tarifas varían según el monto y el país de origen. No cobramos comisión adicional por el retiro en nuestras oficinas.</p>
                  </div>
                )}
              </div>
            </div>
            </div>
            </div>

            <div data-animate="fade-left" className={styles.faqCtaContainer}>
              <div className={styles.faqCtaCard}>
                <div className={styles.faqCtaImage}></div>
                <div className={styles.faqCtaContent}>
                  <h2 className="h2 text-white">¿Aún tienes alguna pregunta?</h2>
                  <p className="body-sm text-white">
                    ¿No encuentras la respuesta a tu pregunta? Habla con nuestro Chat para resolver cualquier inquietud.
                  </p>
                  <div className={styles.faqCtaSpacer}></div>
                  <CTAButton text="Hablar con Chat" variant="secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section className={styles.finalCta} id="final-cta">
        <div className="container">
          <div className={styles.finalCtaCard} data-animate="fade-up">
            <h2>¡Ahora puedes realizar tus operaciones de manera sencilla!</h2>
            <CTAButton text="¡Empieza ahora!" />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;

