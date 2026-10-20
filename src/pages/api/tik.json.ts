// src/pages/api/tik.json.ts
import type { APIRoute } from "astro";

export const prerender = false;

import TikTok from "@tobyg74/tiktok-api-dl";

async function resolveShortUrl(url: string): Promise<string> {
  try {
    console.log("Resolving short URL:", url);
    
    const response = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1',
      },
      signal: AbortSignal.timeout(10000)
    });
    
    const resolvedUrl = response.url;
    console.log("Resolved to:", resolvedUrl);
    return resolvedUrl;
  } catch (error: any) {
    console.log("URL resolution failed:", error.message);
    return url;
  }
}

// Helper function to safely extract stats from multiple possible paths
function extractStats(result: any) {
  console.log("=== EXTRACTING STATS ===");
  console.log("Full result object keys:", Object.keys(result));
  
  const stats = {
    likes: result.statistics?.diggCount 
      || result.stats?.diggCount 
      || result.diggCount
      || result.statistics?.likeCount 
      || result.stats?.likeCount
      || 0,
      
    views: result.statistics?.playCount 
      || result.stats?.playCount 
      || result.playCount
      || result.statistics?.viewCount
      || result.stats?.viewCount
      || 0,
      
    comments: result.statistics?.commentCount 
      || result.stats?.commentCount 
      || result.commentCount
      || 0,
      
    shares: result.statistics?.shareCount 
      || result.stats?.shareCount 
      || result.shareCount
      || 0,
      
    collects: result.statistics?.collectCount
      || result.stats?.collectCount
      || result.collectCount
      || 0
  };
  
  console.log("Extracted stats:", stats);
  console.log("======================");
  
  return stats;
}

function transformLibraryResponse(libraryData: any) {
  const result = libraryData.result;
  if (!result) return null;

  console.log("=== TRANSFORMING LIBRARY RESPONSE ===");
  console.log("Full author object:", JSON.stringify(result.author, null, 2));

  const thumbnail = result.cover?.[0] 
    || result.originCover?.[0] 
    || result.video?.cover?.[0] 
    || result.video?.originCover?.[0]
    || result.dynamicCover?.[0] 
    || result.video?.dynamicCover?.[0]
    || null;

  const stats = extractStats(result);

  // Reject response if views are suspiciously low
  if (stats.views === 0 || stats.views < 100) {
    console.log("⚠️ Library returned suspiciously low views. Throwing to trigger fallback.");
    throw new Error("Invalid views count from library");
  }

  // Extract avatar with comprehensive fallback options
  let avatar = null;
  
  // Try different avatar properties
  if (result.author?.avatarLarger) {
    avatar = Array.isArray(result.author.avatarLarger) 
      ? result.author.avatarLarger[0] 
      : result.author.avatarLarger;
  }
  
  if (!avatar && result.author?.avatarMedium) {
    avatar = Array.isArray(result.author.avatarMedium) 
      ? result.author.avatarMedium[0] 
      : result.author.avatarMedium;
  }
  
  if (!avatar && result.author?.avatarThumb) {
    avatar = Array.isArray(result.author.avatarThumb) 
      ? result.author.avatarThumb[0] 
      : result.author.avatarThumb;
  }
  
  if (!avatar && result.author?.avatar) {
    avatar = Array.isArray(result.author.avatar) 
      ? result.author.avatar[0] 
      : result.author.avatar;
  }

  console.log("Avatar extraction result:", {
    avatarLarger: result.author?.avatarLarger,
    avatarMedium: result.author?.avatarMedium,
    avatarThumb: result.author?.avatarThumb,
    avatar: result.author?.avatar,
    finalAvatar: avatar
  });

  return {
    status: "success",
    result: {
      type: result.type || (result.images ? "image" : "video"),
      author: {
        avatar: avatar,
        nickname: result.author?.nickname || result.author?.username || result.author?.uniqueId || "Unknown Author"
      },
      desc: result.desc || result.title || "No description available",
      videoSD: result.video?.downloadAddr?.[0] || result.video?.playAddr?.[0] || null,
      videoHD: result.video?.downloadAddr?.[1] || result.video?.downloadAddr?.[0] || result.video?.playAddr?.[1] || result.video?.playAddr?.[0] || null,
      video_hd: result.video?.downloadAddr?.[0] || result.video?.playAddr?.[0] || null,
      videoWatermark: result.video?.playAddr?.[0] || result.video?.wmplay || null,
      music: result.music?.playUrl?.[0] || result.music?.play || null,
      uploadDate: result.createTime ? new Date(result.createTime * 1000).toISOString() : null,
      images: result.images || null,
      thumbnail: thumbnail,
      likes: stats.likes,
      views: stats.views,
      comments: stats.comments,
      shares: stats.shares
    }
  };
}

const UA_MOBILE =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1';

function withTimeout<T>(p: Promise<T>, ms: number, label: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error(`${label} timeout`)), ms);
    p.then(
      (v) => { clearTimeout(t); resolve(v); },
      (e) => { clearTimeout(t); reject(e); }
    );
  });
}

async function libraryVersion(url: string, version: string) {
  const result: any = await withTimeout(
    TikTok.Downloader(url, { version: version as any, showOriginalResponse: false }),
    8000,
    `library ${version}`
  );
  if (result.status === "success" && result.result) {
    const t = transformLibraryResponse(result);
    if (t && t.result) return t;
  }
  throw new Error(result.message || `library ${version} returned no valid data`);
}

async function tikwm(url: string) {
  const res = await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url.trim())}`, {
    headers: { 'User-Agent': UA_MOBILE },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`TikWM HTTP ${res.status}`);
  const data: any = await res.json();
  if (data.code !== 0 || !data.data) throw new Error(data.msg || "TikWM returned no data");
  const d = data.data;
  return {
    status: "success",
    result: {
      type: d.images ? "image" : "video",
      author: {
        avatar: d.author?.avatar || null,
        nickname: d.author?.unique_id || d.author?.nickname || "Unknown Author",
      },
      desc: d.title || "No description available",
      videoSD: d.play || null,
      videoHD: d.hdplay || d.play || null,
      video_hd: d.hdplay || null,
      videoWatermark: d.wmplay || null,
      music: d.music || null,
      uploadDate: d.create_time ? new Date(d.create_time * 1000).toISOString() : null,
      images: d.images || null,
      thumbnail: d.cover || d.origin_cover || d.dynamic_cover || null,
      likes: d.digg_count || 0,
      views: d.play_count || 0,
      comments: d.comment_count || 0,
      shares: d.share_count || 0,
    },
  };
}

// Run the fastest sources in parallel; the first valid answer wins.
async function fetchTikTokData(url: string) {
  try {
    return await Promise.any([tikwm(url), libraryVersion(url, "v3")]);
  } catch (e) {
    console.log("Primary sources failed, trying older library versions in parallel");
  }
  return await Promise.any([libraryVersion(url, "v2"), libraryVersion(url, "v1")]);
}

export const GET: APIRoute = async ({ request, url: requestUrl }) => {
  // Add CORS headers
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "public, max-age=300",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  // Handle OPTIONS request for CORS
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers
    });
  }

  try {
    console.log("\n" + "=".repeat(50));
    console.log("=== NEW TIKTOK API REQUEST ===");
    console.log("=".repeat(50));
    console.log("Request URL:", requestUrl.href);
    console.log("Request method:", request.method);
    
    const url = requestUrl.searchParams.get("url");
    console.log("URL parameter:", url);
    
    if (!url) {
      return new Response(JSON.stringify({
        error: "URL parameter is required",
        status: "error"
      }), {
        status: 400,
        headers
      });
    }
    
    if (!url.includes("tiktok.com") && !url.includes("douyin")) {
      return new Response(JSON.stringify({
        error: "Invalid URL. Please provide a valid TikTok URL.",
        status: "error"
      }), {
        status: 400,
        headers
      });
    }
    
    let processedUrl = url;
    try {
      const u = new URL(url);
      if (/tiktok\.com$/.test(u.hostname) && u.pathname.includes('/video/')) {
        processedUrl = u.origin + u.pathname; // drop ?is_from_webapp=1&sender_device=pc
      }
    } catch {}
    if (url.includes('/t/') || url.includes('vm.tiktok.com')) {
      processedUrl = await resolveShortUrl(url);
    }
    
    console.log("Processing URL:", processedUrl);

    let data: any;
    try {
      data = await fetchTikTokData(processedUrl);
    } catch (e: any) {
      throw new Error("Both library and fallback services failed to return valid data");
    }

    if (!data || !data.result) {
      throw new Error("No data returned from any service");
    }
    
    const hasVideo = data.result.videoSD || data.result.videoHD || data.result.video_hd || data.result.videoWatermark;
    const hasAudio = data.result.music;
    const hasImages = data.result.images;
    
    if (!hasVideo && !hasAudio && !hasImages) {
      return new Response(JSON.stringify({
        error: "This video appears to be private, deleted, or not available for download.",
        status: "error"
      }), {
        status: 404,
        headers
      });
    }
    
    console.log("\n" + "=".repeat(50));
    console.log("=== FINAL RESPONSE DATA ===");
    console.log("Stats being returned:", {
      likes: data.result.likes,
      views: data.result.views,
      comments: data.result.comments,
      shares: data.result.shares
    });
    console.log("=".repeat(50) + "\n");
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers
    });
    
  } catch (error: any) {
    console.error("\n" + "=".repeat(50));
    console.error("=== FINAL ERROR ===");
    console.error("Error:", error.message || error);
    console.error("Stack:", error.stack);
    console.error("=".repeat(50) + "\n");
    
    let errorMessage = "Unable to fetch TikTok video data.";
    let statusCode = 500;
    
    if (error.message?.includes("403")) {
      errorMessage = "TikTok is blocking requests. Try again later.";
      statusCode = 403;
    } else if (error.message?.includes("404") || error.message?.includes("private") || error.message?.includes("deleted")) {
      errorMessage = "Video not found or is private.";
      statusCode = 404;
    } else if (error.message?.includes("timeout")) {
      errorMessage = "Request timed out. Service may be busy.";
      statusCode = 408;
    }
    
    return new Response(JSON.stringify({
      error: errorMessage,
      status: "error",
      details: error.message,
      timestamp: new Date().toISOString()
    }), {
      status: statusCode,
      headers
    });
  }
};

// Add POST handler for compatibility
export const POST: APIRoute = GET;