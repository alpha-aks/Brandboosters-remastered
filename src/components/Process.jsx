import React, { useState } from 'react';

const WORKFLOW_STEPS = [
  {
    num: '01',
    name: 'Discover',
    tag: 'Research & Signals',
    desc: 'Uncovering core brand truths, competitor positioning, audience pain points, and technical leverage before touching design.',
    outputs: ['Stakeholder discovery', 'Market & competitor intel', 'User journey mapping']
  },
  {
    num: '02',
    name: 'Define',
    tag: 'Strategy & Architecture',
    desc: 'Distilling insights into a concrete product roadmap, information architecture, and high-impact conversion funnels.',
    outputs: ['Information architecture', 'Feature prioritization', 'Technical blueprint']
  },
  {
    num: '03',
    name: 'Design',
    tag: 'UI/UX & Systems',
    desc: 'Crafting living digital interfaces, bespoke design tokens, fluid typography, and delightful micro-interactions.',
    outputs: ['Design systems & tokens', 'Interactive prototypes', 'Micro-interactions']
  },
  {
    num: '04',
    name: 'Develop',
    tag: 'Clean Engineering',
    desc: 'Engineering with sub-second performance, responsive layouts, modular React code, and enterprise-grade reliability.',
    outputs: ['Modern React / Vite architecture', 'Sub-second CWV optimization', 'Cross-browser fidelity']
  },
  {
    num: '05',
    name: 'Deliver',
    tag: 'Launch & Scale',
    desc: 'Executing a zero-downtime deployment, automated SEO indexing, telemetry analytics, and seamless handover.',
    outputs: ['Pre-flight QA & testing', 'Cloud deployment & SEO', 'Analytics & growth telemetry']
  }
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="minimal-process-section" id="process" aria-label="Our Ideating Workflow">
      <div className="minimal-process-container">
        {/* Minimalist Section Header */}
        <div className="minimal-process-header">
          <span className="minimal-process-eyebrow">HOW WE WORK</span>
          <h2 className="minimal-process-title">Process</h2>
          <p className="minimal-process-lead">
            A structured, human-led ideation and engineering pipeline designed to turn raw ideas into market-defining products.
          </p>
        </div>

        {/* Minimalist Workflow Track with Directional Arrows */}
        <div className="minimal-workflow-track" role="list">
          {WORKFLOW_STEPS.map((step, index) => {
            const isHovered = activeStep === index;
            const hasArrow = index < WORKFLOW_STEPS.length - 1;

            return (
              <div 
                key={step.num}
                className={`minimal-workflow-step ${isHovered ? 'is-highlighted' : ''}`}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                role="listitem"
              >
                {/* Step Connector Line & Directional Arrow */}
                <div className="minimal-step-meta-row">
                  <div className="minimal-step-indicator">
                    <span className="minimal-step-num">{step.num}</span>
                    <span className="minimal-step-dot" />
                  </div>

                  {hasArrow && (
                    <div className="minimal-step-arrow-link" aria-hidden="true">
                      <span className="minimal-arrow-line" />
                      <svg 
                        className="minimal-arrow-icon" 
                        width="18" 
                        height="10" 
                        viewBox="0 0 18 10" 
                        fill="none"
                      >
                        <path 
                          d="M1 5h14m-4-4l4 4-4 4" 
                          stroke="currentColor" 
                          strokeWidth="1.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Step Content */}
                <div className="minimal-step-body">
                  <span className="minimal-step-tag">{step.tag}</span>
                  <h3 className="minimal-step-name">{step.name}</h3>
                  <p className="minimal-step-desc">{step.desc}</p>

                  {/* Outputs List */}
                  <ul className="minimal-step-outputs">
                    {step.outputs.map((item) => (
                      <li key={item} className="minimal-output-item">
                        <span className="output-dash">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
