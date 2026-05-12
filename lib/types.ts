export type Role = "Admin" | "Regional Admin" | "Agent";

export type Member = {
  id: string;
  name: string;
  role: Role;
  region: string;
  territory: string;
  brokerage: string;
  phone: string;
  email: string;
  specialties: string[];
  points: number;
  status: "Approved" | "Pending";
};

export type Resource = {
  id: string;
  title: string;
  category: string;
  format: "PDF" | "Canva" | "Deck" | "Video" | "Doc" | "Link";
  status: "Ready" | "Draft" | "Coming Soon";
  description: string;
  href: string;
  tags: string[];
};

export type Training = {
  id: string;
  title: string;
  length: string;
  type: "Recorded" | "Live Replay" | "Workshop";
  description: string;
  href: string;
};

export type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  type: "Coffee with Brad" | "Deal Lab" | "Training";
  location: string;
  href: string;
};

export type PointActivity = {
  id: string;
  label: string;
  points: number;
  proofHint: string;
};

export type PointSubmission = {
  id: string;
  memberName: string;
  activity: string;
  points: number;
  note: string;
  proofUrl: string;
  status: "Pending" | "Approved" | "Rejected";
  submittedAt: string;
};

export type BookRequest = {
  id: string;
  memberName: string;
  bookType: string;
  branding: string;
  quantity: number;
  status: "New" | "In Review" | "Fulfilled";
};
