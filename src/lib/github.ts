/**
 * GitHub API helpers for reading and writing content.json
 * Used server-side only. Never import from client components.
 */

const GITHUB_API = "https://api.github.com";

function getGithubConfig() {
  return {
    token: process.env.GITHUB_TOKEN ?? "",
    owner: process.env.GITHUB_REPO_OWNER ?? "",
    repo: process.env.GITHUB_REPO_NAME ?? "",
    path: process.env.GITHUB_CONTENT_PATH ?? "data/content.json",
  };
}

function githubHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "pooja-tours-webapp",
  };
}

export async function fetchContentFromGitHub(): Promise<{
  content: Record<string, unknown>;
  sha: string;
} | null> {
  const { token, owner, repo, path } = getGithubConfig();

  if (!token || !owner || !repo) return null;

  try {
    const res = await fetch(
      `${GITHUB_API}/repos/${owner}/${repo}/contents/${path}`,
      {
        headers: githubHeaders(token),
        next: { revalidate: 60 }, // cache for 60s, auto-revalidate
      }
    );

    if (!res.ok) return null;

    const json = await res.json();
    const decoded = Buffer.from(json.content, "base64").toString("utf-8");
    return {
      content: JSON.parse(decoded),
      sha: json.sha,
    };
  } catch {
    return null;
  }
}

export async function getGitHubFileSha(): Promise<string | null> {
  const { token, owner, repo, path } = getGithubConfig();
  if (!token || !owner || !repo) return null;

  try {
    const res = await fetch(
      `${GITHUB_API}/repos/${owner}/${repo}/contents/${path}`,
      { headers: githubHeaders(token) }
    );
    if (!res.ok) return null;
    const json = await res.json();
    return json.sha ?? null;
  } catch {
    return null;
  }
}

export async function saveContentToGitHub(
  content: Record<string, unknown>,
  sha: string
): Promise<{ ok: boolean; error?: string }> {
  const { token, owner, repo, path } = getGithubConfig();

  if (!token || !owner || !repo) {
    return { ok: false, error: "GitHub config missing" };
  }

  try {
    const encoded = Buffer.from(JSON.stringify(content, null, 2)).toString(
      "base64"
    );

    const res = await fetch(
      `${GITHUB_API}/repos/${owner}/${repo}/contents/${path}`,
      {
        method: "PUT",
        headers: {
          ...githubHeaders(token),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "chore: update site content via admin panel",
          content: encoded,
          sha,
        }),
      }
    );

    if (!res.ok) {
      const err = await res.json();
      return { ok: false, error: err.message ?? "GitHub write failed" };
    }

    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}
