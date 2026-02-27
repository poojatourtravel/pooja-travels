/**
 * Content fetching with GitHub-first strategy.
 *
 * IMPORTANT: At runtime, this fetches from GitHub with no caching (cache: 'no-store').
 * At build time, if GitHub is unavailable, falls back to local content.json.
 * 
 * Why the fallback exists:
 * - Build-time static generation (next build) needs content to generate pages
 * - Admin updates push to GitHub and local simultaneously for data consistency
 * - However, at runtime, the app prefers fresh GitHub data with no caching
 * 
 * Priority:
 * 1. GitHub API (live, no cache, immediate updates from admin panel)
 * 2. Local src/data/content.json (fallback for build-time only, synced on admin save)
 */

import type { SiteContent } from "@/types/content";
import { fetchContentFromGitHub } from "@/lib/github";
import localContent from "@/data/content.json";

export async function getContent(): Promise<SiteContent> {
  // Try to fetch from GitHub first (no cache, always fresh)
  try {
    const remote = await fetchContentFromGitHub();
    const rc = remote?.content as Record<string, unknown> | undefined;

    if (rc && rc.site && rc.hero && rc.fleet) {
      return rc as unknown as SiteContent;
    }
  } catch (e) {
    // GitHub fetch failed - log and fall through to local
    console.warn("GitHub fetch failed:", e);
  }

  // Fallback to local content (used during build-time or if GitHub is unavailable)
  console.warn("Using local fallback content. This should only happen during build or GitHub downtime.");
  return localContent as unknown as SiteContent;
}

export function getLocalContent(): SiteContent {
  return localContent as unknown as SiteContent;
}
