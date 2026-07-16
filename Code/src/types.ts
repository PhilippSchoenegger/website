/**
 * Shared TypeScript type definitions for the website.
 */

export interface Link {
  text: string;
  url: string;
}

export interface Fellowship {
  title: string;
  organization: string;
  url: string;
}

export interface Publication {
  year: number;
  title: string;
  journal?: string;
  coauthors?: string;
  url?: string;
  abstract?: string;
  featured?: boolean;
  featuredOrder?: number;
}

export interface NavItem {
  id: string;
  title: string;
  intro?: string;
  period?: string;
  note?: string;
  selected_media_coverage?: Link[];
  selected_reviewing?: string[];
  fellowships?: Fellowship[];
  selected_articles?: Link[];
  publications?: Publication[];
  children?: NavItem[];
}
