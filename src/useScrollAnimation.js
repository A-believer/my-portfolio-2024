import { onMounted, onUnmounted } from "vue";

export function useScrollAnimation() {
  let observer = null;

  const initScrollAnimation = () => {
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

    // Observe all elements with animate-on-scroll class
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
  };

  onMounted(() => {
    // Small delay to ensure DOM is ready
    setTimeout(initScrollAnimation, 100);
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return {
    initScrollAnimation,
  };
}
