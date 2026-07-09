// IntersectionObserver-driven fade/slide-in reveal for any element with [data-reveal].
// Sets a --reveal-index custom property per section so children stagger via CSS.

export function initScrollReveal() {
  const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
  if (!revealEls.length) return;

  const groups = new Map();
  revealEls.forEach((el) => {
    const parent = el.parentElement;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(el);
  });
  groups.forEach((els) => {
    els.forEach((el, index) => {
      el.style.setProperty('--reveal-index', index);
    });
  });

  if (!('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  revealEls.forEach((el) => observer.observe(el));
}
