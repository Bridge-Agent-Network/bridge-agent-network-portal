import { curatedAssets } from "@/lib/asset-library";
import { isPublishedResource } from "@/lib/resource-links";
import { members, pointActivities, trainings } from "@/lib/seed-data";

export const allMembers = [
  ...members,
  {
    id: "jamie",
    name: "Jamie Carter",
    role: "Agent" as const,
    region: "Scottsdale",
    territory: "Scottsdale, AZ",
    brokerage: "Sonoran Premier Realty",
    phone: "(480) 555-0188",
    email: "jamie@example.com",
    specialties: ["Luxury Sellers", "Seller Options", "Video"],
    points: 3250,
    status: "Approved" as const
  },
  {
    id: "taylor",
    name: "Taylor Morgan",
    role: "Agent" as const,
    region: "Paradise Valley",
    territory: "Paradise Valley, AZ",
    brokerage: "Summit Home Advisors",
    phone: "(480) 555-0111",
    email: "taylor@example.com",
    specialties: ["Listings", "Social Media", "Seller Events"],
    points: 2875,
    status: "Approved" as const
  },
  {
    id: "jordan",
    name: "Jordan Blake",
    role: "Agent" as const,
    region: "Phoenix",
    territory: "Phoenix, AZ",
    brokerage: "Urban Nest Realty",
    phone: "(602) 555-0160",
    email: "jordan@example.com",
    specialties: ["Reno-to-Sell", "Investors", "Deal Desk"],
    points: 2600,
    status: "Approved" as const
  },
  {
    id: "casey",
    name: "Casey Nguyen",
    role: "Agent" as const,
    region: "Mesa",
    territory: "Mesa, AZ",
    brokerage: "East Valley Collective",
    phone: "(480) 555-0177",
    email: "casey@example.com",
    specialties: ["First-time Sellers", "Database Marketing", "Open Houses"],
    points: 2125,
    status: "Approved" as const
  }
];

const rawResources = [
  ...curatedAssets,
  {
    id: "calculator",
    title: "Seller Options Calculator",
    category: "Tools & Calculators",
    format: "Link" as const,
    status: "Ready" as const,
    description: "Simple calculator for comparing estimated net across the four Bridge paths.",
    href: "/calculator",
    tags: ["calculator", "net", "strategy"]
  }
];

export const allResources = rawResources.filter(isPublishedResource);

export const opportunities = [
  {
    id: "opp-1",
    seller: "Inherited Moon Valley property",
    agent: "Maria Sanchez",
    type: "Reno-to-Sell",
    stage: "Options Built",
    value: "$585K",
    updated: "Today",
    notes: "Seller wants top net but has no appetite for managing repairs."
  },
  {
    id: "opp-2",
    seller: "Vacant Scottsdale lot",
    agent: "David Kim",
    type: "Builder / Spec Solution",
    stage: "Property Review",
    value: "$1.5M",
    updated: "Yesterday",
    notes: "Landowner planned to list as vacant land; builder path may change the conversation."
  },
  {
    id: "opp-3",
    seller: "Desert Ridge pre-list consultation",
    agent: "Jamie Carter",
    type: "As-Is Listing",
    stage: "Seller Discovery",
    value: "$720K",
    updated: "May 10",
    notes: "Seller comparing cash certainty against open-market exposure."
  },
  {
    id: "opp-4",
    seller: "Paradise Valley dated estate",
    agent: "Taylor Morgan",
    type: "Hybrid Strategy",
    stage: "Seller Presentation",
    value: "$2.2M",
    updated: "May 9",
    notes: "Needs side-by-side seller options report for family decision makers."
  }
];

export const pipelineStages = ["New Opportunity", "Seller Discovery", "Property Review", "Options Built", "Seller Presentation", "Option Selected", "In Progress", "Closed / Lost"];

export const leaderboardBoards = [
  {
    id: "bridge-points",
    title: "Bridge Points Leaders",
    description: "Overall activity, training, opportunities, marketing, and results.",
    agents: allMembers.map((member, index) => ({ ...member, score: member.points + index * 125 })).sort((a, b) => b.score - a.score)
  },
  {
    id: "social",
    title: "Social Media Influencer",
    description: "Agents using Bridge-approved content to educate sellers.",
    agents: [
      { ...allMembers[5], score: 42 },
      { ...allMembers[4], score: 36 },
      { ...allMembers[2], score: 28 },
      { ...allMembers[0], score: 21 }
    ]
  },
  {
    id: "deals",
    title: "Locked Down Deal Champ",
    description: "Agents moving opportunities into accepted strategy or closed status.",
    agents: [
      { ...allMembers[6], score: 9 },
      { ...allMembers[1], score: 7 },
      { ...allMembers[3], score: 5 },
      { ...allMembers[0], score: 4 }
    ]
  },
  {
    id: "strategy",
    title: "Seller Options Strategist",
    description: "Agents completing options presentations and pathway reports.",
    agents: [
      { ...allMembers[0], score: 17 },
      { ...allMembers[4], score: 16 },
      { ...allMembers[2], score: 13 },
      { ...allMembers[6], score: 11 }
    ]
  }
];

export const certificationModules = [
  { title: "Bridge Agent Orientation", points: 100, complete: true },
  { title: "How to Explain Seller Options", points: 75, complete: true },
  { title: "Cash Offer Conversation", points: 75, complete: true },
  { title: "Reno-to-Sell Math", points: 75, complete: false },
  { title: "Landowner / Builder Opportunity", points: 75, complete: false },
  { title: "Objection Handling", points: 50, complete: false }
];

export const optionDropItems = [
  "Monthly seller email",
  "Seller options postcard",
  "Three social captions",
  "One reel script",
  "Conversation opener",
  "Objection handler"
];

export const searchableItems = [
  ...allResources.map((item) => ({ type: "Resource", title: item.title, detail: item.category, href: `/resources/${item.id}` })),
  ...allMembers.map((item) => ({ type: "Agent", title: item.name, detail: item.territory, href: "/agents" })),
  ...trainings.map((item) => ({ type: "Training", title: item.title, detail: item.type, href: "/training" })),
  ...opportunities.map((item) => ({ type: "Opportunity", title: item.seller, detail: item.type, href: "/opportunities" })),
  ...pointActivities.map((item) => ({ type: "Bridge Points", title: item.label, detail: `${item.points} points`, href: "/points/rewards" }))
];
