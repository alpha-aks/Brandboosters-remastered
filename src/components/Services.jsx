import React, { useState, useRef } from 'react';
import { 
  Globe, 
  MessageSquare, 
  Mail, 
  Video, 
  Share2, 
  Cpu, 
  Wrench, 
  Zap, 
  Server,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  X,
  ExternalLink
} from 'lucide-react';
import AmbientOrbs from './AmbientOrbs';

const FEATURED_SERVICE = {
  id: 'saas-custom',
  title: 'Custom SaaS & Cloud Systems',
  tagline: 'Enterprise-grade cloud architectures, custom web engines & scalable portals built for modern performance.',
  badge: 'Flagship Core',
  details: [
    'Custom web app & SaaS architecture',
    'High-conversion digital web engines',
    'Scalable API integrations & dashboards',
    'Robust multi-tenant database systems'
  ]
};

const ALL_SERVICES = [
  // 1. Websites
  {
    id: 'websites',
    title: 'Websites & Platforms',
    desc: 'High-speed, responsive UX & modern design',
    icon: Globe,
    accent: 'blue',
    tag: 'Web Dev',
    fullDesc: 'Custom web design and full-stack development engineered for high speed, conversion optimization, and modern aesthetic elegance.',
    features: ['Custom UI/UX & Responsive Layouts', 'Headless CMS & Fast Stacks', 'SEO & Core Web Vitals Optimization', 'Interactive Micro-Animations']
  },
  // 2. SMS Marketing
  {
    id: 'sms-marketing',
    title: 'SMS Marketing',
    desc: 'High-converting 98% open-rate campaigns',
    icon: MessageSquare,
    accent: 'yellow',
    tag: 'Direct Reach',
    fullDesc: 'Automated SMS marketing sequences that engage your audience directly on mobile with industry-leading open and click-through rates.',
    features: ['Automated Drip & Abandoned Cart SMS', 'Compliance & Opt-in Workflows', 'Personalized Two-Way Texting', 'Flash Sale & Event Blasts']
  },
  // 3. Email Marketing
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    desc: 'Retention drip flows, sequences & newsletters',
    icon: Mail,
    accent: 'blue',
    tag: 'Lifecycle',
    fullDesc: 'Full lifecycle email campaigns designed to nurture prospects, maximize lifetime customer value, and drive consistent recurring revenue.',
    features: ['Automated Welcome & Retention Drips', 'Segmentation & Behavioral Triggers', 'High-Converting Copy & Visual Design', 'A/B Testing & Deliverability Optimization']
  },
  // 4. Video Editing
  {
    id: 'video-editing',
    title: 'Video Editing',
    desc: 'Viral short-form reels, showreels & ads',
    icon: Video,
    accent: 'yellow',
    tag: 'Creative Media',
    fullDesc: 'Dynamic video production and short-form editing optimized for TikTok, Instagram Reels, YouTube Shorts, and paid performance campaigns.',
    features: ['High-Retention Short-Form Reels', 'Commercial & Product Video Ads', 'Motion Graphics & Subtitle Design', 'Sound Design & Dynamic Pacing']
  },
  // 5. Social Media Marketing
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    desc: 'Multi-channel viral scale & community building',
    icon: Share2,
    accent: 'blue',
    tag: 'Organic Growth',
    fullDesc: 'End-to-end social media growth strategies combining viral organic hooks with laser-targeted paid social ad scaling.',
    features: ['Content Strategy & Calendar Planning', 'Viral Short-Form Hook Generation', 'Multi-Platform Community Management', 'Paid Ad Creative & Audience Targeting']
  },
  // 6. Custom Tools
  {
    id: 'custom-tools',
    title: 'Custom Tools',
    desc: 'Proprietary internal calculators & dashboards',
    icon: Wrench,
    accent: 'yellow',
    tag: 'Internal Tech',
    fullDesc: 'Bespoke web tools, calculators, and client-facing utilities that automate complex calculations and streamline operational workflows.',
    features: ['Interactive Customer Calculators', 'Internal Operations Dashboards', 'Client Reporting Portals', 'Automated Lead Magnets']
  },
  // 7. Custom Automations
  {
    id: 'custom-automations',
    title: 'Custom Automations',
    desc: 'AI pipelines, CRM sync & workflow triggers',
    icon: Zap,
    accent: 'blue',
    tag: 'AI Workflows',
    fullDesc: 'Connect your stack seamlessly with AI-powered automations, automated CRM pipelines, and multi-app data synchronization.',
    features: ['Zapier & Make.com Custom Pipelines', 'CRM & Lead Routing Synchronization', 'AI Agent & LLM Workflow Automation', 'Webhook & Third-Party API Integration']
  },
  // 8. Server & Hosting
  {
    id: 'server-hosting',
    title: 'Server & Hosting',
    desc: 'Ultra-fast cloud infrastructure & 99.9% uptime',
    icon: Server,
    accent: 'yellow',
    tag: 'DevOps & Cloud',
    fullDesc: 'High-availability cloud hosting, automated CI/CD deployment pipelines, SSL management, and global CDN delivery.',
    features: ['Cloud DevOps & Dockerized Environments', 'Automated CI/CD Deployment Pipelines', 'Global Edge CDN & Caching', '24/7 Monitoring & 99.99% Uptime Guarantee']
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isServicesCatalogOpen, setIsServicesCatalogOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  // Handle opening the full catalog modal
  const handleOpenCatalog = (e) => {
    e.preventDefault();
    setIsServicesCatalogOpen(true);
    // Also scroll gently to the cards deck for visual alignment
    const deck = document.getElementById('services-cards-deck');
    if (deck) {
      deck.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsServicesCatalogOpen(false);
  };

  return (
    <section className="services-section-wrapper" id="services" aria-label="Digital Marketing & Tech Services">
      {/* Base Layer: Signature Yellow & Blue Liquid Glass Orbs */}
      <AmbientOrbs variant="services-orbs" />

      {/* Background ambient data-stream lines & glow (yellow & electric blue) */}
      <div className="services-ambient-bg" aria-hidden="true">
        <div className="ambient-radial-glow yellow-glow" />
        <div className="ambient-radial-glow blue-glow" />
        <svg className="ambient-stream-lines" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
          <path d="M-100 280 C300 240, 600 160, 1100 130 C1300 120, 1500 110, 1600 110" stroke="url(#streamBlue)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.45" />
          <path d="M-100 320 C400 300, 750 200, 1200 180 C1400 170, 1550 160, 1600 160" stroke="url(#streamYellow)" strokeWidth="1.5" strokeDasharray="8 8" opacity="0.45" />
          <path d="M-100 180 C200 160, 700 90, 1150 90 C1350 90, 1500 85, 1600 85" stroke="url(#streamBlue2)" strokeWidth="1" opacity="0.25" />
          <defs>
            <linearGradient id="streamBlue" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="streamYellow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffd105" stopOpacity="0" />
              <stop offset="50%" stopColor="#facc15" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="streamBlue2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#001f3f" stopOpacity="0" />
              <stop offset="60%" stopColor="#1e40af" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="services-container">
        {/* Left Column: Heading, description & clickable CTA pill with backlink */}
        <div className="services-left-col">
          <span className="services-label-tag">Services</span>
          <h2 className="services-main-headline">
            Our team of creators,<br />
            developers, and<br />
            strategists are obsessed with<br />
            the new.
          </h2>

          <a 
            href="#services-cards-deck" 
            onClick={handleOpenCatalog} 
            className="services-pill-cta" 
            aria-label="View our services catalog and details"
          >
            <span>View our services</span>
            <div className="cta-arrow-circle">
              <ArrowRight size={14} />
            </div>
          </a>
        </div>

        {/* Right Column: 1 Big Square Card + 2 Rows of Rounded Rectangular Cards in Perfect Level */}
        <div className="services-right-col" ref={scrollContainerRef}>
          <div className="services-cards-deck" id="services-cards-deck">
            {/* 1 Big Square Card (Featured Service) */}
            <div 
              className="service-square-card"
              onClick={() => setSelectedService({
                title: FEATURED_SERVICE.title,
                tag: 'Flagship Core',
                fullDesc: FEATURED_SERVICE.tagline,
                features: FEATURED_SERVICE.details
              })}
              role="button"
              tabIndex={0}
              aria-label="View Custom SaaS & Cloud Systems details"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedService({
                    title: FEATURED_SERVICE.title,
                    tag: 'Flagship Core',
                    fullDesc: FEATURED_SERVICE.tagline,
                    features: FEATURED_SERVICE.details
                  });
                }
              }}
            >
              {/* Isometric 3D Visual Mesh Art in Yellow & Blue */}
              <div className="square-card-art-stage">
                <div className="square-mesh-grid">
                  <div className="mesh-cube cube-1" />
                  <div className="mesh-cube cube-2" />
                  <div className="mesh-cube cube-3" />
                  <div className="mesh-cube cube-4" />
                </div>
                <div className="square-art-glow" />
                <div className="square-liquid-badge">
                  <Sparkles size={13} className="text-yellow" />
                  <span>{FEATURED_SERVICE.badge}</span>
                </div>
              </div>

              {/* Card Text Content (tags removed as requested) */}
              <div className="square-card-content">
                <div className="square-text-block">
                  <h3 className="square-card-title">{FEATURED_SERVICE.title}</h3>
                  <p className="square-card-desc">{FEATURED_SERVICE.tagline}</p>
                </div>
                
                <div className="square-action-hint">
                  <span>Explore flagship ecosystem</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </div>

            {/* 2 Rows of Compact Rounded Rectangular Cards */}
            <div className="service-rectangles-grid">
              {ALL_SERVICES.map((item) => {
                const IconComponent = item.icon;
                const isYellow = item.accent === 'yellow';

                return (
                  <div 
                    key={item.id} 
                    className={`service-rect-card ${isYellow ? 'theme-yellow' : 'theme-blue'}`}
                    onClick={() => handleCardClick(item)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${item.title} details`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleCardClick(item);
                      }
                    }}
                  >
                    {/* Icon Container with Theme Gradient */}
                    <div className="rect-icon-box">
                      <IconComponent size={20} className="rect-icon" />
                    </div>

                    {/* Service Info */}
                    <div className="rect-info-box">
                      <div className="rect-header-row">
                        <span className="rect-tag">{item.tag}</span>
                      </div>
                      <h4 className="rect-title">{item.title}</h4>
                      <p className="rect-desc">{item.desc}</p>
                    </div>

                    {/* Liquid Glass Edge Glow on Hover */}
                    <div className="rect-glass-glare" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Full Services Directory Modal / Backlink Detail View */}
      {(isServicesCatalogOpen || selectedService) && (
        <div className="service-modal-backdrop" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="service-modal-window" onClick={(e) => e.stopPropagation()}>
            <button className="service-modal-close" onClick={closeModal} aria-label="Close service details">
              <X size={20} />
            </button>

            {selectedService ? (
              /* Single Service Detail View */
              <div className="service-detail-view">
                <div className="service-modal-badge">{selectedService.tag}</div>
                <h3 className="service-modal-title">{selectedService.title}</h3>
                <p className="service-modal-desc">{selectedService.fullDesc || selectedService.desc}</p>

                <div className="service-features-list">
                  <h4 className="features-headline">What is included in this service:</h4>
                  <div className="features-grid">
                    {(selectedService.features || []).map((feat, i) => (
                      <div key={i} className="feature-item">
                        <CheckCircle2 size={16} className="feature-icon" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="service-modal-footer">
                  <a href="#contact" onClick={closeModal} className="service-inquire-btn">
                    <span>Inquire About This Service</span>
                    <ArrowRight size={15} />
                  </a>
                  <button 
                    onClick={() => { setSelectedService(null); setIsServicesCatalogOpen(true); }} 
                    className="service-view-all-link"
                  >
                    View All Services Catalog
                  </button>
                </div>
              </div>
            ) : (
              /* All Services Catalog View */
              <div className="service-catalog-view">
                <div className="catalog-header">
                  <span className="services-label-tag">Full Agency Catalog</span>
                  <h3 className="service-modal-title">Our Digital Marketing & Tech Services</h3>
                  <p className="service-modal-desc">
                    Explore our comprehensive suite of digital marketing, software development, video editing, and cloud services designed to drive exponential scale.
                  </p>
                </div>

                <div className="catalog-grid">
                  {/* Flagship SaaS */}
                  <div 
                    className="catalog-card flagship"
                    onClick={() => setSelectedService({
                      title: FEATURED_SERVICE.title,
                      tag: 'Flagship Core',
                      fullDesc: FEATURED_SERVICE.tagline,
                      features: FEATURED_SERVICE.details
                    })}
                  >
                    <div className="catalog-card-header">
                      <Sparkles size={18} color="#ffd105" />
                      <span className="rect-tag">Flagship</span>
                    </div>
                    <h4>{FEATURED_SERVICE.title}</h4>
                    <p>{FEATURED_SERVICE.tagline}</p>
                  </div>

                  {/* 8 Core Services */}
                  {ALL_SERVICES.map((srv) => {
                    const SrvIcon = srv.icon;
                    return (
                      <div 
                        key={srv.id} 
                        className={`catalog-card ${srv.accent === 'yellow' ? 'theme-yellow' : 'theme-blue'}`}
                        onClick={() => setSelectedService(srv)}
                      >
                        <div className="catalog-card-header">
                          <SrvIcon size={18} />
                          <span className="rect-tag">{srv.tag}</span>
                        </div>
                        <h4>{srv.title}</h4>
                        <p>{srv.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
