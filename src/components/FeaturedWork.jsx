import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Layers, 
  X, 
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const PUZZLE_PIECES = [
  // 01. Kore Mobile (7 Cols, Dark Slate with Neon Mint Geometric Mark - like TLH)
  {
    id: 'kore-mobile',
    puzzleNum: '01',
    gridClass: 'puzzle-piece-large',
    client: 'Kore Mobile',
    strategicDesc: 'Strategic Performance Marketing & Ad Scaling',
    category: 'Performance & Growth',
    accentColor: '#10b981',
    brandTheme: 'brand-theme-tlh',
    brandMark: {
      type: 'tlh-style',
      name: 'KORE',
      sub: 'MOBILE RETAIL'
    },
    alternatingFeatures: [
      { badge: '50M+ Impressions', sub: 'Meta & Google Ads' },
      { badge: '₹20L+ Spend Managed', sub: 'Positive Acquisition ROI' },
      { badge: '180K+ Local Clicks', sub: 'Retail Store Footfall' }
    ],
    hoverDetails: {
      category: 'Performance Marketing',
      headline: 'Scalable ad engines driving 50M+ impressions and retail walk-ins.',
      metrics: [
        { val: '50M+', lbl: 'Impressions' },
        { val: '₹20L+', lbl: 'Managed' },
        { val: '3.8X', lbl: 'ROAS' }
      ],
      deliverables: [
        'Algorithmic Meta & Google ad scaling',
        'High-velocity Reel creative testing',
        'Multi-store retail walk-in campaigns'
      ]
    },
    heroMetric: { value: '50M+', label: 'Ad Impressions', sub: 'Across Meta & Google Ads' },
    stats: [
      { label: 'Budget Managed', value: '₹20L+' },
      { label: 'Campaigns', value: '100+' },
      { label: 'Store Clicks', value: '180K+' }
    ],
    challenge: [
      'Build a strong and premium online retail presence in a competitive smartphone market',
      'Increase local brand awareness and walk-in store footfall across physical branches',
      'Promote smartphone launches with zero lag in creative delivery',
      'Scale advertising spend while maintaining positive acquisition ROI'
    ],
    deliverables: [
      'Social Media Strategy & Editorial Planning',
      'Meta (FB & IG) Advertising Engine',
      'Lead Generation & Walk-In Campaigns',
      'Reel Concepts & High-Engagement Scripts',
      'Festival Campaigns & Flash Launches',
      'Performance Analytics & Bi-Weekly Reporting'
    ],
    impactStory: 'Over the partnership, we managed ₹20L+ in advertising spend, executed 100+ performance campaigns, and created 200+ high-converting creatives. Delivered 50M+ impressions and 180K+ direct customer clicks.'
  },

  // 02. Eddie's Liquor (5 Cols, Warm Radiant Orange Fluid 3D - like Sevenloop)
  {
    id: 'eddies-liquor',
    puzzleNum: '02',
    gridClass: 'puzzle-piece-medium',
    client: "Eddie's Liquor",
    strategicDesc: 'Strategic Marketplace Scaling via DoorDash',
    category: 'Marketplace Ads',
    accentColor: '#f97316',
    brandTheme: 'brand-theme-sevenloop',
    brandMark: {
      type: 'sevenloop-style',
      name: "eddie's",
      sub: 'LIQUOR N MORE'
    },
    alternatingFeatures: [
      { badge: '5.6X Average ROAS', sub: 'DoorDash Marketplace' },
      { badge: '45,000+ Orders', sub: 'Online Delivery' },
      { badge: '20M+ Sponsored Views', sub: 'Market Leader' }
    ],
    hoverDetails: {
      category: 'Marketplace Optimization',
      headline: 'Dominating delivery marketplace search with automated sponsored ads.',
      metrics: [
        { val: '5.6X', lbl: 'Avg ROAS' },
        { val: '45K+', lbl: 'Orders' },
        { val: '20M+', lbl: 'Views' }
      ],
      deliverables: [
        'Automated DoorDash keyword bidding',
        'High-intent product placement & SEO',
        'Seasonal spirits & wine bundles'
      ]
    },
    heroMetric: { value: '5.6X', label: 'Average ROAS', sub: 'DoorDash Marketplace' },
    stats: [
      { label: 'Orders Generated', value: '45K+' },
      { label: 'Product Views', value: '850K+' },
      { label: 'Ad Impressions', value: '20M+' }
    ],
    challenge: [
      'Target high-intent local U.S. customers with extreme geographic precision',
      'Increase DoorDash orders in a hyper-competitive delivery category',
      'Maintain consistently profitable ROAS on daily ad budgets'
    ],
    deliverables: [
      'DoorDash Performance Marketing Setup',
      'Sponsored Product Campaign Automation',
      'Marketplace Menu SEO & Visual Optimization',
      'Budget & Real-Time Bid Optimization',
      'ROI Analytics & Weekly Dashboards'
    ],
    impactStory: 'Our data-driven bidding strategy and seasonal promotions generated 45,000+ orders through DoorDash at an outstanding 5.6X ROAS with 20M+ impressions.'
  },

  // 03. Maxo Architecture (4 Cols, Matte Graphite Grid - like Adnaut)
  {
    id: 'maxo-architecture',
    puzzleNum: '03',
    gridClass: 'puzzle-piece-compact',
    client: 'Maxo Architecture',
    strategicDesc: 'Editorial Luxury Digital Platform & Brand UX',
    category: 'Digital Architecture',
    accentColor: '#38bdf8',
    brandTheme: 'brand-theme-adnaut',
    brandMark: {
      type: 'adnaut-style',
      name: 'MAXO.',
      sub: 'ARCHITECTURE'
    },
    alternatingFeatures: [
      { badge: '< 1.2s Load Speed', sub: 'Editorial High-Res Imagery' },
      { badge: '+340% Inquiries', sub: 'High-Ticket Commissions' },
      { badge: '100% Mobile-First', sub: 'Responsive Precision' }
    ],
    hoverDetails: {
      category: 'Web Experience',
      headline: 'Editorial luxury web portfolio built for high-ticket commissions.',
      metrics: [
        { val: '<1.2s', lbl: 'Load Time' },
        { val: '+340%', lbl: 'Inquiries' },
        { val: '40+', lbl: 'Projects' }
      ],
      deliverables: [
        'Editorial portfolio UX & art direction',
        'High-performance NextGen image loading',
        'Fluid viewport transitions & typography'
      ]
    },
    heroMetric: { value: '100%', label: 'Mobile-First', sub: 'Responsive UX' },
    stats: [
      { label: 'Load Speed', value: '< 1.2s' },
      { label: 'Inquiries', value: '+340%' },
      { label: 'Projects', value: '40+' }
    ],
    challenge: [
      'Showcase ultra-high-resolution architectural imagery without compromising load speeds',
      'Communicate bespoke luxury and design prestige on every viewport',
      'Ensure 100% flawless rendering across mobile, tablet, and ultra-wide displays'
    ],
    deliverables: [
      'Digital Brand Strategy & Architectural UX',
      'Wireframing & Editorial Layouts',
      'Custom Design System & Components',
      'High-Performance Frontend Engineering',
      'SEO-Ready Semantic Architecture'
    ],
    impactStory: 'We engineered an editorial-grade web experience with smooth transitions and fast-loading image compression, generating a +340% increase in luxury project inquiries.'
  },

  // 04. TransportX (4 Cols, Deep Cyber Navy with Pulse Radar)
  {
    id: 'transportx',
    puzzleNum: '04',
    gridClass: 'puzzle-piece-compact',
    client: 'TransportX',
    strategicDesc: 'Real-Time Fleet Dispatch & Driver SaaS Ecosystem',
    category: 'Logistics SaaS',
    accentColor: '#06b6d4',
    brandTheme: 'brand-theme-transport',
    brandMark: {
      type: 'transport-style',
      name: 'TransportX',
      sub: 'FLEET TELEMATICS'
    },
    alternatingFeatures: [
      { badge: '200+ Active Drivers', sub: 'Daily Fleet Telematics' },
      { badge: '< 200ms Latency', sub: 'Sub-Second Cloud APIs' },
      { badge: '1,500+ Daily Trips', sub: 'Route Optimization' }
    ],
    hoverDetails: {
      category: 'SaaS Platform',
      headline: 'Sub-second fleet dispatch ecosystem with native Android driver app.',
      metrics: [
        { val: '200+', lbl: 'Drivers' },
        { val: '<200ms', lbl: 'Latency' },
        { val: '+35%', lbl: 'Efficiency' }
      ],
      deliverables: [
        'Native Android driver application',
        'Real-time admin dispatch control room',
        'Automated trip & route logging'
      ]
    },
    heroMetric: { value: '200+', label: 'Active Drivers', sub: 'Daily Fleet Operations' },
    stats: [
      { label: 'Dispatch Latency', value: '< 200ms' },
      { label: 'Daily Trips', value: '1.5K+' },
      { label: 'Route Lift', value: '+35%' }
    ],
    challenge: [
      'Unify communication between dispatch administrators and mobile drivers in real-time',
      'Ensure high performance on low-end Android mobile devices with patchy connectivity',
      'Streamline trip assignments, route logging, and vehicle inspection statuses'
    ],
    deliverables: [
      'Android Driver Native Application',
      'Centralized Admin Fleet Telemetry Dashboard',
      'Responsive TransportX Corporate Portal',
      'Secure High-Throughput REST APIs',
      'Automated Driver Authentication & Onboarding'
    ],
    impactStory: 'BrandBoosters engineered a seamless web-and-mobile logistics ecosystem. Fleet coordinators manage routes effortlessly while drivers receive instant notifications via Android.'
  },

  // 05. Shree Rudra Divine (4 Cols, Pearlescent Ivory & Golden Diamond - like LUMORA)
  {
    id: 'shree-rudra-divine',
    puzzleNum: '05',
    gridClass: 'puzzle-piece-compact',
    client: 'Shree Rudra Divine',
    strategicDesc: 'Automated Inventory & Diamond Validation Platform',
    category: 'Enterprise ERP',
    accentColor: '#eab308',
    brandTheme: 'brand-theme-lumora',
    brandMark: {
      type: 'lumora-style',
      name: 'RUDRA',
      sub: 'DIVINE GEMSTONES'
    },
    alternatingFeatures: [
      { badge: '99.9% Accuracy', sub: 'Instant Diamond Validation' },
      { badge: '500K+ Inventory SKUs', sub: 'Multi-Warehouse Sync' },
      { badge: '4.8X Efficiency Lift', sub: 'Automated Operations' }
    ],
    hoverDetails: {
      category: 'Custom Software',
      headline: 'Centralized gemstone inventory with instant algorithmic validation.',
      metrics: [
        { val: '99.9%', lbl: 'Accuracy' },
        { val: '500K+', lbl: 'SKUs' },
        { val: '12+', lbl: 'Modules' }
      ],
      deliverables: [
        'Automated diamond record verification',
        'Role-based multi-tier security system',
        'Centralized inventory & barcode tracking'
      ]
    },
    heroMetric: { value: '99.9%', label: 'Validation Accuracy', sub: 'Instant Verification' },
    stats: [
      { label: 'ERP Modules', value: '12+' },
      { label: 'SKU Capacity', value: '500K+' },
      { label: 'Data Security', value: 'Role-Based' }
    ],
    challenge: [
      'Replace slow, error-prone manual gemstone certificate verification processes',
      'Centralize massive inventory volumes across physical showroom & online wholesale',
      'Protect high-value trade data with enterprise role-based security & audit logging'
    ],
    deliverables: [
      'Custom ERP Software Architecture',
      'Diamond Spectral Validation Module',
      'Centralized Admin Inventory Dashboard',
      'Real-Time Barcode & SKU Tracking System',
      'Secure Multi-Role Enterprise Authentication'
    ],
    impactStory: 'The platform digitized core operations, eliminated manual paperwork, and enabled instant diamond record searches. Operational efficiency jumped 4.8x.'
  },

  // 06. Bombay Yacht (12 Cols Panorama, Deep Marine Azure with Liquid Gold)
  {
    id: 'bombay-yacht',
    puzzleNum: '06',
    gridClass: 'puzzle-piece-panorama',
    client: 'Bombay Yacht Club',
    strategicDesc: 'Luxury Marine Omnichannel Experience & VIP Portals',
    category: 'Luxury Brand Experience',
    accentColor: '#facc15',
    brandTheme: 'brand-theme-yacht',
    brandMark: {
      type: 'yacht-style',
      name: 'BOMBAY YACHT',
      sub: 'LUXURY CHARTERS'
    },
    alternatingFeatures: [
      { badge: '+280% VIP Bookings', sub: 'HNW Private Charters' },
      { badge: '18 Elite Vessels', sub: 'Interactive Fleet Portals' },
      { badge: '360° Luxury Growth', sub: 'Online & Marina Collateral' }
    ],
    hoverDetails: {
      category: 'Luxury Web & Brand',
      headline: 'Private charter booking engine with interactive fleet galleries.',
      metrics: [
        { val: '+280%', lbl: 'Inquiries' },
        { val: '18', lbl: 'Vessels' },
        { val: '25+', lbl: 'Print Assets' }
      ],
      deliverables: [
        'Bespoke luxury charter booking engine',
        'Interactive vessel galleries & deck plans',
        'Marina event print & VIP collateral'
      ]
    },
    heroMetric: { value: '360°', label: 'Omnichannel Growth', sub: 'Online & Luxury Event Marketing' },
    stats: [
      { label: 'VIP Inquiries', value: '+280%' },
      { label: 'Fleet Vessels', value: '18 Elite' },
      { label: 'Print Assets', value: '25+' },
      { label: 'HNW Reach', value: '250K+' }
    ],
    challenge: [
      'Position the brand as the undisputed premier luxury marine charter operator in India',
      'Appeal to high-net-worth individuals through discreet, timeless, and refined aesthetic',
      'Harmonize physical marina event branding and invitation prints with digital touchpoints'
    ],
    deliverables: [
      'Bespoke Luxury Charter Web Experience',
      'High-Definition Yacht Fleet Interactive Gallery',
      'Targeted High-Net-Worth Performance Campaigns',
      'Brochure, VIP Pass & Print Event Collaterals',
      'Private Charter Booking & Concierge Forms'
    ],
    impactStory: 'We crafted an immersive digital portal showcasing luxury yachts with video previews and private charter flows. VIP customer inquiries grew by +280% in 6 months.'
  }
];

export default function FeaturedWork() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [featureTick, setFeatureTick] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});
  // Mobile active project slider index (0 to 5)
  const [mobileIndex, setMobileIndex] = useState(0);

  // Alternating feature ticker every 3.2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFeatureTick((prev) => (prev + 1) % 3);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

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
    setMobileIndex((prev) => (prev < PUZZLE_PIECES.length - 1 ? prev + 1 : 0));
  };

  const prevMobileCard = (e) => {
    if (e) e.stopPropagation();
    setMobileIndex((prev) => (prev > 0 ? prev - 1 : PUZZLE_PIECES.length - 1));
  };

  const openModal = (item) => {
    setSelectedCase(item);
  };

  const closeModal = () => {
    setSelectedCase(null);
  };

  // Helper to render the single card component (used on both desktop grid and mobile card view)
  const renderCard = (item, isMobileView = false) => {
    const currentFeature = item.alternatingFeatures[featureTick] || item.alternatingFeatures[0];
    const isFlipped = !!flippedCards[item.id];

    return (
      <div 
        key={item.id}
        className={`puzzle-ref-card-wrapper ${item.gridClass} ${isMobileView ? 'mobile-active-wrapper' : ''}`}
      >
        {/* Apple Liquid Glass Card Frame (Cross-Fade Layer Architecture for 100% Mobile Reliability) */}
        <div className="puzzle-ref-canvas-frame">
          
          {/* ===== FRONT VIEW: Brand Showcase ===== */}
          <div 
            className={`puzzle-ref-canvas card-layer card-layer-front ${item.brandTheme} ${isFlipped ? 'layer-is-hidden' : 'layer-is-active'}`}
            onClick={() => openModal(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openModal(item); }}
            aria-label={`View ${item.client} Case Study`}
          >
            {/* Apple Glass Specular Top Highlight */}
            <div className="ref-canvas-specular" />

            {/* Top-Right: Alternating Feature Pill */}
            <div className="ref-top-ticker-bar">
              <div className="ref-alternating-badge" key={featureTick}>
                <span className="ticker-pulse-dot" />
                <span className="ticker-feature-text">{currentFeature.badge}</span>
                <span className="ticker-sub-text">{currentFeature.sub}</span>
              </div>
            </div>

            {/* Center Brand Identity */}
            <div className="ref-brand-centerpiece">
              {item.brandMark.type === 'tlh-style' && (
                <div className="mark-tlh-wrap">
                  <div className="tlh-geometric-icon">
                    <span className="tlh-line-1" />
                    <span className="tlh-line-2" />
                  </div>
                  <span className="tlh-brand-text">{item.brandMark.name}</span>
                </div>
              )}

              {item.brandMark.type === 'sevenloop-style' && (
                <div className="mark-sevenloop-wrap">
                  <span className="sevenloop-brand-text">
                    seven<span className="sevenloop-infinity">loop</span>
                  </span>
                </div>
              )}

              {item.brandMark.type === 'adnaut-style' && (
                <div className="mark-adnaut-wrap">
                  <span className="adnaut-brand-text">
                    Adnaut<span className="adnaut-dot">.</span>
                  </span>
                </div>
              )}

              {item.brandMark.type === 'transport-style' && (
                <div className="mark-transport-wrap">
                  <span className="transport-brand-text">Transport<span className="transport-x">X</span></span>
                </div>
              )}

              {item.brandMark.type === 'lumora-style' && (
                <div className="mark-lumora-wrap">
                  <span className="lumora-brand-text">
                    RUD<span className="lumora-diamond">◆</span>RA
                  </span>
                </div>
              )}

              {item.brandMark.type === 'yacht-style' && (
                <div className="mark-yacht-wrap">
                  <span className="yacht-crest-symbol">⚓</span>
                  <span className="yacht-brand-text">BOMBAY YACHT</span>
                </div>
              )}
            </div>

            {/* Bottom-Right Arrow Button: Tap to see Back Overview */}
            <button 
              type="button"
              className="card-flip-arrow-btn flip-to-back"
              onClick={(e) => toggleFlip(item.id, e)}
              aria-label={`Show overview for ${item.client}`}
            >
              <span className="flip-btn-label">Overview</span>
              <div className="flip-btn-circle">
                <ArrowRight size={14} />
              </div>
            </button>
          </div>

          {/* ===== BACK VIEW: Overview & Highlights ===== */}
          <div 
            className={`puzzle-ref-canvas card-layer card-layer-back ${item.brandTheme} ${isFlipped ? 'layer-is-active' : 'layer-is-hidden'}`}
            onClick={() => openModal(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openModal(item); }}
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

            {/* Bottom Footer on Back: Open Full Modal Button */}
            <div className="card-back-footer">
              <button 
                type="button"
                className="card-open-modal-btn"
                onClick={(e) => { e.stopPropagation(); openModal(item); }}
              >
                <span>Full Case Study</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Metadata Line */}
        <div className="puzzle-ref-footer">
          <span className="ref-client-name">{item.client}</span>
          <span className="ref-client-desc">{item.strategicDesc}</span>
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
      setMobileIndex((prev) => (prev < PUZZLE_PIECES.length - 1 ? prev + 1 : 0));
    } else if (isRightSwipe) {
      setMobileIndex((prev) => (prev > 0 ? prev - 1 : PUZZLE_PIECES.length - 1));
    }
  };

  const activeMobileItem = PUZZLE_PIECES[mobileIndex] || PUZZLE_PIECES[0];
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
          {PUZZLE_PIECES.map((item) => renderCard(item, false))}
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

          {/* Active Mobile Card Stage with Touch Swipe & Side Arrows */}
          <div 
            className="mobile-active-card-container"
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
              <span className="counter-total">0{PUZZLE_PIECES.length}</span>
            </div>
            <span className="mobile-swipe-hint">Swipe or tap arrows to explore</span>
          </div>

          {/* Mobile Direct Jump Pills (Quick access to all 6 cards) */}
          <div className="mobile-project-pills-row" role="tablist" aria-label="Select project">
            {PUZZLE_PIECES.map((p, idx) => (
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

      {/* Interactive Case Study Detail Modal */}
      {selectedCase && (
        <div 
          className="case-modal-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-case-title"
        >
          <div 
            className="case-modal-window"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="case-modal-close"
              onClick={closeModal}
              aria-label="Close Case Study"
            >
              <X size={20} />
            </button>

            <div className="modal-header-meta">
              <span className="modal-category-tag">{selectedCase.category}</span>
              <span className="modal-client-tag">{selectedCase.client}</span>
            </div>

            <h3 id="modal-case-title" className="modal-case-title">
              {selectedCase.client} — {selectedCase.strategicDesc}
            </h3>

            <p className="modal-case-overview">
              {selectedCase.hoverDetails.headline}
            </p>

            <div className="modal-metrics-grid">
              <div className="modal-metric-card flagship-metric">
                <span className="m-val">{selectedCase.heroMetric.value}</span>
                <span className="m-lbl">{selectedCase.heroMetric.label}</span>
                <span className="m-sub">{selectedCase.heroMetric.sub}</span>
              </div>

              {selectedCase.stats.map((st, i) => (
                <div key={i} className="modal-metric-card">
                  <span className="m-val">{st.value}</span>
                  <span className="m-lbl">{st.label}</span>
                </div>
              ))}
            </div>

            <div className="modal-content-sections">
              <div className="modal-section-col">
                <h4 className="modal-col-heading">
                  <Layers size={16} /> Key Challenges Addressed
                </h4>
                <ul className="modal-bullet-list">
                  {selectedCase.challenge.map((c, i) => (
                    <li key={i}>
                      <span className="bullet-dash" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section-col">
                <h4 className="modal-col-heading">
                  <CheckCircle2 size={16} /> Services & Deliverables
                </h4>
                <ul className="modal-bullet-list">
                  {selectedCase.deliverables.map((d, i) => (
                    <li key={i}>
                      <span className="bullet-check">✓</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="modal-impact-box">
              <div className="impact-box-title">
                <TrendingUp size={16} /> The Measurable Impact
              </div>
              <p className="impact-box-text">
                {selectedCase.impactStory}
              </p>
            </div>

            <div className="modal-footer-cta">
              <button className="modal-cta-primary" onClick={closeModal}>
                Close Case Study
              </button>
              <a href="#services" className="modal-cta-secondary" onClick={closeModal}>
                View Related Services <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
