import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import {
  saveContentToGitHub,
  getGitHubFileSha,
} from "@/lib/github";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  // Auth check
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { content } = body;

    if (!content || typeof content !== "object") {
      return NextResponse.json({ error: "Invalid content" }, { status: 400 });
    }

    // 1. Write to local fallback file (always succeeds if filesystem is writable)
    const localPath = path.join(process.cwd(), "src", "data", "content.json");
    let localWriteOk = false;
    try {
      await writeFile(localPath, JSON.stringify(content, null, 2), "utf-8");
      localWriteOk = true;
    } catch (e) {
      console.error("Local write failed:", e);
    }

    // 2. Write to GitHub (may fail if repo not configured or offline)
    let githubOk = false;
    let githubError: string | undefined;
    try {
      const sha = await getGitHubFileSha();
      if (sha) {
        const result = await saveContentToGitHub(content, sha);
        githubOk = result.ok;
        githubError = result.error;
      } else {
        githubError = "Could not fetch SHA from GitHub (repo may not exist yet or token expired)";
      }
    } catch (e) {
      githubError = String(e);
    }

    if (!localWriteOk && !githubOk) {
      return NextResponse.json(
        {
          error: "Both local and GitHub writes failed",
          githubError,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      local: localWriteOk,
      github: githubOk,
      githubError: githubOk ? undefined : githubError,
      message: githubOk
        ? "Saved to GitHub and local fallback."
        : `Saved to local fallback only. GitHub: ${githubError}`,
    });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
