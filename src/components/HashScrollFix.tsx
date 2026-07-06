"use client";

import { useEffect } from "react";

/**
 * Cross-page links to "/#section" rely on the browser's native hash-scroll,
 * but on this image-heavy page the layout can still shift slightly after
 * the initial jump (fonts/images settling). We re-assert the scroll
 * position a few times shortly after load to correct for that drift.
 */
export default function HashScrollFix() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const id = window.location.hash.slice(1);
    if (!id) return;

    let cancelled = false;

    const scrollToTarget = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (!el) return;
      const previous = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      el.scrollIntoView({ block: "start" });
      document.documentElement.style.scrollBehavior = previous;
    };

    const delays = [0, 150, 400, 900];
    const timers = delays.map((delay) => window.setTimeout(scrollToTarget, delay));

    if (document.readyState !== "complete") {
      window.addEventListener("load", scrollToTarget, { once: true });
    }

    return () => {
      cancelled = true;
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("load", scrollToTarget);
    };
  }, []);

  return null;
}
