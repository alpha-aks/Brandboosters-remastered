import React, { useRef } from 'react';
import { ArrowRight, Sparkles, TrendingUp, Award, CheckCircle2 } from 'lucide-react';
import AmbientOrbs from './AmbientOrbs';

const REAL_CLIENTS = [
  // 1. Benoy Arch
  {
    id: 1,
    name: 'Benoy Arch',
    category: 'Global Architecture',
    logo: (
      <svg viewBox="0 0 150 44" height="34">
        <g transform="translate(4, 8)">
          <rect x="0" y="0" width="6" height="28" rx="2" fill="#001f3f" />
          <rect x="10" y="6" width="6" height="22" rx="2" fill="#2563eb" />
          <rect x="20" y="12" width="6" height="16" rx="2" fill="#ffd105" />
        </g>
        <text x="38" y="27" fontFamily="'Montserrat', 'Inter', sans-serif" fontSize="20" fontWeight="900" letterSpacing="1.5" fill="#001f3f">BENOY</text>
        <text x="39" y="38" fontFamily="'Inter', sans-serif" fontSize="8" fontWeight="700" letterSpacing="3" fill="#64748b">ARCHITECTURE</text>
      </svg>
    ),
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
    category: 'Architecture & Design',
    logo: (
      <svg viewBox="0 0 150 44" height="34">
        <g transform="translate(6, 6)">
          <path d="M0 30 V6 L12 20 L24 6 V30" fill="none" stroke="#001f3f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="5" r="3" fill="#ffd105" />
        </g>
        <text x="40" y="26" fontFamily="'Montserrat', 'Inter', sans-serif" fontSize="19" fontWeight="900" letterSpacing="2" fill="#001f3f">MAXO</text>
        <text x="41" y="37" fontFamily="'Inter', sans-serif" fontSize="8.5" fontWeight="700" letterSpacing="3.5" fill="#2563eb">ARCH</text>
      </svg>
    ),
    badge: {
      type: 'quote',
      title: 'Luxury Portfolio',
      text: 'Bespoke web platform driving international architectural inquiries.',
      position: 'bottom-overlap'
    }
  },
  // 3. Kore Mobile
  {
    id: 3,
    name: 'Kore Mobile',
    category: 'Retail & Electronics',
    logo: (
      <svg viewBox="0 0 155 44" height="34">
        <g transform="translate(6, 8)">
          <circle cx="14" cy="14" r="14" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <path d="M8 7 V21 M19 7 L8 14 L19 21" fill="none" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="21" cy="7" r="2.5" fill="#ffd105" />
        </g>
        <text x="42" y="25" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="900" letterSpacing="-0.5" fill="#001f3f">kore</text>
        <text x="82" y="25" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="400" letterSpacing="-0.5" fill="#2563eb">mobile</text>
        <text x="43" y="36" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="700" letterSpacing="2" fill="#94a3b8">RETAIL & TECH</text>
      </svg>
    ),
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
    category: 'US Spirits Retail',
    logo: (
      <svg viewBox="0 0 160 46" height="36">
        <g transform="translate(6, 6)">
          <path d="M14 0 C22 0 28 6 28 14 C28 24 14 34 14 34 C14 34 0 24 0 14 C0 6 6 0 14 0 Z" fill="#18181b" />
          <path d="M11 8 H17 V12 H15 V24 H13 V12 H11 Z" fill="#ffd105" />
          <circle cx="14" cy="27" r="1.5" fill="#ffd105" />
        </g>
        <text x="40" y="22" fontFamily="'Brush Script MT', cursive, sans-serif" fontSize="22" fontWeight="700" fill="#d97706">Eddie's</text>
        <text x="42" y="34" fontFamily="'Impact', 'Arial Black', sans-serif" fontSize="12" letterSpacing="2.5" fill="#0f172a">LIQUOR</text>
        <text x="100" y="34" fontFamily="'Inter', sans-serif" fontSize="7.5" fontWeight="800" letterSpacing="1.5" fill="#64748b">USA</text>
      </svg>
    ),
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
    category: 'Vedic & Luxury Spiritual',
    logo: (
      <svg viewBox="0 0 170 46" height="36">
        <g transform="translate(6, 6)">
          <path d="M14 2 V32 M6 10 C6 20 14 22 14 22 C14 22 22 20 22 10 M10 6 L14 2 L18 6" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="14" cy="14" r="3" fill="#ffd105" />
          <circle cx="14" cy="28" r="1.5" fill="#001f3f" />
        </g>
        <text x="36" y="23" fontFamily="'Cinzel', 'Playfair Display', serif" fontSize="15" fontWeight="900" letterSpacing="1" fill="#001f3f">SHREE RUDRA</text>
        <text x="37" y="35" fontFamily="'Montserrat', sans-serif" fontSize="8.5" fontWeight="800" letterSpacing="4.5" fill="#f59e0b">DIVINE</text>
      </svg>
    ),
    sideBadge: {
      icon: true
    },
    badge: {
      type: 'quote',
      title: 'D2C eCommerce Lift',
      text: '4.6x revenue lift in spiritual luxury & authentic Vedic gemstones.',
      position: 'bottom-overlap'
    }
  },
  // 6. TransportX
  {
    id: 6,
    name: 'TransportX',
    category: 'Freight & Logistics Tech',
    logo: (
      <svg viewBox="0 0 160 44" height="34">
        <g transform="translate(6, 8)">
          <path d="M0 24 L10 4 L18 4 L8 24 Z" fill="#2563eb" />
          <path d="M14 4 L26 24 L18 24 L6 4 Z" fill="#ffd105" opacity="0.9" />
          <path d="M16 12 L28 12 L24 18 L12 18 Z" fill="#001f3f" />
        </g>
        <text x="38" y="27" fontFamily="'Arial Black', 'Montserrat', sans-serif" fontSize="19" fontWeight="900" fontStyle="italic" letterSpacing="-0.5" fill="#001f3f">Transport</text>
        <text x="131" y="27" fontFamily="'Arial Black', 'Montserrat', sans-serif" fontSize="21" fontWeight="900" fontStyle="italic" fill="#2563eb">X</text>
        <text x="39" y="37" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="800" letterSpacing="2.5" fill="#64748b">LOGISTICS NETWORK</text>
      </svg>
    ),
    badge: {
      type: 'pill',
      text: 'Logistics Scale',
      icon: <TrendingUp size={14} color="#635BFF" />,
      position: 'bottom-left'
    }
  }
];

export default function Clients() {
  const rowRef = useRef(null);

  return (
    <section className="white-about-clients-section" id="clients" aria-label="Our Clients and Partners">
      {/* Base Layer: Signature Yellow & Blue Liquid Glass Orbs */}
      <AmbientOrbs variant="clients-orbs" />

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

        {/* Right Column: Liquid Glass Client Logo Cards */}
        <div className="about-clients-right" ref={rowRef}>
          <div className="team-cards-row">
            {REAL_CLIENTS.map((item) => (
              <div key={item.id} className="team-creator-card client-brand-card">
                {/* Logo Display Container */}
                <div className="client-logo-stage">
                  <div className="client-logo-backdrop-glow" />
                  <div className="client-logo-graphic">
                    {item.logo}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
