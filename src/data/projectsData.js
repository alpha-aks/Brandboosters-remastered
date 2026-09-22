// Centralized Featured Projects & Case Studies Data
export const PROJECTS = [
  // 01. Kore Mobile
  {
    id: 'kore-mobile',
    puzzleNum: '01',
    routePath: '/kore',
    aliases: ['/kore', '/kore-mobile', '/work/kore', '/work/kore-mobile'],
    gridClass: 'puzzle-piece-large',
    client: 'Kore Mobile',
    logoSrc: '/kore-mobile.png',
    slug: 'logo-kore',
    strategicDesc: 'Strategic Performance Marketing & Multi-Store Ad Scaling Engine',
    category: 'Performance Marketing & Growth',
    accentColor: '#10b981',
    brandTheme: 'brand-theme-tlh',
    tagline: 'Driving 50M+ impressions, 180K+ physical retail visits, and profitable multi-store revenue.',
    heroMetric: { value: '50M+', label: 'Ad Impressions', sub: 'Across Meta & Google Ecosystem' },
    stats: [
      { label: 'Budget Managed', value: '₹20L+' },
      { label: 'Campaigns Launched', value: '100+' },
      { label: 'Store Clicks', value: '180K+' },
      { label: 'Average ROAS', value: '3.8X' }
    ],
    hoverDetails: {
      category: 'Performance Marketing',
      headline: 'Scalable ad engines driving 50M+ impressions and retail walk-ins.',
      metrics: [
        { val: '50M+', lbl: 'Impressions' },
        { val: '₹20L+', lbl: 'Managed' },
        { val: '3.8X', lbl: 'ROAS' }
      ],
      deliverables: [
        'Algorithmic Meta & Google ad scaling',
        'High-velocity Reel creative testing',
        'Multi-store retail walk-in campaigns'
      ]
    },
    challenge: [
      'Build a dominant online retail presence in a hyper-competitive smartphone market',
      'Increase local brand recall and walk-in store footfall across physical retail branches',
      'Promote high-frequency smartphone launches with zero lag in creative production',
      'Scale ad spend continuously while maintaining strictly profitable customer acquisition ROI'
    ],
    deliverables: [
      'Omnichannel Performance Marketing Strategy',
      'Meta (Facebook & Instagram) Automated Ad Funnels',
      'Google Local Inventory & Store Visit Campaigns',
      'High-Engagement Viral Reel Scripts & Video Production',
      'Festival Flash Launch Creative Sprints',
      'Real-Time Attribution & Bi-Weekly Executive Reporting'
    ],
    impactStory: 'BrandBoosters structured a continuous creative-testing flywheel and local store visit engine for Kore Mobile. Over our multi-quarter partnership, we managed ₹20L+ in advertising spend, executed 100+ precision campaigns, and produced 200+ high-converting visual assets, resulting in 50M+ impressions and 180K+ direct customer clicks into local branches.'
  },

  // 02. Eddie's Liquor
  {
    id: 'eddies-liquor',
    puzzleNum: '02',
    routePath: '/eddies',
    aliases: ['/eddies', '/eddies-liquor', '/work/eddies', '/work/eddies-liquor'],
    gridClass: 'puzzle-piece-medium',
    client: "Eddie's Liquor",
    logoSrc: '/eddies-liquor.png',
    slug: 'logo-eddies',
    strategicDesc: 'Automated Marketplace Scaling & High-Intent DoorDash Ads',
    category: 'Marketplace Optimization & Ads',
    accentColor: '#f97316',
    brandTheme: 'brand-theme-sevenloop',
    tagline: 'Dominating U.S. delivery search with automated keyword bidding and 5.6X ROAS.',
    heroMetric: { value: '5.6X', label: 'Average ROAS', sub: 'DoorDash Marketplace' },
    stats: [
      { label: 'Orders Generated', value: '45K+' },
      { label: 'Product Views', value: '850K+' },
      { label: 'Sponsored Views', value: '20M+' },
      { label: 'Category Rank', value: '#1 Local' }
    ],
    hoverDetails: {
      category: 'Marketplace Optimization',
      headline: 'Dominating delivery marketplace search with automated sponsored ads.',
      metrics: [
        { val: '5.6X', lbl: 'Avg ROAS' },
        { val: '45K+', lbl: 'Orders' },
        { val: '20M+', lbl: 'Views' }
      ],
      deliverables: [
        'Automated DoorDash keyword bidding',
        'High-intent product placement & SEO',
        'Seasonal spirits & wine bundles'
      ]
    },
    challenge: [
      'Target high-intent local U.S. beverage buyers with street-level geographic precision',
      'Overcome fierce delivery marketplace competition from major liquor retail chains',
      'Maintain profitable unit economics and positive ROAS across seasonal demand spikes'
    ],
    deliverables: [
      'DoorDash Marketplace Ad Management Setup',
      'Automated High-Intent Keyword Bidding Architecture',
      'Digital Menu Catalog Visual & SEO Optimization',
      'Seasonal Spirits Bundles & Promotional Mechanics',
      'Algorithmic Budget Allocation & Hourly Bid Optimization',
      'Executive P&L Analytics & Weekly Performance Reporting'
    ],
    impactStory: 'BrandBoosters engineered a data-backed marketplace campaign system tailored specifically for DoorDash. By automating keyword bids and optimizing product listings for prime search positions, Eddie’s Liquor generated 45,000+ orders at an extraordinary 5.6X ROAS with over 20M+ sponsored views.'
  },

  // 03. Benoy Arch
  {
    id: 'benoy-arch',
    puzzleNum: '03',
    routePath: '/benoy',
    aliases: ['/benoy', '/benoy-arch', '/work/benoy', '/work/benoy-arch'],
    gridClass: 'puzzle-piece-compact',
    client: 'Benoy Arch',
    textLogo: 'BENOY',
    useTextLogo: true,
    logoSrc: null,
    slug: 'logo-benoy',
    strategicDesc: 'Editorial Luxury Digital Platform & International Architectural UX',
    category: 'Global Architecture & Web',
    accentColor: '#facc15',
    brandTheme: 'brand-theme-yacht',
    tagline: 'Editorial luxury web portfolio driving international architectural commissions and +310% global reach.',
    heroMetric: { value: '+310%', label: 'Global Reach Lift', sub: 'International Architectural Inquiries' },
    stats: [
      { label: 'Global Reach', value: '+310%' },
      { label: 'Flagship Projects', value: '40+' },
      { label: 'Load Speed', value: '< 1.1s' },
      { label: 'VIP Inquiries', value: '180+' }
    ],
    hoverDetails: {
      category: 'Global Architecture & Web',
      headline: 'Editorial luxury web portfolio driving international architectural commissions.',
      metrics: [
        { val: '+310%', lbl: 'Reach' },
        { val: '40+', lbl: 'Projects' },
        { val: '<1.1s', lbl: 'Load Speed' }
      ],
      deliverables: [
        'International architectural portfolio UX',
        'Editorial design system & typography',
        'High-velocity imagery optimization'
      ]
    },
    challenge: [
      'Showcase iconic global architectural works with zero compromise on mobile load speed',
      'Position the firm as an international benchmark in forward-thinking spatial design',
      'Streamline high-ticket inquiry pipelines from overseas institutional developers'
    ],
    deliverables: [
      'Flagship Architectural Web Platform',
      'Interactive Project Showcase & Blueprints',
      'Performance Imagery Caching & CDN',
      'VIP Inquiry & Consultation Routing',
      'Responsive Mobile-First Architecture'
    ],
    impactStory: 'BrandBoosters re-engineered Benoy Arch’s digital presence with high-performance editorial galleries and fluid viewport transitions, driving a +310% surge in qualified international project inquiries.'
  },

  // 04. TransportX
  {
    id: 'transportx',
    puzzleNum: '04',
    routePath: '/transportx',
    aliases: ['/transportx', '/work/transportx'],
    gridClass: 'puzzle-piece-compact',
    client: 'TransportX',
    logoSrc: '/transportx.png',
    slug: 'logo-transportx',
    strategicDesc: 'Real-Time Fleet Dispatch & Driver SaaS Ecosystem',
    category: 'Logistics SaaS & Telematics',
    accentColor: '#06b6d4',
    brandTheme: 'brand-theme-transport',
    tagline: 'Sub-second fleet dispatch ecosystem with native Android driver application and 1,500+ daily trips.',
    heroMetric: { value: '200+', label: 'Active Drivers', sub: 'Daily Fleet Operations' },
    stats: [
      { label: 'Dispatch Latency', value: '< 200ms' },
      { label: 'Daily Trips', value: '1.5K+' },
      { label: 'Route Efficiency', value: '+35%' },
      { label: 'Active Drivers', value: '200+' }
    ],
    hoverDetails: {
      category: 'SaaS Platform',
      headline: 'Sub-second fleet dispatch ecosystem with native Android driver app.',
      metrics: [
        { val: '200+', lbl: 'Drivers' },
        { val: '<200ms', lbl: 'Latency' },
        { val: '+35%', lbl: 'Efficiency' }
      ],
      deliverables: [
        'Native Android driver application',
        'Real-time admin dispatch control room',
        'Automated trip & route logging'
      ]
    },
    challenge: [
      'Unify communication between dispatch administrators and mobile drivers in real-time',
      'Ensure high performance on low-end Android mobile devices with patchy connectivity',
      'Streamline trip assignments, route logging, and vehicle inspection statuses'
    ],
    deliverables: [
      'Android Driver Native Application',
      'Centralized Admin Fleet Telemetry Dashboard',
      'Responsive TransportX Corporate Portal',
      'Secure High-Throughput REST APIs',
      'Automated Driver Authentication & Onboarding'
    ],
    impactStory: 'BrandBoosters engineered a seamless web-and-mobile logistics ecosystem. Fleet coordinators manage routes effortlessly while drivers receive instant notifications via Android.'
  },

  // 05. Shree Rudra Divine
  {
    id: 'shree-rudra-divine',
    puzzleNum: '05',
    routePath: '/shree-rudra',
    aliases: ['/shree-rudra', '/shree-rudra-divine', '/work/shree-rudra'],
    gridClass: 'puzzle-piece-compact',
    client: 'Shree Rudra Divine',
    logoSrc: '/shree-rudra.png',
    slug: 'logo-rudra',
    strategicDesc: 'Automated Gemstone Inventory & Diamond Spectral Validation Platform',
    category: 'Enterprise ERP & Luxury Retail',
    accentColor: '#eab308',
    brandTheme: 'brand-theme-lumora',
    tagline: 'Centralized gemstone ERP with instant algorithmic diamond certificate validation and 500K+ SKUs.',
    heroMetric: { value: '99.9%', label: 'Validation Accuracy', sub: 'Instant Diamond Verification' },
    stats: [
      { label: 'ERP Modules', value: '12+' },
      { label: 'SKU Capacity', value: '500K+' },
      { label: 'Efficiency Lift', value: '4.8X' },
      { label: 'Data Security', value: 'Enterprise' }
    ],
    hoverDetails: {
      category: 'Custom Software',
      headline: 'Centralized gemstone inventory with instant algorithmic validation.',
      metrics: [
        { val: '99.9%', lbl: 'Accuracy' },
        { val: '500K+', lbl: 'SKUs' },
        { val: '12+', lbl: 'Modules' }
      ],
      deliverables: [
        'Automated diamond record verification',
        'Role-based multi-tier security system',
        'Centralized inventory & barcode tracking'
      ]
    },
    challenge: [
      'Replace slow, error-prone manual gemstone certificate verification processes',
      'Centralize massive inventory volumes across physical showroom & online wholesale',
      'Protect high-value trade data with enterprise role-based security & audit logging'
    ],
    deliverables: [
      'Custom ERP Software Architecture',
      'Diamond Spectral Validation Module',
      'Centralized Admin Inventory Dashboard',
      'Real-Time Barcode & SKU Tracking System',
      'Secure Multi-Role Enterprise Authentication'
    ],
    impactStory: 'The platform digitized core operations, eliminated manual paperwork, and enabled instant diamond record searches. Operational efficiency jumped 4.8x.'
  },

  // 06. Maxo Architecture
  {
    id: 'maxo-architecture',
    puzzleNum: '06',
    routePath: '/maxo',
    aliases: ['/maxo', '/maxo-architecture', '/work/maxo', '/work/maxo-architecture'],
    gridClass: 'puzzle-piece-panorama',
    client: 'Maxo Architecture',
    logoSrc: '/blacmaxologo.png',
    slug: 'logo-maxo',
    strategicDesc: 'Bespoke Luxury Architectural Web Platform & Editorial UX',
    category: 'Digital Architecture & UX',
    accentColor: '#38bdf8',
    brandTheme: 'brand-theme-adnaut',
    tagline: 'Editorial luxury web portfolio built for high-ticket architectural commissions with +340% inquiries.',
    heroMetric: { value: '+340%', label: 'Inquiries Growth', sub: 'High-Ticket Commissions' },
    stats: [
      { label: 'Load Speed', value: '< 1.2s' },
      { label: 'Inquiries Lift', value: '+340%' },
      { label: 'Projects Featured', value: '40+' },
      { label: 'Mobile Score', value: '100%' }
    ],
    hoverDetails: {
      category: 'Web Experience',
      headline: 'Editorial luxury web portfolio built for high-ticket commissions.',
      metrics: [
        { val: '<1.2s', lbl: 'Load Time' },
        { val: '+340%', lbl: 'Inquiries' },
        { val: '40+', lbl: 'Projects' }
      ],
      deliverables: [
        'Editorial portfolio UX & art direction',
        'High-performance NextGen image loading',
        'Fluid viewport transitions & typography'
      ]
    },
    challenge: [
      'Showcase ultra-high-resolution architectural imagery without compromising load speeds',
      'Communicate bespoke luxury and design prestige on every viewport',
      'Ensure 100% flawless rendering across mobile, tablet, and ultra-wide displays'
    ],
    deliverables: [
      'Digital Brand Strategy & Architectural UX',
      'Wireframing & Editorial Layouts',
      'Custom Design System & Components',
      'High-Performance Frontend Engineering',
      'SEO-Ready Semantic Architecture'
    ],
    impactStory: 'We engineered an editorial-grade web experience with smooth transitions and fast-loading image compression, generating a +340% increase in luxury project inquiries.'
  }
];

export const getProjectBySlug = (slug) => {
  if (!slug) return null;
  const clean = slug.toLowerCase().replace(/^\//, '');
  return (
    PROJECTS.find(
      (p) =>
        p.id === clean ||
        p.routePath === `/${clean}` ||
        (p.aliases && p.aliases.some((a) => a.replace(/^\//, '') === clean))
    ) || null
  );
};
