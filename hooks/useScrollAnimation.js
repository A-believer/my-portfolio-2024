"use client";

import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    let observer;
    const timeoutId = setTimeout(() => {
      const options = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, options);

      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
}
