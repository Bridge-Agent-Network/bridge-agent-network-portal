import type { Resource } from "@/lib/types";

const publicAssets: Resource[] = [
  {
    id: "final-bridge-agent-guide",
    title: "Final Bridge Agent Guide",
    category: "Guides",
    format: "PDF",
    status: "Ready",
    description: "Primary Bridge Agent guide for explaining the network, the seller options position, and the agent-facing promise.",
    href: "/resources/guides/final-bridge-agent-guide-fajardo.pdf",
    tags: ["guide", "seller options", "bridge agent"],
    recommendedUse: "Use during onboarding and as a core reference piece for founding agents."
  },
  {
    id: "every-home-three-values",
    title: "Every Home Has Three Values",
    category: "Listing Tools",
    format: "PDF",
    status: "Ready",
    description: "Seller-facing Three Values piece for cash, as-is, and renovated-value conversations.",
    href: "/resources/guides/every-home-has-three-values.pdf",
    tags: ["three values", "listing", "seller worksheet"],
    recommendedUse: "Use before or during listing presentations to frame the option-first conversation."
  },
  {
    id: "broker-4-page-visual",
    title: "Broker Four-Page Visual",
    category: "Broker Resources",
    format: "PDF",
    status: "Ready",
    description: "Short broker-facing visual packet for explaining how Bridge helps brokerages win more listing conversations.",
    href: "/resources/broker/broker-4-page-visual.pdf",
    previewImage: "/resources/images/broker-package.png",
    tags: ["broker", "presentation", "recruiting"],
    recommendedUse: "Use with brokerage leaders or team leads who need the quick version."
  },
  {
    id: "brokerage-win-more-listings",
    title: "Helping Your Brokerage Win More Listings",
    category: "Broker Resources",
    format: "PDF",
    status: "Ready",
    description: "Broker packet positioning Bridge as an option-first listing advantage for agents and teams.",
    href: "/resources/broker/helping-your-brokerage-win-more-listings.pdf",
    previewImage: "/resources/images/broker-package.png",
    tags: ["brokerage", "listings", "recruiting"],
    recommendedUse: "Use when discussing Bridge with brokerage ownership, managers, or team leaders."
  },
  {
    id: "refined-broker-packet",
    title: "Refined Broker Packet",
    category: "Broker Resources",
    format: "PDF",
    status: "Ready",
    description: "Condensed broker packet for introducing the network and the seller-options strategy.",
    href: "/resources/broker/refined-broker-packet.pdf",
    previewImage: "/resources/images/broker-package.png",
    tags: ["broker", "packet", "network"],
    recommendedUse: "Use as the clean follow-up piece after a broker conversation."
  },
  {
    id: "renovate-mini-book",
    title: "Renovate Mini Book Sample",
    category: "Book Requests",
    format: "PDF",
    status: "Ready",
    description: "Sample mini book agents can request with their own branding.",
    href: "/resources/books/renovate-mini-book-alex-fajardo.pdf",
    tags: ["book", "branding", "renovate to sell"],
    recommendedUse: "Review before submitting a branded book request."
  },
  {
    id: "three-values-email-campaign",
    title: "Three Values Email Campaign",
    category: "Marketing",
    format: "Doc",
    status: "Ready",
    description: "Email campaign copy built around the Three Values seller conversation.",
    href: "/resources/campaigns/three-values-email-campaign.docx",
    tags: ["email", "three values", "database"],
    recommendedUse: "Send to seller database contacts as a value-first nurture sequence."
  },
  {
    id: "three-values-text-messages",
    title: "Three Values Text Messages",
    category: "Marketing",
    format: "Doc",
    status: "Ready",
    description: "Text message copy for starting seller-options conversations around the Three Values concept.",
    href: "/resources/campaigns/three-values-text-messages.docx",
    tags: ["texts", "three values", "seller follow-up"],
    recommendedUse: "Use as short follow-up copy after calls, open houses, or listing consults."
  },
  {
    id: "renovate-to-sell-email-campaign",
    title: "Renovate to Sell Email Campaign",
    category: "Marketing",
    format: "Doc",
    status: "Ready",
    description: "Email campaign copy for sellers who may benefit from improving before listing.",
    href: "/resources/campaigns/renovate-to-sell-email-campaign.docx",
    tags: ["email", "renovate to sell", "seller nurture"],
    recommendedUse: "Use with owners who want a stronger net but are hesitant about repairs."
  },
  {
    id: "reno-to-sell-texts",
    title: "Reno to Sell Texts",
    category: "Marketing",
    format: "Doc",
    status: "Ready",
    description: "Text message copy for Renovate to Sell seller follow-up.",
    href: "/resources/campaigns/reno-to-sell-texts.docx",
    tags: ["texts", "renovation", "follow-up"],
    recommendedUse: "Use as short outreach copy after identifying repair hesitation."
  },
  {
    id: "buy-before-you-sell-email-campaign",
    title: "Buy Before You Sell Email Campaign",
    category: "Marketing",
    format: "Doc",
    status: "Ready",
    description: "Email campaign copy for move-up sellers comparing timing, certainty, and sale strategy.",
    href: "/resources/campaigns/buy-before-you-sell-email-campaign.docx",
    tags: ["email", "move-up", "buy before sell"],
    recommendedUse: "Use for database segments likely to move but worried about sequencing."
  },
  {
    id: "buy-before-you-sell-texts",
    title: "Buy Before You Sell Texts",
    category: "Marketing",
    format: "Doc",
    status: "Ready",
    description: "Short text follow-up copy for buy-before-you-sell conversations.",
    href: "/resources/campaigns/buy-before-you-sell-texts.docx",
    tags: ["texts", "move-up", "seller follow-up"],
    recommendedUse: "Use after a homeowner asks what happens if they find the next home first."
  },
  {
    id: "renovate-to-buy-email-campaign",
    title: "Renovate to Buy Email Campaign",
    category: "Marketing",
    format: "Doc",
    status: "Ready",
    description: "Email campaign for buyers and homeowners thinking through renovation as part of their path.",
    href: "/resources/campaigns/renovate-to-buy-email-campaign.docx",
    tags: ["email", "renovate to buy", "buyers"],
    recommendedUse: "Use when Bridge messaging expands beyond seller-only conversations."
  },
  {
    id: "renovate-to-buy-texts",
    title: "Renovate to Buy Texts",
    category: "Marketing",
    format: "Doc",
    status: "Ready",
    description: "Text message copy for renovate-to-buy conversations.",
    href: "/resources/campaigns/renovate-to-buy-texts.docx",
    tags: ["texts", "renovate to buy", "buyers"],
    recommendedUse: "Use for quick nurture around renovation-backed purchase options."
  },
  {
    id: "four-page-script",
    title: "Four-Page Seller Script",
    category: "Training",
    format: "Doc",
    status: "Ready",
    description: "Short script for explaining the Bridge Agent seller-options conversation.",
    href: "/resources/training/four-page-script.docx",
    tags: ["script", "training", "seller conversation"],
    recommendedUse: "Use as the talk track for new agents practicing the Bridge conversation."
  },
  {
    id: "presentation-outlines",
    title: "Presentation Outlines: 1 Hour and 2.5 Hour",
    category: "Training",
    format: "Doc",
    status: "Ready",
    description: "Training outlines for short and extended Bridge Agent presentations.",
    href: "/resources/training/presentation-outlines.docx",
    tags: ["training", "presentation", "workshop"],
    recommendedUse: "Use to structure onboarding, broker sessions, or live workshops."
  },
  {
    id: "video-youtube-links",
    title: "Video and YouTube Links",
    category: "Training",
    format: "Doc",
    status: "Ready",
    description: "Collected video links and training references from the asset folder.",
    href: "/resources/training/video-youtube-links.docx",
    tags: ["video", "training", "links"],
    recommendedUse: "Use as a staging list before videos are embedded directly in the portal."
  },
  {
    id: "deal-lab-visual",
    title: "The Deal Lab Visual",
    category: "Deal Lab",
    format: "Image",
    status: "Ready",
    description: "Visual asset for Deal Lab pages, meetings, and seller scenario review sessions.",
    href: "/resources/images/the-deal-lab.jpg",
    previewImage: "/resources/images/the-deal-lab.jpg",
    tags: ["deal lab", "opportunities", "training"],
    recommendedUse: "Use on the opportunity/deal review flow and Deal Lab events."
  },
  {
    id: "bridge-flyer",
    title: "Bridge Agent Flyer",
    category: "Marketing",
    format: "Image",
    status: "Ready",
    description: "Flyer visual from the shared asset package.",
    href: "/resources/images/flyer.png",
    previewImage: "/resources/images/flyer.png",
    tags: ["flyer", "marketing", "print"],
    recommendedUse: "Use as a print or preview asset once copy/design are approved."
  },
  {
    id: "bridge-logo-pack",
    title: "Bridge Agent Logo Pack",
    category: "Brand Assets",
    format: "Image",
    status: "Ready",
    description: "Logo options from the shared asset folder for brand review and future template use.",
    href: "/resources/brand/the-bridge-agent-logo.png",
    previewImage: "/resources/brand/the-bridge-agent-logo.png",
    tags: ["logo", "brand", "identity"],
    recommendedUse: "Use as a reference pack while finalizing the portal and Canva brand kit."
  }
];

export const curatedAssets: Resource[] = publicAssets.map((asset) => ({
  visibility: "Public",
  reviewState: "Published",
  ...asset
}));
