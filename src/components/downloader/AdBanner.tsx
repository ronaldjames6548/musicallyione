// AdBanner.tsx - Updated with new ad network code
import { onMount, onCleanup, createEffect } from "solid-js";

interface AdBannerProps {
  class?: string;
  width?: string;
  height?: string;
  forceReload?: boolean;
  /** Callback that fires once the ad container div is mounted — lets parents keep
   *  a reference so they can programmatically trigger a click on the banner. */
  onRef?: (el: HTMLDivElement) => void;
}

const AD_CONTAINER_ID = "container-531da32ec3fcb205a3490d7e5bc1f538";
const AD_SCRIPT_SRC =
  "https://bancadeltempoidea.org/21/531da32ec3fcb205a3490d7e5bc1f538";

// ─── Warm-up ────────────────────────────────────────────────────────────────
// This module is imported when the page loads, so we open the connection to the
// ad server and start downloading the ad script right away. By the time a result
// is shown, the script is already cached and the banner appears almost instantly.
if (typeof document !== "undefined" && !document.getElementById("ad-warmup")) {
  try {
    const origin = new URL(AD_SCRIPT_SRC).origin;

    const preconnect = document.createElement("link");
    preconnect.id = "ad-warmup";
    preconnect.rel = "preconnect";
    preconnect.href = origin;
    document.head.appendChild(preconnect);

    const dns = document.createElement("link");
    dns.rel = "dns-prefetch";
    dns.href = origin;
    document.head.appendChild(dns);

    const preload = document.createElement("link");
    preload.rel = "preload";
    preload.as = "script";
    preload.href = AD_SCRIPT_SRC;
    document.head.appendChild(preload);
  } catch {
    /* warm-up is best-effort only */
  }
}

export default function AdBanner(props: AdBannerProps) {
  let adContainerRef: HTMLDivElement | undefined;
  let scriptElement: HTMLScriptElement | undefined;

  const removeScript = () => {
    if (scriptElement && scriptElement.parentNode) {
      scriptElement.parentNode.removeChild(scriptElement);
    }
    scriptElement = undefined;
  };

  const loadAd = () => {
    if (!adContainerRef) return;

    // Remove any previously injected script and clear old content
    removeScript();
    adContainerRef.innerHTML = "";

    // Create the container div the ad script looks for
    const containerDiv = document.createElement("div");
    containerDiv.id = AD_CONTAINER_ID;
    adContainerRef.appendChild(containerDiv);

    // Create and configure the new ad script
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = AD_SCRIPT_SRC;

    script.onload = () => {
      console.log("AdBanner: Script loaded successfully");
    };

    script.onerror = () => {
      console.error("AdBanner: Failed to load ad script");
      if (adContainerRef) {
        adContainerRef.innerHTML =
          '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666;">Ad Loading...</div>';
      }
    };

    scriptElement = script;
    document.head.appendChild(script);
  };

  onMount(() => {
    // Expose the container ref to the parent immediately on mount
    if (props.onRef && adContainerRef) {
      props.onRef(adContainerRef);
    }

    // Container is already in the DOM here, so load immediately (no delay)
    loadAd();
  });

  // Reload ad when forceReload prop changes (useful for modals)
  createEffect(() => {
    if (props.forceReload) {
      setTimeout(() => {
        loadAd();
      }, 200);
    }
  });

  onCleanup(() => {
    removeScript();
    if (adContainerRef) {
      adContainerRef.innerHTML = "";
    }
  });

  const containerStyle = {
    width: props.width || "auto",
    height: props.height || "auto",
    "min-height": props.height && props.height !== "auto" ? props.height : "250px",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
  };

  return (
    <div
      ref={adContainerRef}
      class={props.class || "ad-banner"}
      style={containerStyle}
    >
      {/* Ad content will be dynamically inserted here */}
    </div>
  );
}