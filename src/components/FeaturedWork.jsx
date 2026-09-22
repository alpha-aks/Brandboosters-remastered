import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { PROJECTS } from '../data/projectsData';

export default function FeaturedWork() {
  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState({});
  // Mobile active project slider index (0 to 5)
  const [mobileIndex, setMobileIndex] = useState(0);

  const toggleFlip = (id, e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const nextMobileCard = (e) => {
    if (e) e.stopPropagation();
    setMobileIndex((prev) => (prev < PROJECTS.length - 1 ? prev + 1 : 0));
  };

  const prevMobileCard = (e) => {
    if (e) e.stopPropagation();
    setMobileIndex((prev) => (prev > 0 ? prev - 1 : PROJECTS.length - 1));
  };

  // Helper to render the single card component (used on both desktop grid and mobile card view)
  const renderCard = (item, isMobileView = false) => {
    const isFlipped = !!flippedCards[item.id];

    return (
      <div
        key={item.id}
        className={`puzzle-ref-card-wrapper ${item.gridClass} ${isMobileView ? 'mobile-active-wrapper' : ''}`}
      >
        {/* Apple Liquid Glass Card Frame */}
        <div className="puzzle-ref-canvas-frame">

          {/* ===== FRONT VIEW: Brand Showcase ===== */}
          <div
            className={`puzzle-ref-canvas card-layer card-layer-front ${item.brandTheme} ${isFlipped ? 'layer-is-hidden' : 'layer-is-active'}`}
            onClick={() => navigate(item.routePath)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(item.routePath); }}
            aria-label={`View ${item.client} Case Study`}
          >
            {/* Apple Glass Specular Top Highlight */}
            <div className="ref-canvas-specular" />

            {/* Center Brand Identity: Uniform White Frosted Liquid Glass Box with Real Logo & Animated Orb */}
            <div className="ref-brand-centerpiece">
              {/* Dynamic Animated Glowing Liquid Orb behind Logo */}
              <div className={`featured-logo-ambient-orb ${item.brandTheme}-orb`} />

              <div className="client-logo-glass-frame featured-glass-frame">
                <div className="glass-frame-sheen" />
                {item.textLogo ? (
                  <span className="featured-brand-caps-logo">{item.textLogo}</span>
                ) : item.logoSrc ? (
                  <img
                    src={item.logoSrc}
                    alt={`${item.client} Official Logo`}
                    className={`client-logo-img ${item.slug || ''}`}
                    loading="lazy"
                  />
                ) : (
                  <span className="featured-brand-fallback-text">{item.client}</span>
                )}
              </div>
            </div>

            {/* Bottom-Right "Show Overview" Button */}
            <button
              type="button"
              className="card-show-overview-btn"
              onClick={(e) => {
                e.stopPropagation();
                navigate(item.routePath);
              }}
              aria-label={`Show overview for ${item.client}`}
            >
              <span className="overview-btn-text">Show Overview</span>
              <div className="overview-btn-icon">
                <ArrowUpRight size={13} />
              </div>
            </button>
          </div>

          {/* ===== BACK VIEW: Overview & Highlights (Mobile Switchable) ===== */}
          <div
            className={`puzzle-ref-canvas card-layer card-layer-back ${item.brandTheme} ${isFlipped ? 'layer-is-active' : 'layer-is-hidden'}`}
            onClick={() => navigate(item.routePath)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(item.routePath); }}
            aria-label={`View ${item.client} Case Study Details`}
          >
            {/* Apple Glass Specular Top Highlight */}
            <div className="ref-canvas-specular" />

            {/* Top Bar with Left Arrow: Back to Brand Card */}
            <div className="card-back-header">
              <button
                type="button"
                className="card-flip-arrow-btn flip-to-front"
                onClick={(e) => toggleFlip(item.id, e)}
                aria-label={`Back to ${item.client} front`}
              >
                <div className="flip-btn-circle">
                  <ArrowLeft size={14} />
                </div>
                <span className="flip-btn-label">Brand</span>
              </button>

              <span className="card-back-category">
                {item.hoverDetails.category}
              </span>
            </div>

            {/* Back Overview Content */}
            <div className="card-back-body">
              <h4 className="card-back-headline">{item.hoverDetails.headline}</h4>

              <div className="card-back-metrics-row">
                {item.hoverDetails.metrics.map((m, idx) => (
                  <div key={idx} className="card-back-metric-cell">
                    <span className="back-m-val">{m.val}</span>
                    <span className="back-m-lbl">{m.lbl}</span>
                  </div>
                ))}
              </div>

              <ul className="card-back-points">
                {item.hoverDetails.deliverables.map((pt, idx) => (
                  <li key={idx} className="card-back-point">
                    <span className="back-dash" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Footer on Back: Open Full Page */}
            <div className="card-back-footer">
              <button
                type="button"
                className="card-open-modal-btn"
                onClick={(e) => { e.stopPropagation(); navigate(item.routePath); }}
              >
                <span>Full Case Study</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  };

  // Touch swipe support for smooth mobile card switching
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 45;

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
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setMobileIndex((prev) => (prev < PROJECTS.length - 1 ? prev + 1 : 0));
    } else if (isRightSwipe) {
      setMobileIndex((prev) => (prev > 0 ? prev - 1 : PROJECTS.length - 1));
    }
  };

  const activeMobileItem = PROJECTS[mobileIndex] || PROJECTS[0];
  const isCurrentMobileFlipped = !!flippedCards[activeMobileItem.id];

  return (
    <section className="featured-work-section puzzle-work-section" id="work" aria-label="Featured Work and Portfolio">
      {/* Floating luminous orbs for Apple liquid glass background depth */}
      <div className="puzzle-floating-orbs-stage" aria-hidden="true">
        <div className="puzzle-orb orb-yellow-hero" />
        <div className="puzzle-orb orb-blue-primary" />
        <div className="puzzle-orb orb-cyan-drift" />
        <div className="puzzle-orb orb-amber-warm" />
        <div className="puzzle-orb orb-indigo-deep" />
      </div>

      <div className="puzzle-work-container">
        {/* DESKTOP PUZZLE BENTO GRID */}
        <div className="puzzle-ref-grid desktop-only-grid">
          {PROJECTS.map((item) => renderCard(item, false))}
        </div>

        {/* PHONE / MOBILE DEDICATED FULL CARD EXPERIENCE */}
        <div className="mobile-only-showcase">
          {/* Mobile Top Controls Bar: Prev/Next Buttons + Front/Back Face Switcher */}
          <div className="mobile-card-controls-bar">
            <button
              type="button"
              className="mobile-nav-arrow-btn"
              onClick={prevMobileCard}
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
              <span>Prev</span>
            </button>

            {/* Front (Brand) vs Back (Overview) 1-Tap Toggle */}
            <div className="mobile-face-toggle-pill" role="tablist" aria-label="Card face switch">
              <button
                type="button"
                className={`face-toggle-btn ${!isCurrentMobileFlipped ? 'active' : ''}`}
                onClick={(e) => {
                  if (isCurrentMobileFlipped) toggleFlip(activeMobileItem.id, e);
                }}
              >
                Brand
              </button>
              <button
                type="button"
                className={`face-toggle-btn ${isCurrentMobileFlipped ? 'active' : ''}`}
                onClick={(e) => {
                  if (!isCurrentMobileFlipped) toggleFlip(activeMobileItem.id, e);
                }}
              >
                Overview
              </button>
            </div>

            <button
              type="button"
              className="mobile-nav-arrow-btn"
              onClick={nextMobileCard}
              aria-label="Next project"
            >
              <span>Next</span>
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Mobile Single Active Card Canvas Frame */}
          <div
            className="mobile-card-active-viewport"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Side Floating Left Arrow */}
            <button
              type="button"
              className="mobile-floating-side-arrow side-arrow-left"
              onClick={prevMobileCard}
              aria-label="Previous card"
            >
              <ChevronLeft size={22} />
            </button>

            {renderCard(activeMobileItem, true)}

            {/* Side Floating Right Arrow */}
            <button
              type="button"
              className="mobile-floating-side-arrow side-arrow-right"
              onClick={nextMobileCard}
              aria-label="Next card"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Mobile Status & Swipe Helper */}
          <div className="mobile-swipe-status-bar">
            <div className="mobile-card-counter">
              <span className="counter-curr">0{mobileIndex + 1}</span>
              <span className="counter-sep">/</span>
              <span className="counter-total">0{PROJECTS.length}</span>
            </div>
            <span className="mobile-swipe-hint">Swipe or tap arrows to explore</span>
          </div>

          {/* Mobile Direct Jump Pills */}
          <div className="mobile-project-pills-row" role="tablist" aria-label="Select project">
            {PROJECTS.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                className={`mobile-project-tab-pill ${idx === mobileIndex ? 'active' : ''}`}
                onClick={() => setMobileIndex(idx)}
                role="tab"
                aria-selected={idx === mobileIndex}
              >
                {p.client}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
