import type { MediaId } from './media';

/** An achievement within a role: a grid card in glance, an article in detail. */
export interface Highlight {
  id: string;
  title: string;
  body: string[];
  metrics: string[];
  /** Renders as the role's lead article with a media column. */
  lead?: boolean;
  /** Only read for the lead article. */
  media?: MediaId;
  mediaNote?: string;
  glance: {
    /** Falls back to `title`. */
    title?: string;
    blurb: string;
    metrics: string[];
  };
}
