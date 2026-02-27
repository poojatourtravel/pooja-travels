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
  const remote = await fetchContentFromGitHub();
  const rc = remote?.content as Record<string, unknown> | undefined;

  if (rc && rc.site && rc.hero && rc.fleet) {
    return rc as unknown as SiteContent;
  }

  // If remote fetch failed or returned invalid content, throw an error
  // instead of falling back to local content
  throw new Error("Failed to fetch content from GitHub. Please check configuration or try again.");
}

export function getLocalContent(): SiteContent {
  return localContent as unknown as SiteContent;
}
