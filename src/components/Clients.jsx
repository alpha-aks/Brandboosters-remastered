import React, { useRef, useEffect } from 'react';
import { ArrowRight, Sparkles, TrendingUp, Award, CheckCircle2 } from 'lucide-react';
import AmbientOrbs from './AmbientOrbs';

const REAL_CLIENTS = [
  // 1. Benoy Arch
  {
    id: 1,
    name: 'Benoy Arch',
    slug: 'logo-benoy',
    category: 'Global Architecture',
    logo: '/Benoy.png',
    badge: {
      type: 'pill',
      text: '+310% Reach',
      icon: <TrendingUp size={14} color="#10b981" />,
      position: 'bottom-left'
    }
  },
  // 2. Maxo Arch
  {
    id: 2,
    name: 'Maxo Arch',
    slug: 'logo-maxo',
    category: 'Architecture & Design',
    logo: '/blacmaxologo.png',
    badge: {
      type: 'pill',
      text: 'Luxury Portfolio',
      icon: <Sparkles size={14} color="#0284c7" />,
      position: 'bottom-left'
    }
  },
  // 3. Kore Mobile
  {
    id: 3,
    name: 'Kore Mobile',
    slug: 'logo-kore',
    category: 'Retail & Electronics',
    logo: '/kore-mobile.png',
    fallbackLogo: '/Kore Mobile.jpeg',
    topBadge: {
      icon: <Award size={18} color="#0284c7" />,
      position: 'top-center'
    },
    badge: {
      type: 'pill',
      text: 'Retail Growth',
      position: 'bottom-left'
    }
  },
  // 4. Eddie's Liquor
  {
    id: 4,
    name: "Eddie's Liquor",
    slug: 'logo-eddies',
    category: 'US Spirits Retail',
    logo: '/eddies-liquor.png',
    fallbackLogo: '/eddies liqour.png.avif',
    topBadge: {
      icon: <CheckCircle2 size={18} color="#16a34a" />,
      position: 'top-right'
    },
    badge: {
      type: 'pill',
      text: 'US Chain Partner',
      position: 'bottom-left'
    }
  },
  // 5. Shree Rudra Divine
  {
    id: 5,
    name: 'Shree Rudra Divine',
    slug: 'logo-rudra',
    category: 'Vedic & Luxury Spiritual',
    logo: '/shree-rudra.png',
    fallbackLogo: '/shree rudra.png',
    sideBadge: {
      icon: true
    },
    badge: {
      type: 'pill',
      text: 'D2C eCommerce Lift',
      icon: <TrendingUp size={14} color="#eab308" />,
      position: 'bottom-left'
    }
  },
  // 6. TransportX
  {
    id: 6,
    name: 'TransportX',
    slug: 'logo-transportx',
    category: 'Freight & Logistics Tech',
    logo: '/transportx.png',
    badge: {
      type: 'pill',
      text: 'Logistics Scale',
      icon: <TrendingUp size={14} color="#635BFF" />,
      position: 'bottom-left'
    }
  },
  // 7. Chemsetu
  {
    id: 7,
    name: 'Chemsetu',
    slug: 'logo-chemsetu',
    category: 'Chemical B2B Commerce',
    logo: '/chemsetu-logo-opt.png',
    fallbackLogo: '/chemsetu-logo.png',
    topBadge: {
      icon: <Sparkles size={18} color="#10b981" />,
      position: 'top-right'
    },
    badge: {
      type: 'pill',
      text: 'B2B Enterprise Lift',
      icon: <TrendingUp size={14} color="#10b981" />,
      position: 'bottom-left'
    }
  }
];

/* --------------------------------------------------------------------------
   Individual Client Logo Card Component
   -------------------------------------------------------------------------- */
function ClientCard({ item, 'aria-hidden': ariaHidden }) {
  return (
    <div className="team-creator-card client-brand-card" aria-hidden={ariaHidden}>
      {/* Logo Display Container */}
      <div className="client-logo-stage">
        <div className="client-logo-backdrop-glow" />
        
        {/* Uniform White Frosted Liquid Glass Box for all client logos */}
        <div className="client-logo-glass-frame">
          <div className="glass-frame-sheen" />
          {typeof item.logo === 'string' ? (
            <img 
              src={item.logo} 
              alt={`${item.name} Official Logo`} 
              className={`client-logo-img ${item.slug || ''}`}
              loading="lazy"
              onError={(e) => {
                if (item.fallbackLogo && e.currentTarget.src !== item.fallbackLogo) {
                  e.currentTarget.src = item.fallbackLogo;
                }
              }}
            />
          ) : (
            item.logo
          )}
        </div>
        <span className="client-category-tag">{item.category}</span>
      </div>

      {/* Floating Top Floating Icon Chip if present */}
      {item.topBadge && (
        <div className={`floating-glass-avatar-chip ${item.topBadge.position}`}>
          <div className="chip-icon-wrap">
            {item.topBadge.icon}
          </div>
        </div>
      )}

      {/* Floating Side Glass Icon Badge if present */}
      {item.sideBadge && (
        <div className="floating-glass-side-chip">
          <div className="glass-icon-orb">
            <Sparkles size={16} color="#4f46e5" />
          </div>
        </div>
      )}

      {/* Floating Liquid Glass Badges */}
      {item.badge && item.badge.type === 'pill' && (
        <div className={`liquid-glass-badge pill-badge ${item.badge.position}`}>
          {item.badge.icon && (
            <span className="badge-icon-item">{item.badge.icon}</span>
          )}
          <span className="badge-text">{item.badge.text}</span>
        </div>
      )}

      {item.badge && item.badge.type === 'quote' && (
        <div className={`liquid-glass-badge quote-badge ${item.badge.position}`}>
          <div className="quote-badge-title">{item.badge.title}</div>
          <div className="quote-badge-body">{item.badge.text}</div>
        </div>
      )}
    </div>
  );
}

export default function Clients() {
  const rowRef = useRef(null);

  return (
    <section className="white-about-clients-section" id="clients" aria-label="Our Clients and Partners">
      {/* Base Layer: Signature Yellow & Blue Liquid Glass Orbs */}
      <AmbientOrbs variant="clients-orbs" />

      {/* Architectural Texture Grid & Ambient Light Accent */}
      <div className="clients-texture-ambient" aria-hidden="true" />

      <div className="about-clients-wrapper">
        {/* Left Column: Our Clients */}
        <div className="about-clients-left">
          <span className="about-label">Portfolio</span>
          <h2 className="about-heading">
            Our Clients
          </h2>
          <p className="clients-lead-text">
            Trusted by industry visionaries, hyper-growth startups, and global brands obsessed with the new.
          </p>
        </div>

        {/* Right Column: Seamless Infinite Marquee of Liquid Glass Client Logo Cards */}
        <div className="about-clients-right clients-marquee-viewport" ref={rowRef}>
          <div className="clients-marquee-track">
            {/* Primary Track Set */}
            <div className="marquee-group">
              {REAL_CLIENTS.map((item) => (
                <ClientCard key={`marquee-1-${item.id}`} item={item} />
              ))}
            </div>
            {/* Seamless Infinite Duplication Set 1 */}
            <div className="marquee-group" aria-hidden="true">
              {REAL_CLIENTS.map((item) => (
                <ClientCard key={`marquee-2-${item.id}`} item={item} aria-hidden="true" />
              ))}
            </div>
            {/* Seamless Infinite Duplication Set 2 for ultra-wide displays */}
            <div className="marquee-group" aria-hidden="true">
              {REAL_CLIENTS.map((item) => (
                <ClientCard key={`marquee-3-${item.id}`} item={item} aria-hidden="true" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
