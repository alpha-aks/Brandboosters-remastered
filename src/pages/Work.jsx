import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Globe, 
  Layers, 
  Smartphone, 
  Monitor, 
  Palette, 
  BarChart3,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageTransition } from '../components/PageTransition';
import { PROJECTS } from '../data/projectsData';

// Extended portfolio items matching reference screenshot categories & real client projects
const PORTFOLIO_ITEMS = [
  {
    id: 'benoy-web',
    slug: 'benoy',
    route: '/benoy',
    title: 'Benoy Arch Luxury Platform',
    category: 'Web Design',
    categoryKey: 'web-design',
    summary: 'Modern and minimal website for an international architecture studio with smooth animations and clean UI.',
    imageBg: 'linear-gradient(135deg, #091222 0%, #13223f 50%, #001f3f 100%)',
    badge: 'Web Design',
    accent: '#38bdf8',
    stats: '+310% Global Reach',
    metricLabel: 'Load Speed <1.1s',
    previewType: 'laptop-screen'
  },
  {
    id: 'kore-app',
    slug: 'kore',
    route: '/kore',
    title: 'Kore Mobile Growth & App Engine',
    category: 'Mobile App',
    categoryKey: 'mobile-app',
    summary: 'A high-converting omnichannel mobile app and retail walk-in acquisition funnel driving 50M+ impressions.',
    imageBg: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%)',
    badge: 'Mobile App',
    accent: '#10b981',
    stats: '50M+ Impressions',
    metricLabel: '3.8X ROAS',
    previewType: 'mobile-screen'
  },
  {
    id: 'shree-rudra-branding',
    slug: 'shree-rudra',
    route: '/shree-rudra',
    title: 'Shree Rudra Brand Identity & Luxury Packaging',
    category: 'Branding',
    categoryKey: 'branding',
    summary: 'Complete luxury brand identity, sacred geometry typography, and sustainable unboxing packaging system.',
    imageBg: 'linear-gradient(135deg, #451a03 0%, #78350f 50%, #b45309 100%)',
    badge: 'Branding',
    accent: '#f59e0b',
    stats: '15K+ Customers',
    metricLabel: '4.9★ Rating',
    previewType: 'branding-box'
  },
  {
    id: 'transportx-ux',
    slug: 'transportx',
    route: '/transportx',
    title: 'TransportX Enterprise Fleet Dashboard',
    category: 'UI/UX',
    categoryKey: 'ui-ux',
    summary: 'Simple, clean and data-driven mission-control dashboard for enterprise supply chain and dispatch management.',
    imageBg: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
    badge: 'UI/UX Design',
    accent: '#6366f1',
    stats: '500+ Active Fleets',
    metricLabel: '99.98% Uptime',
    previewType: 'dashboard-screen'
  },
  {
    id: 'eddies-mobile',
    slug: 'eddies',
    route: '/eddies',
    title: "Eddie's Liquor Marketplace Platform",
    category: 'Mobile App',
    categoryKey: 'mobile-app',
    summary: 'High-intent on-demand delivery app integration and keyword search optimization driving 45,000+ orders.',
    imageBg: 'linear-gradient(135deg, #431407 0%, #7c2d12 50%, #c2410c 100%)',
    badge: 'Mobile App',
    accent: '#f97316',
    stats: '45K+ Orders',
    metricLabel: '5.6X ROAS',
    previewType: 'mobile-screen'
  },
  {
    id: 'maxo-architecture',
    slug: 'maxo',
    route: '/maxo',
    title: 'Maxo Spatial Architecture & 3D Interactive',
    category: 'Web Design',
    categoryKey: 'web-design',
    summary: 'Brutalist spatial digital portfolio with interactive architectural modeling and fluid page viewports.',
    imageBg: 'linear-gradient(135deg, #18181b 0%, #27272a 50%, #3f3f46 100%)',
    badge: 'Web Design',
    accent: '#a1a1aa',
    stats: '25+ Exhibitions',
    metricLabel: 'Editorial Gold',
    previewType: 'laptop-screen'
  }
];

const FILTER_TABS = [
  { key: 'all', label: 'All' },
  { key: 'web-design', label: 'Web Design' },
  { key: 'mobile-app', label: 'Mobile App' },
  { key: 'branding', label: 'Branding' },
  { key: 'ui-ux', label: 'UI/UX' }
];

export default function Work() {
  const { navigateWithTransition } = usePageTransition();
  const [activeFilter, setActiveFilter] = useState('all');
  const [isBlinking, setIsBlinking] = useState(false);

  // References for the 2 interactive eyes
  const heroRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Interactive Mouse Cursor Tracking for the 2 Eyes on the Yellow Background
  useEffect(() => {
    const handleMouseMove = (e) => {
      const eyes = [
        { eye: leftEyeRef.current, pupil: leftPupilRef.current },
        { eye: rightEyeRef.current, pupil: rightPupilRef.current }
      ];

      eyes.forEach(({ eye, pupil }) => {
        if (!eye || !pupil) return;
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;

        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(Math.hypot(deltaX, deltaY) / 12, 26);

        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;

        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      });
    };

    const handleTouch = (e) => {
      if (e.touches && e.touches[0]) {
        handleMouseMove(e.touches[0]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouch, { passive: true });
    window.addEventListener('touchmove', handleTouch, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('touchmove', handleTouch);
    };
  }, []);

  // Trigger playful eye blink on click
  const triggerBlink = () => {
    setIsBlinking(true);
    setTimeout(() => setIsBlinking(false), 200);
  };

  const filteredProjects = activeFilter === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.categoryKey === activeFilter);

  return (
    <div className="work-page-wrapper">
      {/* Top Navigation Bar */}
      <Navbar />

      <main className="work-page-main">
        
        {/* ==========================================================================
           1. HERO SECTION: COMPLETE VIBRANT YELLOW BACKGROUND WITH 2 INTERACTIVE EYES
           ========================================================================== */}
        <section 
          className="work-hero-yellow-section" 
          ref={heroRef}
          onClick={triggerBlink}
          aria-label="Our Works Interactive Hero"
        >
          <div className="yellow-hero-container">
            
            {/* Top Badge Pill */}
            <div className="yellow-hero-badge">
              <span className="yellow-badge-dot" />
              <span>Our Works</span>
            </div>

            {/* Central Content Grid: Headline + 2 Big Eyes Mascot */}
            <div className="yellow-hero-layout-grid">
              
              {/* Left Column: Bold Typography */}
              <div className="yellow-hero-text-side">
                <h1 className="yellow-hero-main-title">
                  Ideas to Impact<br />
                  <span className="yellow-hero-navy-highlight">Our Latest Projects</span>
                </h1>
                <p className="yellow-hero-lead">
                  Explore a selection of our recent work. We design, build and create high-velocity 
                  digital experiences that help ambitious brands grow and scale.
                </p>
              </div>

              {/* Right Column: 2 Interactive Eyes with Mouse-Tracking Animation */}
              <div className="yellow-hero-eyes-stage">
                
                {/* The 2 Eyes Mascot Card Container */}
                <div className={`two-eyes-mascot-card ${isBlinking ? 'blinking' : ''}`}>
                  
                  {/* Left Eye */}
                  <div className="eye-socket-frame eye-left" ref={leftEyeRef}>
                    <div className="eye-sclera">
                      <div className="eye-pupil" ref={leftPupilRef}>
                        <div className="pupil-iris" />
                        <div className="pupil-glint glint-primary" />
                        <div className="pupil-glint glint-secondary" />
                      </div>
                    </div>
                  </div>

                  {/* Right Eye */}
                  <div className="eye-socket-frame eye-right" ref={rightEyeRef}>
                    <div className="eye-sclera">
                      <div className="eye-pupil" ref={rightPupilRef}>
                        <div className="pupil-iris" />
                        <div className="pupil-glint glint-primary" />
                        <div className="pupil-glint glint-secondary" />
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ==========================================================================
           2. FILTER TABS & PLAYFUL "CLICK TO EXPLORE" ANNOTATION
           ========================================================================== */}
        <section className="work-filter-section">
          <div className="work-filter-container">
            
            {/* Filter Pills Row */}
            <div className="work-filter-pills" role="tablist" aria-label="Filter Projects">
              {FILTER_TABS.map((tab) => {
                const isActive = activeFilter === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`work-filter-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveFilter(tab.key)}
                  >
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Playful Hand-Drawn "Click to explore ⤹" Callout Arrow */}
            <div className="click-to-explore-annotation" aria-hidden="true">
              <span className="annotation-text">Click to explore</span>
              <svg 
                className="annotation-curved-arrow" 
                viewBox="0 0 70 45" 
                fill="none" 
                stroke="#6366f1" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M 10 10 Q 55 5 50 35 L 43 28 M 50 35 L 58 30" />
              </svg>
            </div>

          </div>
        </section>

        {/* ==========================================================================
           3. 2-COLUMN PROJECT SHOWCASE CARDS GRID (Matching Reference Screenshot)
           ========================================================================== */}
        <section className="work-portfolio-grid-section">
          <div className="work-portfolio-grid-container">
            {filteredProjects.map((project) => (
              <article 
                key={project.id} 
                className="work-project-card"
                onClick={() => navigateWithTransition(project.route)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    navigateWithTransition(project.route);
                  }
                }}
              >
                {/* Image Showcase Container with Category Badge & Action Circle */}
                <div 
                  className="project-card-image-box" 
                  style={{ background: project.imageBg }}
                >
                  {/* Top-Left Category Badge */}
                  <span className="project-card-badge">
                    {project.badge}
                  </span>

                  {/* Stylized Visual Mockup Graphic */}
                  <div className="project-mockup-visual">
                    <div className="mockup-glass-sheen" />
                    <div className="mockup-device-wrapper">
                      {project.previewType === 'laptop-screen' && (
                        <div className="mockup-laptop">
                          <div className="mockup-laptop-topbar">
                            <span className="window-dot red" />
                            <span className="window-dot yellow" />
                            <span className="window-dot green" />
                          </div>
                          <div className="mockup-laptop-screen">
                            <div className="mockup-screen-title">{project.title}</div>
                            <div className="mockup-screen-bar" />
                            <div className="mockup-screen-tag">{project.stats}</div>
                          </div>
                        </div>
                      )}

                      {project.previewType === 'mobile-screen' && (
                        <div className="mockup-phone-twin">
                          <div className="phone-screen phone-front">
                            <div className="phone-notch" />
                            <div className="phone-header-chip">{project.badge}</div>
                            <div className="phone-metric-chip">{project.stats}</div>
                          </div>
                          <div className="phone-screen phone-back">
                            <div className="phone-metric-sub">{project.metricLabel}</div>
                          </div>
                        </div>
                      )}

                      {project.previewType === 'branding-box' && (
                        <div className="mockup-branding-kit">
                          <div className="brand-kit-box">
                            <span className="brand-box-logo">{project.title.split(' ')[0]}</span>
                            <span className="brand-box-sub">LUXURY PACKAGING</span>
                          </div>
                          <div className="brand-kit-tag">{project.stats}</div>
                        </div>
                      )}

                      {project.previewType === 'dashboard-screen' && (
                        <div className="mockup-dashboard">
                          <div className="dashboard-header-bar" />
                          <div className="dashboard-widgets-grid">
                            <div className="widget-tile" />
                            <div className="widget-tile" />
                            <div className="widget-tile wide" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Floating Circular Action Arrow Button (Bottom-Right of Image) */}
                  <div className="project-card-hover-arrow" aria-label="Open Case Study">
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* Project Details Footer */}
                <div className="project-card-content">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.summary}</p>
                  
                  <div className="project-card-link-row">
                    <span className="view-project-link">
                      <span>View Project</span>
                      <ArrowRight size={15} />
                    </span>
                    <span className="project-metric-pill">{project.stats}</span>
                  </div>
                </div>

              </article>
            ))}
          </div>
        </section>

        {/* ==========================================================================
           4. BOTTOM IMPACT BANNER: "Trusted by 10+ clients around the world"
           ========================================================================== */}
        <section className="work-impact-banner-section">
          <div className="work-impact-banner-card">
            
            {/* Ambient Background Starfield Glow */}
            <div className="impact-ambient-glow" aria-hidden="true" />
            <div className="impact-sparkles-row" aria-hidden="true">
              <span className="sparkle-star s1">✦</span>
              <span className="sparkle-star s2">★</span>
              <span className="sparkle-star s3">✦</span>
              <span className="sparkle-star s4">★</span>
            </div>

            {/* Left Content Side */}
            <div className="impact-content-side">
              <div className="impact-pill-badge">
                <span>Our Impact</span>
              </div>

              <h2 className="impact-title">
                Trusted by 30+ clients<br />around the world
              </h2>
              <p className="impact-desc">
                We're proud to have partnered with amazing brands and start-ups to bring their ideas to life.
              </p>
            </div>

            {/* Middle Stats Columns */}
            <div className="impact-stats-group">
              <div className="impact-stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Happy Clients</span>
              </div>

              <div className="stat-divider" aria-hidden="true" />

              <div className="impact-stat-item">
                <span className="stat-number">65+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>

              <div className="stat-divider" aria-hidden="true" />

              <div className="impact-stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>

            {/* Right Side: Glowing Saturn Orbital Planet Visual */}
            <div className="impact-planet-visual" aria-hidden="true">
              <div className="planet-globe-core">
                <div className="planet-surface-sheen" />
              </div>
              <div className="planet-orbit-ring" />
              <div className="planet-glow-aura" />
            </div>

          </div>
        </section>

      </main>

      {/* Website Footer */}
      <Footer />
    </div>
  );
}
