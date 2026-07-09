// Dark/light theme switch. Deliberately uses only in-memory state (module-scoped
// variable) — no localStorage/sessionStorage — so theme resets to dark on reload.

let currentTheme = 'dark';

export function initThemeToggle() {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');

  const prefersLight =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  currentTheme = prefersLight ? 'light' : 'dark';
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
