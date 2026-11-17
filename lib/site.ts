export const contact = {
  email: "bodawkaaa@gmail.com",
  phone: "+420 724 358 028",
  whatsapp: "https://wa.me/420724358028",
  linkedin: "https://www.linkedin.com/in/bodawka/",
  cv: "#", // TODO: Google Drive PDF link
};

export type CaseCard = {
  slug: string;
  title: string;
  subtitle: string;
  metric: string;
  metricAccent: boolean;
  platform: string;
  cover: string;
  bg: string;
};

export const cases: CaseCard[] = [
  { slug: "jobslab", title: "JobsLab", subtitle: "Speeding up recruiters' daily work in an ATS", metric: "18 of 28 changes shipped", metricAccent: true, platform: "Web", cover: "/img/cover-jobslab.jpg", bg: "#b2c7fe" },
  { slug: "baby-sleep", title: "Baby Sleep", subtitle: "Redesigning the paywall of an AI bedtime-story app", metric: "1.4% → 11.7% paid conversion", metricAccent: true, platform: "Mobile", cover: "/img/cover-babysleep.jpg", bg: "#539dff" },
  { slug: "finmate", title: "FinMate", subtitle: "Tracking cash in a bank-synced finance app", metric: "Concept, usability-tested", metricAccent: false, platform: "Mobile", cover: "/img/cover-finmate.jpg", bg: "#b1a7ff" },
  { slug: "locket", title: "Locket concept", subtitle: "Adding scrapbooking to a photo-widget app", metric: "Concept, no new tabs", metricAccent: false, platform: "Mobile", cover: "/img/cover-locket.jpg", bg: "#ffbe00" },
];
