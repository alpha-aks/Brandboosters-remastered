import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/projectsData';

export default function FeaturedWork() {
  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState({});

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

  const renderCard = (item) => {
    const isFlipped = !!flippedCards[item.id];

    return (
      <div 
        key={item.id}
        className={`puzzle-ref-card-wrapper ${item.gridClass}`}
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
            {/* 3D Tactile Textured Background Cover */}
            {item.textureImg && (
              <div className="featured-card-texture-layer" aria-hidden="true">
                <img 
                  src={item.textureImg} 
                  alt="" 
                  className="featured-card-texture-img"
                  loading="lazy"
                />
                <div className="featured-card-texture-overlay" />
              </div>
            )}

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

          {/* ===== BACK VIEW: Overview & Highlights ===== */}
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
        {/* Adaptive Puzzle Bento Grid (Desktop & Mobile) */}
        <div className="puzzle-ref-grid">
          {PROJECTS.map((item) => renderCard(item))}
        </div>
      </div>
    </section>
  );
}
