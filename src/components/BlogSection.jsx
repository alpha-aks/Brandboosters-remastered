import React, { useState, useRef, useEffect } from 'react';
import { 
  Tv, 
  Radio, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Clock, 
  Calendar, 
  BookOpen, 
  Share2, 
  Volume2, 
  VolumeX, 
  Power,
  RotateCw,
  Layers,
  ChevronRight,
  Flame
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogsData';

export default function BlogSection() {
  const [activeChannelIndex, setActiveChannelIndex] = useState(0);
  const [isTvOn, setIsTvOn] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);
  const activeBlog = BLOG_POSTS[activeChannelIndex];

  // Synthesize retro analog TV tuner click & channel static sound using Web Audio API
  const playTunerSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      // Mechanical rotary switch click
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);

      // Brief CRT tube high-voltage hum
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1250, ctx.currentTime);
      gain2.gain.setValueAtTime(0.04, ctx.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);

      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start();
      osc2.stop(ctx.currentTime + 0.13);
    } catch {
      // Audio context fallback
    }
  };

  // Channel switcher handler with brief CRT static wipe
  const handleChannelChange = (index) => {
    if (index === activeChannelIndex) return;
    playTunerSound();
    setIsGlitching(true);
    setActiveChannelIndex(index);
    setTimeout(() => {
      setIsGlitching(false);
    }, 280);
  };

  // Toggle TV Power On/Off
  const handlePowerToggle = () => {
    playTunerSound();
    setIsTvOn(!isTvOn);
  };

  // Next Channel button
  const handleNextChannel = () => {
    const nextIndex = (activeChannelIndex + 1) % BLOG_POSTS.length;
    handleChannelChange(nextIndex);
  };

  return (
    <section 
      id="blogs" 
      className="blog-3d-cutout-section" 
      aria-label="Studio Blogs and Insights"
    >
      <div className="blog-section-inner-container">
        
        {/* ==========================================================================
           1. SECTION HEADER (Brand Badge, Big Bold Typography)
           ========================================================================== */}
        <div className="blog-section-header">
          <div className="blog-tag-badge">
            <span className="blog-badge-pulse" />
            <span className="blog-badge-text">Studio Dispatches</span>
          </div>

          <h2 className="blog-main-title">
            Velocity Insights & <br />
            <span className="blog-title-gradient">Design Strategy</span>
          </h2>

          <p className="blog-lead-text">
            Deep-dives into scalable digital architecture, brand geometry, and omnichannel growth 
            from the BrandBoosters studio lab.
          </p>
        </div>

        {/* ==========================================================================
           2. RETRO STUDIO TV BROADCAST UNIT (FEATURING BLOGS)
           ========================================================================== */}
        <div className="retro-tv-showcase-wrapper">
          
          {/* Authentic TV Exterior Enclosure */}
          <div className="studio-retro-tv-box">
            
            {/* Top Vintage Telescopic Antenna & Handle */}
            <div className="tv-antenna-rig" aria-hidden="true">
              <span className="antenna-stem left-stem" />
              <span className="antenna-stem right-stem" />
              <div className="tv-top-carrying-handle" />
            </div>

            {/* Main TV Bezel Face */}
            <div className="tv-front-fascia">
              
              {/* Left/Center: Curved CRT Screen Housing */}
              <div className="tv-screen-chassis">
                
                {/* 3D CRT Convex Outer Bezel */}
                <div className={`crt-glass-monitor ${!isTvOn ? 'tv-turned-off' : ''} ${isGlitching ? 'crt-glitch-burst' : ''}`}>
                  
                  {/* Glass Scanlines & Radial Convex Reflection Shading */}
                  <div className="crt-scanline-mesh" />
                  <div className="crt-glass-curvature-glare" />

                  {isTvOn ? (
                    /* Active Live Broadcast Content */
                    <div className="crt-live-broadcast-feed" style={{ borderColor: activeBlog.accent }}>
                      
                      {/* Top Broadcast HUD / Status Bar */}
                      <div className="crt-broadcast-header">
                        <div className="on-air-pill">
                          <span className="on-air-blinking-red-dot" />
                          <span className="on-air-label">LIVE BROADCAST</span>
                        </div>
                        
                        <div className="crt-hud-middle">
                          <span className="hud-frequency">SIG: 142.8 MHz</span>
                        </div>

                        <div className="crt-channel-watermark" style={{ color: activeBlog.accent }}>
                          <span>BB-TV // {activeBlog.channel}</span>
                        </div>
                      </div>

                      {/* Screen Content: Featured Blog Presentation */}
                      <div className="crt-article-display">
                        
                        {/* Dynamic Category Pill */}
                        <div className="crt-category-tag-row">
                          <span 
                            className="crt-category-pill" 
                            style={{ 
                              background: `${activeBlog.accent}20`, 
                              borderColor: `${activeBlog.accent}50`,
                              color: activeBlog.accent 
                            }}
                          >
                            <Flame size={12} />
                            <span>{activeBlog.category}</span>
                          </span>

                          <span className="crt-read-meta">
                            <Clock size={12} />
                            <span>{activeBlog.readTime}</span>
                          </span>
                        </div>

                        {/* Bold Featured Title */}
                        <h3 className="crt-featured-title">
                          {activeBlog.title}
                        </h3>

                        {/* Article Lead Excerpt */}
                        <p className="crt-featured-excerpt">
                          {activeBlog.excerpt}
                        </p>

                        {/* Summary Bullet Highlights */}
                        <ul className="crt-highlights-list">
                          {activeBlog.summaryPoints.slice(0, 2).map((point, idx) => (
                            <li key={idx} className="crt-point-item">
                              <span className="point-bullet-dot" style={{ background: activeBlog.accent }} />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Action Footer on TV Screen */}
                        <div className="crt-screen-action-row">
                          <div className="crt-author-stamp">
                            <div className="author-avatar-mini" style={{ background: activeBlog.accent }}>
                              {activeBlog.author.initials}
                            </div>
                            <div className="author-meta-text">
                              <strong>{activeBlog.author.name}</strong>
                              <span>{activeBlog.publishedDate}</span>
                            </div>
                          </div>

                          <a 
                            href={`#read-${activeBlog.uid}`}
                            className="crt-tune-in-btn"
                            style={{ 
                              background: activeBlog.accent,
                              color: '#001f3f'
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              const cardElem = document.getElementById(`card-${activeBlog.uid}`);
                              cardElem?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            <span>Read Full Article</span>
                            <ArrowRight size={14} />
                          </a>
                        </div>

                      </div>

                    </div>
                  ) : (
                    /* Power Off Screen State */
                    <div className="crt-standby-screen">
                      <div className="crt-standby-center-dot" />
                      <span className="standby-text">POWER STANDBY // PRESS POWER BUTTON</span>
                    </div>
                  )}

                </div>

              </div>

              {/* Right Side: Retro Control Knob & Channel Switcher Deck */}
              <div className="tv-control-deck">
                
                {/* Brand Logo Stamp */}
                <div className="tv-brand-crest">
                  <Tv size={16} />
                  <span>TRINITRON 2026</span>
                </div>

                {/* Power Toggle Button & Status LED */}
                <div className="tv-power-control-row">
                  <button 
                    type="button" 
                    className={`tv-power-btn ${isTvOn ? 'power-on' : 'power-off'}`}
                    onClick={handlePowerToggle}
                    title="Toggle TV Power"
                  >
                    <Power size={14} />
                    <span>{isTvOn ? 'POWER ON' : 'STANDBY'}</span>
                  </button>
                  <span className={`tv-power-led ${isTvOn ? 'led-green' : 'led-red'}`} />
                </div>

                {/* Tactile Channel Push-Buttons (CH 01 - CH 04) */}
                <div className="tv-channel-buttons-group">
                  <span className="deck-label">CHANNEL SELECTOR</span>
                  <div className="channel-buttons-grid">
                    {BLOG_POSTS.map((post, idx) => {
                      const isSelected = activeChannelIndex === idx && isTvOn;
                      return (
                        <button
                          key={post.id}
                          type="button"
                          className={`tv-channel-btn ${isSelected ? 'active-channel' : ''}`}
                          onClick={() => {
                            if (!isTvOn) setIsTvOn(true);
                            handleChannelChange(idx);
                          }}
                          style={{
                            borderColor: isSelected ? post.accent : 'rgba(0, 31, 63, 0.15)'
                          }}
                          title={`Switch to ${post.channel}: ${post.title}`}
                        >
                          <span className="ch-num">{post.channel}</span>
                          <span 
                            className="ch-indicator-dot" 
                            style={{ 
                              background: isSelected ? post.accent : '#94a3b8',
                              boxShadow: isSelected ? `0 0 8px ${post.accent}` : 'none'
                            }} 
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Rotary Tuning Dial */}
                <div className="tv-rotary-dial-box">
                  <span className="deck-label">TUNER DIAL</span>
                  <button 
                    type="button" 
                    className="tv-physical-tuner-knob"
                    onClick={handleNextChannel}
                    title="Click to cycle next channel"
                  >
                    <div 
                      className="tuner-knob-face" 
                      style={{ transform: `rotate(${activeChannelIndex * 90}deg)` }}
                    >
                      <span className="knob-pip" />
                    </div>
                  </button>
                  <span className="knob-sub-tip">Click to turn channel</span>
                </div>

                {/* Vintage Speaker Grille Perforations */}
                <div className="tv-speaker-grille" aria-hidden="true">
                  <span className="speaker-slot" />
                  <span className="speaker-slot" />
                  <span className="speaker-slot" />
                  <span className="speaker-slot" />
                  <span className="speaker-slot" />
                </div>

              </div>

            </div>

            {/* Bottom Retro Cabinet Wooden/Chrome Foot Stands */}
            <div className="tv-cabinet-stands" aria-hidden="true">
              <span className="tv-foot foot-left" />
              <span className="tv-foot foot-right" />
            </div>

          </div>

        </div>

        {/* ==========================================================================
           3. PRISMIC CMS-READY BLOG ARTICLE DIRECTORY GRID
           ========================================================================== */}
        <div className="blog-directory-container">
          
          <div className="directory-header-row">
            <div>
              <span className="directory-subtag">ALL PUBLICATIONS</span>
              <h3 className="directory-title">Browse Studio Dispatches</h3>
            </div>
            <div className="directory-channels-pill">
              <span>{BLOG_POSTS.length} Articles Live on Air</span>
            </div>
          </div>

          <div className="blog-cards-grid">
            {BLOG_POSTS.map((blog, idx) => {
              const isCurrentlyOnTv = activeChannelIndex === idx && isTvOn;
              return (
                <article 
                  key={blog.id} 
                  id={`card-${blog.uid}`}
                  className={`blog-card-item ${isCurrentlyOnTv ? 'playing-on-tv' : ''}`}
                  onClick={() => {
                    if (!isTvOn) setIsTvOn(true);
                    handleChannelChange(idx);
                  }}
                  tabIndex={0}
                  role="button"
                  title="Click to tune TV to this article"
                >
                  {/* Card Visual Header Bar with Color Accent */}
                  <div className="card-accent-ribbon" style={{ background: blog.accent }} />

                  <div className="blog-card-body">
                    
                    {/* Meta Row: Channel + Category + Read Time */}
                    <div className="card-meta-top">
                      <span 
                        className="card-channel-pill" 
                        style={{ borderColor: blog.accent, color: blog.accent }}
                      >
                        {blog.channel}
                      </span>
                      
                      <span className="card-category-txt">
                        {blog.category}
                      </span>

                      <span className="card-time-txt">
                        <Clock size={12} />
                        {blog.readTime}
                      </span>
                    </div>

                    {/* Blog Card Title */}
                    <h4 className="blog-card-title">
                      {blog.title}
                    </h4>

                    {/* Excerpt */}
                    <p className="blog-card-excerpt">
                      {blog.excerpt}
                    </p>

                    {/* Tags Pills Row */}
                    <div className="blog-card-tags">
                      {blog.tags.map((tag) => (
                        <span key={tag} className="tag-pill">#{tag}</span>
                      ))}
                    </div>

                    {/* Card Footer: Author + Interactive Arrow */}
                    <div className="blog-card-footer">
                      <div className="card-author-info">
                        <div className="author-circle" style={{ background: blog.accent }}>
                          {blog.author.initials}
                        </div>
                        <div className="author-names">
                          <span className="author-fullname">{blog.author.name}</span>
                          <span className="author-date">{blog.publishedDate}</span>
                        </div>
                      </div>

                      <div className="card-tune-action">
                        {isCurrentlyOnTv ? (
                          <span className="now-playing-badge" style={{ color: blog.accent }}>
                            <span className="live-dot" style={{ background: blog.accent }} />
                            <span>ON TV</span>
                          </span>
                        ) : (
                          <span className="tune-in-link">
                            <span>Tune In</span>
                            <ArrowUpRight size={15} />
                          </span>
                        )}
                      </div>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
