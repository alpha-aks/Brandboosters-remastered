import React from 'react';
import AmbientOrbs from './AmbientOrbs';

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Hero Introduction">
      {/* Base Layer: Signature Yellow & Blue Liquid Glass Orbs */}
      <AmbientOrbs variant="hero-orbs" />

      <div className="hero-boost-container">
        <h1 className="hero-boost-title">
          <span className="hero-line">WE BOOST YOUR BRAND'S</span>
          <span className="hero-line">SOCIAL PRESENT</span>
        </h1>
      </div>
    </section>
  );
}
