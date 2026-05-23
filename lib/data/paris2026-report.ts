/**
 * Forum report data — placeholder for AI Vision Forum Shenzhen 2026.
 *
 * The arrays are intentionally empty pre-event. Components that consume them
 * (ExecutiveSummary, HeadlineFindings, PanelGrid, PostEventPanelContent) only
 * render when EVENT_CONFIG.status === 'completed'; until then they no-op.
 *
 * After the forum: populate these with Shenzhen findings. The file name is
 * preserved (paris2026-report.ts) so existing imports don't need updating;
 * it should be renamed to shenzhen2026-report.ts once curation begins.
 */

export type Conviction = {
  heading: string;
  body: string;
  example?: string;
};

export type Finding = {
  n: number;
  bold: string;
  body: string;
};

export type PanelSummary = {
  slug: "vibe-coding" | "education" | "governance" | "public-good";
  num: 1 | 2 | 3 | 4;
  title: string;
  subtitle: string;
  time: string;
  tldr: string;
  infographic: string;
  recommendationsInfographic: string;
};

export type DownloadItem = {
  label: string;
  href: string;
  meta: string;
};

export const CONVICTIONS: Conviction[] = [];
export const FINDINGS: Finding[] = [];
export const PANELS: PanelSummary[] = [];
export const DOWNLOADS: DownloadItem[] = [];

export const FORUM_STATS = {
  duration: "1 day",
  panels: 4,
  participants: "100–150",
  organisations: 0,
  pagesOfReport: 0,
};

export const PARIS_INITIATIVE: string[] = [];
