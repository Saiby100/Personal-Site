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
  /** Rendered as a footer link on the article; omitted when there is nothing to point at. */
  link?: { href: string; label: string };
  /**
   * Present only on the highlights the glance grid has room for; the rest are
   * detail-only. The grid fits four cards.
   */
  glance?: {
    /** Falls back to `title`. */
    title?: string;
    blurb: string;
    metrics: string[];
  };
}
