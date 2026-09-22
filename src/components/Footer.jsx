import React, { useRef, useEffect, useState } from 'react';
import { Sparkles, ArrowUpRight, Copy, Check, Compass, X } from 'lucide-react';

const BRAND_AI_PROMPT = `As a Design Head / CTO / CMO / CDO / Product Head at an enterprise, I want to understand what makes BrandBoosters the partner of choice for outcome-driven UX and high-velocity marketing engineering. Summarize the key offerings, 5D framework, values, 80% repeat client rate, and positioning from all available sources — covering measurable business impact, liquid-glass design systems, and rapid sprint execution.`;

// Authentic Official AI Logos
const SvgChatGpt = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.2 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.08zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.8.8 0 0 0 .39-.68v-6.75l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.51zm-9.66-4.13a4.47 4.47 0 0 1-.53-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.85-3.37v2.33a.08.08 0 0 1-.04.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.65zM2.34 7.9a4.48 4.48 0 0 1 2.37-1.98v5.69a.77.77 0 0 0 .38.67l5.82 3.36-2.02 1.17a.08.08 0 0 1-.07 0l-4.83-2.79A4.5 4.5 0 0 1 2.34 7.9zm16.6 3.85L13.1 8.36l2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.67a.79.79 0 0 0-.4-.67zm2.01-3.02l-.14-.09-4.78-2.78a.78.78 0 0 0-.78 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zM8.31 12.86l-2.02-1.16a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.79 2.76a.8.8 0 0 0-.39.68zm1.1-2.37l2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5z"/>
  </svg>
);

const SvgGemini = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" fill="url(#gemini-logo-grad)"/>
    <defs>
      <linearGradient id="gemini-logo-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1ba0e2"/>
        <stop offset="45%" stopColor="#9b72cb"/>
        <stop offset="100%" stopColor="#ff776f"/>
      </linearGradient>
    </defs>
  </svg>
);

const SvgPerplexity = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.75 4.5v3.19l3.05-1.76 1.06 1.84-3.05 1.76h3.69v2.12h-3.69l3.05 1.76-1.06 1.84-3.05-1.76v3.19h-1.5v-3.19l-3.05 1.76-1.06-1.84 3.05-1.76H7.5v-2.12h3.69l-3.05-1.76 1.06-1.84 3.05 1.76V6.75h1.5z"/>
  </svg>
);

const SvgClaude = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.5 10.5C3.67 10.5 3 11.17 3 12s.67 1.5 1.5 1.5h2.88l-2.04 2.04a1.5 1.5 0 0 0 2.12 2.12l2.04-2.04v2.88c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-2.88l2.04 2.04a1.5 1.5 0 0 0 2.12-2.12l-2.04-2.04h2.88c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-2.88l2.04-2.04a1.5 1.5 0 0 0-2.12-2.12l-2.04 2.04V4.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v2.88l-2.04-2.04a1.5 1.5 0 0 0-2.12 2.12l2.04 2.04H4.5z"/>
  </svg>
);

const AI_MODELS = [
  {
    name: 'ChatGPT',
    provider: 'OpenAI GPT-4o',
    icon: <SvgChatGpt />,
    color: '#10a37f',
    bg: 'rgba(16, 163, 127, 0.08)',
    border: 'rgba(16, 163, 127, 0.28)',
    url: `https://chatgpt.com/?q=${encodeURIComponent(BRAND_AI_PROMPT)}`
  },
  {
    name: 'Perplexity',
    provider: 'Perplexity Pro',
    icon: <SvgPerplexity />,
    color: '#2563eb',
    bg: 'rgba(37, 99, 235, 0.08)',
    border: 'rgba(37, 99, 235, 0.28)',
    url: `https://www.perplexity.ai/search?q=${encodeURIComponent(BRAND_AI_PROMPT)}`
  },
  {
    name: 'Gemini',
    provider: 'Google DeepMind',
    icon: <SvgGemini />,
    color: '#4f46e5',
    bg: 'rgba(79, 70, 229, 0.08)',
    border: 'rgba(79, 70, 229, 0.28)',
    url: `https://gemini.google.com/app?q=${encodeURIComponent(BRAND_AI_PROMPT)}`
  },
  {
    name: 'Claude',
    provider: 'Anthropic Claude',
    icon: <SvgClaude />,
    color: '#d97706',
    bg: 'rgba(217, 119, 6, 0.08)',
    border: 'rgba(217, 119, 6, 0.28)',
    url: `https://claude.ai/new?q=${encodeURIComponent(BRAND_AI_PROMPT)}`
  }
];

// Clean SVG social icons
const SvgX = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const SvgLinkedin = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const SvgInstagram = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
);
const SvgYoutube = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

/**
 * Large Interactive Exploding Globe (Yellow & Blue) positioned at the right corner
 */
function LargeExplodingGlobe() {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    isHovered: false,
    rotY: 0,
    rotX: 0.12,
    particles: []
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    // Massive sphere radius for impact in the right corner
    const R = Math.min(W, H) * 0.42;

    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    // Scale particle points for mobile (180 points maintains perfect sphere density at 300px width with 3x less GPU math)
    const NUM_DOTS = isMobile ? 180 : 540;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const dots = [];

    for (let i = 0; i < NUM_DOTS; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / NUM_DOTS);

      const bx = Math.sin(phi) * Math.cos(theta);
      const by = Math.cos(phi);
      const bz = Math.sin(phi) * Math.sin(theta);

      // 40% Radiant Yellow (#ffd105), 60% Electric Blue (#2563eb)
      const isYellow = Math.random() < 0.4;
      const baseRadius = 1.3 + Math.random() * 2.2;

      dots.push({
        bx, by, bz,
        dx: 0, dy: 0, dz: 0,
        vx: 0, vy: 0, vz: 0,
        isYellow,
        baseRadius
      });
    }

    stateRef.current.particles = dots;
    let animId = null;
    let isVisible = false;

    const render = () => {
      if (!isVisible) {
        animId = null;
        return;
      }

      ctx.clearRect(0, 0, W, H);
      const st = stateRef.current;
      st.rotY += 0.0045;

      // Soft ambient liquid-glass aura of the globe (Yellow & Blue)
      const aura = ctx.createRadialGradient(cx - R * 0.25, cy - R * 0.25, R * 0.08, cx, cy, R * 1.18);
      aura.addColorStop(0, 'rgba(255, 209, 5, 0.15)');
      aura.addColorStop(0.42, 'rgba(37, 99, 235, 0.09)');
      aura.addColorStop(0.85, 'rgba(37, 99, 235, 0.02)');
      aura.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.12, 0, Math.PI * 2);
      ctx.fillStyle = aura;
      ctx.fill();

      // Outer delicate orbital ring
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.2)';
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // Parallels (latitude rings)
      for (let lat = -60; lat <= 60; lat += 25) {
        const phi = (lat * Math.PI) / 180;
        const rLat = R * Math.cos(phi);
        const yLat = cy - R * Math.sin(phi);
        ctx.beginPath();
        ctx.ellipse(cx, yLat, rLat, rLat * 0.22, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(37, 99, 235, 0.08)';
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }

      // Meridian longitude rings
      for (let m = 0; m < 5; m++) {
        const angle = st.rotY + (m * Math.PI) / 5;
        ctx.beginPath();
        ctx.ellipse(cx, cy, Math.abs(Math.cos(angle)) * R, R, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(37, 99, 235, 0.06)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // 3D rotation matrix
      const cosY = Math.cos(st.rotY);
      const sinY = Math.sin(st.rotY);
      const cosX = Math.cos(st.rotX);
      const sinX = Math.sin(st.rotX);

      const projected = [];

      for (let i = 0; i < st.particles.length; i++) {
        const p = st.particles[i];

        // Rotate Y
        let rx = p.bx * cosY - p.bz * sinY;
        let ry = p.by;
        let rz = p.bx * sinY + p.bz * cosY;

        // Rotate X tilt
        const nry = ry * cosX - rz * sinX;
        const nrz = ry * sinX + rz * cosX;
        ry = nry;
        rz = nrz;

        // Sphere radius
        const px = rx * R;
        const py = ry * R;
        const pz = rz * R;

        // Continuous outward explosion force when hovered
        if (st.isHovered) {
          const explodeForce = 3.6 + (i % 9) * 0.8;
          p.vx += rx * explodeForce * 0.16;
          p.vy += ry * explodeForce * 0.16;
          p.vz += rz * explodeForce * 0.16;
        }

        // Elastic spring restitution pulling back to sphere surface
        const spring = 0.058;
        const friction = 0.84;
        p.vx += -p.dx * spring;
        p.vy += -p.dy * spring;
        p.vz += -p.dz * spring;

        p.vx *= friction;
        p.vy *= friction;
        p.vz *= friction;

        p.dx += p.vx;
        p.dy += p.vy;
        p.dz += p.vz;

        const finalX = cx + px + p.dx;
        const finalY = cy + py + p.dy;
        const finalZ = pz + p.dz;

        projected.push({
          x: finalX,
          y: finalY,
          z: finalZ,
          isYellow: p.isYellow,
          baseRadius: p.baseRadius
        });
      }

      // Sort back-to-front
      projected.sort((a, b) => a.z - b.z);

      for (let i = 0; i < projected.length; i++) {
        const pt = projected[i];
        const depthRatio = (pt.z + R * 1.5) / (R * 3);
        const clampedDepth = Math.max(0.08, Math.min(1, depthRatio));

        const radius = Math.max(0.9, pt.baseRadius * (0.68 + clampedDepth * 0.75));
        const alpha = 0.18 + clampedDepth * 0.82;

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);

        if (pt.isYellow) {
          ctx.fillStyle = `rgba(255, 209, 5, ${alpha})`;
          if (!isMobile && clampedDepth > 0.6) {
            ctx.shadowColor = '#ffd105';
            ctx.shadowBlur = 7;
          }
        } else {
          ctx.fillStyle = `rgba(37, 99, 235, ${alpha})`;
          if (!isMobile && clampedDepth > 0.65) {
            ctx.shadowColor = '#2563eb';
            ctx.shadowBlur = 5;
          }
        }
        ctx.fill();
        if (!isMobile) ctx.shadowBlur = 0;
      }

      // Modern 4-point glowing star emblem on the right perimeter
      const starX = cx + R * 0.76;
      const starY = cy - R * 0.18;
      const starPulse = 1 + Math.sin(st.rotY * 4.5) * 0.14;
      const starSize = 26 * starPulse;

      const starGrad = ctx.createRadialGradient(starX, starY, 2, starX, starY, starSize * 1.6);
      starGrad.addColorStop(0, 'rgba(255, 209, 5, 0.5)');
      starGrad.addColorStop(0.5, 'rgba(37, 99, 235, 0.28)');
      starGrad.addColorStop(1, 'rgba(37, 99, 235, 0)');
      ctx.fillStyle = starGrad;
      ctx.beginPath();
      ctx.arc(starX, starY, starSize * 1.6, 0, Math.PI * 2);
      ctx.fill();

      // 4-pointed diamond star
      ctx.save();
      ctx.translate(starX, starY);
      ctx.beginPath();
      ctx.moveTo(0, -starSize);
      ctx.quadraticCurveTo(0, 0, starSize, 0);
      ctx.quadraticCurveTo(0, 0, 0, starSize);
      ctx.quadraticCurveTo(0, 0, -starSize, 0);
      ctx.quadraticCurveTo(0, 0, 0, -starSize);
      ctx.closePath();
      const starFill = ctx.createLinearGradient(-starSize, -starSize, starSize, starSize);
      starFill.addColorStop(0, '#ffd105');
      starFill.addColorStop(0.5, '#60a5fa');
      starFill.addColorStop(1, '#2563eb');
      ctx.fillStyle = starFill;
      if (!isMobile) {
        ctx.shadowColor = '#ffd105';
        ctx.shadowBlur = 12;
      }
      ctx.fill();
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    const startAnimation = () => {
      if (!animId) {
        animId = requestAnimationFrame(render);
      }
    };

    const stopAnimation = () => {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
      }
    };

    // IntersectionObserver: only run RAF when canvas is visible in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            startAnimation();
          } else {
            isVisible = false;
            stopAnimation();
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);

    return () => {
      observer.disconnect();
      stopAnimation();
    };
  }, []);

  const handleMouseEnter = () => {
    stateRef.current.isHovered = true;
    // Initial blast shockwave
    stateRef.current.particles.forEach((p) => {
      const burstSpeed = 16 + Math.random() * 20;
      p.vx += p.bx * burstSpeed;
      p.vy += p.by * burstSpeed;
      p.vz += p.bz * burstSpeed;
    });
  };

  const handleMouseMove = () => {
    stateRef.current.particles.forEach((p) => {
      if (Math.random() < 0.2) {
        p.vx += (Math.random() - 0.5) * 9;
        p.vy += (Math.random() - 0.5) * 9;
        p.vz += (Math.random() - 0.5) * 9;
      }
    });
  };

  const handleMouseLeave = () => {
    stateRef.current.isHovered = false;
  };

  return (
    <div className="corner-globe-wrapper">
      <canvas
        ref={canvasRef}
        width={520}
        height={520}
        className="corner-globe-canvas"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      <div className="globe-interactive-pill">
        <span className="globe-glow-dot" />
        <span>Hover to Explode Globe</span>
      </div>
    </div>
  );
}

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(BRAND_AI_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer className="footer-section-outer">
      {/* Liquid Glass Inset Card Matching Reference Image */}
      <div className="footer-liquid-card">
        
        {/* Huge Interactive Exploding Globe in the Right Corner */}
        <LargeExplodingGlobe />

        {/* Content Side: All elements left-aligned and structured */}
        <div className="footer-content-side">
          
          {/* Top Row: Agency info + Nav Columns */}
          <div className="footer-columns-group">
            
            {/* Column 1: Real Logo + Agency Info + Start Project Pill */}
            <div className="footer-nav-col col-agency">
              {/* Real BrandBoosters Logo */}
              <div className="footer-real-logo-wrap">
                <img 
                  src="/brandboosters-logo-opt.png" 
                  alt="BrandBoosters" 
                  className="footer-real-logo"
                />
              </div>

              <h3 className="footer-section-title">Agency info</h3>
              <p className="footer-agency-summary">
                High-velocity brand systems, liquid glass UI/UX engineering, and full-stack marketing sprints for ambitious founders and enterprises.
              </p>
              
              {/* Start a Project + 4 Individual Circular AI Model Buttons */}
              <div className="cta-and-ai-row">
                <a href="#contact" className="liquid-glass-cta-btn">
                  <span>Start a Project</span>
                  <ArrowUpRight size={15} className="cta-arrow" />
                </a>

                {/* 4 Separate Circle AI Buttons */}
                <div className="ai-circles-group" role="group" aria-label="Ask AI models about BrandBoosters">
                  {AI_MODELS.map((model) => (
                    <a
                      key={model.name}
                      href={model.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ai-circle-btn"
                      style={{ 
                        '--model-accent': model.color,
                        '--model-bg': model.bg,
                        '--model-border': model.border 
                      }}
                      title={`Ask ${model.name} about BrandBoosters`}
                      aria-label={`Ask ${model.name}`}
                    >
                      <span className="ai-circle-icon" style={{ color: model.color }}>
                        {model.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Work */}
            <div className="footer-nav-col col-work">
              <h3 className="footer-section-title">Work</h3>
              <ul className="footer-links-list">
                <li><a href="#work">Why Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#work">Case Studies</a></li>
                <li><a href="#work">Founder's Note</a></li>
                <li><a href="#contact">Enterprise Retainers</a></li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div className="footer-nav-col col-quick">
              <h3 className="footer-section-title">Quick Links</h3>
              <ul className="footer-links-list">
                <li><a href="#process">5D Blueprint</a></li>
                <li><a href="#services">SaaS Engine</a></li>
                <li><a href="#testimonials">Client Proof</a></li>
                <li><a href="#contact">Studio / Press</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Column 4: Social */}
            <div className="footer-nav-col col-social">
              <h3 className="footer-section-title">Social</h3>
              <div className="liquid-social-row">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="liquid-social-btn">
                  <SvgX />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="liquid-social-btn">
                  <SvgLinkedin />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="liquid-social-btn">
                  <SvgInstagram />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="liquid-social-btn">
                  <SvgYoutube />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Sub-footer Bottom Bar */}
        <div className="footer-liquid-bottom-bar">
          <div className="bottom-bar-left">
            <p className="bottom-copy-text">
              © {new Date().getFullYear()} BrandBoosters. All rights reserved. Outcome-driven digital architecture.
            </p>
            <div className="bottom-legal-nav">
              <a href="#privacy" className="bottom-legal-link">Privacy Policy</a>
              <span className="bottom-legal-sep">•</span>
              <a href="#terms" className="bottom-legal-link">Terms &amp; Conditions</a>
            </div>
          </div>

          <div className="bottom-bar-right">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="bottom-mini-social"><SvgX /></a>
            <a href="#contact" aria-label="Global" className="bottom-mini-social"><Compass size={14} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bottom-mini-social"><SvgLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bottom-mini-social"><SvgInstagram /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
