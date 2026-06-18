const initActiveSectionNav = () => {
  const root = document.querySelector<HTMLElement>('[data-portfolio-root]');
  if (!root) return;

  const header = root.querySelector<HTMLElement>('header');
  const navLinks = Array.from(
    root.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'),
  );
  const sectionIds = navLinks
    .map((link) => link.getAttribute('href'))
    .filter((href): href is string => Boolean(href?.startsWith('#')))
    .map((href) => href.slice(1));
  const sections = [...new Set(sectionIds)]
    .map((id) => document.getElementById(id))
    .filter(
      (section): section is HTMLElement => section instanceof HTMLElement,
    );

  let activeSectionId = '';
  let scrollTicking = false;

  const setActiveNav = (sectionId: string) => {
    if (activeSectionId === sectionId) return;
    activeSectionId = sectionId;

    navLinks.forEach((link) => {
      const isActive =
        Boolean(sectionId) && link.getAttribute('href') === `#${sectionId}`;
      link.dataset.active = String(isActive);

      if (isActive) {
        link.setAttribute('aria-current', 'location');
        return;
      }

      link.removeAttribute('aria-current');
    });
  };

  const syncActiveSection = () => {
    const headerOffset = header?.offsetHeight ?? 0;
    const activationLine = headerOffset + 28;
    const firstSection = sections[0];

    if (
      firstSection &&
      firstSection.getBoundingClientRect().top > activationLine
    ) {
      setActiveNav('');
      return;
    }

    const currentSection = sections.findLast(
      (section) => section.getBoundingClientRect().top <= activationLine,
    );
    setActiveNav(currentSection?.id ?? '');
  };

  const queueActiveSectionSync = () => {
    if (scrollTicking) return;

    scrollTicking = true;
    window.requestAnimationFrame(() => {
      syncActiveSection();
      scrollTicking = false;
    });
  };

  window.addEventListener('scroll', queueActiveSectionSync, { passive: true });
  window.addEventListener('resize', queueActiveSectionSync);
  window.addEventListener('hashchange', queueActiveSectionSync);
  queueActiveSectionSync();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initActiveSectionNav, {
    once: true,
  });
} else {
  initActiveSectionNav();
}
