// Dark/light theme switch. Deliberately uses only in-memory state (module-scoped
// variable) — no localStorage/sessionStorage — so theme resets to bright/light on reload.

let currentTheme = 'light';

export function initThemeToggle() {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');

  const prefersDark =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  currentTheme = prefersDark ? 'dark' : 'light';
  applyTheme(root, toggleBtn, currentTheme);

  toggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(root, toggleBtn, currentTheme);
  });
}

function applyTheme(root, toggleBtn, theme) {
  root.setAttribute('data-theme', theme);
  const isLight = theme === 'light';
  toggleBtn.setAttribute('aria-pressed', String(isLight));
  toggleBtn.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
}
