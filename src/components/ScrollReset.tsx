"use client";
import { useEffect } from "react";

export default function ScrollReset({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
}
