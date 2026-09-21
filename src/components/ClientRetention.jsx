import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  TrendingUp, 
  Repeat, 
  ShieldCheck 
} from 'lucide-react';
import AmbientOrbs from './AmbientOrbs';

const RETENTION_METRICS = [
  {
    id: 'repeat-rate',
    value: '80%',
    label: 'Repeat Client Rate',
    description: '8 in 10 clients commission multiple consecutive projects after their initial sprint.',
    icon: Repeat,
    accent: '#2563eb'
  },
  {
    id: 'growth-expansion',
    value: '3.4X',
    label: 'Average Client LTV Expansion',
    description: 'Initial 0-to-1 launches compound into multi-platform enterprise ecosystems.',
    icon: TrendingUp,
    accent: '#eab308'
  },
  {
    id: 'in-house',
    value: '100%',
    label: 'Direct Principal Access',
    description: 'Zero junior handoffs or outsourcing. You work directly with principal builders.',
    icon: ShieldCheck,
    accent: '#0284c7'
  }
];

export default function ClientRetention() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Autoplay initialization with graceful fallback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const startPlayback = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (err) {
        setIsPlaying(false);
      }
    };

    startPlayback();

    const unlockPlayback = () => {
      if (video.paused) {
        startPlayback();
      }
    };

    window.addEventListener('touchstart', unlockPlayback, { once: true, passive: true });
    window.addEventListener('scroll', unlockPlayback, { once: true, passive: true });

    return () => {
      window.removeEventListener('touchstart', unlockPlayback);
      window.removeEventListener('scroll', unlockPlayback);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // Switch video source if fast clip has decoding issues
  const handleVideoError = () => {
    const video = videoRef.current;
    if (video && video.src !== '/6a50e2245e378240437e6225_NB-showreel-demo_mp4.mp4') {
      video.src = '/6a50e2245e378240437e6225_NB-showreel-demo_mp4.mp4';
      video.currentTime = 14.5;
      video.play().catch(() => {});
    }
  };

  return (
    <section 
      className="retention-section-wrapper" 
      id="partnerships"
      aria-label="Client Retention and Long-Term Partnerships"
    >
      {/* Universal Ambient Luminous Orbs (10% Opacity Base Layer) */}
      <AmbientOrbs variant="retention-orbs" />

      <div className="retention-container">
        
        {/* Top Header Block — 2-col: big heading left, paragraph right */}
        <div className="retention-header-block">
          <h2 className="retention-main-heading">
            8 out of 10 clients<br />who worked with us.
          </h2>
          <p className="retention-lead-paragraph">
            We don't build disposable one-off websites or throwaway assets. Most of our client relationships 
            ignite with a single mission-critical sprint. Once founders and enterprise leaders witness our speed, 
            mathematical conversion lift, and liquid-glass engineering rigor, they retain us to architect their entire product horizon.
          </p>
        </div>

        {/* 2-Column Bento: Vertical Metrics on Left, Clean Video Console on Right */}
        <div className="retention-bento-grid">
          
          {/* Left Column: Stacked Metric Cards */}
          <div className="retention-left-column">
            <div className="retention-metrics-vertical-stack">
              {RETENTION_METRICS.map((metric) => {
                const IconComponent = metric.icon;
                return (
                  <div key={metric.id} className="retention-metric-card">
                    <div className="metric-header">
                      <span className="metric-number" style={{ color: metric.accent }}>
                        {metric.value}
                      </span>
                      <div className="metric-icon-badge" style={{ borderColor: `${metric.accent}26`, background: `${metric.accent}0d` }}>
                        <IconComponent size={20} color={metric.accent} />
                      </div>
                    </div>
                    <h3 className="metric-label">{metric.label}</h3>
                    <p className="metric-description">{metric.description}</p>
                    <div className="metric-card-specular" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Pure Liquid-Glass Fast-Paced SaaS Video Player */}
          <div className="retention-right-column">
            <div 
              ref={containerRef}
              className="retention-video-console"
            >
              {/* Apple-grade Liquid Glass Window Topbar */}
              <div className="console-window-header">
                <div className="console-window-buttons" aria-hidden="true">
                  <span className="window-dot dot-close" />
                  <span className="window-dot dot-minimize" />
                  <span className="window-dot dot-expand" />
                </div>
              </div>

              {/* Video Player Container */}
              <div 
                className="console-video-frame" 
                onClick={togglePlay}
                role="button"
                tabIndex={0}
                aria-label={isPlaying ? 'Pause fast-paced SaaS video' : 'Play fast-paced SaaS video'}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    togglePlay();
                  }
                }}
              >
                <video
                  ref={videoRef}
                  className="console-saas-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onError={handleVideoError}
                >
                  <source src="/saas-retention-showcase.mp4" type="video/mp4" />
                  <source src="/6a50e2245e378240437e6225_NB-showreel-demo_mp4.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>

                {/* Ambient Video Glare & Glass Reflection */}
                <div className="console-screen-reflection" aria-hidden="true" />
                <div className="console-screen-vignette" aria-hidden="true" />

                {/* Floating On-Screen Video Controls */}
                <div className="console-floating-controls">
                  <button 
                    type="button"
                    className="console-control-btn play-pause-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    title={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause size={15} /> : <Play size={15} fill="currentColor" />}
                  </button>

                  <button 
                    type="button"
                    className="console-control-btn audio-toggle-btn"
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                  </button>
                </div>

                {/* Overlay Play Hint when Paused */}
                {!isPlaying && (
                  <div className="console-paused-overlay">
                    <div className="paused-play-icon">
                      <Play size={26} fill="#ffffff" />
                    </div>
                  </div>
                )}
              </div>

              {/* Edge Specular Glass Lighting */}
              <div className="console-glass-edge" aria-hidden="true" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
