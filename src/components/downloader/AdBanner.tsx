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

    // Small delay to ensure the container is visible before injecting the ad
    setTimeout(() => {
      loadAd();
    }, 100);
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
    "min-height": props.height || "250px",
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