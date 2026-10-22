// src/components/ResultSection.tsx
import { createSignal, For, Show } from "solid-js";
import AdBanner from "./AdBanner";
import { SITE_NAME, DOWNLOAD_PROXY } from "./siteConfig";

interface ResultSectionProps {
  data: {
    status: string | null;
    result: {
      type: string | null;
      author: {
        avatar: string | null;
        nickname: string | null;
      } | null;
      desc: string | null;
      videoSD: string | null;
      videoHD: string | null;
      video_hd: string | null;
      videoWatermark: string | null;
      music: string | null;
      uploadDate?: string | null;
      thumbnail?: string | null;
      views?: number;
      likes?: number;
      comments?: number;
      shares?: number;
    } | null;
  };
  /** The cleaned TikTok link the user submitted (used by "Copy link" / "Share"). */
  sourceUrl: string;
  getVideoUrl: () => string;
  getAuthorInfo: () => { avatar: string; nickname: string };
  getSafeFilename: () => string;
  onDownloadClick: (downloadUrl: string, filename: string) => void;
  /** Called by "Download another" – resets the page back to the input box. */
  onReset: () => void;
}

type FileKind = "video" | "audio" | "watermark" | "avatar" | "cover";
type FileExt = ".mp4" | ".mp3" | ".jpg";

interface FileRow {
  key: string;
  label: string;
  sub: string;
  kind: FileKind;
  ext: FileExt;
  url: string;
  /** Avatar downloads don't open the ad tab (same as the old behaviour). */
  noAd?: boolean;
}

// ─── Small helpers ──────────────────────────────────────────────────────────
const fmt = (n: number) =>
  n >= 1_000_000
    ? (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M"
    : n >= 1_000
    ? (n / 1_000).toFixed(1).replace(/\.0$/, "") + "k"
    : String(n);

const TikTokIcon = (p: { size: number }) => (
  <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.6 3h-2.7v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .6 0 .8.1V10a5.3 5.3 0 1 0 4.5 5.2V9a6.6 6.6 0 0 0 3.8 1.2V7.5A3.8 3.8 0 0 1 16.6 3z" />
  </svg>
);

const DownloadIcon = (p: { size: number }) => (
  <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 4v12m0 0-5-5m5 5 5-5M5 20h14" />
  </svg>
);

const RowIcon = (p: { kind: FileKind }) => {
  if (p.kind === "audio") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    );
  }
  if (p.kind === "cover") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    );
  }
  if (p.kind === "avatar") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 3v18M17 3v18M3 8h4M3 16h4M17 8h4M17 16h4" />
    </svg>
  );
};

function ResultSection(props: ResultSectionProps) {
  if (!props.data || !props.data.result) {
    return null;
  }

  const result = props.data.result;
  const authorInfo = props.getAuthorInfo();

  const [preview, setPreview] = createSignal(false);
  // Image preview (cover photo / profile picture)
  const [imagePreview, setImagePreview] = createSignal<{ src: string; alt: string } | null>(null);
  const [activeThumb, setActiveThumb] = createSignal<"cover" | "avatar">("cover");
  const [flash, setFlash] = createSignal("");
  const [saved, setSaved] = createSignal<Record<string, boolean>>({});

  // ─── Ad banner ref + programmatic click ───────────────────────────────────
  // AdBanner calls this once mounted, giving us a handle to the ad container
  // so a download click can also fire a click on the banner ad.
  let adBannerEl: HTMLDivElement | undefined;

  const handleAdRef = (el: HTMLDivElement) => {
    adBannerEl = el;
  };

  /**
   * Fires a synthetic click on the banner ad.
   * Tries the deepest <a> / <iframe> / [onclick] first, then the container.
   */
  const triggerBannerAdClick = () => {
    if (!adBannerEl) return;

    const anchor = adBannerEl.querySelector<HTMLAnchorElement>("a[href]");
    if (anchor) {
      anchor.click();
      return;
    }

    const iframe = adBannerEl.querySelector<HTMLIFrameElement>("iframe");
    if (iframe && iframe.src) {
      window.open(iframe.src, "_blank");
      return;
    }

    const clickable = adBannerEl.querySelector<HTMLElement>("[onclick]");
    if (clickable) {
      clickable.click();
      return;
    }

    adBannerEl.click();
  };

  /**
   * Download + ads:
   *  1. parent handler → opens the direct-link ad tab and starts the file download
   *  2. then clicks the banner ad shown on the page (small delay so the browser's
   *     popup heuristics don't swallow it)
   */
  const handleDownloadWithAd = (href: string, filename: string) => {
    props.onDownloadClick(href, filename);
    setTimeout(triggerBannerAdClick, 150);
  };

  // ─── Filename + proxy helpers (unchanged behaviour) ───────────────────────
  const generateFilename = (baseName: string, type: FileKind) => {
    let filename = (baseName || "tiktok-video").trim();

    if (type === "audio") filename += "_audio";
    else if (type === "watermark") filename += "_watermark";
    else if (type === "avatar") filename += "_avatar";
    else if (type === "cover") filename += "_cover";

    if (!filename.startsWith(SITE_NAME)) {
      filename = `${SITE_NAME}_${filename}`;
    }

    if (type === "avatar" || type === "cover") {
      if (!filename.toLowerCase().endsWith(".jpg")) filename += ".jpg";
    } else if (type === "audio") {
      if (!filename.toLowerCase().endsWith(".mp3")) filename += ".mp3";
    } else {
      if (!filename.toLowerCase().endsWith(".mp4")) filename += ".mp4";
    }

    return filename;
  };

  // `title` is the final branded filename so the saved file carries the site name
  const proxyUrl = (mediaUrl: string, ext: FileExt, filename: string) =>
    `${DOWNLOAD_PROXY}?url=${encodeURIComponent(mediaUrl)}&type=${ext}&title=${encodeURIComponent(filename)}`;

  const triggerFileDownload = (href: string, filename: string) => {
    const link = document.createElement("a");
    link.href = href;
    link.download = filename;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    setTimeout(() => document.body.removeChild(link), 100);
  };

  // ─── Rows shown in the card ───────────────────────────────────────────────
  const hdUrl = result.videoHD || result.video_hd;
  const rows: FileRow[] = [];

  if (hdUrl) {
    rows.push({ key: "hd", label: "HD · No watermark", sub: "MP4", kind: "video", ext: ".mp4", url: hdUrl });
  }
  if (result.videoSD) {
    rows.push({ key: "sd", label: "SD · No watermark", sub: "MP4", kind: "video", ext: ".mp4", url: result.videoSD });
  }
  if (result.videoWatermark) {
    rows.push({ key: "wm", label: "With watermark", sub: "MP4", kind: "watermark", ext: ".mp4", url: result.videoWatermark });
  }
  if (result.music) {
    rows.push({ key: "mp3", label: "Audio only", sub: "MP3", kind: "audio", ext: ".mp3", url: result.music });
  }
  if (result.thumbnail) {
    rows.push({ key: "cover", label: "Cover photo", sub: "JPG", kind: "cover", ext: ".jpg", url: result.thumbnail, noAd: true });
  }
  if (authorInfo.avatar) {
    rows.push({ key: "avatar", label: "Profile picture", sub: "JPG", kind: "avatar", ext: ".jpg", url: authorInfo.avatar, noAd: true });
  }

  // "Download all" = best no-watermark video + audio
  const bestVideo = rows.find((r) => r.key === "hd") || rows.find((r) => r.key === "sd");
  const audioRow = rows.find((r) => r.key === "mp3");
  const allRows = [bestVideo, audioRow].filter(Boolean) as FileRow[];

  // The banner ad sits right after the HD row (or after the first row if there is no HD)
  const adAfterKey = rows.find((r) => r.key === "hd")?.key ?? rows[0]?.key;

  const markSaved = (key: string) => setSaved((s) => ({ ...s, [key]: true }));

  const downloadRow = (row: FileRow) => {
    const fn = generateFilename(props.getSafeFilename(), row.kind);
    const href = proxyUrl(row.url, row.ext, fn);
    if (row.noAd) {
      triggerFileDownload(href, fn);
    } else {
      handleDownloadWithAd(href, fn);
    }
    markSaved(row.key);
  };

  const downloadAll = () => {
    allRows.forEach((row, i) => {
      const fn = generateFilename(props.getSafeFilename(), row.kind);
      const href = proxyUrl(row.url, row.ext, fn);
      if (i === 0) {
        // First file goes through the ad handler (ad tab + banner click + toast)
        handleDownloadWithAd(href, fn);
      } else {
        // Stagger the rest so the browser doesn't block them
        setTimeout(() => triggerFileDownload(href, fn), 900 * i);
      }
      markSaved(row.key);
    });
  };

  // ─── Copy / share actions ─────────────────────────────────────────────────
  const flashLabel = (id: string) => {
    setFlash(id);
    setTimeout(() => setFlash(""), 1400);
  };

  const copyText = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      flashLabel(id);
    } catch {
      /* clipboard not available */
    }
  };

  const shareLink = async () => {
    const link = props.sourceUrl;
    if (navigator.share) {
      try {
        await navigator.share({ url: link, text: result.desc || undefined });
      } catch {
        /* user cancelled */
      }
    } else {
      copyText(link, "share");
    }
  };

  // ─── Stats text: "171.6k views · 195k likes · 236 comments" ────────────────
  const statsText = [
    (result.views || 0) > 0 && `${fmt(result.views!)} views`,
    (result.likes || 0) > 0 && `${fmt(result.likes!)} likes`,
    (result.comments || 0) > 0 && `${fmt(result.comments!)} comments`,
    (result.shares || 0) > 0 && `${fmt(result.shares!)} shares`,
  ]
    .filter(Boolean)
    .join(" · ");

  const thumbnail = result.thumbnail;

  return (
    <div class="mx-auto mt-2 pb-8 text-left text-[#101326]">
      {/* "TikTok Video detected" pill */}
      <div class="mb-3 flex justify-start">
        <span class="inline-flex items-center gap-1.5 rounded bg-white px-3 py-1.5 text-sm font-semibold shadow-lg ring-1 ring-[#ecebf6]">
          <span class="grid h-6 w-6 place-items-center rounded-full bg-[#101326] text-white">
            <TikTokIcon size={24} />
          </span>
          TikTok Video detected
        </span>
      </div>

      {/* Result card */}
      <div class="rounded-3xl bg-gradient-to-r from-rose-100 to-teal-100 p-4 shadow-2xl ring-1 ring-[#ecebf6]">
        {/* Mobile: thumbnail on top, info below. sm+: side by side */}
        <div class="flex flex-col gap-4 sm:flex-row">
          {/* Thumbnail (tap to preview) */}
          <button
            type="button"
            onClick={() => setPreview(true)}
            aria-label="Play preview"
            class="group relative aspect-[9/16] max-h-[70vh] w-full shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-amber-200 via-slate-500 to-slate-800 sm:aspect-auto sm:h-44 sm:max-h-none sm:w-28"
          >
            <Show when={thumbnail}>
              <img
                src={thumbnail!}
                alt="Video thumbnail"
                class="h-full w-full object-cover"
                referrerpolicy="no-referrer"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </Show>
            <span class="absolute inset-0 grid place-items-center bg-black/10 transition-colors group-hover:bg-black/25">
              <span class="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#101326] shadow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>

          {/* Info */}
          <div class="min-w-0 w-full sm:flex-1">
            <p class="flex items-center gap-1.5 text-xs text-[#6b6f85]">
              <span class="grid h-6 w-6 place-items-center rounded bg-[#101326] text-white">
                <TikTokIcon size={16} />
              </span>
              TikTok · Video
            </p>

            <h2 class="mt-1.5 line-clamp-4 break-words text-base font-bold sm:text-lg leading-snug text-[#101326]">
              {result.desc || "No description available"}
            </h2>

            <p class="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
              <Show when={authorInfo.avatar}>
                <img
                  src={authorInfo.avatar}
                  alt={authorInfo.nickname}
                  class="h-6 w-6 rounded-full object-cover"
                  referrerpolicy="no-referrer"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </Show>
              <span class="truncate">by {authorInfo.nickname}</span>
            </p>

            <Show when={statsText}>
              <p class="mt-0.5 text-sm text-muted">{statsText}</p>
            </Show>

            <div class="mt-3 flex flex-wrap gap-1.5 text-[11px] font-medium">
              <button
                type="button"
                onClick={() => copyText(result.desc || "", "caption")}
                class="rounded-xl bg-[#f7f6ff] px-3 py-1.5 text-xs font-semibold text-[#101326]"
              >
                {flash() === "caption" ? "✓ Copied" : "⧉ Copy caption"}
              </button>
              <button
                type="button"
                onClick={() => copyText(props.sourceUrl, "link")}
                class="rounded-xl bg-[#f7f6ff] px-3 py-1.5 text-xs font-semibold text-[#101326]"
              >
                {flash() === "link" ? "✓ Copied" : "🔗 Copy link"}
              </button>
              <button
                type="button"
                onClick={shareLink}
                class="rounded-xl bg-[#f7f6ff] px-3 py-1.5 text-xs font-semibold text-[#101326] hover:bg-[#ecebf6]"
              >
                {flash() === "share" ? "✓ Copied" : "↗ Share"}
              </button>
            </div>
          </div>
        </div>

        {/* Cover photo + profile image */}
        <Show when={thumbnail || authorInfo.avatar}>
          <div class="mt-3 flex gap-2">
            <Show when={thumbnail}>
              <button
                type="button"
                aria-label="View cover photo"
                title="View cover photo"
                onClick={() => {
                  setActiveThumb("cover");
                  setImagePreview({ src: thumbnail!, alt: "Cover photo" });
                }}
                class={`h-11 w-11 cursor-pointer overflow-hidden rounded-lg bg-gradient-to-br from-amber-200 to-slate-600 transition hover:opacity-90 ${
                  activeThumb() === "cover" ? "ring-2 ring-[#101326]" : ""
                }`}
              >
                <img
                  src={thumbnail!}
                  alt="Cover photo"
                  class="h-full w-full object-cover"
                  referrerpolicy="no-referrer"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </button>
            </Show>
            <Show when={authorInfo.avatar}>
              <button
                type="button"
                aria-label="View profile picture"
                title="View profile picture"
                onClick={() => {
                  setActiveThumb("avatar");
                  setImagePreview({ src: authorInfo.avatar, alt: "Profile picture" });
                }}
                class={`h-11 w-11 cursor-pointer overflow-hidden rounded-lg bg-gradient-to-br from-slate-400 to-slate-800 transition hover:opacity-90 ${
                  activeThumb() === "avatar" ? "ring-2 ring-[#101326]" : ""
                }`}
              >
                <img
                  src={authorInfo.avatar}
                  alt="Profile picture"
                  class="h-full w-full object-cover"
                  referrerpolicy="no-referrer"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </button>
            </Show>
          </div>
        </Show>

        {/* Download all */}
        <Show when={allRows.length > 0}>
          <button
            type="button"
            onClick={downloadAll}
            class="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#101326] py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            <DownloadIcon size={15} />
            <span>{allRows.length > 1 ? `Download all (${allRows.length})` : "Download"}</span>
          </button>
        </Show>

        {/* Individual files */}
        <ul class="mt-2 grid gap-2">
          <For each={rows}>
            {(row) => (
              <>
              <li class="flex items-center gap-3 bg-white rounded-xl px-2 py-3">
                <span class="grid h-8 w-8 place-items-center rounded-lg bg-[#f7f6ff] text-[#6b6f85]">
                  <RowIcon kind={row.kind} />
                </span>
                <span class="min-w-0 flex-1">
                  <span class="block text-sm font-bold">{row.label}</span>
                  <span class="block text-xs text-[#6b6f85]">{row.sub}</span>
                </span>
                <button
                  type="button"
                  onClick={() => downloadRow(row)}
                  class="flex items-center gap-1.5 rounded-lg bg-[#101326] px-3.5 py-2 text-xs font-semibold text-white hover:opacity-90"
                >
                  <DownloadIcon size={13} />
                  <span>{saved()[row.key] ? "Saved ✓" : "Download"}</span>
                </button>
              </li>
              {/* Banner ad between HD and SD */}
              <Show when={row.key === adAfterKey}>
                <li class="overflow-hidden rounded-xl">
                  <AdBanner
                    onRef={handleAdRef}
                    class="ad-banner w-full overflow-hidden rounded-xl"
                    width="100%"
                    height="auto"
                  />
                </li>
              </Show>
              </>
            )}
          </For>
        </ul>

        {/* Download another */}
        <button
          type="button"
          onClick={() => props.onReset()}
          class="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#101326] py-3 text-sm font-semibold text-white hover:opacity-90"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M3 12a9 9 0 0 1 15.5-6.3L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.3L3 16M3 21v-5h5" />
          </svg>
          Download another
        </button>
      </div>

      {/* Video preview modal */}
      <Show when={preview() && props.getVideoUrl()}>
        <div
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setPreview(false)}
        >
          <div class="relative w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <video
              controls
              autoplay
              src={props.getVideoUrl()}
              class="max-h-[85vh] w-full rounded-2xl bg-black"
              referrerpolicy="no-referrer"
            >
              Your browser does not support the video tag.
            </video>
            <button
              type="button"
              onClick={() => setPreview(false)}
              aria-label="Close preview"
              class="absolute -right-2 -top-2 grid h-8 w-8 place-items-center rounded-full bg-white text-sm font-bold text-[#101326] shadow-lg"
            >
              ✕
            </button>
          </div>
        </div>
      </Show>

      {/* Image preview modal (cover photo / profile picture) */}
      <Show when={imagePreview()}>
        <div
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setImagePreview(null)}
        >
          <div class="relative w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <img
              src={imagePreview()!.src}
              alt={imagePreview()!.alt}
              class="max-h-[85vh] w-full rounded-2xl bg-black object-contain"
              referrerpolicy="no-referrer"
            />
            <button
              type="button"
              onClick={() => setImagePreview(null)}
              aria-label="Close preview"
              class="absolute -right-2 -top-2 grid h-8 w-8 place-items-center rounded-full bg-white text-sm font-bold text-[#101326] shadow-lg"
            >
              ✕
            </button>
          </div>
        </div>
      </Show>
    </div>
  );
}

export default ResultSection;