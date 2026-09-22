import React, { useState, useEffect, useRef } from 'react';
import { 
  Target, 
  Eye, 
  Rocket, 
  Sparkles, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Globe, 
  Star, 
  Zap, 
  Code2, 
  ShieldCheck, 
  Layers, 
  RotateCw, 
  SlidersHorizontal,
  Compass,
  HeartHandshake,
  Lightbulb,
  Palette,
  ExternalLink
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { usePageTransition } from '../components/PageTransition';

export default function About() {
  const { navigateWithTransition } = usePageTransition();
  // Knob mode: 1 = Creative & Mission, 2 = Tech & Scale
  const [knobMode, setKnobMode] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [lineActive, setLineActive] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Physical synth click audio effect for retro knob feel
  const playClickSound = (mode) => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = mode === 1 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(mode === 1 ? 480 : 640, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(mode === 1 ? 220 : 310, ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.07);
    } catch {
      // Audio context restricted or unavailable; visual feedback is sufficient
    }
  };

  // Toggle knob position between 1 and 2
  const handleDialTurn = (targetMode) => {
    if (knobMode === targetMode) return;
    setIsRotating(true);
    setKnobMode(targetMode);
    playClickSound(targetMode);

    // Pulse the energy line
    setLineActive(false);
    setTimeout(() => {
      setLineActive(true);
    }, 50);

    setTimeout(() => {
      setIsRotating(false);
    }, 450);
  };

  const toggleDial = () => {
    handleDialTurn(knobMode === 1 ? 2 : 1);
  };

  return (
    <div className="about-page-wrapper">
      {/* Top Navbar */}
      <Navbar />

      <main className="about-page-main">
        {/* ==========================================================================
           1. HERO SECTION: CLEAN, UNCLUTTERED WITH RETRO 3D CUT MICROWAVE KNOB (1 & 2)
           ========================================================================== */}
        <section className="about-hero-section" aria-label="About BrandBoosters Studio">
          
          {/* Subtle Ambient Studio Glows */}
          <div className="about-ambient-glow glow-top-left" />
          <div className="about-ambient-glow glow-top-right" />

          <div className="about-hero-container">
            
            <div className="about-hero-grid">
              
              {/* Left Column: Dynamic Hero Content Controlled by the Knob */}
              <div className="about-hero-info-col">
                
                {/* Active Mode Pill Tag */}
                <div className={`about-channel-badge ${knobMode === 1 ? 'channel-1' : 'channel-2'}`}>
                  <span className="channel-live-dot" />
                  <span className="channel-tag-text">
                    {knobMode === 1 ? 'CHANNEL 01 // CREATIVE DIRECTION' : 'CHANNEL 02 // SCALABLE ENGINEERING'}
                  </span>
                </div>

                {/* Animated Dynamic Headline */}
                <div className="about-headline-viewport">
                  {knobMode === 1 ? (
                    <div className="about-mode-content mode-fade-in" key="mode-1-heading">
                      <h1 className="about-main-title">
                        We're a Creative Team on a Mission to{' '}
                        <span className="about-title-gradient-creative">Build What Matters</span>
                      </h1>
                      <p className="about-main-lead">
                        We are BrandBoosters — a digital studio focused on turning bold ideas 
                        into beautiful, high-performing digital experiences. We combine creativity, 
                        technology and strategy to help brands grow and dominate their markets.
                      </p>

                      {/* Creative Mode Feature Highlights */}
                      <div className="about-hero-pills-row">
                        <span className="hero-feature-pill">
                          <Palette size={14} className="pill-icon" /> Category-Defining UI/UX
                        </span>
                        <span className="hero-feature-pill">
                          <Sparkles size={14} className="pill-icon" /> Bespoke Brand Identity
                        </span>
                        <span className="hero-feature-pill">
                          <HeartHandshake size={14} className="pill-icon" /> Human-First Psychology
                        </span>
                      </div>

                      {/* Call-to-Action Group */}
                      <div className="about-hero-actions-group">
                        <button 
                          type="button" 
                          className="about-primary-btn"
                          onClick={() => navigateWithTransition('/work')}
                        >
                          <span>Our Work</span>
                          <ArrowRight size={17} />
                        </button>
                        
                        <a 
                          href="#story" 
                          className="about-secondary-pill-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          <span className="play-circle-icon">
                            <Play size={13} fill="#001f3f" />
                          </span>
                          <span className="story-btn-text">
                            <strong>Watch Our Story</strong>
                            <small>1:48 min</small>
                          </span>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="about-mode-content mode-fade-in" key="mode-2-heading">
                      <h1 className="about-main-title">
                        Engineered for Velocity.{' '}
                        <span className="about-title-gradient-tech">Built for Scale</span>
                      </h1>
                      <p className="about-main-lead">
                        Precision engineering meets fluid digital craft. We architect ultra-responsive 
                        web platforms, high-throughput cloud microservices, and AI-powered interfaces 
                        that handle millions of concurrent users without skipping a frame.
                      </p>

                      {/* Tech Mode Feature Highlights */}
                      <div className="about-hero-pills-row">
                        <span className="hero-feature-pill tech-pill">
                          <Zap size={14} className="pill-icon tech-icon" /> Sub-Second Core Web Vitals
                        </span>
                        <span className="hero-feature-pill tech-pill">
                          <ShieldCheck size={14} className="pill-icon tech-icon" /> Enterprise Architecture
                        </span>
                        <span className="hero-feature-pill tech-pill">
                          <Code2 size={14} className="pill-icon tech-icon" /> Modern Reactive Stacks
                        </span>
                      </div>

                      {/* Call-to-Action Group */}
                      <div className="about-hero-actions-group">
                        <button 
                          type="button" 
                          className="about-primary-btn tech-btn"
                          onClick={() => navigateWithTransition('/contact')}
                        >
                          <span>Start a Project</span>
                          <ArrowRight size={17} />
                        </button>
                        
                        <button 
                          type="button" 
                          className="about-secondary-pill-btn"
                          onClick={() => navigateWithTransition('/work')}
                        >
                          <span className="play-circle-icon tech-circle">
                            <ExternalLink size={13} />
                          </span>
                          <span className="story-btn-text">
                            <strong>Explore Portfolio</strong>
                            <small>65+ Projects</small>
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Right Column: Retro 3D Cut Microwave Knob Unit */}
              <div className="about-hero-knob-col">
                
                {/* Visual Connection Wire spanning between Knob & Content */}
                <div className={`retro-circuit-line-bridge ${lineActive ? 'pulsing' : ''}`}>
                  <svg className="circuit-svg-wire" viewBox="0 0 400 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="wireGradient1" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.75" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
                      </linearGradient>
                      <linearGradient id="wireGradient2" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#ffd105" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.75" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M 380,60 C 260,60 180,10 0,60" 
                      fill="none" 
                      stroke={knobMode === 1 ? 'url(#wireGradient1)' : 'url(#wireGradient2)'} 
                      strokeWidth="3.5"
                      strokeDasharray="8 6"
                      className="live-pulse-path"
                    />
                  </svg>
                </div>

                {/* Physical 3D Cutout Plate Box */}
                <div className="retro-knob-plate-card">
                  
                  {/* Plate Header with Status Label */}
                  <div className="knob-plate-header">
                    <div className="knob-brand-stamp">
                      <SlidersHorizontal size={14} />
                      <span>STUDIO FREQUENCY DIAL</span>
                    </div>
                    <div className="knob-lcd-readout">
                      <span className="lcd-indicator-led active" />
                      <span className="lcd-channel-text">CH-{knobMode === 1 ? '01 // CREATIVE' : '02 // TECH'}</span>
                    </div>
                  </div>

                  {/* Main Dial Chamber: 3D Recessed Well with Physical Depth */}
                  <div className="knob-recessed-chamber">
                    
                    {/* Tick Mark Graduation Ring */}
                    <div className="dial-graduation-ring">
                      
                      {/* Position 1 Button & Tick */}
                      <button 
                        type="button"
                        className={`dial-position-mark mark-1 ${knobMode === 1 ? 'selected' : ''}`}
                        onClick={() => handleDialTurn(1)}
                        title="Turn Dial to Channel 1 (Creative)"
                      >
                        <span className="mark-number">1</span>
                        <span className="mark-label">CREATIVE</span>
                        <span className="mark-led" />
                      </button>

                      {/* Position 2 Button & Tick */}
                      <button 
                        type="button"
                        className={`dial-position-mark mark-2 ${knobMode === 2 ? 'selected' : ''}`}
                        onClick={() => handleDialTurn(2)}
                        title="Turn Dial to Channel 2 (Tech)"
                      >
                        <span className="mark-number">2</span>
                        <span className="mark-label">TECH</span>
                        <span className="mark-led" />
                      </button>

                      {/* Radial Tick Lines around Perimeter */}
                      <div className="radial-tick-lines" aria-hidden="true">
                        <span className="tick-notch t-1" />
                        <span className="tick-notch t-2" />
                        <span className="tick-notch t-3" />
                        <span className="tick-notch t-4" />
                        <span className="tick-notch t-5" />
                        <span className="tick-notch t-6" />
                        <span className="tick-notch t-7" />
                        <span className="tick-notch t-8" />
                      </div>
                    </div>

                    {/* Central 3D Rotatable Knurled Metallic Knob */}
                    <div 
                      className={`retro-physical-knob ${isRotating ? 'rotating' : ''} ${knobMode === 2 ? 'knob-turned-2' : 'knob-turned-1'}`}
                      onClick={toggleDial}
                      role="slider"
                      aria-valuenow={knobMode}
                      aria-valuemin="1"
                      aria-valuemax="2"
                      aria-label="Studio Mode Knob"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleDial();
                        }
                      }}
                    >
                      {/* Knurled Outer Gripping Edge Texture */}
                      <div className="knob-knurled-rim" />

                      {/* Brushed Top Disc Face */}
                      <div className="knob-brushed-face">
                        {/* Tactile Grip Indentation */}
                        <div className="knob-finger-dimple" />
                        {/* Laser Pointer Notch Indicator */}
                        <div className="knob-pointer-notch" />
                        {/* Center Hubcap Logo */}
                        <div className="knob-center-hub">
                          <RotateCw size={13} className="hub-spin-icon" />
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Tactile Step Buttons Under Knob */}
                  <div className="knob-tactile-selector-row">
                    <button 
                      type="button"
                      className={`tactile-step-pill ${knobMode === 1 ? 'active' : ''}`}
                      onClick={() => handleDialTurn(1)}
                    >
                      <span className="step-num-bubble">01</span>
                      <span className="step-text">Creative Vision</span>
                    </button>

                    <div className="knob-switch-toggle-icon" onClick={toggleDial} title="Click to toggle dial">
                      <div className={`switch-rocker ${knobMode === 2 ? 'toggled-right' : 'toggled-left'}`} />
                    </div>

                    <button 
                      type="button"
                      className={`tactile-step-pill ${knobMode === 2 ? 'active' : ''}`}
                      onClick={() => handleDialTurn(2)}
                    >
                      <span className="step-num-bubble">02</span>
                      <span className="step-text">High-Velocity Tech</span>
                    </button>
                  </div>

                  {/* Micro Hint Tag */}
                  <div className="knob-interactive-hint">
                    <span className="hint-indicator-pulse" />
                    <span>Click knob or press 1 & 2 to switch modes</span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ==========================================================================
           2. SECTION: OUR STORY (FROM SIMPLE IDEA TO GROWING CREATIVE STUDIO)
           ========================================================================== */}
        <section className="about-story-section" id="story" aria-label="Our Story">
          <div className="about-section-container">
            
            <div className="about-story-grid">
              
              {/* Left Column: 3D Studio Mockup Canvas with Playful Annotation */}
              <div className="story-mockup-wrapper">
                
                {/* Hand-Drawn Whimsical Annotation */}
                <div className="story-handwritten-badge" aria-hidden="true">
                  <span>Small team ➔ Big dreams</span>
                  <svg className="story-curved-arrow" viewBox="0 0 60 40" fill="none">
                    <path 
                      d="M10,5 C25,2 45,15 48,32 M48,32 L40,26 M48,32 L54,24" 
                      stroke="#8b5cf6" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </div>

                {/* 3D Glass Layered Creative Workstation Canvas */}
                <div className="story-3d-screen-card">
                  
                  {/* Window Bar */}
                  <div className="story-screen-window-bar">
                    <div className="window-dots">
                      <span className="dot-red" />
                      <span className="dot-yellow" />
                      <span className="dot-green" />
                    </div>
                    <div className="window-address-tab">brandboosters.studio / story.canvas</div>
                  </div>

                  {/* Screen Content Graphic */}
                  <div className="story-screen-body">
                    <div className="screen-floating-orb orb-1" />
                    <div className="screen-floating-orb orb-2" />
                    
                    {/* Central Glowing Lightbulb Icon Unit */}
                    <div className="screen-central-lightbulb-box">
                      <div className="bulb-glow-halo" />
                      <Lightbulb size={46} className="bulb-main-icon" />
                      <span className="bulb-floating-sparkle sparkle-top">✦</span>
                      <span className="bulb-floating-sparkle sparkle-bottom">✦</span>
                    </div>

                    {/* Layered Micro-Panels imitating design tool */}
                    <div className="screen-micro-panel-left">
                      <div className="micro-line line-long" />
                      <div className="micro-line line-med" />
                      <div className="micro-chips-row">
                        <span className="color-chip chip-cyan" />
                        <span className="color-chip chip-yellow" />
                        <span className="color-chip chip-purple" />
                      </div>
                    </div>

                    <div className="screen-micro-panel-right">
                      <div className="micro-cursor-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M4 4L11.5 21L14.5 13.5L22 10.5L4 4Z" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="cursor-tag-label">Craftly Engine</div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Right Column: Story Copy & High-Impact Metric Numbers */}
              <div className="story-narrative-wrapper">
                
                <div className="section-pill-tag">
                  <span className="tag-accent-circle" />
                  <span>Our Story</span>
                </div>

                <h2 className="story-section-title">
                  From a simple idea to a growing creative studio
                </h2>

                <p className="story-paragraph">
                  BrandBoosters started with an obsession for digital craft and a stubborn conviction 
                  that high-velocity experiences could make an undeniable difference. What began as 
                  a small group of ambitious dreamers pushing pixels late into the night has blossomed 
                  into a global creative powerhouse.
                </p>

                <p className="story-paragraph story-paragraph-sub">
                  Today, we collaborate with disruptive startups and forward-thinking enterprises across 
                  Mumbai, Ahmedabad, and international tech hubs — transforming ideas into market-defining 
                  products that people genuinely enjoy using.
                </p>

                {/* 3 Metrics Trio: 2020 Founded / 30+ Happy Clients / 65+ Projects Delivered */}
                <div className="story-metrics-grid">
                  <div className="story-metric-item">
                    <span className="metric-number-big">2020</span>
                    <span className="metric-label-caption">Founded</span>
                  </div>

                  <div className="story-metric-item">
                    <span className="metric-number-big">30+</span>
                    <span className="metric-label-caption">Happy Clients</span>
                  </div>

                  <div className="story-metric-item">
                    <span className="metric-number-big">65+</span>
                    <span className="metric-label-caption">Projects Delivered</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ==========================================================================
           3. SECTION: WHY WE EXIST (MISSION, VISION, VALUES + STUDIO STYLUS GRAPHIC)
           ========================================================================== */}
        <section className="about-why-section" aria-label="Why We Exist">
          <div className="about-section-container">
            
            <div className="about-why-grid">
              
              {/* Left Column: 3 Structured Cards (Mission, Vision, Values) */}
              <div className="why-pillars-column">
                
                {/* 1. Our Mission */}
                <div className="pillar-glass-card">
                  <div className="pillar-icon-box icon-mission">
                    <Target size={24} />
                  </div>
                  <div className="pillar-content">
                    <h3 className="pillar-title">Our Mission</h3>
                    <p className="pillar-text">
                      To create meaningful digital experiences that help brands grow, outperform competitors, 
                      and make a lasting cultural impact.
                    </p>
                  </div>
                </div>

                {/* 2. Our Vision */}
                <div className="pillar-glass-card">
                  <div className="pillar-icon-box icon-vision">
                    <Eye size={24} />
                  </div>
                  <div className="pillar-content">
                    <h3 className="pillar-title">Our Vision</h3>
                    <p className="pillar-text">
                      To be a global creative studio celebrated for pioneering innovation, uncompromising 
                      craftsmanship, and human-centered design.
                    </p>
                  </div>
                </div>

                {/* 3. Our Values */}
                <div className="pillar-glass-card">
                  <div className="pillar-icon-box icon-values">
                    <Rocket size={24} />
                  </div>
                  <div className="pillar-content">
                    <h3 className="pillar-title">Our Values</h3>
                    <p className="pillar-text">
                      Relentless Curiosity, Radical Transparency, Deep Collaboration, and Continuous 
                      Mastery of Emerging Technologies.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column: Narrative Copy + 3D Stylus / Studio Graphics */}
              <div className="why-narrative-column">
                
                <div className="section-pill-tag">
                  <span className="tag-accent-circle" />
                  <span>Why We Exist</span>
                </div>

                <h2 className="why-section-title">
                  Ideas, Design, Technology <br />
                  <span className="why-title-accent">— All in One Place.</span>
                </h2>

                <p className="why-paragraph">
                  We believe in the power of creativity and technology to solve real business challenges. 
                  Our team works hand-in-hand with founders and leadership teams to understand their 
                  strategic goals, uncover untapped potential, and translate complex requirements 
                  into seamless digital products.
                </p>

                {/* 3D Stylus Tablet Creative Composition Card */}
                <div className="why-3d-creative-card">
                  <div className="stylus-card-aura" />
                  
                  {/* Floating Stylus Pen Tool */}
                  <div className="stylus-pen-visual">
                    <div className="stylus-tip" />
                    <div className="stylus-barrel" />
                    <div className="stylus-cap" />
                  </div>

                  {/* Tablet Interface Mock */}
                  <div className="stylus-canvas-pad">
                    <div className="canvas-header-bar">
                      <span className="canvas-dot dot-1" />
                      <span className="canvas-dot dot-2" />
                      <span className="canvas-dot dot-3" />
                    </div>
                    <div className="canvas-heart-box">
                      <span className="heart-badge-icon">💜</span>
                    </div>
                  </div>

                  {/* Playful Floating Sparkles */}
                  <div className="floating-canvas-tag">Human-Centered UI</div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ==========================================================================
           4. SECTION: OUR IMPACT (BOTTOM GLOWING BANNER - NUMBERS THAT SPEAK FOR US)
           ========================================================================== */}
        <section className="about-impact-banner-section" aria-label="Our Impact">
          <div className="about-section-container">
            
            <div className="about-impact-banner-card">
              
              {/* Left Side: Headline & Badge */}
              <div className="impact-banner-left">
                <div className="impact-pill-badge">
                  <span className="impact-badge-dot" />
                  <span>Our Impact</span>
                </div>
                <h2 className="impact-banner-title">
                  Numbers that <br />
                  <span>speak for us</span>
                </h2>
              </div>

              {/* Middle: 4 Key Metrics */}
              <div className="impact-metrics-row">
                
                <div className="impact-stat-cell">
                  <span className="stat-big-val">65+</span>
                  <span className="stat-sub-txt">Projects Completed</span>
                </div>

                <div className="stat-separator-pipe" />

                <div className="impact-stat-cell">
                  <span className="stat-big-val">30+</span>
                  <span className="stat-sub-txt">Happy Clients</span>
                </div>

                <div className="stat-separator-pipe" />

                <div className="impact-stat-cell">
                  <span className="stat-big-val">5.0 ★</span>
                  <span className="stat-sub-txt">Client Satisfaction</span>
                </div>

                <div className="stat-separator-pipe" />

                <div className="impact-stat-cell">
                  <span className="stat-big-val">4+</span>
                  <span className="stat-sub-txt">Years of Experience</span>
                </div>

              </div>

              {/* Right Side: CTA Button */}
              <div className="impact-banner-right">
                <button 
                  type="button" 
                  className="impact-cta-btn"
                  onClick={() => navigateWithTransition('/contact')}
                >
                  <span>Start a Project</span>
                  <ArrowRight size={17} />
                </button>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* Website Footer */}
      <Footer />
    </div>
  );
}
