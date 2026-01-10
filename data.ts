
import { CaseStudy, Experience } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'boots-uk',
    client: 'Boots.com (Walgreens Alliance)',
    niche: 'Health & Beauty / Enterprise E-com',
    issue: 'Category level cannibalization and technical debt in mobile indexing for millions of SKUs.',
    strategy: 'Architected nested JSON-LD schema for product variations. Optimized internal link equity across category silos, focusing on high-margin dermatological segments.',
    metrics: [
      { label: 'Organic Revenue', value: '£2.4M+', growth: '+15%' },
      { label: 'Non-Brand Reach', value: '450k/mo', growth: '+22%' },
      { label: 'Crawl Efficiency', value: '94%', growth: 'Optimal' }
    ],
    duration: '12 Months'
  },
  {
    id: 'remit-choice',
    client: 'Remit Choice Limited',
    niche: 'FinTech / Global Remittance',
    issue: 'New market entry with zero visibility in the highly competitive UK-to-Africa/Asia corridors.',
    strategy: 'Developed a Corridor-Specific landing page strategy using local entity signals and regulatory authority markers. Integrated real-time exchange rate API with dynamic content.',
    metrics: [
      { label: 'Active Users', value: '379%', growth: 'Increase' },
      { label: 'Trust Signal', value: '4.8/5', growth: 'Rating' },
      { label: 'Organic Leads', value: '8.5k/mo', growth: 'Scalable' }
    ],
    duration: 'Present'
  },
  {
    id: 'farmghar-pak',
    client: 'FarmGhar (Livestock Marketplace)',
    niche: 'Agri-Tech / Marketplace',
    issue: 'Legacy architecture preventing app-indexing and deep-linking from search engines.',
    strategy: 'Implemented Progressive Web App (PWA) SEO strategy. Optimized image-heavy livestock listings for Core Web Vitals and engineered local marketplace trust signals.',
    metrics: [
      { label: 'Daily Listings', value: '5,000+', growth: '+210%' },
      { label: 'App Installs', value: '45k', growth: 'Organic' },
      { label: 'User Retention', value: '62%', growth: '+18%' }
    ],
    duration: '9 Months'
  },
  {
    id: 'global-saas-crm',
    client: 'B2B SaaS - CRM Giant',
    niche: 'Enterprise Software / SaaS',
    issue: 'High Customer Acquisition Cost (CAC) through Paid Search. Content not ranking for solution-based queries.',
    strategy: 'Built an "Education First" content hub focusing on pain-point resolution rather than features. Mapped the entire B2B decision-maker journey to semantic search clusters.',
    metrics: [
      { label: 'Inbound MQLs', value: '+144%', growth: 'Organic' },
      { label: 'Paid Dependency', value: '-30%', growth: 'Reduction' },
      { label: 'Top 3 Keywords', value: '1,200+', growth: 'Rankings' }
    ],
    duration: '10 Months'
  },
  {
    id: 'luxury-watch-marketplace',
    client: 'Chrono-Asset Group',
    niche: 'Luxury Goods / Marketplace',
    issue: 'Low "Trust" signals for high-ticket transactions (£10k+). Poor visibility for pre-owned model numbers.',
    strategy: 'Secured "Expertise" markers via EEAT-focused author profiles. Optimized 15,000 unique watch reference pages for long-tail search dominance.',
    metrics: [
      { label: 'Transaction Val.', value: '£6.8M', growth: 'Organic' },
      { label: 'Search Visibility', value: '38%', growth: 'Share' },
      { label: 'Referral Trust', value: 'High', growth: 'Market' }
    ],
    duration: '14 Months'
  },
  {
    id: 'fintech-crypto-bridge',
    client: 'Defi-Nexus Exchange',
    niche: 'Crypto / Web3 FinTech',
    issue: 'Search engine restrictions on crypto-ads forced a 100% reliance on organic growth in a volatile market.',
    strategy: 'Created a glossary-driven SEO engine for emerging Web3 terms. Leveraged programmatic SEO to build 2,000+ token comparison pages.',
    metrics: [
      { label: 'Monthly Traffic', value: '1.2M', growth: '+500%' },
      { label: 'CAC', value: '$0.12', growth: 'Global Min' },
      { label: 'Domain Auth.', value: '74', growth: '+28' }
    ],
    duration: '6 Months'
  },
  {
    id: 'nova-michigan',
    client: 'Professional Services (NoVA & Michigan)',
    niche: 'Local Services / Multi-Location',
    issue: 'Stagnant growth for 8 months. Stuck at 1,200 sessions and 22 leads with non-converting branded traffic.',
    strategy: 'Comprehensive audit & CRO fix. Deep niche research matching search intent for Northern Virginia and Michigan markets.',
    metrics: [
      { label: 'Organic Traffic', value: '4,164', growth: '+247%' },
      { label: 'Monthly Leads', value: '127', growth: '+477%' },
      { label: 'Revenue Growth', value: '$51,560', growth: '+180%' }
    ],
    duration: '2 Months'
  },
  {
    id: 'dolls-cleaning',
    client: 'Dolls Cleaning',
    niche: 'Local Services / Cleaning',
    issue: 'Low visibility in local map packs and high dependency on paid ads for customer acquisition.',
    strategy: 'Successfully boosted local SEO for a cleaning service, achieving top map pack rankings and a significant increase in local bookings.',
    metrics: [
      { label: 'Map Rankings', value: 'Top 3', growth: 'Dominant' },
      { label: 'Local Bookings', value: '85/mo', growth: '+115%' },
      { label: 'Ad Spend', value: '-60%', growth: 'Savings' }
    ],
    duration: '4 Months'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Senior SEO Analyst',
    company: 'SaaS & Enterprise Specialist',
    period: '5+ Years Experience',
    highlights: [
      'Scaling organic traffic and conversions for SaaS, FinTech, and Enterprise E-commerce brands.',
      'Leveraging data-driven insights to execute technical audits and global content strategies.',
      'Expertise in automated Schema markup and international SEO localized mapping.'
    ]
  },
  {
    role: 'SEO Team Lead',
    company: 'Remit Choice Limited',
    period: 'April 2023 - Present',
    highlights: [
      'Boosting organic traffic and search rankings through data-driven insights.',
      'Alignment with Google algorithm updates to ensure long-term visibility.',
      'Developed a content strategy that aligns with user intent.'
    ]
  },
  {
    role: 'Junior SEO / Content Strategist',
    company: 'Foundational Years',
    period: '2018 - 2021',
    highlights: [
      'Started career in Content Writing and Script Writing for digital media.',
      'Managed YouTube SEO and Video discoverability strategies.',
      'Remote SEO consultation focusing on keyword research and on-page factors.'
    ]
  }
];

export const SKILLS = [
  { name: 'Technical SEO & Data Analytics', level: 98 },
  { name: 'Content Strategy (Entity-Based)', level: 96 },
  { name: 'Automated Schema Implementation', level: 94 },
  { name: 'CRO & UX Optimization', level: 92 },
  { name: 'Local SEO (GMB / Hyper-local)', level: 95 },
  { name: 'Search Intent Mapping', level: 97 },
  { name: 'SGE & AI Search Optimization', level: 90 },
  { name: 'Keyword Market Psychology', level: 93 }
];
