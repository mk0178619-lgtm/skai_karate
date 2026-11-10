import { useEffect } from "react";

// Sets the browser tab title and (optionally) a "noindex" robots tag while a
// page is mounted, then restores the previous values. Certificate pages use
// noindex so student names are not promoted in search results.
function usePageMeta(title, { noindex = false } = {}) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let robots = null;
    if (noindex) {
      robots = document.createElement("meta");
      robots.name = "robots";
      robots.content = "noindex, nofollow";
      document.head.appendChild(robots);
    }

    return () => {
      document.title = previousTitle;
      if (robots && robots.parentNode) robots.parentNode.removeChild(robots);
    };
  }, [title, noindex]);
}

export default usePageMeta;
