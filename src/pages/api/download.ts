// src/pages/api/download.ts
// Same-origin download proxy: streams a media file through your own server and
// forces a file download (Content-Disposition: attachment).
// Usage: /api/download?url=<media url>&type=.mp4|.mp3|.jpg&title=<file name>
//
// Safety rules (instead of a fixed host list, because the downloader library
// returns links on several different CDNs):
//   1. https only
//   2. host must resolve to a PUBLIC IP (no localhost / private / cloud-metadata ranges)
//   3. every redirect hop is re-checked
//   4. request must come from your own site (blocks hotlinking by other sites)
import type { APIRoute } from "astro";
import { lookup } from "node:dns/promises";
import { isIP } from "node:net";

export const prerender = false;

const TYPES: Record<string, string> = {
  ".mp4": "video/mp4",
  ".mp3": "audio/mpeg",
  ".jpg": "image/jpeg",
};

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

function isPrivateV4(ip: string) {
  const [a, b] = ip.split(".").map(Number);
  return (
    a === 0 ||
    a === 10 ||
    a === 127 ||
    (a === 100 && b >= 64 && b <= 127) ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168) ||
    (a === 192 && b === 0) ||
    (a === 198 && (b === 18 || b === 19)) ||
    a >= 224
  );
}

function isPrivateIp(ip: string) {
  const v = isIP(ip);
  if (v === 4) return isPrivateV4(ip);
  if (v === 6) {
    const x = ip.toLowerCase();
    if (x === "::" || x === "::1") return true;
    if (x.startsWith("fc") || x.startsWith("fd")) return true; // fc00::/7
    if (/^fe[89ab]/.test(x)) return true; // fe80::/10
    const mapped = x.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/);
    if (mapped) return isPrivateV4(mapped[1]);
    return false;
  }
  return true;
}

async function assertPublicHttps(u: URL) {
  if (u.protocol !== "https:") throw new Error("only https allowed");
  const host = u.hostname.replace(/^\[|\]$/g, "");
  if (isIP(host)) {
    if (isPrivateIp(host)) throw new Error("private address");
    return;
  }
  if (host === "localhost" || host.endsWith(".localhost") || host.endsWith(".internal")) {
    throw new Error("private host");
  }
  const addrs = await lookup(host, { all: true });
  if (!addrs.length || addrs.some((a) => isPrivateIp(a.address))) {
    throw new Error("host resolves to a private address");
  }
}

function fromOwnSite(request: Request, url: URL) {
  const sfs = request.headers.get("sec-fetch-site");
  if (sfs) return sfs === "same-origin" || sfs === "none";
  const ref = request.headers.get("referer") || request.headers.get("origin");
  if (!ref) return true; // some browsers/privacy tools strip both
  try {
    return new URL(ref).host === url.host;
  } catch {
    return false;
  }
}

function safeName(title: string, ext: string) {
  const base =
    (title || "tiktok")
      .replace(/\.(mp4|mp3|jpg)$/i, "")
      .replace(/[^\w.\- ]+/g, "_")
      .slice(0, 80) || "tiktok";
  return `${base}${ext}`;
}

async function fetchFollowing(first: URL) {
  let current = first;
  for (let hop = 0; hop < 5; hop++) {
    await assertPublicHttps(current);
    const headers: Record<string, string> = { "User-Agent": UA, Accept: "*/*" };
    if (/(^|\.)(tiktok\.com|tiktokv\.com|tiktokcdn\.com|tiktokv\.us)$/i.test(current.hostname)) {
      headers.Referer = "https://www.tiktok.com/";
    }
    const res = await fetch(current.toString(), {
      redirect: "manual",
      headers,
      signal: AbortSignal.timeout(25000),
    });
    if (res.status >= 300 && res.status < 400 && res.headers.get("location")) {
      current = new URL(res.headers.get("location")!, current);
      continue;
    }
    return { res, finalHost: current.hostname };
  }
  throw new Error("too many redirects");
}

export const GET: APIRoute = async ({ request, url }) => {
  if (!fromOwnSite(request, url)) return new Response("Forbidden", { status: 403 });

  const target = url.searchParams.get("url");
  const typeParam = url.searchParams.get("type") || ".mp4";
  const ext = TYPES[typeParam] ? typeParam : ".mp4";
  const title = url.searchParams.get("title") || "tiktok";

  if (!target) return new Response("Missing url", { status: 400 });

  let parsed: URL;
  try {
    parsed = new URL(target);
  } catch {
    return new Response("Invalid url", { status: 400 });
  }

  try {
    const { res: upstream, finalHost } = await fetchFollowing(parsed);

    if (!upstream.ok || !upstream.body) {
      console.error("download proxy: upstream", upstream.status, finalHost);
      return new Response(`Source returned ${upstream.status} (${finalHost})`, { status: 502 });
    }

    const headers = new Headers({
      "Content-Type": TYPES[ext],
      "Content-Disposition": `attachment; filename="${safeName(title, ext)}"`,
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    });
    const len = upstream.headers.get("content-length");
    if (len) headers.set("Content-Length", len);

    return new Response(upstream.body, { status: 200, headers });
  } catch (e: any) {
    console.error("download proxy failed:", parsed.hostname, e?.message || e);
    const blocked = /private|only https|redirects/.test(e?.message || "");
    return new Response(blocked ? "Blocked URL" : "Download failed", {
      status: blocked ? 403 : 502,
    });
  }
};
