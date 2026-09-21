import React, { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

const VIDEO_SRC = '/6a50e2245e378240437e6225_NB-showreel-demo_mp4.mp4';

export default function Showreel() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const videoRef = useRef(null);
  const blurVideoRef = useRef(null);
  const modalVideoRef = useRef(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const lastSyncTimeRef = useRef(0);

  // 1. Bulletproof Autoplay & Playback Initialization
  useEffect(() => {
    const main = videoRef.current;
    const blur = blurVideoRef.current;

    if (!main || !blur) return;

    // Force DOM properties for strict browser autoplay policies
    main.muted = true;
    main.defaultMuted = true;
    main.playsInline = true;
    main.setAttribute('playsinline', '');
    main.setAttribute('webkit-playsinline', '');

    blur.muted = true;
    blur.defaultMuted = true;
    blur.playsInline = true;
    blur.setAttribute('playsinline', '');
    blur.setAttribute('webkit-playsinline', '');

    const startVideos = async () => {
      try {
        main.muted = true;
        await main.play();
        setIsPlaying(true);
      } catch (err) {
        // Autoplay may be deferred until first user interaction
        setIsPlaying(false);
      }

      try {
        blur.muted = true;
        await blur.play();
      } catch (err) {
        // Handled silently
      }
    };

    // Immediate attempt on mount
    startVideos();

    // IntersectionObserver: trigger when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startVideos();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // User gesture fallback: unlock autoplay on any initial interaction
    const unlockOnGesture = () => {
      startVideos();
    };

    window.addEventListener('click', unlockOnGesture, { once: true });
    window.addEventListener('touchstart', unlockOnGesture, { once: true });
    window.addEventListener('scroll', unlockOnGesture, { once: true });
    window.addEventListener('keydown', unlockOnGesture, { once: true });

    // Synchronize play / pause states cleanly without thrashing seek
    const handleMainPlay = () => {
      setIsPlaying(true);
      if (blur && blur.paused) {
        blur.play().catch(() => {});
      }
    };

    const handleMainPause = () => {
      setIsPlaying(false);
      if (blur && !blur.paused) {
        blur.pause();
      }
    };

    // Low-frequency gentle drift correction (only if drift > 1.2s and at most once per 4s)
    const handleTimeUpdate = () => {
      const now = Date.now();
      if (now - lastSyncTimeRef.current > 4000) {
        if (Math.abs(main.currentTime - blur.currentTime) > 1.2) {
          blur.currentTime = main.currentTime;
          lastSyncTimeRef.current = now;
        }
      }
    };

    main.addEventListener('play', handleMainPlay);
    main.addEventListener('pause', handleMainPause);
    main.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener('click', unlockOnGesture);
      window.removeEventListener('touchstart', unlockOnGesture);
      window.removeEventListener('scroll', unlockOnGesture);
      window.removeEventListener('keydown', unlockOnGesture);
      main.removeEventListener('play', handleMainPlay);
      main.removeEventListener('pause', handleMainPause);
      main.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  // 2. Parallax scroll expansion effect on the liquid glass player
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current && containerRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Distance from center of viewport
            const sectionCenter = rect.top + rect.height / 2;
            const screenCenter = windowHeight / 2;
            const distance = Math.abs(sectionCenter - screenCenter);
            const maxDistance = windowHeight * 0.85;

            // Factor: 1 at screen center, diminishes to 0 as you scroll past
            const factor = Math.max(0, 1 - distance / maxDistance);
            const eased = factor * factor * (3 - 2 * factor);

            // Expands up to 1.05 at center, contracts back to 0.88
            const targetScale = 0.88 + eased * 0.17;
            const borderRadius = 36 - eased * 14;

            containerRef.current.style.transform = `scale3d(${targetScale.toFixed(4)}, ${targetScale.toFixed(4)}, 1)`;
            containerRef.current.style.borderRadius = `${borderRadius.toFixed(1)}px`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
    if (!cursorVisible) setCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setCursorVisible(false);
  };

  // Toggle in-page playback on click
  const togglePlay = (e) => {
    e?.stopPropagation();
    const main = videoRef.current;
    const blur = blurVideoRef.current;
    if (!main) return;

    if (main.paused) {
      main.play().catch(() => {});
      blur?.play().catch(() => {});
      setIsPlaying(true);
    } else {
      main.pause();
      blur?.pause();
      setIsPlaying(false);
    }
  };

  const openModal = (e) => {
    e?.stopPropagation();
    setIsModalOpen(true);
    setCursorVisible(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    if (blurVideoRef.current) {
      blurVideoRef.current.pause();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    if (blurVideoRef.current) {
      blurVideoRef.current.play().catch(() => {});
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <section 
      ref={sectionRef} 
      className="showreel-section" 
      id="showreel" 
      aria-label="Brand Showreel"
    >
      {/* 70% Blurred Video replacing the black background across entire section */}
      <div className="section-fullscreen-blur-bg" aria-hidden="true">
        <video
          ref={blurVideoRef}
          className="fullscreen-blur-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src={VIDEO_SRC}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="fullscreen-blur-frost" />
      </div>

      {/* Custom Cursor Follower */}
      <div
        className={`custom-cursor-follower ${cursorVisible ? 'visible' : ''}`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`
        }}
        aria-hidden="true"
      >
        <div className="cursor-dot" />
        <span>{isPlaying ? 'Pause / Expand' : 'Play Showreel'}</span>
      </div>

      <div className="showreel-container">
        {/* Top Overlaid Player with Crisp White Edge that Expands on Scroll */}
        <div
          ref={containerRef}
          className="liquid-glass-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={togglePlay}
          role="button"
          tabIndex={0}
          aria-label={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              togglePlay();
            }
          }}
        >
          {/* Liquid Glass Sheen & Edge Highlights */}
          <div className="liquid-glass-sheen" />
          <div className="liquid-glass-border-highlight" />

          {/* Sharp Foreground Video */}
          <video
            ref={videoRef}
            className="showreel-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src={VIDEO_SRC}
            aria-label="Brandboosters Showreel"
          >
            <source src={VIDEO_SRC} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>

          {/* Central Play/Pause Badge Overlay - visible when paused or hovered */}
          <div className={`video-play-overlay ${isPlaying ? 'overlay-playing' : 'overlay-paused'}`}>
            <div className="play-badge" onClick={togglePlay} title={isPlaying ? 'Pause' : 'Play'}>
              {isPlaying ? (
                <div className="pause-bars">
                  <span />
                  <span />
                </div>
              ) : (
                <div className="play-triangle" />
              )}
            </div>
          </div>

          {/* Floating Expand Button in Top-Right Corner */}
          <button
            className="card-expand-btn"
            onClick={openModal}
            aria-label="Expand to Fullscreen Modal"
            title="Full Video View"
          >
            <Maximize2 size={16} />
          </button>
        </div>
      </div>

      {/* Video Popup Modal */}
      {isModalOpen && (
        <div className="video-modal-backdrop" onClick={closeModal}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Showreel Player"
          >
            <button
              className="modal-close-btn"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ✕
            </button>

            <video
              ref={modalVideoRef}
              className="modal-video-player"
              controls
              autoPlay
              playsInline
              src={VIDEO_SRC}
            >
              <source src={VIDEO_SRC} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
