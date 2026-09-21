import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AmbientOrbs from './AmbientOrbs';

const FIVE_D_STEPS = [
  {
    id: 'discover',
    num: '01',
    dName: 'Discover',
    accentHex: '#2563eb', // Electric Cobalt Blue
    auraColor: 'rgba(37, 99, 235, 0.4)',
    img: '/discover-5d.jpg',
    desc: 'Deep-dive brand audit, market intelligence, customer mapping, and technical leverage discovery.'
  },
  {
    id: 'define',
    num: '02',
    dName: 'Define',
    accentHex: '#ffd105', // Radiant Yellow
    auraColor: 'rgba(255, 209, 5, 0.45)',
    img: '/define-5d.jpg',
    desc: 'Surgical blueprinting, information architecture, user journeys, and conversion funnels.'
  },
  {
    id: 'design',
    num: '03',
    dName: 'Design',
    accentHex: '#06b6d4', // Sky Cyan Blue
    auraColor: 'rgba(6, 182, 212, 0.4)',
    img: '/design-5d.jpg',
    desc: 'High-converting living interfaces encased in modern liquid glass, micro-animations, and design tokens.'
  },
  {
    id: 'develop',
    num: '04',
    dName: 'Develop',
    accentHex: '#f59e0b', // Warm Amber Gold
    auraColor: 'rgba(245, 158, 11, 0.4)',
    img: '/develop-5d.jpg',
    desc: 'Clean, lightning-fast React / Vite architecture with sub-second Core Web Vitals and enterprise reliability.'
  },
  {
    id: 'deliver',
    num: '05',
    dName: 'Deliver',
    accentHex: '#001f3f', // Deep Royal Navy Blue
    auraColor: 'rgba(0, 31, 63, 0.5)',
    img: '/deliver-5d.jpg',
    desc: 'Zero-downtime cloud launch, automated SEO indexing, telemetry analytics, and continuous scale.'
  }
];

const Process = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 45;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextCards = () => {
    setCurrentIndex((prev) => (prev + 1) % FIVE_D_STEPS.length);
  };

  const prevCards = () => {
    setCurrentIndex((prev) => (prev - 1 + FIVE_D_STEPS.length) % FIVE_D_STEPS.length);
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      nextCards();
    } else if (distance < -minSwipeDistance) {
      prevCards();
    }
  };

  // On phone show a single card, on desktop show 2 cards in continuous loop
  const visibleCards = isMobile
    ? [FIVE_D_STEPS[currentIndex]]
    : [FIVE_D_STEPS[currentIndex], FIVE_D_STEPS[(currentIndex + 1) % FIVE_D_STEPS.length]];

  return (
    <section className="process-section-wrapper" id="process" aria-label="The 5Ds of BRANDBOOSTERS">
      {/* Base Layer: Signature Yellow & Blue Liquid Glass Orbs */}
      <AmbientOrbs variant="process-orbs" />

      <div className="process-container">
        {/* Clean Minimal Section Header Matching Reference Image */}
        <div className="process-header-block process-header-clean">
          <h2 className="process-main-heading">Process</h2>
        </div>

        {/* 2-at-a-Time Linear Showcase with Left and Right Arrows */}
        <div 
          className="process-2col-carousel-stage"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow Button */}
          <button 
            type="button" 
            className="process-flanking-arrow-btn arrow-left" 
            onClick={prevCards}
            aria-label="Previous step"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Cards Viewport: 2 Cards Visible Side by Side */}
          <div className="process-2cards-viewport">
            {visibleCards.map((step, cardSlot) => (
              <article 
                key={`${step.id}-${cardSlot}-${currentIndex}`} 
                className="linear-duo-card"
                style={{ '--card-accent': step.accentHex }}
              >
                {/* Modern 3D Eye-Catching Texture Cover */}
                <div className="linear-duo-media">
                  <img 
                    src={step.img} 
                    alt={`${step.dName} 3D tactile texture`} 
                    className="linear-duo-texture-img"
                    loading="lazy"
                  />
                  <div className="linear-duo-media-overlay" />

                  {/* Step Number Badge */}
                  <div className="linear-duo-num-badge">
                    <span className="step-num">{step.num}</span>
                  </div>

                  {/* Dynamic Color Aura Behind Cover */}
                  <div 
                    className="linear-duo-glow-aura" 
                    style={{ background: step.auraColor }} 
                    aria-hidden="true" 
                  />
                </div>

                {/* Minimal Card Information: Title and Description only */}
                <div className="linear-duo-body">
                  <h3 className="linear-duo-title">{step.dName}</h3>
                  <p className="linear-duo-desc">{step.desc}</p>
                </div>

                {/* Specular Apple Glass Top Border */}
                <div className="linear-duo-specular-edge" aria-hidden="true" />
              </article>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button 
            type="button" 
            className="process-flanking-arrow-btn arrow-right" 
            onClick={nextCards}
            aria-label="Next step"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Bottom Pagination Dots Indicator */}
        <div className="process-indicators-row" aria-label="Step indicators">
          {FIVE_D_STEPS.map((step, idx) => {
            const isActive = idx === currentIndex || idx === (currentIndex + 1) % FIVE_D_STEPS.length;
            return (
              <button
                key={step.id}
                type="button"
                className={`process-indicator-dot ${isActive ? 'is-active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Jump to step ${step.num} ${step.dName}`}
              >
                <span className="dot-label">{step.num}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;
