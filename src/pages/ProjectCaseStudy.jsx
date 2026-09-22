import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  TrendingUp, 
  ChevronRight 
} from 'lucide-react';
import { PROJECTS, getProjectBySlug } from '../data/projectsData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProjectCaseStudy({ slug: propSlug }) {
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const activeSlug = propSlug || projectSlug;

  const project = getProjectBySlug(activeSlug) || PROJECTS[0];

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeSlug]);

  // Find next project in circular order
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className={`project-case-study-page white-case-study-theme ${project.brandTheme}-page`}>
      {/* Same Website Navbar */}
      <Navbar />

      {/* Floating Sub-Navigation Bar with Dedicated Backlink & Breadcrumbs */}
      <div className="case-study-subnav-bar">
        <div className="case-study-subnav-container">
          <Link to="/#work" className="case-study-backlink-btn" id="project-backlink-btn">
            <ArrowLeft size={16} />
            <span>Back to All Projects</span>
          </Link>

          <div className="case-study-breadcrumbs">
            <Link to="/">Home</Link>
            <ChevronRight size={12} />
            <Link to="/#work">Featured Work</Link>
            <ChevronRight size={12} />
            <span className="current-crumb">{project.client}</span>
          </div>
        </div>
      </div>

      {/* Main Content Showcase */}
      <main className="case-study-main">
        {/* Hero Section */}
        <section className="case-study-hero-section">
          {/* Ambient Glowing Background Orb - Same Brand Color */}
          <div className="case-study-ambient-orb-wrap" aria-hidden="true">
            <div className={`featured-logo-ambient-orb ${project.brandTheme}-orb hero-orb-scale`} />
          </div>

          <div className="case-study-hero-content">
            {/* Frosted Glass Logo Box: BENOY in ALL CAPS or Logo Image */}
            <div className="case-study-logo-box-wrap">
              <div className="client-logo-glass-frame featured-glass-frame hero-glass-frame">
                <div className="glass-frame-sheen" />
                {project.textLogo ? (
                  <span className="featured-brand-caps-logo hero-caps-logo">{project.textLogo}</span>
                ) : project.logoSrc ? (
                  <img 
                    src={project.logoSrc} 
                    alt={`${project.client} Official Logo`} 
                    className={`client-logo-img ${project.slug}`}
                  />
                ) : (
                  <span className="featured-brand-fallback-text">{project.client}</span>
                )}
              </div>
            </div>

            {/* Category Pill */}
            <div className="case-study-category-pill">
              <Sparkles size={13} color={project.accentColor} />
              <span>{project.category}</span>
            </div>

            {/* Hero Headline */}
            <h1 className="case-study-title">{project.hoverDetails.headline}</h1>

            {/* Tagline / Subtitle */}
            <p className="case-study-subtitle">{project.tagline}</p>
          </div>
        </section>

        {/* Key Metrics / Impact Statistics Grid */}
        <section className="case-study-metrics-section">
          <div className="case-study-metrics-grid">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="case-study-metric-card">
                <div className="metric-card-specular" />
                <span className="metric-card-val" style={{ color: project.accentColor }}>
                  {stat.value}
                </span>
                <span className="metric-card-lbl">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Dive: The Challenge & The Deliverables */}
        <section className="case-study-breakdown-section">
          {/* Mid Section Ambient Glow in Same Brand Color */}
          <div className={`case-study-mid-orb ${project.brandTheme}-orb`} aria-hidden="true" />

          <div className="case-study-breakdown-grid">
            {/* The Challenge */}
            <div className="case-study-panel challenge-panel">
              <div className="panel-header">
                <div className="panel-icon-circle challenge-icon">
                  <AlertCircle size={18} />
                </div>
                <h3>The Challenge</h3>
              </div>
              <ul className="panel-list">
                {project.challenge.map((point, idx) => (
                  <li key={idx} className="panel-list-item">
                    <span className="panel-bullet challenge-bullet" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What BrandBoosters Delivered */}
            <div className="case-study-panel deliverables-panel">
              <div className="panel-header">
                <div className="panel-icon-circle solution-icon">
                  <CheckCircle2 size={18} />
                </div>
                <h3>What We Delivered</h3>
              </div>
              <ul className="panel-list">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="panel-list-item">
                    <span className="panel-bullet solution-bullet" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Executive Impact Story Card */}
        <section className="case-study-story-section">
          <div className="case-study-story-card">
            <div className="story-card-glow" style={{ background: project.accentColor }} />
            <div className="story-card-inner">
              <div className="story-tag">
                <TrendingUp size={14} color="#f59e0b" />
                <span>Executive Impact Narrative</span>
              </div>
              <p className="story-quote">"{project.impactStory}"</p>
              <div className="story-signature">
                <span className="sig-author">BrandBoosters Growth & Strategy Lab</span>
                <span className="sig-role">Partnership Case Study & Results</span>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project Teaser & Bottom Backlink Navigation */}
        <section className="case-study-bottom-nav-section">
          <div className="bottom-nav-container">
            {/* Back to all projects link */}
            <Link to="/#work" className="bottom-back-btn">
              <ArrowLeft size={16} />
              <span>Back to Featured Work</span>
            </Link>

            {/* Next project preview */}
            <div 
              className="next-project-card"
              onClick={() => navigate(nextProject.routePath)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') navigate(nextProject.routePath); }}
            >
              <div className="next-project-meta">
                <span className="next-label">Next Case Study</span>
                <h4 className="next-title">{nextProject.client}</h4>
                <span className="next-desc">{nextProject.category}</span>
              </div>
              <div className="next-arrow-circle">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Call to Action */}
        <section className="case-study-bottom-cta">
          <div className="bottom-cta-card">
            <div className="bottom-cta-specular" />
            <span className="cta-kicker">Ready For Exponential Growth?</span>
            <h2 className="cta-headline">Let’s build your brand’s next breakthrough case study.</h2>
            <div className="cta-action-row">
              <a href="/contact" className="cta-primary-btn">
                <span>Book a Discovery Call</span>
                <ArrowUpRight size={16} />
              </a>
              <Link to="/#work" className="cta-secondary-btn">
                <span>Explore All Work</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Website Footer */}
      <Footer />
    </div>
  );
}
