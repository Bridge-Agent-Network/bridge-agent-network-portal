import type { BookRequest, Event, Member, PointActivity, PointSubmission, Resource, Training } from "@/lib/types";

export const currentMember: Member = {
  id: "alex",
  name: "Alex Fajardo",
  role: "Admin",
  region: "North Phoenix",
  territory: "North Phoenix, AZ",
  brokerage: "OPCS / Bridge Agent Network",
  phone: "(602) 555-0142",
  email: "alex@example.com",
  specialties: ["Recruiting", "Technology", "Training", "Renovate to Sell"],
  points: 240,
  status: "Approved"
};

export const members: Member[] = [
  currentMember,
  {
    id: "brad",
    name: "Brad McCaughey",
    role: "Admin",
    region: "North Phoenix",
    territory: "North Phoenix, AZ",
    brokerage: "Bridge Agent Network",
    phone: "(602) 555-0199",
    email: "brad@example.com",
    specialties: ["Strategy", "Seller Consultations", "Deal Lab"],
    points: 320,
    status: "Approved"
  },
  {
    id: "maria",
    name: "Maria Sanchez",
    role: "Agent",
    region: "North Phoenix",
    territory: "Desert Ridge",
    brokerage: "Desert Key Realty",
    phone: "(480) 555-0138",
    email: "maria@example.com",
    specialties: ["Listings", "Move-up Sellers", "Direct Mail"],
    points: 145,
    status: "Approved"
  },
  {
    id: "david",
    name: "David Kim",
    role: "Agent",
    region: "North Phoenix",
    territory: "Moon Valley",
    brokerage: "Canyon Home Group",
    phone: "(623) 555-0172",
    email: "david@example.com",
    specialties: ["Land", "Investors", "Builder Referrals"],
    points: 95,
    status: "Approved"
  }
];

export const resources: Resource[] = [
  {
    id: "three-values",
    title: "Three Values Worksheet",
    category: "Listing Tools",
    format: "PDF",
    status: "Ready",
    description: "Seller-facing worksheet for Cash, As-Is, and Renovated value conversations.",
    href: "https://example.com/three-values",
    tags: ["seller", "listing", "signature"]
  },
  {
    id: "renovate-sell-kit",
    title: "Renovate to Sell Listing Kit Add-In",
    category: "Listing Tools",
    format: "Canva",
    status: "Ready",
    description: "Co-brandable listing presentation insert for explaining Pay-at-Close renovation options.",
    href: "https://example.com/renovate-to-sell",
    tags: ["canva", "listing", "presentation"]
  },
  {
    id: "chandler-case",
    title: "Chandler RenoSold Case Study",
    category: "Case Studies",
    format: "PDF",
    status: "Ready",
    description: "Before/after proof piece: As-Is $450K to Sold $585K after a three-week renovation.",
    href: "https://example.com/chandler-case-study",
    tags: ["proof", "reno", "seller"]
  },
  {
    id: "reels-scripts",
    title: "Bridge Agent Reels Script Pack",
    category: "Social / Digital",
    format: "Doc",
    status: "Draft",
    description: "Short social scripts for Renovate to Sell, land opportunities, and buyer equity angles.",
    href: "https://example.com/reels",
    tags: ["social", "scripts", "bridge points"]
  },
  {
    id: "land-letter",
    title: "Letter to Land Owners",
    category: "Land Tools",
    format: "PDF",
    status: "Ready",
    description: "Owner outreach letter explaining traditional, investor, and to-be-built paths.",
    href: "https://example.com/land-letter",
    tags: ["land", "investor", "mail"]
  }
];

export const trainings: Training[] = [
  {
    id: "playbook-overview",
    title: "Bridge Agent Playbook Overview",
    length: "1 hr",
    type: "Recorded",
    description: "The core method, including how to introduce the Three Values conversation.",
    href: "https://example.com/playbook-overview"
  },
  {
    id: "deep-dive",
    title: "2.5-Hour Deep Dive Workshop",
    length: "2.5 hrs",
    type: "Workshop",
    description: "Renovate to Sell, Renovate to Buy, land opportunities, and deal structuring.",
    href: "https://example.com/deep-dive"
  },
  {
    id: "deal-lab-replay",
    title: "Deal Lab Replay: Complex Seller Scenarios",
    length: "42 min",
    type: "Live Replay",
    description: "Real-world seller scenarios and how to present the Bridge Agent strategy.",
    href: "https://example.com/deal-lab"
  }
];

export const events: Event[] = [
  {
    id: "coffee",
    title: "Coffee with Brad",
    date: "Thu, May 14",
    time: "8:00 AM",
    type: "Coffee with Brad",
    location: "Zoom link",
    href: "https://zoom.us"
  },
  {
    id: "deal-lab",
    title: "Bridge Agent Deal Lab",
    date: "Tue, May 19",
    time: "2:00 PM",
    type: "Deal Lab",
    location: "Google Meet link",
    href: "https://meet.google.com"
  },
  {
    id: "workshop",
    title: "Founding Member Workshop",
    date: "Fri, May 22",
    time: "10:00 AM",
    type: "Training",
    location: "YouTube Live link",
    href: "https://youtube.com"
  }
];

export const pointActivities: PointActivity[] = [
  { id: "social", label: "Social media post using Bridge Agent strategy", points: 10, proofHint: "Paste the post URL." },
  { id: "print", label: "Print marketing piece used", points: 15, proofHint: "Add a photo or campaign note." },
  { id: "presentation", label: "Three Values document signed at listing presentation", points: 25, proofHint: "Upload or link to signed proof." },
  { id: "deal-lab", label: "Deal Lab submission", points: 10, proofHint: "Describe the deal scenario." },
  { id: "closed-reno", label: "Closed Renovate to Sell transaction using remodeling services", points: 100, proofHint: "Add property address or closing note." },
  { id: "bonus", label: "Admin bonus / manual adjustment", points: 0, proofHint: "Admin configurable." }
];

export const pointSubmissions: PointSubmission[] = [
  {
    id: "ps-1",
    memberName: "Maria Sanchez",
    activity: "Three Values document signed at listing presentation",
    points: 25,
    note: "Seller signed the worksheet after the listing consult.",
    proofUrl: "https://example.com/proof",
    status: "Pending",
    submittedAt: "Today"
  },
  {
    id: "ps-2",
    memberName: "David Kim",
    activity: "Social media post using Bridge Agent strategy",
    points: 10,
    note: "Posted a land opportunity reel.",
    proofUrl: "https://example.com/reel",
    status: "Approved",
    submittedAt: "Yesterday"
  }
];

export const bookRequests: BookRequest[] = [
  {
    id: "br-1",
    memberName: "Maria Sanchez",
    bookType: "Residential Mini Book",
    branding: "Use headshot, Desert Key Realty logo, and direct phone number.",
    quantity: 25,
    status: "New"
  }
];
