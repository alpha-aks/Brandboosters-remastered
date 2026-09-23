/**
 * Temporary Studio Blogs Data (Prismic CMS Ready)
 * 
 * To connect to Prismic:
 * 1. Install: npm install @prismicio/client @prismicio/react
 * 2. Define custom type 'blog_post' in Prismic with matching field names:
 *    - title (Key Text / Rich Text)
 *    - slug / uid (UID)
 *    - excerpt (Key Text)
 *    - category (Select / Key Text)
 *    - read_time (Key Text)
 *    - published_date (Date)
 *    - channel_number (Key Text)
 *    - tv_accent (Color)
 *    - featured_image (Image)
 *    - content (Rich Text / Slices)
 */

export const BLOG_POSTS = [
  {
    id: 'velocity-architecture',
    uid: 'architecture-of-velocity',
    channel: 'CH 01',
    channelNumber: 1,
    title: 'The Architecture of Velocity: How We Scaled Digital Systems by 310%',
    category: 'Engineering & Speed',
    readTime: '4 min read',
    publishedDate: 'Sep 2026',
    author: {
      name: 'Rohan Verma',
      role: 'Lead Architect',
      initials: 'RV'
    },
    excerpt: 'Why sub-second page rendering, optimistic UI updates, and frictionless micro-interactions turn casual visitors into high-conviction enterprise buyers.',
    accent: '#38bdf8',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #0c4a6e 100%)',
    bgGlow: 'rgba(56, 189, 248, 0.25)',
    tags: ['Next.js', 'Core Web Vitals', 'Architecture', 'Speed'],
    featured: true,
    tvHeadline: 'SYSTEM VELOCITY // +310% GLOBAL REACH',
    summaryPoints: [
      'Sub-1.1s Largest Contentful Paint benchmarks',
      'Edge computing & distributed caching strategies',
      'The direct correlation between milliseconds and conversion rates'
    ]
  },
  {
    id: 'shree-rudra-branding',
    uid: 'packaging-the-sacred-identity',
    channel: 'CH 02',
    channelNumber: 2,
    title: 'Packaging the Sacred: Designing Shree Rudra’s Luxury Identity',
    category: 'Brand Strategy',
    readTime: '6 min read',
    publishedDate: 'Aug 2026',
    author: {
      name: 'Priya Sharma',
      role: 'Design Director',
      initials: 'PS'
    },
    excerpt: 'Balancing ancient sacred geometry with sustainable, tactile unboxing rituals that drove 15,000+ luxury customers and a 4.9★ brand reputation.',
    accent: '#f59e0b',
    gradient: 'linear-gradient(135deg, #d97706 0%, #b45309 50%, #78350f 100%)',
    bgGlow: 'rgba(245, 158, 11, 0.25)',
    tags: ['Luxury Branding', 'Typography', 'Sustainable Packaging'],
    featured: true,
    tvHeadline: 'SACRED LUXURY // 15,000+ CUSTOMERS',
    summaryPoints: [
      'Gold foil debossing on FSC-certified raw craft paper',
      'Custom typographic ligature set inspired by temple geometry',
      'Sensory tactile feedback on premium unboxing'
    ]
  },
  {
    id: 'kore-funnel-growth',
    uid: 'mobile-growth-app-engine',
    channel: 'CH 03',
    channelNumber: 3,
    title: 'Mobile Funnel Engineering: Driving 50M+ Impressions with Kore',
    category: 'Growth & Mobile',
    readTime: '5 min read',
    publishedDate: 'Aug 2026',
    author: {
      name: 'Arjun Mehta',
      role: 'Growth Strategist',
      initials: 'AM'
    },
    excerpt: 'Deconstructing the omnichannel architecture behind 3.8X ROAS, geotargeted retail acquisition funnels, and frictionless native checkout flows.',
    accent: '#10b981',
    gradient: 'linear-gradient(135deg, #059669 0%, #047857 50%, #064e3b 100%)',
    bgGlow: 'rgba(16, 185, 129, 0.25)',
    tags: ['Mobile UX', 'Conversion Funnels', 'Omnichannel'],
    featured: true,
    tvHeadline: 'MOBILE APPS // 50M+ IMPRESSIONS & 3.8X ROAS',
    summaryPoints: [
      'Zero-latency native checkout onboarding pipeline',
      'Geofenced walk-in retail attribution loops',
      'Hyper-personalized contextual push notifications'
    ]
  },
  {
    id: 'ai-design-systems',
    uid: 'design-systems-generative-era',
    channel: 'CH 04',
    channelNumber: 4,
    title: 'Design Systems in the Era of Generative Intelligence',
    category: 'UI/UX & Future',
    readTime: '7 min read',
    publishedDate: 'Jul 2026',
    author: {
      name: 'Sneha Kapoor',
      role: 'Product Lead',
      initials: 'SK'
    },
    excerpt: 'Why token-driven atomic design systems are the prerequisite for AI-assisted interface generation and brand consistency at immense scale.',
    accent: '#6366f1',
    gradient: 'linear-gradient(135deg, #4f46e5 0%, #4338ca 50%, #312e81 100%)',
    bgGlow: 'rgba(99, 102, 241, 0.25)',
    tags: ['Design Systems', 'AI Automation', 'Figma Tokens'],
    featured: true,
    tvHeadline: 'INTELLIGENT UI // NEXT-GEN ATOMIC DESIGN',
    summaryPoints: [
      'Harmonizing multi-brand design tokens with LLM code gen',
      'Dynamic color contrast validation in real-time CI/CD',
      'Scalable components from prototype to production'
    ]
  }
];
