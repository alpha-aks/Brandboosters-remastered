import React from 'react';

/**
 * GlobalAmbientOrbs
 * Universal luminous floating orbs that drift smoothly behind all sections
 * of the application, creating an immersive, living Apple liquid glass atmosphere.
 */
const GlobalAmbientOrbs = () => {
  return (
    <div className="global-ambient-orbs-stage" aria-hidden="true">
      {/* 1. Warm Gold/Yellow Hero Orb */}
      <div className="global-orb global-orb-gold" />

      {/* 2. Electric Cobalt Blue Atmospheric Orb */}
      <div className="global-orb global-orb-blue" />

      {/* 3. Luminous Cyan Drift Orb */}
      <div className="global-orb global-orb-cyan" />

      {/* 4. Warm Amber Gold Orb */}
      <div className="global-orb global-orb-amber" />

      {/* 5. Deep Royal Navy Blue Orb */}
      <div className="global-orb global-orb-navy" />
    </div>
  );
};

export default GlobalAmbientOrbs;
