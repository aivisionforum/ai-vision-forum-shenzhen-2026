export type Locale = "en" | "cn";

export interface TrackDetailContent {
  title: string;
  overview: string;
  keyTopics: string[];
  spotlightTitle: string;
  spotlightText: string;
  outcomesTitle: string;
  outcomes: string[];
}

export interface Translations {
  // Navigation
  nav: {
    home: string;
    tracks: string;
    schedule: string;
    speakers: string;
    venue: string;
    register: string;
    language: string;
  };

  // Hero
  hero: {
    tagline: string;
    dateDisplay: string;
    colocatedWith: string;
    requestInvitation: string;
    learnMore: string;
    invitationOnly: string;
    chathamHouseRule: string;
  };

  // Countdown
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };

  // About Section
  about: {
    title: string;
    subtitle: string;
    guidingQuestionLabel: string;
    guidingQuestion: string;
    guidingQuestionNote: string;
    whyNowTitle: string;
    whyNowIntro: string;
    whyNowShifts: { title: string; description: string }[];
    valuePropositionTitle: string;
    valueProposition: { title: string; description: string }[];
    invitedParticipants: string;
    exclusiveAccess: string;
    inviteOnly: string;
    colocated: string;
    chathamHouseTitle: string;
    chathamHouseDescription: string;
  };

  // Tracks Section
  tracksSection: {
    title: string;
    subtitle: string;
    featured: string;
    narrativeArc?: string;
    tracks: {
      title: string;
      subtitle: string;
      description: string;
      keywords: string[];
    }[];
  };

  // Schedule Section
  scheduleSection: {
    title: string;
    subtitle: string;
    note: string;
    items: { time: string; title: string; subtitle?: string; format?: string }[];
  };

  // Speakers Section
  speakersSection: {
    title: string;
    subtitle: string;
    comingSoon: string;
    comingSoonDescription: string;
    comingSoonNote: string;
  };

  // Panelists Representing Section
  panelistsSection: {
    title: string;
    subtitle: string;
  };

  // Venue Section
  venue: {
    title: string;
    venueDescription: string;
    colocatedDescription: string;
    accessDescription: string;
    viewOnMap: string;
    photosComingSoon: string;
  };

  // CTA Section
  cta: {
    title: string;
    description: string;
    button: string;
    note: string;
  };

  // Footer
  footer: {
    quickLinks: string;
    about: string;
    tracks: string;
    schedule: string;
    speakers: string;
    legal: string;
    privacyPolicy: string;
    contact: string;
    underChathamHouseRule: string;
    connect: string;
    colocatedWith: string;
    copyright: string;
    organizedBy: string;
  };

  // Register Page
  registerPage: {
    backToHome: string;
    title: string;
    description: string;
    fullName: string;
    emailAddress: string;
    affiliation: string;
    primaryTrack: string;
    selectTrack: string;
    trackOptions: string[];
    motivation: string;
    motivationPlaceholder: string;
    chathamAgree: string;
    submitButton: string;
    reviewNote: string;
    placeholderNote: string;
    placeholderDescription: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    orgPlaceholder: string;
  };

  // Contact Page
  contactPage: {
    backToHome: string;
    title: string;
    description: string;
    generalInquiries: string;
    partnership: string;
    pressMedia: string;
    followUs: string;
    quickLinks: string;
    requestInvitation: string;
    exploreTracks: string;
    aboutForum: string;
    noteTitle: string;
    noteDescription: string;
  };

  // Privacy Page
  privacyPage: {
    backToHome: string;
    title: string;
    lastUpdated: string;
    overview: string;
    overviewText: string;
    infoCollect: string;
    infoRegistration: string;
    infoParticipation: string;
    infoAnalytics: string;
    chathamTitle: string;
    chathamText: string;
    dataUsage: string;
    dataUsageIntro: string;
    dataUsageItems: string[];
    dataProtection: string;
    dataProtectionText: string;
    yourRights: string;
    yourRightsIntro: string;
    yourRightsItems: string[];
    contactTitle: string;
    contactText: string;
  };

  // Track Detail Pages
  trackDetail: {
    backToTracks: string;
    keyTopics: string;
    featuredSpeakers: string;
    speakersComingSoon: string;
    speakersCurating: string;
    relatedResources: string;
    interestedInTrack: string;
    requestInvitationToJoin: string;
    requestInvitation: string;
  };

  // Track detail pages (uniform shape)
  trackAgenticSE: TrackDetailContent;
  trackAiNativeOrg: TrackDetailContent;
  trackOpenSource: TrackDetailContent;

  // Logo
  logo: {
    tagline: string;
  };
}
