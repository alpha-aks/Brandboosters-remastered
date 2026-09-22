import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Plus, 
  Minus,
  Sparkles
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Clean SVG social icons
const SvgLinkedin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const SvgTwitter = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const SvgInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const SvgYoutube = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

// Location configuration: Primary (Navi Mumbai) and Secondary (Ahmedabad)
const LOCATIONS = [
  {
    id: 'mumbai',
    label: 'Navi Mumbai',
    type: 'Headquarters',
    tag: 'Primary Location',
    badge: 'HQ',
    title: 'Sector 22, Vashi',
    city: 'Navi Mumbai, Maharashtra',
    pincode: '400703',
    mapTitle: 'Our Office (HQ)',
    street1: 'SECTOR 22 • VASHI • NAVI MUMBAI',
    street2: 'PALM BEACH ROAD',
    street3: 'SION - PANVEL HIGHWAY',
    waterName: 'THANE CREEK',
    googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Sector+22+Vashi+Navi+Mumbai'
  },
  {
    id: 'ahmedabad',
    label: 'Ahmedabad',
    type: 'Branch Office',
    tag: 'Secondary Location',
    badge: 'Branch',
    title: 'Ayodhya Nagar',
    city: 'Ahmedabad, Gujarat',
    pincode: '380026',
    mapTitle: 'Ahmedabad Studio',
    street1: 'AYODHYA NAGAR • AHMEDABAD',
    street2: 'SABARMATI RIVERFRONT',
    street3: 'SARKHEJ - GANDHINAGAR HWY',
    waterName: 'SABARMATI RIVER',
    googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Ayodhya+Nagar+Ahmedabad'
  }
];

export default function Contact() {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mapZoom, setMapZoom] = useState(1);
  const [activeLocId, setActiveLocId] = useState('mumbai');

  const activeLoc = LOCATIONS.find(loc => loc.id === activeLocId) || LOCATIONS[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous smooth submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 900);
  };

  const handleZoomIn = () => {
    setMapZoom(prev => Math.min(prev + 0.2, 1.6));
  };

  const handleZoomOut = () => {
    setMapZoom(prev => Math.max(prev - 0.2, 0.8));
  };

  const scrollToForm = () => {
    const el = document.getElementById('contact-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="contact-page-wrapper">
      {/* Universal Website Navbar */}
      <Navbar />

      <main className="contact-page-main">
        {/* ==========================================================================
           1. HERO SECTION: "Let's Build Something Great Together" + Floating Message Card
           ========================================================================== */}
        <section className="contact-hero-container">
          <div className="contact-hero-grid">
            
            {/* Left Column: Heading & Subtitle */}
            <div className="contact-hero-text">
              <div className="contact-pill-badge">
                <span className="pill-dot" />
                <span>Contact Us</span>
              </div>

              <h1 className="contact-main-heading">
                Let's Build<br />
                Something<br />
                <span className="contact-heading-gradient">Great Together</span>
              </h1>

              <p className="contact-hero-lead">
                Have a project in mind, a question, or just want to say hello? We'd love to hear from you. 
                Send us a message and we'll get back to you as soon as possible.
              </p>
            </div>

            {/* Right Column: Floating 3D Message Showcase Card */}
            <div className="contact-hero-graphic-wrap">
              {/* Radiant Ambient Orb Glow */}
              <div className="contact-floating-aura" aria-hidden="true" />

              {/* Ambient Accent Dots */}
              <div className="ambient-accent-dot dot-yellow" aria-hidden="true" />
              <div className="ambient-accent-dot dot-green" aria-hidden="true" />
              <div className="ambient-accent-dot dot-blue" aria-hidden="true" />

              {/* Floating Liquid Glass Drop Message Card */}
              <div className="contact-floating-message-card" onClick={scrollToForm} role="button" tabIndex={0}>
                <div className="floating-card-glass-sheen" />
                <div className="floating-card-icon-box">
                  <Send size={18} color="#ffffff" className="send-icon-tilt" />
                </div>
                <div className="floating-card-body">
                  <h4 className="floating-card-title">Drop us a message</h4>
                  <span className="floating-card-sub">We're here to help</span>
                </div>
                <div className="floating-card-arrow-circle">
                  <ArrowRight size={14} color="#ffffff" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================================================
           2. MAIN "GET IN TOUCH" CONTAINER (Info Left + Form Right)
           ========================================================================== */}
        <section className="contact-form-section" id="contact-form-section">
          <div className="contact-card-outer">
            <div className="contact-card-glass-specular" />

            <div className="contact-card-inner-grid">
              
              {/* Left Column: Get in Touch & Contact Channels */}
              <div className="contact-info-col">
                <h2 className="get-in-touch-title">Get in Touch</h2>
                <p className="get-in-touch-subtitle">
                  Fill out the form and we'll get back to you shortly.
                </p>

                <div className="contact-channels-list">
                  {/* Channel 1: Email Us */}
                  <a href="mailto:hello@brandboosters.in" className="contact-channel-item">
                    <div className="channel-icon-wrap">
                      <Mail size={20} color="#2563eb" />
                    </div>
                    <div className="channel-details">
                      <span className="channel-label">Email Us</span>
                      <strong className="channel-val">hello@brandboosters.in</strong>
                      <span className="channel-sub">We reply within 24 hours</span>
                    </div>
                  </a>

                  {/* Channel 2: Call Us */}
                  <a href="tel:+919820012345" className="contact-channel-item">
                    <div className="channel-icon-wrap">
                      <Phone size={20} color="#2563eb" />
                    </div>
                    <div className="channel-details">
                      <span className="channel-label">Call Us</span>
                      <strong className="channel-val">+91 98200 12345</strong>
                      <span className="channel-sub">Mon - Sat, 10am - 7pm (IST)</span>
                    </div>
                  </a>

                  {/* Channel 3: Primary Office Location (Navi Mumbai) */}
                  <div 
                    className={`contact-channel-item channel-location-interactive ${activeLocId === 'mumbai' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveLocId('mumbai');
                      document.getElementById('contact-map-wrapper')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label="View Navi Mumbai Office on Map"
                  >
                    <div className="channel-icon-wrap">
                      <MapPin size={20} color="#2563eb" />
                    </div>
                    <div className="channel-details">
                      <div className="channel-label-row">
                        <span className="channel-label">Headquarters</span>
                        <span className="channel-loc-pill">Primary</span>
                      </div>
                      <strong className="channel-val">Sector 22, Vashi</strong>
                      <span className="channel-sub">Navi Mumbai, Maharashtra 400703</span>
                    </div>
                  </div>

                  {/* Channel 4: Secondary Office Location (Ahmedabad) */}
                  <div 
                    className={`contact-channel-item channel-location-interactive ${activeLocId === 'ahmedabad' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveLocId('ahmedabad');
                      document.getElementById('contact-map-wrapper')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label="View Ahmedabad Office on Map"
                  >
                    <div className="channel-icon-wrap">
                      <MapPin size={20} color="#2563eb" />
                    </div>
                    <div className="channel-details">
                      <div className="channel-label-row">
                        <span className="channel-label">Branch Office</span>
                        <span className="channel-loc-pill branch">Secondary</span>
                      </div>
                      <strong className="channel-val">Ayodhya Nagar</strong>
                      <span className="channel-sub">Ahmedabad, Gujarat 380026</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form Container Box */}
              <div className="contact-form-box">
                {isSubmitted && (
                  <div className="contact-form-success-banner" role="alert">
                    <CheckCircle2 size={20} color="#10b981" />
                    <div>
                      <strong>Message received!</strong>
                      <p>Thank you for reaching out. We will get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form-element">
                  
                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="req-star">*</span>
                    </label>
                    <input 
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="form-input"
                      placeholder="Your name"
                      value={formState.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email Address */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="req-star">*</span>
                    </label>
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="you@company.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Subject Dropdown */}
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <div className="form-select-wrap">
                      <select 
                        id="subject"
                        name="subject"
                        className="form-select"
                        value={formState.subject}
                        onChange={handleChange}
                      >
                        <option value="">Select a topic</option>
                        <option value="Design & UX/UI Modernization">Design & UX/UI Modernization</option>
                        <option value="Full-Stack Web & App Engineering">Full-Stack Web & App Engineering</option>
                        <option value="Performance Marketing & Ad Scaling">Performance Marketing & Ad Scaling</option>
                        <option value="Enterprise Architecture & Retainers">Enterprise Architecture & Retainers</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message <span className="req-star">*</span>
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      rows="4"
                      className="form-textarea"
                      placeholder="Tell us about your project..."
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className={`contact-submit-btn ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <ArrowRight size={16} />
                  </button>

                </form>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================================================
           3. INTERACTIVE ARCHITECTURAL MAP SECTION WITH DUAL LOCATION TABS
           ========================================================================== */}
        <section className="contact-map-section" id="contact-map-wrapper" aria-label="Our Locations">
          {/* Dual Location Switcher Tabs */}
          <div className="map-locations-header-bar">
            <div className="map-locations-pills" role="tablist" aria-label="Office Locations">
              {LOCATIONS.map((loc) => {
                const isActive = activeLocId === loc.id;
                return (
                  <button
                    key={loc.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`map-loc-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveLocId(loc.id)}
                  >
                    <MapPin size={14} />
                    <span>{loc.title}, {loc.label}</span>
                    <span className={`loc-badge-tag ${loc.badge.toLowerCase()}`}>
                      {loc.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="contact-map-container">
            
            {/* Architectural Stylized SVG Street Map Visual */}
            <div 
              className="architectural-map-canvas" 
              style={{ transform: `scale(${mapZoom})`, transformOrigin: 'center center' }}
            >
              <svg 
                className="vector-map-svg" 
                viewBox="0 0 1200 480" 
                preserveAspectRatio="xMidYMid slice" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Land Base */}
                <rect width="1200" height="500" fill="#f1f5f9"/>

                {/* Waterfront / Bay / River Simulation */}
                <path 
                  d="M 850 0 C 890 120 780 220 840 340 C 880 420 950 470 1200 500 L 1200 0 Z" 
                  fill="#dbeafe" 
                  opacity="0.85"
                />
                <path 
                  d="M 870 0 C 910 130 800 230 860 350 C 900 430 970 470 1200 500 L 1200 0 Z" 
                  fill="#bfdbfe" 
                  opacity="0.35"
                />

                {/* City Blocks Grid Simulation */}
                <g fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" opacity="0.6">
                  <rect x="40" y="30" width="100" height="60" rx="4"/>
                  <rect x="160" y="30" width="140" height="60" rx="4"/>
                  <rect x="40" y="110" width="90" height="120" rx="4"/>
                  <rect x="150" y="110" width="130" height="80" rx="4"/>
                  <rect x="300" y="50" width="110" height="90" rx="4"/>
                  <rect x="430" y="40" width="160" height="70" rx="4"/>
                  <rect x="610" y="50" width="120" height="80" rx="4"/>

                  <rect x="160" y="210" width="120" height="100" rx="4"/>
                  <rect x="300" y="160" width="90" height="150" rx="4"/>
                  <rect x="410" y="130" width="140" height="90" rx="4"/>
                  <rect x="570" y="150" width="160" height="110" rx="4"/>

                  <rect x="50" y="250" width="90" height="160" rx="4"/>
                  <rect x="160" y="330" width="110" height="110" rx="4"/>
                  <rect x="290" y="330" width="150" height="110" rx="4"/>
                  <rect x="460" y="240" width="120" height="130" rx="4"/>
                  <rect x="600" y="280" width="140" height="150" rx="4"/>

                  <rect x="750" y="380" width="100" height="80" rx="4"/>
                </g>

                {/* Major Highways & Arterial Roads */}
                <path d="M 0 140 Q 400 160 850 110 T 1200 90" fill="none" stroke="#ffffff" strokeWidth="12" opacity="0.95"/>
                <path d="M 0 140 Q 400 160 850 110 T 1200 90" fill="none" stroke="#cbd5e1" strokeWidth="6" opacity="0.4"/>

                <path d="M 120 0 Q 350 280 620 480" fill="none" stroke="#ffffff" strokeWidth="10" opacity="0.95"/>
                <path d="M 120 0 Q 350 280 620 480" fill="none" stroke="#cbd5e1" strokeWidth="5" opacity="0.35"/>

                <path d="M 380 0 L 820 480" fill="none" stroke="#ffffff" strokeWidth="8" opacity="0.9"/>
                <path d="M 700 0 L 320 480" fill="none" stroke="#ffffff" strokeWidth="8" opacity="0.9"/>

                {/* Park & Green Belts */}
                <path d="M 310 220 Q 360 210 390 260 T 330 310 Z" fill="#dcfce7" opacity="0.65"/>
                <path d="M 720 180 Q 770 160 800 210 T 750 250 Z" fill="#dcfce7" opacity="0.6"/>

                {/* Street Names Simulation dynamically matched to selected location */}
                <text x="160" y="130" fill="#94a3b8" fontSize="10" fontFamily="sans-serif" letterSpacing="2" opacity="0.85">{activeLoc.street1}</text>
                <text x="440" y="320" fill="#94a3b8" fontSize="9" fontFamily="sans-serif" letterSpacing="1.5" opacity="0.85">{activeLoc.street2}</text>
                <text x="730" y="100" fill="#94a3b8" fontSize="9" fontFamily="sans-serif" letterSpacing="1.5" opacity="0.85">{activeLoc.street3}</text>
                <text x="960" y="240" fill="#60a5fa" fontSize="9" fontFamily="sans-serif" letterSpacing="1.5" opacity="0.75">{activeLoc.waterName}</text>
              </svg>
            </div>

            {/* Central Pinned Office Badge with Ripple Wave */}
            <div className="map-office-pin-wrapper">
              {/* Location Badge Card */}
              <div className="map-office-card">
                <div className="map-office-header">
                  <MapPin size={13} color="#2563eb" />
                  <span>{activeLoc.mapTitle}</span>
                </div>
                <div className="map-office-body">
                  <strong>{activeLoc.title}</strong>
                  <span>{activeLoc.city}</span>
                </div>
                <a 
                  href={activeLoc.googleMapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="map-office-gmaps-link"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight size={11} />
                </a>
              </div>

              {/* Pulsing Blue Location Target Dot */}
              <div className="map-pulse-anchor">
                <div className="pulse-ripple ring-1" />
                <div className="pulse-ripple ring-2" />
                <div className="pulse-core-dot" />
              </div>
            </div>

            {/* Zoom Controls (+ / -) */}
            <div className="map-zoom-controls" aria-label="Map Zoom">
              <button 
                type="button" 
                className="zoom-btn" 
                onClick={handleZoomIn} 
                aria-label="Zoom In"
              >
                <Plus size={16} />
              </button>
              <button 
                type="button" 
                className="zoom-btn" 
                onClick={handleZoomOut} 
                aria-label="Zoom Out"
              >
                <Minus size={16} />
              </button>
            </div>

          </div>
        </section>

        {/* ==========================================================================
           4. "FOLLOW US & STAY CONNECTED" SECTION
           ========================================================================== */}
        <section className="contact-follow-section">
          <div className="contact-follow-pill">
            <span>Other Ways</span>
          </div>

          <h2 className="contact-follow-heading">Follow Us & Stay Connected</h2>
          <p className="contact-follow-sub">
            Get the latest updates, new projects and insights from our team.
          </p>

          <div className="contact-social-icons-row" role="group" aria-label="Social Profiles">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-social-btn" 
              aria-label="LinkedIn"
            >
              <SvgLinkedin />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-social-btn" 
              aria-label="Twitter / X"
            >
              <SvgTwitter />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-social-btn" 
              aria-label="Instagram"
            >
              <SvgInstagram />
            </a>
            <a 
              href="https://brandboosters.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-social-btn" 
              aria-label="Website"
            >
              <Globe size={18} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-social-btn" 
              aria-label="YouTube"
            >
              <SvgYoutube />
            </a>
          </div>
        </section>

        {/* ==========================================================================
           5. BOTTOM CTA BANNER: "Got a project in mind?" + 3D Glass Graphics
           ========================================================================== */}
        <section className="contact-bottom-banner-section">
          <div className="contact-bottom-banner-card">
            <div className="banner-glass-specular" />

            {/* Left Content */}
            <div className="banner-content-side">
              <div className="banner-top-pill">
                <span>Ready to talk?</span>
              </div>

              <h2 className="banner-heading">
                Got a project<br />
                in mind?
              </h2>

              <p className="banner-subtitle">
                Let's turn your idea into something amazing.
              </p>

              <button 
                type="button" 
                className="banner-action-btn"
                onClick={scrollToForm}
              >
                <span>Start a Project</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Right Side: 3D Frosted Glass Shape & Send Capsule Graphic */}
            <div className="banner-graphic-side" aria-hidden="true">
              <div className="banner-ambient-glow" />
              
              {/* 3D Glass Pill Capsule Container */}
              <div className="banner-3d-capsule-glass">
                <div className="capsule-inner-specular" />
                <div className="capsule-mint-cylinder" />
                <div className="capsule-blue-sphere sphere-1" />
                <div className="capsule-blue-sphere sphere-2" />
                
                {/* Floating Telegram / Send Icon Square */}
                <div className="banner-float-send-chip">
                  <Send size={18} color="#2563eb" />
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Universal Website Footer */}
      <Footer />
    </div>
  );
}
