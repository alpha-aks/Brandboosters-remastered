import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';
import AmbientOrbs from './AmbientOrbs';

const TESTIMONIALS = [
  {
    id: 'kore-mobile',
    client: 'Kore Mobile',
    author: 'Rohit Varma',
    role: 'Managing Director',
    company: 'Kore Mobile Retail',
    metric: '50M+ Ad Impressions',
    rating: 5,
    quote: 'Brandboosters transformed our digital acquisition pipeline. Their performance team scaled our store footfalls across 20+ locations while maintaining strict ROI. They don’t just deliver ad clicks — they build enduring brand equity.',
    accentColor: '#2563eb'
  },
  {
    id: 'eddies-liquor',
    client: "Eddie's Liquor",
    author: 'Eddie Rostam',
    role: 'Founder & Operator',
    company: "Eddie's Liquor USA",
    metric: '5.6X Average ROAS',
    rating: 5,
    quote: 'Dominating delivery marketplace search seemed impossible until we partnered with Brandboosters. Their automated bidding and visual menu optimization drove over 45,000 orders on DoorDash at a steady 5.6X ROAS. Truly exceptional execution.',
    accentColor: '#ffd105'
  },
  {
    id: 'maxo-architecture',
    client: 'Maxo Architecture',
    author: 'Ar. Ananya Sen',
    role: 'Principal Architect & Partner',
    company: 'Maxo Architecture Studio',
    metric: '+340% High-Ticket Inquiries',
    rating: 5,
    quote: 'Our new editorial web portfolio encases our architectural works in pure liquid glass. The load speeds are instantaneous, and within 90 days we witnessed a 340% surge in high-value commercial and residential project commissions.',
    accentColor: '#0ea5e9'
  },
  {
    id: 'transportx',
    client: 'TransportX',
    author: 'Rajesh Singhania',
    role: 'VP Operations & Fleet Tech',
    company: 'TransportX Logistics',
    metric: '99.9% Driver Uptime',
    rating: 5,
    quote: 'The telemetry dispatch system and mobile driver portal built by Brandboosters handles 200+ drivers simultaneously with sub-200ms latency. The real-time mapping and automated shift assignment completely overhauled our operational efficiency.',
    accentColor: '#06b6d4'
  },
  {
    id: 'shree-rudra',
    client: 'Shree Rudra Divine',
    author: 'Pooja Hegde',
    role: 'Head of E-Commerce & Retail',
    company: 'Shree Rudra Divine',
    metric: '500K+ SKU Validation',
    rating: 5,
    quote: 'Managing half a million sacred wellness SKUs with custom astrology algorithms was a monumental challenge. Brandboosters engineered a lightning-fast verification engine that eliminated fraud and increased customer checkout trust by 4X.',
    accentColor: '#f59e0b'
  },
  {
    id: 'benoy-arch',
    client: 'Benoy Arch',
    author: 'Kabir Bedi',
    role: 'Design Director',
    company: 'Benoy Architectural Group',
    metric: '100% Mobile Responsive UX',
    rating: 5,
    quote: 'The visual storytelling and minimal liquid glass design system created by Brandboosters elevated our global pitch decks and digital presence. Their attention to micro-animations and typography is world-class.',
    accentColor: '#001f3f'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Touch swipe support for mobile
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
    if (distance > minSwipeDistance) {
      nextTestimonial();
    } else if (distance < -minSwipeDistance) {
      prevTestimonial();
    }
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="testimonials-section-wrapper" id="testimonials" aria-label="Client Testimonials & Feedback">
      {/* Base Layer: Signature Yellow & Blue Liquid Glass Orbs */}
      <AmbientOrbs variant="testimonials-orbs" />

      <div className="testimonials-container">
        {/* Section Header (Centered display like reference image) */}
        <div className="testimonials-header-block">
          <div className="testimonials-kicker-pill">
            <Sparkles size={13} />
            <span>REAL CLIENT EXPERIENCES</span>
          </div>
          <h2 className="testimonials-main-heading">Testimonials</h2>
          <p className="testimonials-subheading">
            Authentic words from founders, managing directors, and partners whose brands we have scaled.
          </p>
        </div>

        {/* Carousel Navigator Controls: Infinite Cycle Arrows */}
        <div className="testimonials-controls-row">
          <div className="testimonials-arrow-btns">
            <button 
              type="button" 
              className="t-nav-arrow-btn" 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              type="button" 
              className="t-nav-arrow-btn" 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Testimonials Cards Showcase (Strictly No DP / No Image, Infinite Circular Track) */}
        <div 
          className="testimonials-cards-stage"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {TESTIMONIALS.map((item, idx) => {
            // Infinite circular relative distance
            let offset = idx - activeIndex;
            if (offset > TESTIMONIALS.length / 2) {
              offset -= TESTIMONIALS.length;
            } else if (offset < -TESTIMONIALS.length / 2) {
              offset += TESTIMONIALS.length;
            }

            const isCenter = offset === 0;

            let cardStateClass = 'card-offscreen';
            if (offset === 0) cardStateClass = 'card-is-center';
            else if (offset === 1) cardStateClass = 'card-is-right-1';
            else if (offset === -1) cardStateClass = 'card-is-left-1';
            else if (offset === 2) cardStateClass = 'card-is-right-2';
            else if (offset === -2) cardStateClass = 'card-is-left-2';

            return (
              <div 
                key={item.id}
                className={`testimonial-glass-card ${cardStateClass} ${isCenter ? 'active-center' : ''}`}
                onClick={() => setActiveIndex(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveIndex(idx); }}
                aria-label={`View feedback from ${item.author}`}
              >
                {/* Top Card Bar: Quote Icon & Verified Metric Pill */}
                <div className="testimonial-card-topbar">
                  <div className="testimonial-quote-icon-badge">
                    <Quote size={16} />
                  </div>
                  <span className="testimonial-metric-pill" style={{ color: item.accentColor, borderColor: `${item.accentColor}35` }}>
                    {item.metric}
                  </span>
                </div>

                {/* What They Said: Authentic Testimonial Quote */}
                <p className="testimonial-quote-body">
                  “{item.quote}”
                </p>

                {/* Star Rating Row */}
                <div className="testimonial-star-rating" aria-label="5 out of 5 stars">
                  {[...Array(item.rating)].map((_, sIdx) => (
                    <Star key={sIdx} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                {/* Author Info Block (No DP / No Image) */}
                <div className="testimonial-author-footer">
                  <div className="testimonial-author-text">
                    <h4 className="testimonial-author-name">{item.author}</h4>
                    <span className="testimonial-author-role">
                      {item.role}, <strong className="t-company">{item.company}</strong>
                    </span>
                  </div>

                  {/* Reference Twin Status Dots (Cyan Blue & Radiant Yellow) */}
                  <div className="testimonial-twin-dots" aria-hidden="true">
                    <span className="t-dot dot-cyan" />
                    <span className="t-dot dot-yellow" />
                  </div>
                </div>

                {/* Specular Highlight along Top Border */}
                <div className="testimonial-card-specular" aria-hidden="true" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
