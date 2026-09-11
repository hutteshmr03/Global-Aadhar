// Global Aadhar - Regional Press Wire & Impact Case Studies Data

export const tickerNews = [
  { id: 't1', tag: 'PRESS WIRE', text: 'The Navhind Times features Global Aadhar regional CSR sustainability initiative', time: '10m ago' },
  { id: 't2', tag: 'BROADCAST', text: 'Prudent Media TV broadcasts exclusive coverage of Western India Infrastructure Summit', time: '25m ago' },
  { id: 't3', tag: 'EDITORIAL', text: 'O Heraldo publishes corporate governance thought leadership by Amol K Arondekar', time: '1h ago' },
  { id: 't4', tag: 'MEDIA ALERT', text: 'Goa 365 TV streams state-wide youth entrepreneurship & skill forum', time: '2h ago' },
  { id: 't5', tag: 'REGIONAL DESK', text: 'Tarun Bharat & Gomantak syndicate healthcare outreach announcement across Konkan belt', time: '3h ago' },
  { id: 't6', tag: 'TECH LAUNCH', text: 'Sumant Cloud Ideas deploys next-gen enterprise document management for regional pharma', time: '4h ago' },
  { id: 't7', tag: 'CAMPAIGN HIT', text: 'Over 2.4M audience impressions generated across quarterly stakeholder campaign', time: '5h ago' }
];

export const regionalSectors = {
  'pharma-corp': { name: 'Pharma & Corporate', baseImp: 4.5, aveMulti: 180000 },
  'ngo-social': { name: 'NGOs & Social Impact', baseImp: 3.2, aveMulti: 120000 },
  'hospitality': { name: 'Hospitality & Tourism', baseImp: 5.8, aveMulti: 220000 },
  'real-estate': { name: 'Real Estate & Infra', baseImp: 4.0, aveMulti: 160000 },
  'education': { name: 'Institutions & Govt', baseImp: 3.8, aveMulti: 140000 },
  'tech-cloud': { name: 'Tech & Cloud Solutions', baseImp: 4.2, aveMulti: 190000 }
};

export const caseStudies = [
  {
    id: 'case-1',
    category: 'CSR & Community Relations',
    client: 'Goa Environmental & Heritage Initiative',
    headline: 'Multi-Channel Public Awareness Campaign for Western Ghats Ecological Protection',
    summary: 'Orchestrated regional press conferences, multi-lingual press releases (English, Marathi, Konkani), and stakeholder roundtables resulting in 100% positive editorial coverage across leading Goa dailies.',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1800&q=80',
    featuredIn: ['The Navhind Times', 'O Heraldo', 'Tarun Bharat', 'Goa 365 TV'],
    quote: 'Global Aadhar bridged our grassroots community outreach with high-level institutional dialogue seamlessly.',
    author: 'State Advisory Board Coordinator',
    metrics: [
      { label: 'Audience Reach', value: '1.8M+' },
      { label: 'Print & TV Hits', value: '42 Outlets' },
      { label: 'Positive Sentiment', value: '98.5%' },
      { label: 'Community Dialogues', value: '14 Forums' }
    ]
  },
  {
    id: 'case-2',
    category: 'Pharma & Corporate PR',
    client: 'Western India Healthcare & Pharma Retainer',
    headline: 'Strategic Positioning & Crisis Defense for Regulated Manufacturing Facilities',
    summary: 'Built proactive corporate communications infrastructure, crisis holding statements, and executive media profiles across national business press and regional broadcast networks.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80',
    featuredIn: ['Economic Times', 'Prudent Media', 'Financial Express', 'Gomantak'],
    quote: 'Their rapid-response team and deep media desk connections in Panjim ensured our corporate narrative remained rock-solid.',
    author: 'VP Corporate Affairs',
    metrics: [
      { label: 'AVE Generated', value: '₹48 Lakhs' },
      { label: 'Tier-1 Features', value: '26 Articles' },
      { label: 'Executive Op-Eds', value: '6 Placements' },
      { label: 'Crisis Mitigation', value: '100% Safe' }
    ]
  },
  {
    id: 'case-3',
    category: 'Digital PR & Cloud Systems',
    client: 'Institutional Digital Transformation',
    headline: 'Seamless Integration of Media Strategy with Sumant Cloud Tech Solutions',
    summary: 'Combined digital PR, search engine optimization, and enterprise technology implementation (E-DMS & CMMS) to position client as an innovative digital leader in Western India.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80',
    featuredIn: ['Sumant Cloud Wire', 'Regional Tech Brief', 'Goa Chamber News'],
    quote: 'The synergy between PR storytelling and cloud technology delivered unprecedented efficiency and visibility for our brand.',
    author: 'Chief Information Officer',
    metrics: [
      { label: 'Digital Traffic Lift', value: '+320%' },
      { label: 'Enterprise Adoptions', value: '18 Systems' },
      { label: 'Search Authority', value: 'DR 68+' },
      { label: 'Media Syndications', value: '35+ Wires' }
    ]
  }
];
