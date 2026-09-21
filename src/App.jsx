import React from 'react';
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

function App() {
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

export default App;

