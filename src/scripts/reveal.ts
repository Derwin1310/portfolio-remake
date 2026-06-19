const initRevealMotion = () => {
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;
  const revealElements = Array.from(
    document.querySelectorAll<HTMLElement>('[data-reveal]'),
  );

  document.documentElement.classList.add('motion-ready');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.14,
    },
  );

  revealElements.forEach((element) => observer.observe(element));
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRevealMotion, {
    once: true,
  });
} else {
  initRevealMotion();
}
