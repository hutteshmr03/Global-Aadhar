// PulsePR - Newsroom Data Source

export const tickerNews = [
  { id: 't1', tag: 'BREAKING', text: 'Client AetherPay featured in TechCrunch Series B exclusive', time: '2m ago' },
  { id: 't2', tag: 'JUST IN', text: '+42% organic search surge for Verdant Energy after BBC World broadcast', time: '14m ago' },
  { id: 't3', tag: 'FRONT PAGE', text: 'Forbes publishes executive op-ed by NovaCloud CEO Dr. Elena Thorne', time: '38m ago' },
  { id: 't4', tag: 'WIRE ALERT', text: 'SentinelGrid crisis statement secures 94% positive sentiment retention', time: '1h ago' },
  { id: 't5', tag: 'EXCLUSIVE', text: 'Vogue Business profiles sustainable luxury startup Aura Atelier', time: '2h ago' },
  { id: 't6', tag: 'MARKET DESK', text: 'Bloomberg Terminal syndicates FinPulse regulatory cross-border briefing', time: '3h ago' },
  { id: 't7', tag: 'FLASH', text: 'Over 18.4M impressions generated across launch sprint for QuantumSync', time: '4h ago' }
];

export const pressClippings = [
  {
    id: 'clip-1',
    publication: 'TechCrunch',
    pubCategory: 'Venture & DeepTech',
    headline: 'How AetherPay Quietly Built the Infrastructure for Sub-Second Cross-Border Settlement',
    client: 'AetherPay (Fintech Unicorn)',
    resultStat: '62 Tier-1 Articles • $1.4M AVE',
    date: 'OCTOBER 14, 2026',
    reach: '28.4M Impressions',
    summary: 'Orchestrated an exclusive embargo feature with TechCrunch’s lead fintech editor, sparking immediate syndication across Reuters and Bloomberg. Drove an 8x surge in institutional inbound leads in 72 hours.',
    accentColor: '#dc2626'
  },
  {
    id: 'clip-2',
    publication: 'Forbes',
    pubCategory: 'Leadership & AI',
    headline: 'The Next Wave of Enterprise AI Must Be Decentralized or It Will Fail',
    client: 'OmniVortex AI',
    resultStat: 'Front Page Feature • 140k Shares',
    date: 'SEPTEMBER 28, 2026',
    reach: '19.2M Impressions',
    summary: 'Positioned founder Dr. Elena Thorne as the defining voice in privacy-preserving enterprise intelligence through a ghostwritten thought leadership series and keynote placement at WebSummit.',
    accentColor: '#2563eb'
  },
  {
    id: 'clip-3',
    publication: 'Bloomberg',
    pubCategory: 'Markets & Energy',
    headline: 'CleanTech Giant Verdant Expands Into North America Following $120M Capital Injection',
    client: 'Verdant Dynamics',
    resultStat: '18 Broadcast Hits • DR 91 Backlink',
    date: 'AUGUST 19, 2026',
    reach: '34.8M Impressions',
    summary: 'Structured a multi-market corporate announcement across London, New York, and Singapore, pairing wire syndication with a live Bloomberg TV prime-time studio interview.',
    accentColor: '#dc2626'
  },
  {
    id: 'clip-4',
    publication: 'Wired',
    pubCategory: 'Cybersecurity',
    headline: 'Inside the 30-Millisecond Disaster Recovery Engine Keeping Global Banks Online',
    client: 'QuantumSync Corp',
    resultStat: 'Lead Tech Essay • 450% Traffic Lift',
    date: 'JULY 30, 2026',
    reach: '15.6M Impressions',
    summary: 'Turned complex DevOps infrastructure into an urgent narrative about global financial resilience, securing deep-dive technical reviews and podcast circuits.',
    accentColor: '#059669'
  },
  {
    id: 'clip-5',
    publication: 'Vogue Business',
    pubCategory: 'Luxury & Lifestyle',
    headline: 'Why Luxury Fashion Houses Are Racing to Adopt Biodegradable Silk Bio-Polymers',
    client: 'Aura Atelier',
    resultStat: '12 VIP Tastemaker Placements',
    date: 'JUNE 11, 2026',
    reach: '11.8M Impressions',
    summary: 'Curated an intimate private press dinner in Milan with senior fashion editors and luxury house consultants, generating front-row placement across European style publications.',
    accentColor: '#d97706'
  },
  {
    id: 'clip-6',
    publication: 'The Wall Street Journal',
    pubCategory: 'Enterprise Defense',
    headline: 'How One Cloud Provider Rebuilt Public Trust in Under 72 Hours After Algorithmic Glitch',
    client: 'SentinelGrid Corp',
    resultStat: '95.4% Positive Sentiment Recovery',
    date: 'MAY 04, 2026',
    reach: '22.1M Impressions',
    summary: 'Executed rapid-response war room communications during a high-stakes audit. Held an off-the-record briefing with senior enterprise technology reporters to maintain investor confidence.',
    accentColor: '#7c3aed'
  }
];

export const reachMetrics = [
  { label: 'Total Media Impressions', value: 250, suffix: 'M+', description: 'Audited global print, digital & broadcast views' },
  { label: 'Tier-1 Publications Reached', value: 180, suffix: '+', description: 'Direct editorial desk relationships worldwide' },
  { label: 'Average Sentiment Score', value: 92, suffix: '%', description: 'Verified positive narrative framing' },
  { label: 'PR Campaigns Launched', value: 340, suffix: '+', description: 'High-velocity funding & product blitzes' }
];

export const monthlyGrowthChart = [
  { month: 'Jan', reachM: 18, tier1Count: 12 },
  { month: 'Feb', reachM: 26, tier1Count: 16 },
  { month: 'Mar', reachM: 34, tier1Count: 22 },
  { month: 'Apr', reachM: 48, tier1Count: 29 },
  { month: 'May', reachM: 65, tier1Count: 38 },
  { month: 'Jun', reachM: 82, tier1Count: 46 },
  { month: 'Jul', reachM: 110, tier1Count: 58 },
  { month: 'Aug', reachM: 145, tier1Count: 74 },
  { month: 'Sep', reachM: 190, tier1Count: 92 },
  { month: 'Oct', reachM: 250, tier1Count: 120 }
];

export const servicesList = [
  {
    id: 'media-relations',
    code: 'DESK-01',
    title: 'Media Relations & Tier-1 Wire',
    tagline: 'Direct Desk Access to Global Editors',
    description: 'We pitch your narrative directly into the inboxes of senior editors and bureau chiefs at Forbes, Bloomberg, TechCrunch, and WSJ.',
    deliverables: ['Exclusive Embargo Strategy', 'Wire Syndication across 450+ High-DA Outlets', 'Bespoke Pitch Angles']
  },
  {
    id: 'crisis-comms',
    code: 'DESK-02',
    title: 'Crisis Communications & Shield',
    tagline: '24/7 Rapid Response Narrative Defense',
    description: 'Protect brand equity against regulatory fallout, misinformation, and high-frequency news cycles with war room precision.',
    deliverables: ['15-Minute Response Protocol', 'Holding Statements & Fact Packs', 'Dark Site Crisis Infrastructure']
  },
  {
    id: 'influencer-partnerships',
    code: 'DESK-03',
    title: 'Influencer & Tastemaker Relations',
    tagline: 'Bridging Institutional Press with Digital Creators',
    description: 'Pair traditional editorial coverage with authoritative industry creators, podcast circuits, and curated VIP briefings.',
    deliverables: ['Creator Matchmaking & Contracts', 'VIP Product Seeding Suites', 'Podcast Tour Coordination']
  },
  {
    id: 'content-strategy',
    code: 'DESK-04',
    title: 'Content Strategy & Ghostwriting',
    tagline: 'C-Suite Narrative & Thought Leadership',
    description: 'Transform executives into go-to commentators with ghostwritten op-eds, keynote speaker submissions, and research reports.',
    deliverables: ['Executive Ghostwriting (Forbes / Fortune)', 'Data-Led Industry Whitepapers', 'Keynote Summit Submissions']
  },
  {
    id: 'event-pr',
    code: 'DESK-05',
    title: 'Event PR & Press Junkets',
    tagline: 'High-Impact Experiential Briefings',
    description: 'Orchestrate exclusive press conferences, invitation-only media dinners, and product launch showcases in NYC, London, and SF.',
    deliverables: ['Curated Editor Dinners', 'Live Stream Press Conferences', 'Press Gifting & B-Roll Kits']
  }
];

export const processTimeline = [
  {
    step: '01',
    phase: 'DISCOVER',
    title: 'Narrative Extraction',
    description: 'We audit your milestones, proprietary data, and executive perspectives to identify the angles journalists are actively hunting.'
  },
  {
    step: '02',
    phase: 'CRAFT',
    title: 'Editorial Packaging',
    description: 'We draft AP-Style press releases, digital media kits, b-roll packages, and executive holding quotes built for instant publication.'
  },
  {
    step: '03',
    phase: 'PITCH',
    title: 'Targeted Desk Embargo',
    description: 'We bypass generic PR distribution wires to pitch dedicated desk reporters with tailored exclusives under strict embargoes.'
  },
  {
    step: '04',
    phase: 'AMPLIFY',
    title: 'Syndication & SEO Echo',
    description: 'Post-launch, we syndicate across 450+ outlets, newsjack breaking cycles, and build high-DA backlinks to compound domain reach.'
  }
];

export const clientTestimonials = [
  {
    id: 't-1',
    quote: "PulsePR does not just blast wire emails. They operate like investigative journalists who understand what desk editors need. They put us on the front page of Forbes in 3 weeks.",
    author: "Jessica Lin",
    title: "Chief Executive Officer",
    company: "NovaCloud Systems",
    issueRef: "VOL. 14 • NO. 8"
  },
  {
    id: 't-2',
    quote: "Within 48 hours of our Series B launch, we had interviews with TechCrunch, Bloomberg, and Wired. The resulting inbound customer surge doubled our annual ARR target.",
    author: "Marcus Sterling",
    title: "Co-Founder & CEO",
    company: "AetherPay",
    issueRef: "VOL. 14 • NO. 9"
  },
  {
    id: 't-3',
    quote: "During a severe regulatory inquiry, their 24/7 crisis war room held the media narrative together. We emerged with a 95% positive sentiment rating and zero brand damage.",
    author: "Claire DeWitt",
    title: "General Counsel",
    company: "OmniHealth Global",
    issueRef: "VOL. 14 • NO. 11"
  }
];
