// Change this one value to rename every downloaded file.
// Result: musicallyio.com_<author>.mp4, musicallyio.com_<author>_audio.mp3, ...
export const SITE_NAME = "musicallyio.com";

// Where the download buttons fetch files from.
//  - "/api/download"  -> proxy inside this Astro project (runs on Vercel)
//  - Cloudflare Worker -> full address of the worker (below)
// To go back to the Vercel proxy, set this to "/api/download".
export const DOWNLOAD_PROXY = "https://dl.tiktokiocdn.workers.dev/api/download";

