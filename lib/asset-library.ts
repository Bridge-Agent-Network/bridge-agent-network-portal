import type { Resource } from "@/lib/types";

const dropboxFolderUrl = "https://www.dropbox.com/scl/fo/7zap34pqt41sov5vki281/AOMbiPD3MgSrMAWvKpdAgnk?rlkey=1ukpo7oyvjdfypg96x771o8ap";

function dropboxAsset(path: string) {
  return `${dropboxFolderUrl}&preview=${encodeURIComponent(path)}&dl=1`;
}

function dropboxPreview(path: string) {
  return `${dropboxFolderUrl}&preview=${encodeURIComponent(path)}&raw=1`;
}

const publicAssets: Resource[] = [
  {
    id: "final-bridge-agent-guide",
    title: "Final Bridge Agent Guide",
    category: "Guides",
    format: "PDF",
    status: "Ready",
    description: "Primary Bridge Agent guide for explaining the network, the seller options position, and the agent-facing promise.",
    href: dropboxAsset("Assets/Final Bridge Agent Guide Fajardo no crop or bleed.pdf"),
    previewHref: dropboxPreview("Assets/Final Bridge Agent Guide Fajardo no crop or bleed.pdf"),
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
    href: dropboxAsset("Assets/Michelle McCaughey_Every Home Has 3 Values_DJ (4) (1).pdf"),
    previewHref: dropboxPreview("Assets/Michelle McCaughey_Every Home Has 3 Values_DJ (4) (1).pdf"),
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
    href: dropboxAsset("Assets/Broker_4page_visual (1).pdf"),
    previewHref: dropboxPreview("Assets/Broker_4page_visual (1).pdf"),
    previewImage: dropboxAsset("Assets/Broker Package.png"),
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
    href: dropboxAsset("Assets/Helping Your Brokerage Win More Listings (2) (1).pdf"),
    previewHref: dropboxPreview("Assets/Helping Your Brokerage Win More Listings (2) (1).pdf"),
    previewImage: dropboxAsset("Assets/Broker Package.png"),
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
    href: dropboxAsset("Assets/Refined_Broker_Packet (1).pdf"),
    previewHref: dropboxPreview("Assets/Refined_Broker_Packet (1).pdf"),
    previewImage: dropboxAsset("Assets/Broker Package.png"),
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
    href: dropboxAsset("Assets/RENOVATE MINI BOOK ALEX FAJARDO Without Bleed.pdf.pdf.pdf"),
    previewHref: dropboxPreview("Assets/RENOVATE MINI BOOK ALEX FAJARDO Without Bleed.pdf.pdf.pdf"),
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
    href: dropboxAsset("Assets/Three Values Email Campaign.docx"),
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
    href: dropboxAsset("Assets/Three Values Text Messages.docx"),
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
    href: dropboxAsset("Assets/Renovate to Sell Email Campaign.docx"),
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
    href: dropboxAsset("Assets/Reno to Sell Texts.docx"),
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
    href: dropboxAsset("Assets/Buy Before you Sell email Campaign.docx"),
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
    href: dropboxAsset("Assets/Buy Before you Sell Texts.docx"),
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
    href: dropboxAsset("Assets/Renovate to Buy email Campaign.docx"),
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
    href: dropboxAsset("Assets/Renovate to Buy Texts.docx"),
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
    href: dropboxAsset("4 page script.docx"),
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
    href: dropboxAsset("Assets/presentations outlines (1 hr & 2.5 hr).docx"),
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
    href: dropboxAsset("Assets/Copy of Video youtube links.docx"),
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
    href: dropboxAsset("Assets/The Deal Lab.jpg"),
    previewImage: dropboxAsset("Assets/The Deal Lab.jpg"),
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
    href: dropboxAsset("Assets/Flyer.PNG"),
    previewImage: dropboxAsset("Assets/Flyer.PNG"),
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
    href: dropboxAsset("Assets/The Bridge Agent logo.png"),
    previewImage: dropboxAsset("Assets/The Bridge Agent logo.png"),
    tags: ["logo", "brand", "identity"],
    recommendedUse: "Use as a reference pack while finalizing the portal and Canva brand kit."
  }
];

export const curatedAssets: Resource[] = publicAssets.map((asset) => ({
  visibility: "Public",
  reviewState: "Published",
  ...asset
}));
