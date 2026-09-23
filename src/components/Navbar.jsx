import React, { useState, useEffect } from 'react';
import { ChevronDown, X, ArrowUpRight } from 'lucide-react';
import { usePageTransition } from './PageTransition';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { navigateWithTransition } = usePageTransition();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(prev => (prev === name ? null : name));
  };

  const isHome = typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '');
  const getLink = (hash) => (isHome ? hash : `/${hash}`);

  return (
    <header className={`nb-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Brand Logo */}
        <a 
          href="/" 
          className="nav-brand" 
          aria-label="Brandboosters Home"
          onClick={(e) => {
            if (window.location.pathname !== '/') {
              e.preventDefault();
              navigateWithTransition('/');
            }
          }}
        >
          <img 
            src="/brandboosters-logo-opt.png" 
            alt="Brandboosters" 
            className="brand-logo brandboosters-logo"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-menu-desktop" aria-label="Main Navigation">
          <a 
            href="/work" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateWithTransition('/work');
            }}
          >
            Work
          </a>

          {/* Services Dropdown */}
          <div 
            className={`dropdown-parent ${activeDropdown === 'services' ? 'active' : ''}`}
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              className="nav-link has-dropdown" 
              onClick={() => toggleDropdown('services')}
              aria-expanded={activeDropdown === 'services'}
            >
              Services <ChevronDown className="dropdown-chevron" size={14} />
            </button>
            <div className="nav-dropdown-menu wide-menu">
              <div>
                <div className="dropdown-group-title">Research</div>
                <a href={getLink('#research')} className="dropdown-item">Qualitative Research</a>
                <a href={getLink('#usability')} className="dropdown-item">Usability Testing</a>
                <a href={getLink('#quantitative')} className="dropdown-item">Quantitative Research</a>
                <a href={getLink('#competitor')} className="dropdown-item">Competitor Analysis</a>
              </div>
              <div>
                <div className="dropdown-group-title">Strategy</div>
                <a href={getLink('#design-thinking')} className="dropdown-item">Design Thinking</a>
                <a href={getLink('#product-roadmap')} className="dropdown-item">Product Roadmap</a>
                <a href={getLink('#growth-strategy')} className="dropdown-item">Growth Strategy</a>
                <a href={getLink('#service-design')} className="dropdown-item">Service Design</a>
              </div>
              <div>
                <div className="dropdown-group-title">Design</div>
                <a href={getLink('#user-journey')} className="dropdown-item">User Journeys</a>
                <a href={getLink('#wireframing')} className="dropdown-item">Wireframing & IA</a>
                <a href={getLink('#visual-design')} className="dropdown-item">Visual Design & Systems</a>
                <a href={getLink('#motion')} className="dropdown-item">Animation & Micro-interactions</a>
              </div>
            </div>
          </div>

          {/* Clients Dropdown */}
          <div 
            className={`dropdown-parent ${activeDropdown === 'clients' ? 'active' : ''}`}
            onMouseEnter={() => setActiveDropdown('clients')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              className="nav-link has-dropdown" 
              onClick={() => toggleDropdown('clients')}
              aria-expanded={activeDropdown === 'clients'}
            >
              Clients <ChevronDown className="dropdown-chevron" size={14} />
            </button>
            <div className="nav-dropdown-menu">
              <div className="dropdown-group-title">Key Industries</div>
              <a href={getLink('#fintech')} className="dropdown-item">BFSI & Fintech</a>
              <a href={getLink('#enterprise')} className="dropdown-item">Enterprise & SaaS</a>
              <a href={getLink('#retail')} className="dropdown-item">Retail & E-commerce</a>
              <a href={getLink('#healthcare')} className="dropdown-item">Healthcare & MedTech</a>
              <a href={getLink('#impact')} className="dropdown-item">Client Impact Stories</a>
            </div>
          </div>

          <a 
            href="/about" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateWithTransition('/about');
            }}
          >
            About
          </a>

          <a 
            href="/blogs" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigateWithTransition('/blogs');
            }}
          >
            Blogs
          </a>
        </nav>

        {/* Contact CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <button 
            type="button" 
            onClick={() => navigateWithTransition('/contact')} 
            className="nav-contact-btn"
          >
            Contact
          </button>

          {/* Mobile Hamburger Toggle */}
          <button 
            className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <a 
            href="/work" 
            className="mobile-nav-link" 
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              navigateWithTransition('/work');
            }}
          >
            Work
          </a>
          <a href={getLink('#services')} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href={getLink('#clients')} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Clients</a>
          <a 
            href="/about" 
            className="mobile-nav-link" 
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              navigateWithTransition('/about');
            }}
          >
            About
          </a>
          <a 
            href="/blogs" 
            className="mobile-nav-link" 
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              navigateWithTransition('/blogs');
            }}
          >
            Blogs
          </a>
        </div>
        <div>
          <button 
            type="button" 
            className="nav-contact-btn" 
            style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
            onClick={() => {
              setMobileMenuOpen(false);
              navigateWithTransition('/contact');
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
