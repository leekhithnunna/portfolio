// Sticky navbar shadow, mobile menu toggle, and current-page active link
// highlighting (each section is its own page now, so this compares the
// current URL against each link's href instead of scroll-spying sections).

export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));

  const closeMenu = () => {
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    primaryNav.classList.remove('is-open');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  const onScroll = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 10);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const currentPage = (window.location.pathname.split('/').pop() || 'index.html') || 'index.html';
  navLinks.forEach((link) => {
    const linkPage = link.getAttribute('href').split('/').pop();
    link.classList.toggle('is-active', linkPage === currentPage);
  });
}
