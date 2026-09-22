import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import FeaturedWork from './components/FeaturedWork';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ClientRetention from './components/ClientRetention';
import Footer from './components/Footer';
import Services from './components/Services';
import Clients from './components/Clients';
import ChatWidget from './components/ChatWidget';
import GlobalAmbientOrbs from './components/GlobalAmbientOrbs';
import ProjectCaseStudy from './pages/ProjectCaseStudy';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="netbramha-app">
      {/* Universal Floating Luminous Orbs across All Sections */}
      <GlobalAmbientOrbs />

      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Video Showreel & Dark Section */}
        <Showreel />

        {/* Services Section (Yellow & Blue Theme) */}
        <Services />

        {/* Client Logos Section */}
        <Clients />

        {/* Featured Work / Case Studies from PDF (Liquid Glass Posts) */}
        <FeaturedWork />

        {/* Continuous Pipeline Process Section (from Reference Image) */}
        <Process />

        {/* Client Testimonials Section (Clean Quotes, No DP, Twin Accent Dots) */}
        <Testimonials />

        {/* 8 out of 10 Clients Long-Term Retention & Fast-Paced SaaS Video Section */}
        <ClientRetention />
      </main>

      {/* Website Footer with Exploding Yellow & Blue Globe + AI Hub */}
      <Footer />

      {/* Floating Bottom-Right Chat Assistant */}
      <ChatWidget />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/kore" element={<ProjectCaseStudy slug="kore" />} />
      <Route path="/kore-mobile" element={<ProjectCaseStudy slug="kore" />} />
      <Route path="/eddies" element={<ProjectCaseStudy slug="eddies" />} />
      <Route path="/eddies-liquor" element={<ProjectCaseStudy slug="eddies" />} />
      <Route path="/benoy" element={<ProjectCaseStudy slug="benoy" />} />
      <Route path="/benoy-arch" element={<ProjectCaseStudy slug="benoy" />} />
      <Route path="/transportx" element={<ProjectCaseStudy slug="transportx" />} />
      <Route path="/shree-rudra" element={<ProjectCaseStudy slug="shree-rudra" />} />
      <Route path="/shree-rudra-divine" element={<ProjectCaseStudy slug="shree-rudra" />} />
      <Route path="/maxo" element={<ProjectCaseStudy slug="maxo" />} />
      <Route path="/maxo-architecture" element={<ProjectCaseStudy slug="maxo" />} />
      <Route path="/work/:projectSlug" element={<ProjectCaseStudy />} />
      <Route path="/:projectSlug" element={<ProjectCaseStudy />} />
    </Routes>
  );
}

export default App;
