/**
 * Content fetching with GitHub-first, local-fallback strategy.
 *
 * Priority:
 * 1. GitHub API (live, cached 60s)
 * 2. Local src/data/content.json (always present, updated on each admin save)
 */

import type { SiteContent } from "@/types/content";
import { fetchContentFromGitHub } from "@/lib/github";
import localContent from "@/data/content.json";

export async function getContent(): Promise<SiteContent> {
  try {
    const remote = await fetchContentFromGitHub();
    const rc = remote?.content as Record<string, unknown> | undefined;
    if (rc && rc.site && rc.hero && rc.fleet) {
      return rc as unknown as SiteContent;
    }
  } catch {
    // Fall through to local
  }

  // Always-safe local fallback
  return localContent as unknown as SiteContent;
}

export function getLocalContent(): SiteContent {
  return localContent as unknown as SiteContent;
}
