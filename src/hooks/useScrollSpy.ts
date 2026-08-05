import { useEffect, useState } from "react";

/** Devuelve el id de la sección visible más cercana al tercio superior del viewport. */
export const useScrollSpy = (ids: string[], deps: unknown[] = []) => {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const onScroll = () => {
      const anchor = window.innerHeight * 0.35;
      let current = ids[0] ?? "";
      let best = Number.POSITIVE_INFINITY;
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const dist = Math.abs(el.getBoundingClientRect().top - anchor);
        if (el.getBoundingClientRect().top - window.innerHeight < 0 && dist < best) {
          best = dist;
          current = id;
        }
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join("|"), ...deps]);

  return active;
};
