import React from 'react';

/**
 * AmbientOrbs
 * Universal Yellow & Electric Blue Luminous Floating Orbs
 * Anchors the minimal, professional Apple liquid-glass aesthetic in every section.
 */
const AmbientOrbs = ({ variant = 'default' }) => {
  return (
    <div className={`section-ambient-orbs-stage ${variant}`} aria-hidden="true">
      {/* 1. Primary Radiant Yellow Orb */}
      <div className="ambient-orb orb-yellow-primary" />

      {/* 2. Electric Cobalt Blue Orb */}
      <div className="ambient-orb orb-blue-electric" />

      {/* 3. Luminous Cyan Drift Orb */}
      <div className="ambient-orb orb-cyan-drift" />

      {/* 4. Warm Amber Gold Orb */}
      <div className="ambient-orb orb-amber-warm" />
    </div>
  );
};

export default AmbientOrbs;
