"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Adds .in to every .reveal element when it scrolls into view.
 * Re-runs on every client-side navigation and also picks up .reveal
 * elements that mount later (accordion panels, streamed content),
 * so nothing stays invisible after moving between pages.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const show = (el: Element) => el.classList.add("in");
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -10% 0px" }
    );
    const watch = (root: ParentNode) =>
      root.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
    watch(document);

    const mo = new MutationObserver((muts) => {
      for (const m of muts) m.addedNodes.forEach((n) => {
        if (n instanceof Element) {
          if (n.matches(".reveal:not(.in)")) io.observe(n);
          watch(n);
        }
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => { io.disconnect(); mo.disconnect(); };
  }, [pathname]);

  return null;
}
