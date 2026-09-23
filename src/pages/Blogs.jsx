import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogSection from '../components/BlogSection';

export default function Blogs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="blogs-page-wrapper">
      {/* Top Navbar */}
      <Navbar />

      <main className="blogs-page-main">
        {/* Subtle Ambient Glows */}
        <div className="blogs-ambient-glow glow-left" />
        <div className="blogs-ambient-glow glow-right" />

        {/* Dedicated 3D Cut-Into-Website Studio Blogs Section with Retro TV Monitor */}
        <BlogSection />
      </main>

      {/* Website Footer */}
      <Footer />
    </div>
  );
}
